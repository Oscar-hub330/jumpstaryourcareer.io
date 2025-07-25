import React from "react";
import { Container, Typography, Card, CardContent, Box } from "@mui/material";
import Slider from "react-slick";
import Footer from "../components/Footer";

// Sponsor logos
import BankSetaLogo from "../assets/sponsors/bankseta.png";
import TetaLogo from "../assets/sponsors/teta.png";
import SasolLogo from "../assets/sponsors/sasol.png";
import ChietaLogo from "../assets/sponsors/chieta.png";
import VodacomLogo from "../assets/sponsors/vodacom.png";
import FpmSetaLogo from "../assets/sponsors/fpmseta.png";
import PublicWorksLogo from "../assets/sponsors/publicworks.png";
import ThaboMbekiFoundationLogo from "../assets/sponsors/thabombekifoundation.png";
import DsdLogo from "../assets/sponsors/dsd.png";

const sponsors = [
  { name: "Thabo Mbeki Foundation", logo: ThaboMbekiFoundationLogo },
  { name: "Vodacom", logo: VodacomLogo },
  { name: "Department of Social Development", logo: DsdLogo },
  { name: "BankSeta", logo: BankSetaLogo },
  { name: "TETA", logo: TetaLogo },
  { name: "Sasol", logo: SasolLogo },
  { name: "Chieta", logo: ChietaLogo },
  { name: "FP&M Seta", logo: FpmSetaLogo },
  { name: "Department of Public Works", logo: PublicWorksLogo },
];

const sponsorSettings = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};

const About = () => {
  const futuristicBg =
    "linear-gradient(to bottom right, #f4f8ff, #e5edff, #d8e5ff)";

  const cardBg =
    "linear-gradient(to bottom right, rgba(255,255,255,0.98), rgba(245,250,255,0.95))";

  return (
    <div
      className="text-orange-400 min-h-screen"
      style={{
        background: futuristicBg,
        backgroundAttachment: "fixed",
        paddingBottom: "2rem",
      }}
    >
      {/* Hero Section */}
      <section className="py-4 mx-4 mt-6">
        <Container maxWidth="md">
          <Card
            sx={{
              background: cardBg,
              backdropFilter: "blur(8px)",
              padding: 4,
              borderRadius: 2,
              boxShadow: 4,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
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
          </Card>
        </Container>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-0 mx-4 mt-8">
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
                  boxShadow: 3,
                  height: "100%",
                  background: cardBg,
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

      {/* Sponsors Section */}
      <section className="py-0 mx-4 mt-6 mb-8">
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            color="#fea434"
            textAlign="center"
            gutterBottom
            mb={6}
          >
            Partners of Jumpstart
          </Typography>
          <Card
            sx={{
              border: "2px solid #fea434",
              borderRadius: 2,
              boxShadow: 3,
              background: cardBg,
              p: 3,
            }}
          >
            <Slider {...sponsorSettings}>
              {sponsors.map((sponsor) => (
                <Box
                  key={sponsor.name}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    px: 2,
                  }}
                >
                  <Box
                    component="img"
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    sx={{
                      maxHeight: 120,
                      maxWidth: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              ))}
            </Slider>
          </Card>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-2 text-center mx-4 mt-10">
        <Container maxWidth="md">
          <Card
            sx={{
              background: cardBg,
              borderRadius: 2,
              padding: 4,
              boxShadow: 3,
              backdropFilter: "blur(6px)",
            }}
          >
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
          </Card>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default About;
