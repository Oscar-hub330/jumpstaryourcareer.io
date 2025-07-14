import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";

const ProjectCard = ({ title, description, image, images }) => {
  const hasMultipleImages = images && images.length > 0;

  return (
    <Card sx={{ borderRadius: 3, p: 2, boxShadow: 4 }}>
      <CardContent>
        <Typography variant="h6" fontWeight={600} color="#fea434" gutterBottom>
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={2}>
          {description}
        </Typography>

        {/* Image or Image Gallery */}
        {hasMultipleImages ? (
          <Box display="flex" gap={2} mt={1}>
            {images.map((img, idx) => (
              <CardMedia
                key={idx}
                component="img"
                image={img}
                alt={`${title} image ${idx + 1}`}
                sx={{
                  width: 110,
                  height: "50%",
                  borderRadius: 2,
                  border: "1px solid #eee",
                  objectFit: "cover",
                }}
              />
            ))}
          </Box>
        ) : (
          image && (
            <CardMedia
              component="img"
              image={image}
              alt={title}
              sx={{
                width: "100%",
                height: 180,
                borderRadius: 2,
                mt: 2,
                objectFit: "cover",
              }}
            />
          )
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
