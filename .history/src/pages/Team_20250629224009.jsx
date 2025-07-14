import React from "react";
import { Container, Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";
import Footer from "../components/Footer";

const teamMembers = [
  {
    name: "Pleasure",
    surname: "Phelephe",
    position: "Centre Manager",
    image: "/src/assets/phelephe.png",
  },
  {
    name: "Thabo",
    surname: "Molefe",
    position: "Program Manager",
    image: "/src/assets/thabo.jpg",
  },
  {
    name: "Naledi",
    surname: "Mokoena",
    position: "Communications Officer",
    image: "/src/assets/naledi.jpg",
  },
  // Add more team members as needed
];

const Team = () => {
  return (
    <div className="bg-white min-h-screen py-12">
      <Container>
        <Typography
          variant="h3"
          className="text-center text-[#fea434] font-bold mb-10"
        >
          Meet Our Team
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card
                sx={{
                  border: "2px solid #fea434",
                  borderRadius: 3,
                  boxShadow: 3,
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  image={member.image}
                  alt={`${member.name} ${member.surname}`}
                  sx={{
                    height: 220,
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
                <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    sx={{ color: "#fea434", fontWeight: 600 }}
                  >
                    {member.name} {member.surname}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.position}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Team;
