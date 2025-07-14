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
  images: [], // multiple images per section
  writerName: "", // only used/displayed on first section
});

const NewsEventsManagement = () => {
  const [templateIndex, setTemplateIndex] = useState(0);
  const [newsletterTemplates, setNewsletterTemplates] = useState(
    Array.from({ length: 10 }, () => [defaultSection()])
  );
  const [previewing, setPreviewing] = useState(false);

  // Handlers for section field changes
  const handleSectionChange = (sectionIdx, field, value) => {
    const updated = [...newsletterTemplates];
    updated[templateIndex][sectionIdx][field] = value;
    setNewsletterTemplates(updated);
  };

  // Add new section to current template
  const addSection = () => {
    const updated = [...newsletterTemplates];
    updated[templateIndex].push(defaultSection());
    setNewsletterTemplates(updated);
  };

  // Remove section from current template
  const removeSection = (sectionIdx) => {
    const updated = [...newsletterTemplates];
    updated[templateIndex].splice(sectionIdx, 1);
    setNewsletterTemplates(updated);
  };

  // Add image to section
  const addImageToSection = (e, sectionIdx) => {
    const file = e.target.files[0];
    if (!file) return;

    const updated = [...newsletterTemplates];
    const url = URL.createObjectURL(file);
    updated[templateIndex][sectionIdx].images.push({ file, url });
    setNewsletterTemplates(updated);
  };

  // Remove image from section
  const removeImageFromSection = (sectionIdx, imageIdx) => {
    const updated = [...newsletterTemplates];
    updated[templateIndex][sectionIdx].images.splice(imageIdx, 1);
    setNewsletterTemplates(updated);
  };

  // Validate current template before preview (simple)
  const validateTemplate = () => {
    const sections = newsletterTemplates[templateIndex];
    if (!sections.length) return false;
    for (let i = 0; i < sections.length; i++) {
      const sec = sections[i];
      if (!sec.title.trim() || !sec.paragraph.trim()) return false;
      if (i === 0 && !sec.writerName.trim()) return false; // writer required on first section
      if (!sec.date) return false; // date required for all sections (or remove if you want only first)
    }
    return true;
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h4"
        sx={{ mb: 2, fontWeight: "bold", color: "#fea434" }}
      >
        News & Events Management
      </Typography>

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

              {/* Writer name ONLY on first section */}
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

              {/* Images upload and preview */}
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
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    mt: 1,
                    flexWrap: "wrap",
                    alignItems: "center",
                  }}
                >
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
                          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                        }}
                      />
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

          {/* Control buttons */}
          <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              sx={{ bgcolor: "#fea434" }}
              onClick={() => {
                if (!validateTemplate()) {
                  alert(
                    "Please fill in title, date, paragraph for all sections, and writer's name on the first section."
                  );
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
          </Box>
        </CardContent>
      </Card>

      {/* Published Newsletter Preview */}
      {previewing && (
        <Card
          sx={{
            mt: 4,
            p: 3,
            backgroundColor: "#fff",
            border: "1px solid #ffe2c0",
            borderRadius: 3,
            boxShadow: 1,
            maxWidth: 900,
            margin: "auto",
          }}
        >
          {/* Masthead */}
          <Box
            sx={{
              borderBottom: "2px solid #fea434",
              mb: 4,
              textAlign: "center",
              py: 1,
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              sx={{ fontWeight: "bold", color: "#d35400", letterSpacing: 4 }}
            >
              JUMPSTART NEWS
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ fontStyle: "italic", color: "#555", mt: 0.5 }}
            >
              {new Date().toLocaleDateString("en-ZA", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </Typography>
          </Box>

          {/* Sections */}
          {newsletterTemplates[templateIndex].map((section, idx) => (
            <Box
              key={idx}
              mb={6}
              sx={{
                borderBottom:
                  idx !== newsletterTemplates[templateIndex].length - 1
                    ? "1px solid #eee"
                    : "none",
                pb: 3,
              }}
            >
              {/* Headline */}
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: "900",
                  textTransform: "uppercase",
                  mb: 1,
                  color: "#d35400",
                  letterSpacing: 2,
                }}
              >
                {section.title}
              </Typography>

              {/* Writer name ONLY on first section */}
              {idx === 0 && section.writerName && (
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: "bold",
                    fontStyle: "italic",
                    color: "#444",
                    mb: 1,
                  }}
                >
                  By {section.writerName}
                </Typography>
              )}

              {/* Dateline */}
              <Typography
                variant="subtitle2"
                sx={{ fontStyle: "italic", color: "#666", mb: 2 }}
              >
                {section.date
                  ? new Date(section.date).toLocaleDateString("en-ZA", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : ""}
              </Typography>

              {/* Content with images floated right */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  alignItems: "flex-start",
                }}
              >
                <Box
                  sx={{
                    flex: "1 1 60%",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                    fontStyle: "italic",
                    minWidth: 280,
                  }}
                >
                  {section.paragraph}
                </Box>

                {section.images.length > 0 && (
                  <Box
                    sx={{
                      flex: "1 1 35%",
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      minWidth: 200,
                      alignItems: "center",
                    }}
                  >
                    {section.images.map((img, i) => (
                      <img
                        key={i}
                        src={img.url}
                        alt={`Section image ${i + 1}`}
                        style={{
                          width: "100%",
                          borderRadius: 8,
                          objectFit: "cover",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                        }}
                      />
                    ))}
                  </Box>
                )}
              </Box>
            </Box>
          ))}
        </Card>
      )}
    </Box>
  );
};

export default NewsEventsManagement;
