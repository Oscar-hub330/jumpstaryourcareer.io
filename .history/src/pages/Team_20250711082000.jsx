import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import PhelepheImg from "../assets/Phelephe.png";

const topManagers = [
  {
    name: "Pleasure",
    surname: "Phelephe",
    position: "Centre Manager",
    image: PhelepheImg,
  },
  {
    name: "Hlayiseka",
    surname: "Mkhabela",
    position: "Program Manager",
    image: "/team/hlayiseka.png",
  },
  {
    name: "Goodness",
    surname: "Nkomo",
    position: "Project Manager",
    image: "/team/thandi.png",
  },
];

const groupedRoles = [
  {
    category: "Communication",
    members: [
      {
        name: "Fortunate",
        surname: "Nkosi",
        position: "Communications Officer",
        image: "/team/fortunate.png",
      },
    ],
  },
  {
    category: "HR",
    members: [
      {
        name: "Innocent",
        surname: "Mathebula",
        position: "HR Specialist",
        image: "/team/sibongile.png",
      },
      {
        name: "Nondumiso",
        surname: "Nkosi",
        position: "HR Specialist",
        image: "/team/sibongile.png",
      },
    ],
  },
  {
    category: "Marketing",
    members: [
      {
        name: "Celiwe",
        surname: "Wadi",
        position: "Marketing Coordinator",
        image: "/team/musa.png",
      },
      {
        name: "Bongile",
        surname: "Gama",
        position: "Marketing Coordinator",
        image: "/team/musa.png",
      },
    ],
  },
  {
    category: "ICT Team",
    members: [
      {
        name: "Wandile",
        surname: "Magagula",
        position: "Head of ICT Department",
        image: "/team/oscar.png",
      },
      {
        name: "Nokuthula",
        surname: "Msimango",
        position: "Junior Developer",
        image: "/team/musa.png",
      },
      {
        name: "Tshepiso",
        surname: "Makuoa",
        position: "Junior Developer",
        image: "/team/musa.png",
      },
      {
        name: "Oscar",
        surname: "Madalane",
        position: "Junior Developer",
        image: "/team/musa.png",
      },
      {
        name: "Mxolisi",
        surname: "Ndimande",
        position: "Junior Developer",
        image: "/team/lebo.png",
      },
    ],
  },
];

const cardStyle = {
  border: "1px solid #e0e0e0",
  borderTop: "6px solid #fea434",
  borderRadius: 2,
  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
  transition: "all 0.3s ease-in-out",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  "&:hover": {
    boxShadow: "0 6px 20px rgba(254, 164, 52, 0.2)",
    transform: "translateY(-4px)",
  },
};

const Team = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #fff, #fef6ee)",
        py: 8,
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography variant="h4" fontWeight="700" color="#fea434" gutterBottom>
            Meet Our Team
          </Typography>
          <Typography variant="body1" color="#444" maxWidth="700px" mx="auto">
            Passionate individuals leading innovation, operations, and growth in our communities.
          </Typography>
        </Box>

        {/* Leadership Team */}
        <Box mb={6}>
          <Typography
            variant="h5"
            fontWeight={600}
            mb={3}
            sx={{ color: "#fea434" }}
          >
            Leadership Team
          </Typography>
          <Grid container spacing={4}>
            {topManagers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={cardStyle}>
                  <CardMedia
                    component="img"
                    image={member.image}
                    alt={`${member.name} ${member.surname}`}
                    sx={{
                      height: 200,
                      objectFit: "cover",
                    }}
                  />
                  <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{ color: "#fea434", fontWeight: 600 }}
                    >
                      {member.name} {member.surname}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontStyle="italic"
                    >
                      {member.position}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Other Categories */}
        {groupedRoles.map((group, idx) => (
          <Box key={idx} mb={6}>
            <Typography
              variant="h5"
              fontWeight={600}
              mb={3}
              sx={{ color: "#fea434" }}
            >
              {group.category}
            </Typography>
            <Grid container spacing={4}>
              {group.members.map((member, i) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                  <Card sx={cardStyle}>
                    <CardMedia
                      component="img"
                      image={member.image}
                      alt={`${member.name} ${member.surname}`}
                      sx={{
                        height: 200,
                        objectFit: "cover",
                      }}
                    />
                    <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#fea434", fontWeight: 600 }}
                      >
                        {member.name} {member.surname}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        fontStyle="italic"
                      >
                        {member.position}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Team;
