import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const blogPosts = [
  {
    id: 1,
    title: "How ICT Transformed My Village",
    excerpt: "Discover how digital literacy changed lives in Mpumalanga...",
    date: "June 20, 2025",
    author: "Admin",
  },
  {
    id: 2,
    title: "Empowering Youth Through Code",
    excerpt: "We launched our first web dev bootcamp for rural students.",
    date: "June 10, 2025",
    author: "Admin",
  },
  {
    id: 3,
    title: "Success Stories from Limpopo",
    excerpt: "Meet three graduates who built their own tech businesses.",
    date: "May 28, 2025",
    author: "Admin",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 md:px-10 xl:px-20 2xl:px-32">
      <h1 className="text-3xl md:text-4xl font-bold text-[#fea434] mb-10 text-center">
        Jumpstart Blog
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id} className="rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <CardContent>
              <Typography variant="h6" color="primary" className="text-[#fea434] font-semibold">
                {post.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" className="mt-1">
                {post.date} • By {post.author}
              </Typography>
              <Typography variant="body1" className="mt-3 text-gray-800">
                {post.excerpt}
              </Typography>
              <Button
                size="small"
                className="mt-4"
                sx={{
                  color: "#fea434",
                  textTransform: "none",
                  "&:hover": { color: "#e69420" },
                }}
              >
                Read More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;
