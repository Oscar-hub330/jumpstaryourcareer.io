import React from "react"; 
import { Container, Typography, Card, CardContent } from "@mui/material";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div
      className="text-orange-400 bg-no-repeat bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url('/src/assets/Homepage.JPG')`,
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
      Jumpstart is a youth-focused non-profit organisation that empowers young
      people in rural areas through digital skills, entrepreneurship training,
      and career development programs.
    </Typography>
  </Container>
</section>

      {/* Mission, Vision, Values */}
      <section className="py-10 bg-white/70 backdrop-blur-sm rounded-lg mx-4 mt-8">
        <Container maxWidth="lg">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              {
                title: "Our Mission",
                desc: "To develop youth in rural areas to be prospective employees and entrepreneurs through skills development and ICT training.",
              },
              {
                title: "Our Vision",
                desc: "To prepare youth for employment opportunities through interview training and work placement support. We also foster entrepreneurship, especially among women, through ICT skills and innovation.",
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
                  transition: "transform 0.2s ease-in-out",
                  '&:hover': { transform: 'scale(1.02)' },
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#fea434', fontWeight: 600, mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-10 text-center bg-white/60 backdrop-blur-sm rounded-lg mx-4 mt-8 mb-8">
        <Container maxWidth="sm">
          <Typography variant="h5" className="text-[#fea434] mb-3 font-bold">
            Ready to make a difference?
          </Typography>
          <Typography className="text-gray-700 mb-5">
            Join our mission and help empower the next generation.
          </Typography>
          <a href="/contact">
            <button className="px-6 py-2 rounded-full bg-[#fea434] text-white font-semibold hover:bg-[#e69420] transition duration-300">
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
