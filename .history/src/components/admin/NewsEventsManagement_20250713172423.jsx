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
} from "@mui/material";
import {
  Delete,
  Image as ImageIcon,
  Add,
  Preview,
  Cancel,
} from "@mui/icons-material";

const defaultSection = () => ({
  title: "",
  date: "",
  paragraph: "",
  images: [],
  writerName: "",
  writerSurname: "",
  alignment: "left",
  imageAlignment: "center",
  fontFamily: "Arial",          // New
  fontSize: "16px",             // New
});

const getJustify = (align) => {
  switch (align) {
    case "left": return "flex-start";
    case "center": return "center";
    case "right": return "flex-end";
    default: return "flex-start";
  }
};

const NewsEventsManagement = () => {
  const [templateIndex, setTemplateIndex] = useState(0);
  const [newsletterTemplates, setNewsletterTemplates] = useState(
    Array.from({ length: 10 }, () => [defaultSection()])
  );
  const [previewing, setPreviewing] = useState(false);
  const [pdfFiles, setPdfFiles] = useState([]);

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
            <Card key={secIdx} sx={{ mb: 3, p: 2, backgroundColor: "#fff", position: "relative" }}>
              <Typography variant="h6" sx={{ color: "#fea434" }}>
                Section {secIdx + 1}
              </Typography>

              <TextField
                label="Title"
                value={section.title}
                onChange={(e) => handleSectionChange(secIdx, "title", e.target.value)}
                fullWidth sx={{ mt: 2 }}
              />

              {secIdx === 0 && (
                <TextField
                  label="Editor's Name"
                  value={section.writerName}
                  onChange={(e) => handleSectionChange(secIdx, "writerName", e.target.value)}
                  fullWidth sx={{ mt: 2 }}
                />
              )}

              <TextField
                label="Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={section.date}
                onChange={(e) => handleSectionChange(secIdx, "date", e.target.value)}
                fullWidth sx={{ mt: 2 }}
              />

              {/* Alignment, Font Size and Font Family Controls */}
              <Box sx={{ display: "flex", gap: 2, mt: 2, flexWrap: "wrap" }}>
                <FormControl sx={{ flex: 1 }}>
                  <InputLabel>Paragraph Align</InputLabel>
                  <Select
                    value={section.alignment}
                    label="Paragraph Align"
                    onChange={(e) => handleSectionChange(secIdx, "alignment", e.target.value)}
                  >
                    <MenuItem value="left">Left</MenuItem>
                    <MenuItem value="center">Center</MenuItem>
                    <MenuItem value="right">Right</MenuItem>
                  </Select>
                </FormControl>

                <FormControl sx={{ flex: 1 }}>
                  <InputLabel>Font Size</InputLabel>
                  <Select
                    value={section.fontSize}
                    label="Font Size"
                    onChange={(e) => handleSectionChange(secIdx, "fontSize", e.target.value)}
                  >
                    <MenuItem value="12px">12px</MenuItem>
                    <MenuItem value="14px">14px</MenuItem>
                    <MenuItem value="16px">16px</MenuItem>
                    <MenuItem value="18px">18px</MenuItem>
                    <MenuItem value="20px">20px</MenuItem>
                    <MenuItem value="24px">24px</MenuItem>
                  </Select>
                </FormControl>

                <FormControl sx={{ flex: 1 }}>
                  <InputLabel>Font Family</InputLabel>
                  <Select
                    value={section.fontFamily}
                    label="Font Family"
                    onChange={(e) => handleSectionChange(secIdx, "fontFamily", e.target.value)}
                  >
                    <MenuItem value="Arial">Arial</MenuItem>
                    <MenuItem value="Times New Roman">Times New Roman</MenuItem>
                    <MenuItem value="Georgia">Georgia</MenuItem>
                    <MenuItem value="Verdana">Verdana</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <TextField
                label="Paragraph"
                multiline
                rows={4}
                value={section.paragraph}
                onChange={(e) => handleSectionChange(secIdx, "paragraph", e.target.value)}
                fullWidth
                sx={{
                  mt: 2,
                  textAlign: section.alignment,
                  fontFamily: section.fontFamily,
                  fontSize: section.fontSize,
                }}
                InputProps={{
                  style: {
                    textAlign: section.alignment,
                    fontFamily: section.fontFamily,
                    fontSize: section.fontSize,
                    wordWrap: "break-word",
                    whiteSpace: "pre-wrap",
                  },
                }}
              />

              {/* Image alignment (optional, can later impact preview layout) */}
              <FormControl fullWidth sx={{ mt: 2 }}>
                <InputLabel>Image Alignment</InputLabel>
                <Select
                  value={section.imageAlignment}
                  label="Image Alignment"
                  onChange={(e) => handleSectionChange(secIdx, "imageAlignment", e.target.value)}
                >
                  <MenuItem value="left">Left</MenuItem>
                  <MenuItem value="center">Center</MenuItem>
                  <MenuItem value="right">Right</MenuItem>
                </Select>
              </FormControl>

              {/* Upload Images */}
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

                <Box sx={{ display: "flex", gap: 2, mt: 1, flexWrap: "wrap", alignItems: "center" }}>
                  {section.images.map((img, imgIdx) => (
                    <Box key={imgIdx} sx={{ position: "relative" }}>
                      <img
                        src={img.url}
                        alt={`Section ${secIdx + 1} image ${imgIdx + 1}`}
                        style={{
                          width: 120,
                          height: 80,
                          objectFit: "cover",
                          borderRadius: 6,
                          boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
                        }}
                      />
                      <IconButton
                        size="small"
                        color="error"
                        onClick={() => removeImageFromSection(secIdx, imgIdx)}
                        sx={{ position: "absolute", top: -8, right: -8, backgroundColor: "white" }}
                      >
                        <Delete fontSize="small" />
                      </IconButton>
                    </Box>
                  ))}
                </Box>
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

          <Button onClick={addSection} variant="contained" startIcon={<Add />} sx={{ bgcolor: "#fea434", mt: 2 }}>
            Add New Section
          </Button>

          {/* PREVIEW BUTTON */}
          <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
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
            <Button variant="outlined" color="error" onClick={() => setPreviewing(false)} startIcon={<Cancel />}>
              Cancel Preview
            </Button>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h6" sx={{ mb: 2 }}>Upload PDF Newsletters</Typography>
          <Button
            variant="outlined"
            component="label"
            sx={{ color: "#fea434", borderColor: "#fea434" }}
          >
            Upload PDF
            <input
              type="file"
              hidden
              accept="application/pdf"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setPdfFiles([...pdfFiles, { name: file.name, url: URL.createObjectURL(file) }]);
                }
              }}
            />
          </Button>
          {pdfFiles.map((pdf, idx) => (
            <Box key={idx} sx={{ mt: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography>{pdf.name}</Typography>
              <Box>
                <Button size="small" href={pdf.url} target="_blank">View</Button>
                <Button size="small" href={pdf.url} download>Download</Button>
              </Box>
            </Box>
          ))}

        </CardContent>
      </Card>
    </Box>
  );
};

export default NewsEventsManagement;
