import React from "react";
import JumpstartLogo from "../assets/jumpstart-logo.svg";
import { Button, Container, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-black">
      {/* ✅ Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-white">
        <Container maxWidth="md" className="text-center">
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

      {/* ✅ About Preview Section */}
      <section className="py-16 bg-gray-50">
        <Container maxWidth="md" className="text-center">
          <h2 className="text-3xl font-bold text-[#fea434] mb-4">About Jumpstart</h2>
          <p className="text-gray-700 text-lg mb-6">
            Jumpstart is committed to equipping youth in rural areas with the skills,
            confidence, and digital knowledge to thrive in the modern world.
          </p>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#fea434",
              color: "#fea434",
              "&:hover": { borderColor: "#e69420", color: "#e69420" },
            }}
            onClick={() => navigate("/about")}
          >
            Learn More
          </Button>
        </Container>
      </section>

      {/* ✅ Focus Areas Section */}
      <section className="py-16 bg-white">
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
              <Card key={idx} className="shadow-lg border">
                <CardContent>
                  <Typography
                    variant="h6"
                    className="text-[#fea434] font-semibold mb-2"
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" className="text-gray-700">
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
