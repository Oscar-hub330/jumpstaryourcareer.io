import React from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const newsEvents = [
  {
    id: 1,
    title: "Jumpstart Hosts Rural Tech Fair 2025",
    description: "Bringing tech education and innovation to underdeveloped communities.",
    author: "Kabelo Mthembu",
    date: "2025-06-22",
    image: "https://source.unsplash.com/featured/?conference",
    tags: ["Events", "Community", "Tech"]
  },
  {
    id: 2,
    title: "New Partnership with Local Colleges",
    description: "Jumpstart signs MOU to support ICT curriculum in rural schools.",
    author: "Ayanda Nkosi",
    date: "2025-06-18",
    image: "https://source.unsplash.com/featured/?education",
    tags: ["News", "Education", "Partnership"]
  },
];

const NewsEvents = () => {
  const navigate = useNavigate();

  return (
    <Box className="min-h-screen py-10 px-6 md:px-20 bg-white">
      <Typography variant="h3" className="text-[#fea434] font-bold mb-6 text-center">
        News & Events
      </Typography>
      <Typography variant="body1" className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">
        Read the latest updates, upcoming events, and community stories from Jumpstart.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {newsEvents.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card
              className="shadow hover:shadow-lg transition duration-300 cursor-pointer border border-[#fea434]"
              onClick={() => navigate(`/news/${item.id}`)}
            >
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <CardContent>
                <Typography variant="h6" className="text-[#fea434] font-bold mb-2">
                  {item.title}
                </Typography>
                <Typography variant="body2" className="text-gray-700 mb-3">
                  {item.description}
                </Typography>
                <Box className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Avatar>{item.author[0]}</Avatar>
                    <span>{item.author}</span>
                  </div>
                  <span>{new Date(item.date).toLocaleDateString("en-ZA", { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </Box>
                <Box className="mt-3 flex gap-2 flex-wrap">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-[#fea434]/20 text-[#fea434] rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NewsEvents;
