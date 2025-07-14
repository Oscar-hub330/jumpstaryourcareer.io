import React from "react";
import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import JumpstartLogo from "../assets/jumpstart-logo.svg";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative text-black flex flex-col min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 scale-105"
        style={{
          backgroundImage: `url('/src/assets/car.svg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          filter: "blur(5px)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-grow px-4">
        {/* Hero Section */}
        <section className="min-h-[70vh] flex items-center justify-center">
          <div className="text-center max-w-2xl w-full text-white">
            <img
              src={JumpstartLogo}
              alt="Jumpstart Logo"
              className="mx-auto w-24 h-24 mb-6 animate-bounce"
            />
            <h1 className="text-4xl font-bold text-[#fea434] mb-4 leading-tight">
              Empowering Rural Youth
            </h1>
            <p className="text-white text-lg mb-6 leading-relaxed">
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
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 text-white text-center">
          <Container maxWidth="md">
            <h2 className="text-4xl font-bold text-[#fea434] mb-4">About Jumpstart</h2>
            <p className="text-white text-lg leading-relaxed">
              Jumpstart is committed to equipping youth in rural areas with the skills,
              confidence, and digital knowledge to thrive in the modern world.
            </p>
            <div className="mt-6">
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
            </div>
          </Container>
        </section>

        {/* Focus Areas */}
        <section className="py-12 text-white text-center">
          <Container maxWidth="lg">
            <h2 className="text-3xl font-bold text-[#fea434] mb-10">Our Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Skills Development",
                  desc: "Hands-on training in business, tech, and life skills.",
                },
                {
                  title: "Entrepreneurship Training",
                  desc: "Problem-solving, business models, and startup methods.",
                },
                {
                  title: "ICT Education",
                  desc: "Digital literacy and access to essential tech tools.",
                },
                {
                  title: "Innovation",
                  desc: "Exploring new ideas for modern challenges.",
                },
              ].map((item, idx) => (
                <div key={idx} className="text-left">
                  <h3 className="text-xl font-semibold text-[#fea434] mb-2">{item.title}</h3>
                  <p className="text-white text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </div>

      {/* ✅ No border, no wrapper */}
      <Footer />
    </div>
  );
};

export default Home;
import React from "react";
import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import JumpstartLogo from "../assets/jumpstart-logo.svg";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative text-black flex flex-col min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 scale-105"
        style={{
          backgroundImage: `url('/src/assets/car.svg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          filter: "blur(5px)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-grow px-4">
        {/* Hero Section */}
        <section className="min-h-[70vh] flex items-center justify-center">
          <div className="text-center max-w-2xl w-full text-white">
            <img
              src={JumpstartLogo}
              alt="Jumpstart Logo"
              className="mx-auto w-24 h-24 mb-6 animate-bounce"
            />
            <h1 className="text-4xl font-bold text-[#fea434] mb-4 leading-tight">
              Empowering Rural Youth
            </h1>
            <p className="text-white text-lg mb-6 leading-relaxed">
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
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 text-white text-center">
          <Container maxWidth="md">
            <h2 className="text-4xl font-bold text-[#fea434] mb-4">About Jumpstart</h2>
            <p className="text-white text-lg leading-relaxed">
              Jumpstart is committed to equipping youth in rural areas with the skills,
              confidence, and digital knowledge to thrive in the modern world.
            </p>
            <div className="mt-6">
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
            </div>
          </Container>
        </section>

        {/* Focus Areas */}
        <section className="py-12 text-white text-center">
          <Container maxWidth="lg">
            <h2 className="text-3xl font-bold text-[#fea434] mb-10">Our Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Skills Development",
                  desc: "Hands-on training in business, tech, and life skills.",
                },
                {
                  title: "Entrepreneurship Training",
                  desc: "Problem-solving, business models, and startup methods.",
                },
                {
                  title: "ICT Education",
                  desc: "Digital literacy and access to essential tech tools.",
                },
                {
                  title: "Innovation",
                  desc: "Exploring new ideas for modern challenges.",
                },
              ].map((item, idx) => (
                <div key={idx} className="text-left">
                  <h3 className="text-xl font-semibold text-[#fea434] mb-2">{item.title}</h3>
                  <p className="text-white text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </div>

      {/* ✅ No border, no wrapper */}
      <Footer />
    </div>
  );
};

export default Home;
import React from "react";
import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import JumpstartLogo from "../assets/jumpstart-logo.svg";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative text-black flex flex-col min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 scale-105"
        style={{
          backgroundImage: `url('/src/assets/car.svg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          filter: "blur(5px)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-grow px-4">
        {/* Hero Section */}
        <section className="min-h-[70vh] flex items-center justify-center">
          <div className="text-center max-w-2xl w-full text-white">
            <img
              src={JumpstartLogo}
              alt="Jumpstart Logo"
              className="mx-auto w-24 h-24 mb-6 animate-bounce"
            />
            <h1 className="text-4xl font-bold text-[#fea434] mb-4 leading-tight">
              Empowering Rural Youth
            </h1>
            <p className="text-white text-lg mb-6 leading-relaxed">
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
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 text-white text-center">
          <Container maxWidth="md">
            <h2 className="text-4xl font-bold text-[#fea434] mb-4">About Jumpstart</h2>
            <p className="text-white text-lg leading-relaxed">
              Jumpstart is committed to equipping youth in rural areas with the skills,
              confidence, and digital knowledge to thrive in the modern world.
            </p>
            <div className="mt-6">
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
            </div>
          </Container>
        </section>

        {/* Focus Areas */}
        <section className="py-12 text-white text-center">
          <Container maxWidth="lg">
            <h2 className="text-3xl font-bold text-[#fea434] mb-10">Our Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Skills Development",
                  desc: "Hands-on training in business, tech, and life skills.",
                },
                {
                  title: "Entrepreneurship Training",
                  desc: "Problem-solving, business models, and startup methods.",
                },
                {
                  title: "ICT Education",
                  desc: "Digital literacy and access to essential tech tools.",
                },
                {
                  title: "Innovation",
                  desc: "Exploring new ideas for modern challenges.",
                },
              ].map((item, idx) => (
                <div key={idx} className="text-left">
                  <h3 className="text-xl font-semibold text-[#fea434] mb-2">{item.title}</h3>
                  <p className="text-white text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </div>

      {/* ✅ No border, no wrapper */}
      <Footer />
    </div>
  );
};

export default Home;
