import React from "react";
import { Container, Typography, Card, CardContent, Box } from "@mui/material";
import Footer from "../components/Footer";

// Import sponsor logos here - replace with your actual paths
import TechCorpLogo from "../assets/sponsors/techcorp.png";
import GreenEnergyLogo from "../assets/sponsors/greenenergy.png";
import EduFundLogo from "../assets/sponsors/edufund.png";

const About = () => {
  const ictInterventions = [
    {
      title: "Digital Literacy Programs",
      desc: "Teaching basic computer skills to rural youth and adults.",
    },
    {
      title: "AI & Robotics Training",
      desc: "Introducing emerging tech through practical workshops.",
    },
    {
      title: "Internet Access Points",
      desc: "Setting up community Wi-Fi hotspots to bridge connectivity gaps.",
    },
  ];

  const sponsors = [
    { name: "TechCorp", logo: TechCorpLogo },
    { name: "Green Energy Initiative", logo: GreenEnergyLogo },
    { name: "EduFund Foundation", logo: EduFundLogo },
  ];

  return (
    <div
      className="text-orange-400 min-h-screen"
      style={{
        backgroundColor: "#FFFAF5",
      }}
    >
      {/* Hero Section */}
      <section className="py-12 bg-white/70 backdrop-blur-sm rounded-lg mx-4 mt-6">
        <Container maxWidth="md" className="text-center">
          <Typography
            variant="h3"
            className="font-bold text-[#fea434] mb-6 tracking-wide"
            gutterBottom
          >
            About Us
          </Typography>

          <Typography
            variant="body1"
            className="text-gray-700 text-lg leading-relaxed px-2 md:px-8"
          >
            Jumpstart is a youth-focused non-profit organisation that empowers
            young people in rural areas through digital skills, entrepreneurship
            training, and career development programs.
          </Typography>
        </Container>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-10 rounded-lg mx-4 mt-8">
        <Container maxWidth="lg">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              {
                title: "Our Mission",
                desc: "To prepare youth for employment opportunities through interview training and work placement support. We also foster entrepreneurship, especially among women, through ICT skills and innovation.",
              },
              {
                title: "Our Vision",
                desc: "To develop youth in rural areas to be prospective employees and entrepreneurs through skills development and ICT training.",
              },
              {
                title: "Our Values",
                desc: "Empowerment, Integrity, Innovation, Inclusivity, and Impact.",
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                sx={{
                  border: "2px solid #fea434",
                  borderRadius: 2,
                  boxShadow: 2,
                  height: "100%",
                  backgroundColor: "#FFFAF5",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": { transform: "scale(1.02)" },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#fea434",
                      fontWeight: 600,
                      mb: 1,
                    }}
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
      </section>

      {/* ICT Interventions */}
      <section className="py-10 rounded-lg mx-4 mt-8">
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            color="#fea434"
            textAlign="center"
            gutterBottom
            mb={6}
          >
            ICT Interventions
          </Typography>

          <Box className="grid md:grid-cols-3 gap-6">
            {ictInterventions.map((item, idx) => (
              <Card
                key={idx}
                sx={{
                  border: "2px solid #fea434",
                  borderRadius: 2,
                  boxShadow: 2,
                  backgroundColor: "#FFFAF5",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": { transform: "scale(1.02)" },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ color: "#fea434", fontWeight: 600, mb: 1 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </section>

      {/* Sponsors of Jumpstart - single card with logos */}
      <section className="py-10 rounded-lg mx-4 mt-8 mb-10">
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            color="#fea434"
            textAlign="center"
            gutterBottom
            mb={6}
          >
            Sponsors of Jumpstart
          </Typography>

          <Card
            sx={{
              border: "2px solid #fea434",
              borderRadius: 2,
              boxShadow: 2,
              backgroundColor: "#FFFAF5",
              p: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                gap: 4,
                flexWrap: "wrap",
              }}
            >
              {sponsors.map((sponsor) => (
                <Box
                  key={sponsor.name}
                  component="img"
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  sx={{ maxHeight: 80, objectFit: "contain" }}
                />
              ))}
            </Box>
          </Card>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-12 text-center bg-white/70 backdrop-blur-sm rounded-lg mx-4 mt-10">
        <Container maxWidth="md">
          <Typography
            variant="h5"
            className="text-[#fea434] font-bold tracking-wide mb-4"
            gutterBottom
          >
            Ready to make a difference?
          </Typography>

          <Typography
            variant="body1"
            className="text-gray-700 text-lg leading-relaxed mb-4 px-2 md:px-6"
          >
            Join our mission and help empower the next generation.
          </Typography>

          <a href="/contact">
            <button className="mt-4 px-6 py-3 rounded-full bg-[#fea434] text-white font-semibold hover:bg-[#e69420] transition duration-300 shadow-md">
              Contact Us
            </button>
          </a>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default About;
