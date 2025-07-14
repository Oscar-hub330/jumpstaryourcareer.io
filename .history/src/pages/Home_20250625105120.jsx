import React from "react";
import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import JumpstartLogo from "../assets/jumpstart-logo.svg";
import ImageCarousel from "../components/ImageCarousel";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative text-black flex flex-col min-h-screen w-full overflow-hidden">
      {/* 🔲 Hero Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/car.svg"
          alt="Background"
          className="w-full h-full object-cover blur-sm scale-105"
        />
      </div>

      <main className="relative z-10 flex flex-col gap-16 py-12 px-4 sm:px-6 md:px-10 xl:px-20 2xl:px-32">
        {/* 🔶 Hero Section */}
        <section className="flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-xl">
          <img
            src={JumpstartLogo}
            alt="Jumpstart Logo"
            className="w-24 h-24 mb-6 animate-bounce"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#fea434] mb-4 leading-tight">
            Empowering Rural Youth
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-6">
            Through skills development, entrepreneurship training, and ICT education.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
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
        </section>

        {/* 🔁 Carousel */}
        <section className="max-w-screen-xl mx-auto w-full px-2 md:px-4">
          <ImageCarousel />
        </section>

        {/* 🔷 About Section */}
        <section className="w-full max-w-5xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-xl px-6 md:px-10 py-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#fea434] mb-4">About Jumpstart</h2>
          <p className="text-gray-700 text-lg md:text-xl">
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
        </section>

        {/* 🔶 Focus Area Section */}
        <section className="w-full max-w-screen-xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-xl px-4 sm:px-6 md:px-10 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#fea434] text-center mb-10">
            Our Focus Areas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {["Skills Development", "Entrepreneurship Training", "ICT Education", "Innovation"].map((title, idx) => (
              <div
                key={idx}
                className="border-2 border-[#fea434] bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold text-[#fea434] mb-2">
                  {title}
                </h3>
                <p className="text-gray-700 text-sm">
                  {title === "Skills Development"
                    ? "Empowering youth with hands-on training in business, tech, and life skills."
                    : title === "Entrepreneurship Training"
                    ? "Teaching problem-solving, business models, and startup methods."
                    : title === "ICT Education"
                    ? "Providing digital literacy and access to essential tech tools."
                    : "Driving creative solutions through emerging technologies and thinking."}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
