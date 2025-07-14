import React from "react";
import { Button, Container, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import JumpstartLogo from "../assets/jumpstart-logo.svg";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="text-black bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url('/src/assets/car.svg')`, // Ensure this path is correct
      }}
    >
      {/* ✅ Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-white/80 px-4">
        <Container maxWidth="md" className="text-center py-10">
          <img
            src={JumpstartLogo}
            alt="Jumpstart Logo"
            className="mx-auto w-24 h-24 mb-6 animate-bounce"
          />
          <h1 className="text-4xl font-bold text-[#fea434] mb-4 leading-tight">
            Empowering Rural Youth
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed px-2">
            Through skills development, entrepreneurship training, and ICT education.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fea434",
                color: "white",
                px: 3,
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
                px: 3,
                "&:hover": { borderColor: "#e69420", color: "#e69420" },
              }}
              onClick={() => navigate("/contact")}
            >
              Get Involved
            </Button>
          </div>
        </Container>
      </section>

     {/* ✅ About Preview Section */}
      
            
      {/* ✅ Focus Areas Section */}
      {/* ✅ About & Focus Background Section */}
{/* ✅ Unified About & Focus Section with Background */}
{/* ✅ About + Focus Areas Unified Section with Background */}
<section
  className="bg-cover bg-center bg-no-repeat py-16 px-4"
  style={{
    backgroundImage: `url('/src/assets/jumpstartcar.jpg')`,
  }}
>
  <div className="bg-white/80 backdrop-blur-lg rounded-2xl px-6 py-12">
    {/* About */}
    <Container maxWidth="md" className="text-center mb-12">
      <h2 className="text-4xl font-bold text-[#fea434] mb-4">About Jumpstart</h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        Jumpstart is committed to equipping youth in rural areas with the skills,
        confidence, and digital knowledge to thrive in the modern world.
      </p>
    </Container>
  <Button
            variant="outlined"
            sx={{
              borderColor: "#fea434",
              color: "#fea434",
              px: 4,
              "&:hover": { borderColor: "#e69420", color: "#e69420" },
            }}
            onClick={() => navigate("/about")}
          >
            Learn More
          </Button>
    {/* Focus Areas */}
    <Container maxWidth="lg">
      <h2 className="text-3xl font-bold text-[#fea434] text-center mb-10">
        Our Focus Areas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Skills Development",
            desc: "Empowering youth with hands-on training in business, tech, and life skills.",
          },
          {
            title: "Entrepreneurship Training",
            desc: "Teaching problem-solving, business models, and startup methods.",
          },
          {
            title: "ICT Education",
            desc: "Providing digital literacy and access to essential tech tools.",
          },
        ].map((item, idx) => (
          <Card
            key={idx}
            sx={{
              border: "2px solid #fea434",
              borderRadius: 2,
              boxShadow: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{ color: "#fea434", fontWeight: "600", mb: 1 }}
              >
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {item.desc}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  </div>
</section>



      <Footer />
    </div>
  );
};

export default Home;
