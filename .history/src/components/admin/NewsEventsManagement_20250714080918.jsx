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
  Divider,
} from "@mui/material";
import {
  Delete,
  Image as ImageIcon,
  Add,
  Preview,
  Cancel,
  Publish,
  PictureAsPdf,
  Title as TitleIcon,
  TextFields as TextFieldsIcon,
} from "@mui/icons-material";
import { Document, Page, pdfjs } from "react-pdf";
import jumpstartLogo from "../../assets/jumpstartLogo.png";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// Updated default content item structure
const defaultContentItem = (type = 'paragraph') => ({
  type,
  text: type === 'heading' ? 'New Heading' : '',
  align: "left",
});

// Updated default section structure
const defaultSection = () => ({
  title: "",
  date: "",
  content: [defaultContentItem()], // Array of content items
  images: [],
  writerName: "",
});

const NewsEventsManagement = () => {
  const [templateIndex, setTemplateIndex] = useState(0);
  const [newsletterTemplates, setNewsletterTemplates] = useState(
    Array.from({ length: 10 }, () => [defaultSection()])
  );
  const [previewing, setPreviewing] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
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

  const handleSectionChange = (sectionIdx, field, value) => {
    const updated = [...newsletterTemplates];
    updated[templateIndex][sectionIdx][field] = value;
    setNewsletterTemplates(updated);
  };

  const handleContentChange = (sectionIdx, contentIdx, field, value) => {
    const updated = [...newsletterTemplates];
    updated[templateIndex][sectionIdx].content[contentIdx][field] = value;
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

  const addContentItem = (sectionIdx, type = 'paragraph') => {
    const updated = [...newsletterTemplates];
    updated[templateIndex][sectionIdx].content.push(defaultContentItem(type));
    setNewsletterTemplates(updated);
  };

  const removeContentItem = (sectionIdx, contentIdx) => {
    const updated = [...newsletterTemplates];
    updated[templateIndex][sectionIdx].content.splice(contentIdx, 1);
    setNewsletterTemplates(updated);
  };

  const addImageToSection = (e, sectionIdx) => {
    const file = e.target.files[0];
    if (!file) return;

    const updated = [...newsletterTemplates];
    const url = URL.createObjectURL(file);
    updated[templateIndex][sectionIdx].images.push({ 
      file, 
      url,
      caption: "",
      photographer: "" 
    });
    setNewsletterTemplates(updated);
  };

  const removeImageFromSection = (sectionIdx, imageIdx) => {
    const updated = [...newsletterTemplates];
    updated[templateIndex][sectionIdx].images.splice(imageIdx, 1);
    setNewsletterTemplates(updated);
  };

  const handleImageInfoChange = (sectionIdx, imageIdx, field, value) => {
    const updated = [...newsletterTemplates];
    updated[templateIndex][sectionIdx].images[imageIdx][field] = value;
    setNewsletterTemplates(updated);
  };

  // ... (keep all other existing functions like handlePdfUpload, onDocumentLoadSuccess, etc.)

  const validateTemplate = () => {
    const sections = newsletterTemplates[templateIndex];
    if (!sections.length) return false;
    for (let i = 0; i < sections.length; i++) {
      const sec = sections[i];
      if (!sec.title.trim()) return false;
      if (i === 0 && !sec.writerName.trim()) return false;
      if (!sec.date) return false;
      if (sec.content.length === 0) return false;
      for (const item of sec.content) {
        if (item.type === 'paragraph' && !item.text.trim()) return false;
      }
    }
    return true;
  };

  // ... (keep all other existing functions)

  return (
    <Box sx={{ p: 4 }}>
      {/* ... (keep all existing JSX until the section mapping) */}

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
            onChange={(e) =>
              handleSectionChange(secIdx, "title", e.target.value)
            }
            fullWidth
            sx={{ mt: 2 }}
          />

          {secIdx === 0 && (
            <TextField
              label="Editor's Name"
              value={section.writerName}
              onChange={(e) =>
                handleSectionChange(secIdx, "writerName", e.target.value)
              }
              fullWidth
              sx={{ mt: 2 }}
            />
          )}

          <TextField
            label="Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={section.date}
            onChange={(e) =>
              handleSectionChange(secIdx, "date", e.target.value)
            }
            fullWidth
            sx={{ mt: 2 }}
          />

          <Box sx={{ mt: 2 }}>
            {section.content.map((contentItem, contentIdx) => (
              <Box key={contentIdx} sx={{ mb: 2, position: 'relative' }}>
                {contentItem.type === 'heading' ? (
                  <TextField
                    label="Heading"
                    value={contentItem.text}
                    onChange={(e) =>
                      handleContentChange(secIdx, contentIdx, "text", e.target.value)
                    }
                    fullWidth
                    variant="filled"
                    InputProps={{
                      style: { fontSize: '1.5rem', fontWeight: 'bold' }
                    }}
                  />
                ) : (
                  <TextField
                    label="Paragraph"
                    multiline
                    rows={4}
                    value={contentItem.text}
                    onChange={(e) =>
                      handleContentChange(secIdx, contentIdx, "text", e.target.value)
                    }
                    fullWidth
                  />
                )}
                <FormControl fullWidth sx={{ mt: 1 }}>
                  <InputLabel>Alignment</InputLabel>
                  <Select
                    value={contentItem.align}
                    label="Alignment"
                    onChange={(e) =>
                      handleContentChange(secIdx, contentIdx, "align", e.target.value)
                    }
                  >
                    <MenuItem value="left">Left</MenuItem>
                    <MenuItem value="center">Center</MenuItem>
                    <MenuItem value="right">Right</MenuItem>
                  </Select>
                </FormControl>
                <IconButton
                  size="small"
                  color="error"
                  onClick={() => removeContentItem(secIdx, contentIdx)}
                  sx={{
                    position: 'absolute',
                    top: -10,
                    right: -10,
                    backgroundColor: 'white',
                  }}
                  disabled={section.content.length === 1}
                >
                  <Delete fontSize="small" />
                </IconButton>
              </Box>
            ))}

            <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
              <Button
                variant="outlined"
                startIcon={<TextFieldsIcon />}
                onClick={() => addContentItem(secIdx, 'paragraph')}
              >
                Add Paragraph
              </Button>
              <Button
                variant="outlined"
                startIcon={<TitleIcon />}
                onClick={() => addContentItem(secIdx, 'heading')}
              >
                Add Heading
              </Button>
            </Box>
          </Box>

          <Box sx={{ mt: 2 }}>
            <Button
              variant="outlined"
              component="label"
              startIcon={<ImageIcon />}
              sx={{ color: "#fea434", borderColor: "#fea434" }}
            >
              Upload Image
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={(e) => addImageToSection(e, secIdx)}
              />
            </Button>
          </Box>

          {section.images.length > 0 && (
            <>
              <FormControl fullWidth sx={{ mt: 2 }}>
                <InputLabel>Image Alignment</InputLabel>
                <Select
                  value={section.imageAlign}
                  label="Image Alignment"
                  onChange={(e) =>
                    handleSectionChange(secIdx, "imageAlign", e.target.value)
                  }
                >
                  <MenuItem value="left">Left</MenuItem>
                  <MenuItem value="center">Center</MenuItem>
                  <MenuItem value="right">Right</MenuItem>
                </Select>
              </FormControl>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  mt: 2,
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                {section.images.map((img, imgIdx) => (
                  <Box key={imgIdx} sx={{ position: "relative", width: '100%', maxWidth: 400 }}>
                    <img
                      src={img.url}
                      alt={`Section ${secIdx + 1} image ${imgIdx + 1}`}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        borderRadius: 6,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                      }}
                    />
                    <Box sx={{ mt: 1 }}>
                      <TextField
                        label="Caption"
                        value={img.caption}
                        onChange={(e) =>
                          handleImageInfoChange(secIdx, imgIdx, "caption", e.target.value)
                        }
                        fullWidth
                        size="small"
                        sx={{ mb: 1 }}
                      />
                      <TextField
                        label="Photographer/Source"
                        value={img.photographer}
                        onChange={(e) =>
                          handleImageInfoChange(secIdx, imgIdx, "photographer", e.target.value)
                        }
                        fullWidth
                        size="small"
                      />
                    </Box>
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => removeImageFromSection(secIdx, imgIdx)}
                      sx={{
                        position: "absolute",
                        top: -8,
                        right: -8,
                        backgroundColor: "white",
                      }}
                    >
                      <Delete fontSize="small" />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            </>
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

      {/* ... (keep all remaining existing JSX) */}
    </Box>
  );
};

export default NewsEventsManagement;