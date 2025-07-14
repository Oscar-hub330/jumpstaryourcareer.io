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
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import {
  Delete,
  Edit,
  Event,
  Image as ImageIcon,
  Preview,
  Cancel,
  Email,
  Add,
} from "@mui/icons-material";

const defaultSection = () => ({
  title: "",
  date: "",
  paragraph: "",
  image: null,
  imageUrl: "",
});

const NewsEventsManagement = () => {
  const [templateIndex, setTemplateIndex] = useState(0);
  const [newsletterTemplates, setNewsletterTemplates] = useState(
    Array.from({ length: 10 }, () => [defaultSection()])
  );

  const handleSectionChange = (index, field, value) => {
    const updated = [...newsletterTemplates];
    updated[templateIndex][index][field] = value;
    setNewsletterTemplates(updated);
  };

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const updated = [...newsletterTemplates];
      updated[templateIndex][index].image = file;
      updated[templateIndex][index].imageUrl = URL.createObjectURL(file);
      setNewsletterTemplates(updated);
    }
  };

  const addSection = () => {
    const updated = [...newsletterTemplates];
    updated[templateIndex].push(defaultSection());
    setNewsletterTemplates(updated);
  };

  const removeSection = (index) => {
    const updated = [...newsletterTemplates];
    updated[templateIndex].splice(index, 1);
    setNewsletterTemplates(updated);
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
              onChange={(e) => setTemplateIndex(e.target.value)}
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
              <Typography variant="h6" sx={{ color: "#fea434" }}>
                Section {index + 1}
              </Typography>
              <TextField
                label="Title"
                value={section.title}
                onChange={(e) => handleSectionChange(index, "title", e.target.value)}
                fullWidth
                sx={{ mt: 2 }}
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
                onChange={(e) => handleSectionChange(index, "paragraph", e.target.value)}
                fullWidth
                sx={{ mt: 2 }}
              />
              <Button
                variant="outlined"
                component="label"
                startIcon={<ImageIcon />}
                sx={{ mt: 2, color: "#fea434", borderColor: "#fea434" }}
              >
                Upload Image
                <input type="file" hidden accept="image/*" onChange={(e) => handleImageUpload(e, index)} />
              </Button>
              {section.imageUrl && (
                <img
                  src={section.imageUrl}
                  alt="Section Preview"
                  style={{ marginTop: 10, width: "100%", maxHeight: 200, objectFit: "cover", borderRadius: 8 }}
                />
              )}
              <Button
                onClick={() => removeSection(index)}
                color="error"
                variant="outlined"
                startIcon={<Delete />}
                sx={{ mt: 2 }}
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
        </CardContent>
      </Card>

      {/* Future: Submit all newsletterTemplates[templateIndex] to backend */}
    </Box>
  );
};

export default NewsEventsManagement;
