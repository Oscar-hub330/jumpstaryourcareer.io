// src/pages/AdminPanel.jsx
import React from "react";
import { Container, Typography, Box, Divider } from "@mui/material";
import BlogManager from "../components/admin/BlogManager";
import NewsEventsManagement from "../components/admin/NewsEventsManagement";
import NewsletterTemplateManager from "../components/admin/NewsletterTemplateManager"; // Newly added

const AdminPanel = () => (
  <Container maxWidth="lg" sx={{ py: 4 }}>
    {/* HEADER */}
    <Box mb={6} textAlign="center">
      <Typography variant="h4" color="#fea434" fontWeight="bold">
        Admin Dashboard
      </Typography>
      <Typography variant="body1" color="textSecondary">
        Manage your platform content and community updates
      </Typography>
    </Box>

    {/* BLOG MANAGEMENT */}
    <Box mb={8}>
      <Typography variant="h5" mb={3} color="#333" fontWeight="600">
        Blog Management
      </Typography>
      <BlogManager />
    </Box>

    <Divider sx={{ my: 6 }} />

    {/* NEWS & EVENTS MANAGEMENT */}
    <Box mb={8}>
      <Typography variant="h5" mb={3} color="#333" fontWeight="600">
        News & Events Management
      </Typography>
      <NewsEventsManagement />
    </Box>

    <Divider sx={{ my: 6 }} />

    {/* NEWSLETTER TEMPLATE MANAGEMENT */}
    <Box mb={8}>
      <Typography variant="h5" mb={3} color="#333" fontWeight="600">
        Newsletter Templates
      </Typography>
      <NewsletterTemplateManager />
    </Box>
  </Container>
);

export default AdminPanel;


// -------- NEW COMPONENT --------
// src/components/admin/NewsletterTemplateManager.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Input,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const emptySection = { title: "", date: "", paragraph: "", image: null };

const NewsletterTemplateManager = () => {
  const [templates, setTemplates] = useState([
    { id: 1, name: "Template 1", sections: [emptySection] },
  ]);
  const [activeTemplate, setActiveTemplate] = useState(1);

  const handleAddSection = (templateId) => {
    setTemplates((prev) =>
      prev.map((t) =>
        t.id === templateId
          ? { ...t, sections: [...t.sections, emptySection] }
          : t
      )
    );
  };

  const handleChange = (templateId, index, field, value) => {
    const updatedTemplates = templates.map((t) => {
      if (t.id === templateId) {
        const updatedSections = [...t.sections];
        updatedSections[index] = {
          ...updatedSections[index],
          [field]: value,
        };
        return { ...t, sections: updatedSections };
      }
      return t;
    });
    setTemplates(updatedTemplates);
  };

  const handleDeleteSection = (templateId, index) => {
    setTemplates((prev) =>
      prev.map((t) => {
        if (t.id === templateId) {
          const updatedSections = t.sections.filter((_, i) => i !== index);
          return { ...t, sections: updatedSections };
        }
        return t;
      })
    );
  };

  return (
    <Box>
      <Box mb={3}>
        <Typography variant="subtitle1" fontWeight="bold">
          Choose Template
        </Typography>
        <Grid container spacing={2} mt={1}>
          {[...Array(10)].map((_, i) => (
            <Grid item key={i}>
              <Button
                variant={activeTemplate === i + 1 ? "contained" : "outlined"}
                onClick={() => {
                  const exists = templates.find((t) => t.id === i + 1);
                  if (!exists) {
                    setTemplates((prev) => [
                      ...prev,
                      { id: i + 1, name: `Template ${i + 1}`, sections: [emptySection] },
                    ]);
                  }
                  setActiveTemplate(i + 1);
                }}
              >
                Template {i + 1}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>

      {templates.map((template) =>
        template.id === activeTemplate ? (
          <Box key={template.id}>
            <Typography variant="h6" color="#fea434" gutterBottom>
              {template.name} Editor
            </Typography>

            {template.sections.map((section, idx) => (
              <Card sx={{ mb: 3 }} key={idx}>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Title"
                        value={section.title}
                        onChange={(e) =>
                          handleChange(template.id, idx, "title", e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Date"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={section.date}
                        onChange={(e) =>
                          handleChange(template.id, idx, "date", e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        label="Paragraph"
                        value={section.paragraph}
                        onChange={(e) =>
                          handleChange(template.id, idx, "paragraph", e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Input
                        type="file"
                        onChange={(e) =>
                          handleChange(template.id, idx, "image", e.target.files[0])
                        }
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions>
                  <IconButton onClick={() => handleDeleteSection(template.id, idx)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </CardActions>
              </Card>
            ))}

            <Button
              startIcon={<AddIcon />}
              variant="outlined"
              onClick={() => handleAddSection(template.id)}
            >
              Add Section
            </Button>
          </Box>
        ) : null
      )}
    </Box>
  );
};

export default NewsletterTemplateManager;
