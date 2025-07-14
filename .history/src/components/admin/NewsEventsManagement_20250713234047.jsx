import React, { useState } from "react";
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
  RadioGroup,
  Radio,
} from "@mui/material";
import {
  Delete,
  Image as ImageIcon,
  Add,
  Preview,
  Cancel,
  UploadFile,
  Send,
} from "@mui/icons-material";
import jumpstartLogo from "../../assets/jumpstartLogo.png";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
  const [publishType, setPublishType] = useState("content");

  const handleSectionChange = (sectionIdx, field, value) => {
    const updated = [...newsletterTemplates];
    updated[templateIndex][sectionIdx][field] = value;
    setNewsletterTemplates(updated);
  };

  const addSection = () => {
    const updated = [...newsletterTemplates];
    updated[templateIndex].push(defaultSection());
    setNewsletterTemplates(updated);
  };

  const removeSection = (sectionIdx) => {
    const updated = [...newsletterTemplates];
    updated[templateIndex].splice(sectionIdx, 1);
    setNewsletterTemplates(updated);
  };

  const addImageToSection = (e, sectionIdx) => {
    const file = e.target.files[0];
    if (!file) return;
    const updated = [...newsletterTemplates];
    const url = URL.createObjectURL(file);
    updated[templateIndex][sectionIdx].images.push({ file, url });
    setNewsletterTemplates(updated);
  };

  const removeImageFromSection = (sectionIdx, imageIdx) => {
    const updated = [...newsletterTemplates];
    updated[templateIndex][sectionIdx].images.splice(imageIdx, 1);
    setNewsletterTemplates(updated);
  };

  const validateTemplate = () => {
    const sections = newsletterTemplates[templateIndex];
    if (!sections.length) return false;
    for (let i = 0; i < sections.length; i++) {
      const sec = sections[i];
      if (!sec.title.trim() || !sec.paragraph.trim()) return false;
      if (i === 0 && !sec.writerName.trim()) return false;
      if (!sec.date) return false;
    }
    return true;
  };

  const handlePDFUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    }
  };

  const handlePublish = () => {
    if (!validateTemplate()) {
      alert("Fill in all required fields");
      return;
    }
    const formData = new FormData();
    formData.append("content", JSON.stringify(newsletterTemplates[templateIndex]));
    formData.append("publishType", publishType);
    if (pdfFile) {
      formData.append("pdf", pdfFile);
    }
    fetch("/api/newsletters/publish", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Newsletter published and users notified.");
      })
      .catch((err) => console.error(err));
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold", color: "#fea434" }}>
        News & Events Management
      </Typography>
      <Card sx={{ p: 3, mb: 4, backgroundColor: "#fff8f0", borderRadius: 3, boxShadow: 3 }}>
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

          {newsletterTemplates[templateIndex].map((section, secIdx) => (
            <Card
              key={secIdx}
              sx={{ mb: 3, p: 2, backgroundColor: "#fff", position: "relative" }}
            >
              <Typography variant="h6" sx={{ color: "#fea434" }}>
                Section {secIdx + 1}
              </Typography>
              <TextField
                label="Title"
                value={section.title}
                onChange={(e) => handleSectionChange(secIdx, "title", e.target.value)}
                fullWidth
                sx={{ mt: 2 }}
              />
              {secIdx === 0 && (
                <TextField
                  label="Editor's Name"
                  value={section.writerName}
                  onChange={(e) => handleSectionChange(secIdx, "writerName", e.target.value)}
                  fullWidth
                  sx={{ mt: 2 }}
                />
              )}
              <TextField
                label="Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={section.date}
                onChange={(e) => handleSectionChange(secIdx, "date", e.target.value)}
                fullWidth
                sx={{ mt: 2 }}
              />
              <TextField
                label="Paragraph"
                multiline
                rows={4}
                value={section.paragraph}
                onChange={(e) => handleSectionChange(secIdx, "paragraph", e.target.value)}
                fullWidth
                sx={{ mt: 2 }}
              />
              <FormControl fullWidth sx={{ mt: 2 }}>
                <InputLabel>Paragraph Alignment</InputLabel>
                <Select
                  value={section.paragraphAlign}
                  label="Paragraph Alignment"
                  onChange={(e) => handleSectionChange(secIdx, "paragraphAlign", e.target.value)}
                >
                  <MenuItem value="left">Left</MenuItem>
                  <MenuItem value="center">Center</MenuItem>
                  <MenuItem value="right">Right</MenuItem>
                </Select>
              </FormControl>
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="outlined"
                  component="label"
                  startIcon={<ImageIcon />}
                  sx={{ color: "#fea434", borderColor: "#fea434" }}
                >
                  Upload Image
                  <input type="file" hidden accept="image/*" onChange={(e) => addImageToSection(e, secIdx)} />
                </Button>
              </Box>
              {section.images.length > 0 && (
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <InputLabel>Image Alignment</InputLabel>
                  <Select
                    value={section.imageAlign}
                    label="Image Alignment"
                    onChange={(e) => handleSectionChange(secIdx, "imageAlign", e.target.value)}
                  >
                    <MenuItem value="left">Left</MenuItem>
                    <MenuItem value="center">Center</MenuItem>
                    <MenuItem value="right">Right</MenuItem>
                  </Select>
                </FormControl>
              )}
              <Button
                onClick={() => removeSection(secIdx)}
                color="error"
                variant="outlined"
                startIcon={<Delete />}
                sx={{ mt: 2 }}
                disabled={newsletterTemplates[templateIndex].length === 1}
              >
                Remove Section
              </Button>
            </Card>
          ))}

          <Button
            onClick={addSection}
            variant="contained"
            startIcon={<Add />}
            sx={{ bgcolor: "#fea434", mt: 2 }}
          >
            Add New Section
          </Button>

          <Box sx={{ mt: 4, display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button
              variant="contained"
              sx={{ bgcolor: "#fea434" }}
              onClick={() => {
                if (!validateTemplate()) {
                  alert("Please fill in title, date, paragraph for all sections, and writer's name on the first section.");
                  return;
                }
                setPreviewing(true);
              }}
              startIcon={<Preview />}
            >
              Preview Newsletter
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => setPreviewing(false)}
              startIcon={<Cancel />}
            >
              Cancel Preview
            </Button>
            <Button
              variant="outlined"
              component="label"
              startIcon={<UploadFile />}
              sx={{ borderColor: "#fea434", color: "#fea434" }}
            >
              Upload PDF
              <input type="file" hidden accept="application/pdf" onChange={handlePDFUpload} />
            </Button>
            <FormControl component="fieldset">
              <RadioGroup
                row
                value={publishType}
                onChange={(e) => setPublishType(e.target.value)}
              >
                <FormControlLabel value="content" control={<Radio />} label="Content" />
                <FormControlLabel value="pdf" control={<Radio />} label="PDF Only" />
                <FormControlLabel value="both" control={<Radio />} label="Both" />
              </RadioGroup>
            </FormControl>
            <Button
              variant="contained"
              sx={{ bgcolor: "#fea434" }}
              onClick={handlePublish}
              startIcon={<Send />}
            >
              Publish
            </Button>
          </Box>

          {pdfFile && (
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>PDF Preview</Typography>
              <Document
                file={pdfFile}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
              </Document>
            </Box>
          )}

          {previewing && (
            <Box sx={{ mt: 6, p: 4, backgroundColor: "#fdfdfd", borderRadius: 2, boxShadow: 2 }}>
              <Typography variant="h5" sx={{ mb: 3, color: "#fea434", textAlign: "center" }}>
                Newsletter Preview
              </Typography>
              <img src={jumpstartLogo} alt="Jumpstart Logo" style={{ height: 60, marginBottom: 20 }} />
              {newsletterTemplates[templateIndex].map((section, idx) => (
                <Box key={idx} sx={{ mb: 6 }}>
                  <Typography variant="h6" sx={{ color: "#333", textAlign: "center" }}>
                    {section.title}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: "#777", textAlign: "center" }}>
                    {section.date}
                  </Typography>
                  {idx === 0 && (
                    <Typography variant="body2" sx={{ fontStyle: "italic", textAlign: "center", color: "#444", mt: 1 }}>
                      Editor: {section.writerName}
                    </Typography>
                  )}
                  <Typography
                    sx={{
                      mt: 2,
                      textAlign: section.paragraphAlign,
                      fontSize: "1rem",
                      fontFamily: "Roboto, sans-serif",
                      color: "#444",
                    }}
                  >
                    {section.paragraph}
                  </Typography>
                  {section.images.map((imgObj, iIdx) => (
                    <Box
                      key={iIdx}
                      sx={{
                        mt: 3,
                        textAlign: section.imageAlign,
                      }}
                    >
                      <img
                        src={imgObj.url}
                        alt={`Section ${idx + 1} Image ${iIdx + 1}`}
                        style={{
                          maxWidth: "80%",
                          height: "auto",
                          borderRadius: 8,
                          border: "1px solid #ddd",
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default NewsEventsManagement;
