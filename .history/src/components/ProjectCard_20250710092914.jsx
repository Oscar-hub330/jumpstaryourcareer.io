import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

const ProjectCard = ({ title, description, images }) => (
  <Card sx={{ borderRadius: 3, p: 2, boxShadow: 4 }}>
    <CardContent>
      <Typography variant="h5" fontWeight={600} color="#fea434" gutterBottom>
        {title}
      </Typography>

      <Typography variant="body2" color="text.secondary" mb={2}>
        {description}
      </Typography>

      {/* Image Gallery */}
      <Box display="flex" gap={2} mt={1}>
        {images.map((img, idx) => (
          <CardMedia
            key={idx}
            component="img"
            image={img}
            alt={`${title} image ${idx + 1}`}
            sx={{
              width: 110,
              height: "auto",
              borderRadius: 2,
              border: "1px solid #eee",
              objectFit: "cover",
            }}
          />
        ))}
      </Box>
    </CardContent>
  </Card>
);

export default ProjectCard;
