import React from "react";
import { Button, Container, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import JumpstartLogo from "../assets/jumpstart-logo.svg";
import Footer from "../components/Footer";
import "./Home.css";  // <-- Import the CSS here

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="text-orange-400 bg-animated"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1950&q=80')`,
      }}
    >
      {/* rest of your code unchanged */}
      <section className="min-h-screen flex items-center justify-center bg-white bg-opacity-80">
        <Container maxWidth="md" className="text-center py-12">
          <img
            src={JumpstartLogo}
            alt="Jumpstart Logo"
            className="mx-auto w-24 h-24 mb-6 animate-bounce"
          />
          <h1 className="text-4xl font-bold text-[#fea434] mb-4">
            Empowering Rural Youth
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Through skills development, entrepreneurship training, and ICT education.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fea434",
                color: "white",
                "&:hover": { backgroundColor: "#e69420" },
              }}
              onClick={() => navigate("/projects")}
            >
              Explore Projects
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#fea434",
                color: "#fea434",
                "&:hover": { borderColor: "#e69420", color: "#e69420" },
              }}
              onClick={() => navigate("/contact")}
            >
              Get Involved
            </Button>
          </div>
        </Container>
      </section>

      {/* About & Focus Areas sections unchanged */}

      <Footer />
    </div>
  );
};

export default Home;
