import React from "react";
import {
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import JumpstartLogo from "../assets/jumpstart-logo.svg";
import ImageCarousel from "../components/ImageCarousel";

const Home = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="w-64">
      <List>
        {[
          { label: "Home", path: "/" },
          { label: "Projects", path: "/projects" },
          { label: "Contact", path: "/contact" },
          { label: "About", path: "/about" },
        ].map((item, index) => (
          <ListItem button key={index} onClick={() => { navigate(item.path); setMobileOpen(false); }}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </div>
  );

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

      {/* 🔳 Mobile Navigation */}
      <div className="absolute top-4 left-4 z-20 block md:hidden">
        <IconButton onClick={handleDrawerToggle} sx={{ backgroundColor: "#fea434", color: "white" }}>
          <MenuIcon />
        </IconButton>
      </div>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>

      <main className="relative z-10 flex flex-col items-center justify-center py-12 px-4 sm:px-6 md:px-10 xl:px-20 2xl:px-32">
        <Card className="w-full max-w-screen-xl bg-white/95 backdrop-blur-lg shadow-2xl rounded-3xl p-6 sm:p-10">
          <CardContent className="flex flex-col gap-16">

            {/* 🔶 Hero Section */}
            <section className="text-center">
              <img
                src={JumpstartLogo}
                alt="Jumpstart Logo"
                className="w-24 h-24 mb-6 mx-auto animate-bounce"
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
                  sx={{ backgroundColor: "#fea434", color: "white", px: 3, '&:hover': { backgroundColor: "#e69420" } }}
                  onClick={() => navigate("/projects")}
                >
                  Explore Projects
                </Button>
                <Button
                  variant="outlined"
                  sx={{ borderColor: "#fea434", color: "#fea434", px: 3, '&:hover': { borderColor: "#e69420", color: "#e69420" } }}
                  onClick={() => navigate("/contact")}
                >
                  Get Involved
                </Button>
              </div>
            </section>

            {/* 🔁 Carousel */}
            <section>
              <ImageCarousel />
            </section>

            {/* 🔷 About Section */}
            <section className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#fea434] mb-4">About Jumpstart</h2>
              <p className="text-gray-700 text-lg md:text-xl">
                Jumpstart is committed to equipping youth in rural areas with the skills,
                confidence, and digital knowledge to thrive in the modern world.
              </p>
              <div className="mt-6">
                <Button
                  variant="outlined"
                  sx={{ borderColor: "#fea434", color: "#fea434", px: 4, '&:hover': { borderColor: "#e69420", color: "#e69420" } }}
                  onClick={() => navigate("/about")}
                >
                  Learn More
                </Button>
              </div>
            </section>

            {/* 🔶 Focus Areas */}
            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-[#fea434] text-center mb-10">
                Our Focus Areas
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {["Skills Development", "Entrepreneurship Training", "ICT Education", "Innovation"].map((title, idx) => (
                  <div
                    key={idx}
                    className="border-2 border-[#fea434] bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300"
                  >
                    <h3 className="text-xl font-semibold text-[#fea434] mb-2">{title}</h3>
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

            {/* 🟦 Success Stories */}
            <section className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#fea434] mb-6">Success Stories</h2>
              <p className="text-gray-700 text-lg mb-6">See how Jumpstart has impacted lives:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {["Thabo from Limpopo started his tech business", "Nomsa became a software developer", "Sipho launched a local online store"].map((story, i) => (
                  <div key={i} className="bg-white border border-[#fea434] rounded-xl p-6 shadow hover:shadow-lg">
                    <p className="text-gray-800 text-sm">{story}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 🟧 Newsletter Signup */}
            <section className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#fea434] mb-4">Stay Connected</h2>
              <p className="text-gray-700 text-lg mb-6">Sign up for our newsletter to get the latest updates.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <TextField label="Email Address" variant="outlined" size="small" fullWidth sx={{ maxWidth: 400 }} />
                <Button variant="contained" sx={{ backgroundColor: "#fea434", '&:hover': { backgroundColor: "#e69420" } }}>
                  Subscribe
                </Button>
              </div>
            </section>

          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Home;
