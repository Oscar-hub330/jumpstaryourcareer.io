// src/components/admin/newsletter/NewsletterTemplateSelector.jsx
import React, { useState } from "react";
import { Box, Typography, Card, CardContent, Button, Grid } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import NewsletterTemplate1Form from "./NewsletterTemplate1Form"; // We'll build this next

const templates = [
  {
    id: 1,
    name: "Classic Column Layout",
    description: "Header, 3 content blocks, optional images, and footer.",
    icon: <ArticleIcon fontSize="large" />,
  },
  // You can add more templates (2–10) here later
];

const NewsletterTemplateSelector = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleSelect = (templateId) => {
    setSelectedTemplate(templateId);
  };

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold", color: "#fea434" }}>
        Choose a Newsletter Template
      </Typography>

      {!selectedTemplate && (
        <Grid container spacing={3}>
          {templates.map((tpl) => (
            <Grid item xs={12} md={6} lg={4} key={tpl.id}>
              <Card
                variant="outlined"
                sx={{ borderRadius: 3, p: 2, boxShadow: 3, backgroundColor: "#fffefb" }}
              >
                <CardContent>
                  <Box display="flex" alignItems="center" gap={2}>
                    {tpl.icon}
                    <Typography variant="h6">{tpl.name}</Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {tpl.description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{ mt: 2, backgroundColor: "#fea434" }}
                    onClick={() => handleSelect(tpl.id)}
                  >
                    Use Template
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Load the selected template form */}
      {selectedTemplate === 1 && <NewsletterTemplate1Form />}
    </Box>
  );
};

export default NewsletterTemplateSelector;
