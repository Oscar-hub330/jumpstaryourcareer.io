import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  Delete,
  Image as ImageIcon,
  Add,
  Preview,
  Cancel,
  Publish,
  PictureAsPdf,
} from "@mui/icons-material";
import { Document, Page, pdfjs } from "react-pdf";
import jumpstartLogo from "../../assets/jumpstartLogo.png";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const defaultSection = () => ({
  title: "",
  date: "",
  paragraph: "",
  images: [],
  writerName: "",
  paragraphAlign: "left",
  imageAlign: "left",
});

const NewsEventsManagement = () => {
  const [templateIndex, setTemplateIndex] = useState(0);
  const [newsletterTemplates, setNewsletterTemplates] = useState(
    Array.from({ length: 10 }, () => [defaultSection()])
  );
  const [previewing, setPreviewing] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [isPdfLoading, setIsPdfLoading] = useState(false);
  const [publishDialogOpen, setPublishDialogOpen] = useState(false);
  const [publishOptions, setPublishOptions] = useState({
    publishContent: true,
    publishPdf: false,
    sendEmail: true,
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const fileInputRef = useRef(null);

  // ... (keep all existing functions until handlePdfUpload)

  const handlePdfUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      setSnackbar({
        open: true,
        message: "Please upload a valid PDF file",
        severity: "error",
      });
      return;
    }

    setIsPdfLoading(true);
    try {
      const fileUrl = URL.createObjectURL(file);
      const pdf = await pdfjs.getDocument(fileUrl).promise;
      setPdfFile(file);
      setNumPages(pdf.numPages);
      setSnackbar({
        open: true,
        message: "PDF loaded successfully",
        severity: "success",
      });
    } catch (error) {
      console.error("Error loading PDF:", error);
      setSnackbar({
        open: true,
        message: "Failed to load PDF. Please try again.",
        severity: "error",
      });
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } finally {
      setIsPdfLoading(false);
    }
  };

  const extractTextFromPDF = async () => {
    if (!pdfFile) return;

    setIsPdfLoading(true);
    try {
      const fileUrl = URL.createObjectURL(pdfFile);
      const pdf = await pdfjs.getDocument(fileUrl).promise;
      let fullText = "";

      // Extract text from all pages
      for (let i = 1; i <= Math.min(pdf.numPages, 3); i++) { // Limit to first 3 pages
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map(item => item.str).join(' ');
        fullText += `${pageText}\n\n`;
      }

      // Split text into sections by double newlines
      const sections = fullText.split(/\n\s*\n/).filter(sec => sec.trim());
      
      const updated = [...newsletterTemplates];
      updated[templateIndex] = sections.map((content, idx) => ({
        ...defaultSection(),
        title: `PDF Section ${idx + 1}`,
        paragraph: content,
        date: new Date().toISOString().split('T')[0],
        writerName: idx === 0 ? "PDF Content" : "",
      }));

      setNewsletterTemplates(updated);
      setSnackbar({
        open: true,
        message: `Extracted ${sections.length} sections from PDF`,
        severity: "success",
      });
    } catch (error) {
      console.error("Error extracting text:", error);
      setSnackbar({
        open: true,
        message: "Failed to extract text from PDF",
        severity: "error",
      });
    } finally {
      setIsPdfLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  // ... (keep all other existing functions)

  return (
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h4"
        sx={{ mb: 2, fontWeight: "bold", color: "#fea434" }}
      >
        News & Events Management
      </Typography>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>

      <Card
        sx={{
          p: 3,
          mb: 4,
          backgroundColor: "#fff8f0",
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <CardContent>
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Choose Template</InputLabel>
            <Select
              value={templateIndex}
              label="Choose Template"
              onChange={(e) => {
                setTemplateIndex(e.target.value);
                setPreviewing(false);
              }}
            >
              {newsletterTemplates.map((_, idx) => (
                <MenuItem key={idx} value={idx}>
                  Template {idx + 1}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Box sx={{ mb: 3 }}>
            <Button
              variant="outlined"
              component="label"
              startIcon={<PictureAsPdf />}
              sx={{ color: "#fea434", borderColor: "#fea434" }}
              disabled={isPdfLoading}
            >
              {isPdfLoading ? "Processing PDF..." : "Upload PDF Version"}
              <input
                type="file"
                hidden
                accept="application/pdf"
                onChange={handlePdfUpload}
                ref={fileInputRef}
              />
            </Button>
            {pdfFile && (
              <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
                <Typography variant="body2" sx={{ mr: 2 }}>
                  {pdfFile.name}
                </Typography>
                <IconButton
                  size="small"
                  color="error"
                  onClick={() => {
                    setPdfFile(null);
                    setNumPages(null);
                    if (fileInputRef.current) {
                      fileInputRef.current.value = "";
                    }
                  }}
                  disabled={isPdfLoading}
                >
                  <Delete fontSize="small" />
                </IconButton>
              </Box>
            )}
          </Box>

          {pdfFile && (
            <Box sx={{ mb: 3 }}>
              <Box sx={{ border: "1px solid #ddd", p: 2, borderRadius: 1 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  PDF Preview
                </Typography>
                {isPdfLoading ? (
                  <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
                    <CircularProgress />
                  </Box>
                ) : (
                  <Box sx={{ maxHeight: 300, overflow: "auto" }}>
                    <Document
                      file={pdfFile}
                      onLoadSuccess={onDocumentLoadSuccess}
                      loading={
                        <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
                          <CircularProgress />
                        </Box>
                      }
                      error={
                        <Typography color="error" sx={{ p: 2 }}>
                          Failed to load PDF preview
                        </Typography>
                      }
                    >
                      {Array.from(new Array(numPages), (el, index) => (
                        <Page
                          key={`page_${index + 1}`}
                          pageNumber={index + 1}
                          width={300}
                          renderTextLayer={false}
                          renderAnnotationLayer={false}
                        />
                      ))}
                    </Document>
                  </Box>
                )}
              </Box>
              
              <Button
                variant="contained"
                onClick={extractTextFromPDF}
                disabled={isPdfLoading}
                sx={{ mt: 2 }}
                startIcon={<PictureAsPdf />}
              >
                {isPdfLoading ? "Extracting Text..." : "Extract Text from PDF"}
              </Button>
            </Box>
          )}

          {/* Rest of your existing JSX remains unchanged */}
          {/* ... */}

        </CardContent>
      </Card>

      {/* Rest of your existing JSX remains unchanged */}
      {/* ... */}

    </Box>
  );
};

export default NewsEventsManagement;