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
        backgroundImage: `url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1950&q=80')`,
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
      <section className="py-14 bg-white bg-opacity-90 px-4">
        <Container maxWidth="md" className="text-center">
          <h2 className="text-3xl font-bold text-[#fea434] mb-3">About Jumpstart</h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed px-2">
            Jumpstart is committed to equipping youth in rural areas with the skills,
            confidence, and digital knowledge to thrive in the modern world.
          </p>
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
        </Container>
      </section>

      {/* ✅ Focus Areas Section */}
      {/* ✅ About & Focus Background Section */}
<section
  className="bg-cover bg-center bg-no-repeat py-16 px-4"
  style={{
    backgroundImage: `url('/src/assets/jumpstartcar.jpg')`, // make sure it's .jpg/.png as per your file
  }}
>
  <div className="bg-white/80 backdrop-blur-md rounded-lg px-6 py-12">
    <Container maxWidth="md" className="text-center">
      <h2 className="text-3xl font-bold text-[#fea434] mb-4">About Jumpstart</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Jumpstart is committed to equipping youth in rural areas with the skills,
        confidence, and digital knowledge to thrive in the modern world.
      </p>
    </Container>

    <Container maxWidth="lg" className="mt-10">
      <h2 className="text-3xl font-bold text-[#fea434] text-center mb-8">
        Our Focus Areas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
