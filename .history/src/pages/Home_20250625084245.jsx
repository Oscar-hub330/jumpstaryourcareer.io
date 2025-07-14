import React from "react";
import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import JumpstartLogo from "../assets/jumpstart-logo.svg";
import ImageCarousel from "../components/ImageCarousel";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative text-black flex flex-col min-h-screen w-full overflow-x-hidden overflow-y-visible">

      {/* 🔲 Background Image with Blur */}
      <div
        className="absolute inset-0 z-0 filter blur-sm scale-105"
        style={{
          backgroundImage: `url('/src/assets/car.svg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>

      {/* 🔳 Page Content */}
      <div className="relative z-10 flex-grow flex flex-col">
        {/* 🔶 HERO SECTION */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 pb-8">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl px-6 sm:px-10 py-10 text-center max-w-2xl w-full shadow-lg">
            <img
              src={JumpstartLogo}
              alt="Jumpstart Logo"
              className="mx-auto w-20 h-20 sm:w-24 sm:h-24 mb-6 animate-bounce"
            />
            <h1 className="text-3xl sm:text-4xl font-bold text-[#fea434] mb-4 leading-tight">
              Empowering Rural Youth
            </h1>
            <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
              Through skills development, entrepreneurship training, and ICT education.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
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

        {/* 🔁 IMAGE CAROUSEL */}
        <div className="px-4 sm:px-6 md:px-10 max-w-screen-xl mx-auto w-full mt-4">
          <ImageCarousel />
        </div>

        {/* 🔷 ABOUT SECTION */}
        <section className="px-4 sm:px-6 md:px-10 py-10">
          <div className="max-w-screen-lg mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-xl px-6 sm:px-10 py-10">
            <Container maxWidth="md" className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#fea434] mb-4">About Jumpstart</h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
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
          </div>
        </section>

        {/* 🔶 FOCUS AREA SECTION */}
        <section className="px-4 sm:px-6 md:px-10 py-10">
          <div className="max-w-screen-xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-xl px-6 sm:px-10 py-12">
            <Container maxWidth="lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#fea434] text-center mb-10">
                Our Focus Areas
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  {
                    title: "Innovation",
                    desc: "Driving creative solutions through emerging technologies and thinking.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="border-2 border-[#fea434] rounded-2xl p-6 shadow-md bg-white hover:shadow-lg transition-all duration-200"
                  >
                    <h3 className="text-xl font-semibold text-[#fea434] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Container>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
