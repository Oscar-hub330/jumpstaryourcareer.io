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
import moment from "moment";

const blogPosts = [
  {
    id: 1,
    title: "Empowering Youth Through Digital Skills",
    excerpt: "How rural youth are learning to code and lead in the tech world...",
    author: "Thabo Mokoena",
    date: "2025-06-20",
    image: "https://source.unsplash.com/featured/?technology",
    tags: ["ICT Education", "Youth Empowerment"],
  },
  {
    id: 2,
    title: "Stories of Transformation from Jumpstart Graduates",
    excerpt: "Meet our graduates who’ve launched businesses, joined startups, and changed their communities.",
    author: "Nomsa Dlamini",
    date: "2025-06-15",
    image: "https://source.unsplash.com/featured/?community",
    tags: ["Entrepreneurship", "Impact Stories"],
  },
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <Box className="min-h-screen py-10 px-6 md:px-20 bg-white">
      <Typography variant="h3" className="text-[#fea434] font-bold mb-6 text-center">
        Our Blog
      </Typography>
      <Typography variant="body1" className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">
        Stay updated with the latest stories, insights, and innovations from our community and beyond.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {blogPosts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card
              className="shadow hover:shadow-lg transition duration-300 cursor-pointer border border-[#fea434]"
              onClick={() => navigate(`/blog/${post.id}`)}
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <CardContent>
                <Typography variant="h6" className="text-[#fea434] font-bold mb-2">
                  {post.title}
                </Typography>
                <Typography variant="body2" className="text-gray-700 mb-3">
                  {post.excerpt}
                </Typography>
                <Box className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Avatar>{post.author[0]}</Avatar>
                    <span>{post.author}</span>
                  </div>
                  <span>{moment(post.date).format("LL")}</span>
                </Box>
                <Box className="mt-3 flex gap-2 flex-wrap">
                  {post.tags.map((tag, idx) => (
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

export default Blog;
