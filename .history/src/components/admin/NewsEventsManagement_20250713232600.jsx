// NewsEventsManagement.jsx

import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  IconButton,
  Divider,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import {
  Delete,
  Image as ImageIcon,
  Add,
  Preview,
  Cancel,
  PictureAsPdf,
  CloudUpload,
  Publish,
} from "@mui/icons-material";

import { Document, Page, pdfjs } from "react-pdf";
import jumpstartLogo from "../../assets/jumpstartLogo.png";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const defaultSection = () => ({
  title: "",
  date: "",
  paragraph: "",
  images: [],
  writerName: "",
  paragraphAlignment: "left",
  imageAlignment: "left",
});

const NewsEventsManagement = () => {
  const [templateIndex, setTemplateIndex] = useState(0);
  const [newsletterTemplates, setNewsletterTemplates] = useState(
    Array.from({ length: 10 }, () => [defaultSection()])
  );
  const [previewing, setPreviewing] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [publishOption, setPublishOption] = useState("content");

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
    const url = URL.createObjectURL(file);
    const updated = [...newsletterTemplates];
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

  const handlePdfUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    }
  };

  const handlePublish = () => {
    if (publishOption === "content" && !validateTemplate()) {
      alert("Please fill all required fields.");
      return;
    }

    const formData = new FormData();
    formData.append("publishOption", publishOption);
    formData.append(
      "newsletterContent",
      JSON.stringify(newsletterTemplates[templateIndex])
    );
    if (pdfFile) {
      formData.append("pdfFile", pdfFile);
    }

    fetch("/api/newsletter/publish", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        alert("Newsletter published and users notified.");
        setPreviewing(false);
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to publish newsletter.");
      });
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#fea434" }}>
        News & Events Management
      </Typography>

      <Card sx={{ p: 3, mb: 4, mt: 2, backgroundColor: "#fff8f0" }}>
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

          {/* --- TEMPLATE SECTIONS --- */}
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

              <FormControl fullWidth sx={{ mt: 2 }}>
                <InputLabel>Paragraph Alignment</InputLabel>
                <Select
                  value={section.paragraphAlignment}
                  label="Paragraph Alignment"
                  onChange={(e) =>
                    handleSectionChange(secIdx, "paragraphAlignment", e.target.value)
                  }
                >
                  <MenuItem value="left">Left</MenuItem>
                  <MenuItem value="center">Center</MenuItem>
                  <MenuItem value="right">Right</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label="Paragraph"
                multiline
                rows={4}
                value={section.paragraph}
                onChange={(e) =>
                  handleSectionChange(secIdx, "paragraph", e.target.value)
                }
                fullWidth
                sx={{ mt: 2 }}
              />

              <FormControl fullWidth sx={{ mt: 2 }}>
                <InputLabel>Image Alignment</InputLabel>
                <Select
                  value={section.imageAlignment}
                  label="Image Alignment"
                  onChange={(e) =>
                    handleSectionChange(secIdx, "imageAlignment", e.target.value)
                  }
                >
                  <MenuItem value="left">Left</MenuItem>
                  <MenuItem value="center">Center</MenuItem>
                  <MenuItem value="right">Right</MenuItem>
                </Select>
              </FormControl>

              {/* Upload Image */}
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

              {/* Display Images */}
              <Box sx={{ display: "flex", gap: 2, mt: 1, flexWrap: "wrap" }}>
                {section.images.map((img, imgIdx) => (
                  <Box key={imgIdx} sx={{ position: "relative" }}>
                    <img
                      src={img.url}
                      style={{
                        width: 120,
                        height: 80,
                        objectFit: "cover",
                        borderRadius: 6,
                      }}
                    />
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => removeImageFromSection(secIdx, imgIdx)}
                      sx={{ position: "absolute", top: -8, right: -8 }}
                    >
                      <Delete fontSize="small" />
                    </IconButton>
                  </Box>
                ))}
              </Box>

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

          {/* Upload PDF */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Upload Ready-Made PDF Newsletter
            </Typography>
            <Button
              variant="outlined"
              component="label"
              startIcon={<PictureAsPdf />}
              sx={{ color: "#fea434", borderColor: "#fea434", mb: 2 }}
            >
              Upload PDF
              <input type="file" hidden accept="application/pdf" onChange={handlePdfUpload} />
            </Button>

            {pdfFile && (
              <Document
                file={pdfFile}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
              >
                {Array.from(new Array(numPages), (_, idx) => (
                  <Page key={idx + 1} pageNumber={idx + 1} />
                ))}
              </Document>
            )}
          </Box>

          {/* Choose Publish Option */}
          <FormControl sx={{ mt: 4 }}>
            <Typography variant="h6">What would you like to publish?</Typography>
            <RadioGroup
              value={publishOption}
              onChange={(e) => setPublishOption(e.target.value)}
            >
              <FormControlLabel value="content" control={<Radio />} label="Newsletter Content Only" />
              <FormControlLabel value="pdf" control={<Radio />} label="Uploaded PDF Only" />
              <FormControlLabel value="both" control={<Radio />} label="Both Content and PDF" />
            </RadioGroup>
          </FormControl>

          {/* Publish Button */}
          <Box sx={{ mt: 3 }}>
            <Button
              variant="contained"
              sx={{ bgcolor: "#fea434" }}
              startIcon={<Publish />}
              onClick={handlePublish}
            >
              Publish Newsletter
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default NewsEventsManagement;
