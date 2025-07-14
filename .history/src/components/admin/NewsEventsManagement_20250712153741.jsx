import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Divider,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  IconButton,
  Grid,
} from "@mui/material";
import {
  Delete,
  Image as ImageIcon,
  Preview,
  Cancel,
  Add,
  RemoveCircleOutline,
} from "@mui/icons-material";

const defaultSection = () => ({
  title: "",
  date: "",
  paragraph: "",
  images: [], // support multiple images
});

const NewsEventsManagement = () => {
  const [templateIndex, setTemplateIndex] = useState(0);
  const [newsletterTemplates, setNewsletterTemplates] = useState(
    Array.from({ length: 10 }, () => [defaultSection()])
  );

  const [previewing, setPreviewing] = useState(false);
  const [publishedNewsletters, setPublishedNewsletters] = useState([]);

  const handleSectionChange = (index, field, value) => {
    const updated = [...newsletterTemplates];
    updated[templateIndex][index][field] = value;
    setNewsletterTemplates(updated);
  };

  const handleImageUpload = (e, index) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const updated = [...newsletterTemplates];
      const newImages = files.map((file) => ({
        file,
        url: URL.createObjectURL(file),
      }));
      updated[templateIndex][index].images.push(...newImages);
      setNewsletterTemplates(updated);
    }
  };

  const removeSection = (index) => {
    const updated = [...newsletterTemplates];
    updated[templateIndex].splice(index, 1);
    setNewsletterTemplates(updated);
  };

  const removeImage = (sectionIndex, imageIndex) => {
    const updated = [...newsletterTemplates];
    updated[templateIndex][sectionIndex].images.splice(imageIndex, 1);
    setNewsletterTemplates(updated);
  };

  const addSection = () => {
    const updated = [...newsletterTemplates];
    updated[templateIndex].push(defaultSection());
    setNewsletterTemplates(updated);
  };

  const handlePublish = () => {
    // Validate sections
    const sections = newsletterTemplates[templateIndex];
    if (
      sections.length === 0 ||
      sections.some(
        (section) =>
          !section.title.trim() ||
          !section.paragraph.trim() ||
          !section.date.trim()
      )
    ) {
      alert(
        "All sections must have a Title, Paragraph, and Date filled before publishing."
      );
      return;
    }

    // Save published newsletter
    setPublishedNewsletters((prev) => [
      ...prev,
      { templateIndex, sections: [...sections] },
    ]);

    alert("Newsletter published successfully!");
    // Reset current template sections (optional)
    const updated = [...newsletterTemplates];
    updated[templateIndex] = [defaultSection()];
    setNewsletterTemplates(updated);
    setPreviewing(false);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h4"
        sx={{ mb: 2, fontWeight: "bold", color: "#fea434" }}
      >
        News & Events Management
      </Typography>

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

      {newsletterTemplates[templateIndex].map((section, index) => (
        <Card key={index} sx={{ mb: 3, p: 2, backgroundColor: "#fff" }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={1}
          >
            <Typography variant="h6" sx={{ color: "#fea434" }}>
              Section {index + 1}
            </Typography>
            <IconButton
              aria-label="remove section"
              color="error"
              onClick={() => removeSection(index)}
              disabled={newsletterTemplates[templateIndex].length === 1}
            >
              <RemoveCircleOutline />
            </IconButton>
          </Box>

          <TextField
            label="Title"
            value={section.title}
            onChange={(e) => handleSectionChange(index, "title", e.target.value)}
            fullWidth
            sx={{ mt: 1 }}
          />
          <TextField
            label="Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={section.date}
            onChange={(e) => handleSectionChange(index, "date", e.target.value)}
            fullWidth
            sx={{ mt: 2 }}
          />
          <TextField
            label="Paragraph"
            multiline
            rows={4}
            value={section.paragraph}
            onChange={(e) =>
              handleSectionChange(index, "paragraph", e.target.value)
            }
            fullWidth
            sx={{ mt: 2 }}
          />
          <Button
            variant="outlined"
            component="label"
            startIcon={<ImageIcon />}
            sx={{ mt: 2, color: "#fea434", borderColor: "#fea434" }}
          >
            Upload Image(s)
            <input
              type="file"
              hidden
              accept="image/*"
              multiple
              onChange={(e) => handleImageUpload(e, index)}
            />
          </Button>

          {/* Image previews with remove buttons */}
          <Grid container spacing={1} sx={{ mt: 2 }}>
            {section.images.map((img, i) => (
              <Grid item key={i}>
                <Box
                  sx={{
                    position: "relative",
                    width: 100,
                    height: 100,
                    borderRadius: 1,
                    overflow: "hidden",
                    border: "1px solid #ccc",
                  }}
                >
                  <img
                    src={img.url}
                    alt={`Preview ${i + 1}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => removeImage(index, i)}
                    sx={{
                      position: "absolute",
                      top: 2,
                      right: 2,
                      backgroundColor: "rgba(255,255,255,0.7)",
                    }}
                  >
                    <Delete fontSize="small" />
                  </IconButton>
                </Box>
              </Grid>
            ))}
          </Grid>
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

      <Box sx={{ mt: 4 }}>
        {!previewing ? (
          <Button
            variant="outlined"
            startIcon={<Preview />}
            onClick={() => setPreviewing(true)}
            sx={{ borderColor: "#fea434", color: "#fea434", mr: 2 }}
          >
            Preview Newsletter
          </Button>
        ) : (
          <Button
            variant="outlined"
            color="error"
            startIcon={<Cancel />}
            onClick={() => setPreviewing(false)}
            sx={{ mr: 2 }}
          >
            Close Preview
          </Button>
        )}

        <Button
          variant="contained"
          onClick={handlePublish}
          sx={{ bgcolor: "#fea434" }}
        >
          Publish Newsletter
        </Button>
      </Box>

      {/* Preview Section */}
      {previewing && (
        <Card
          sx={{
            mt: 4,
            p: 3,
            backgroundColor: "#fff",
            border: "1px solid #ffe2c0",
            borderRadius: 3,
            boxShadow: 1,
          }}
        >
          <Typography variant="h5" color="#fea434" mb={3}>
            Newsletter Preview - Template {templateIndex + 1}
          </Typography>
          {newsletterTemplates[templateIndex].map((section, idx) => (
            <Box key={idx} mb={4}>
              <Typography variant="h6" gutterBottom>
                {section.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={1}>
                📅 {section.date}
              </Typography>
              <Typography variant="body1" paragraph>
                {section.paragraph}
              </Typography>
              {section.images.length > 0 && (
                <Grid container spacing={2}>
                  {section.images.map((img, i) => (
                    <Grid item xs={6} sm={4} md={3} key={i}>
                      <img
                        src={img.url}
                        alt={`Preview ${i + 1}`}
                        style={{
                          width: "100%",
                          height: 150,
                          objectFit: "cover",
                          borderRadius: 8,
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>
          ))}
        </Card>
      )}

      {/* Published Newsletters List */}
      {publishedNewsletters.length > 0 && (
        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" color="#fea434" mb={3}>
            Published Newsletters
          </Typography>
          {publishedNewsletters.map((pub, idx) => (
            <Card
              key={idx}
              sx={{
                mb: 3,
                p: 3,
                backgroundColor: "#fff",
                borderRadius: 3,
                boxShadow: 1,
              }}
            >
              <Typography variant="h6" mb={2}>
                Template {pub.templateIndex + 1}
              </Typography>
              {pub.sections.map((section, i) => (
                <Box key={i} mb={3}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {section.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={1}>
                    📅 {section.date}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {section.paragraph}
                  </Typography>
                  {section.images.length > 0 && (
                    <Grid container spacing={2}>
                      {section.images.map((img, idx) => (
                        <Grid item xs={6} sm={4} md={3} key={idx}>
                          <img
                            src={img.url}
                            alt={`Published Img ${idx + 1}`}
                            style={{
                              width: "100%",
                              height: 150,
                              objectFit: "cover",
                              borderRadius: 8,
                            }}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  )}
                  <Divider sx={{ my: 2 }} />
                </Box>
              ))}
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default NewsEventsManagement;
