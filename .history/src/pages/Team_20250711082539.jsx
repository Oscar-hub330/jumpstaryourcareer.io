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

// Leadership Team
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

// Department Teams
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
  borderTop: "5px solid #fea434",
  borderRadius: 2,
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  transition: "all 0.3s ease-in-out",
  height: "320px",
  display: "flex",
  flexDirection: "column",
  "&:hover": {
    boxShadow: "0 6px 20px rgba(254, 164, 52, 0.15)",
    transform: "translateY(-4px)",
  },
};

const mediaStyle = {
  height: 140,
  objectFit: "cover",
};

const contentStyle = {
  textAlign: "center",
  px: 2,
  pt: 1,
  pb: 2,
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const Team = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #ffffff, #fef6ee)",
        py: 6,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" fontWeight="700" color="#fea434" gutterBottom>
            Meet Our Team
          </Typography>
          <Typography variant="body1" color="#444" maxWidth="700px" mx="auto">
            Passionate individuals leading innovation, operations, and growth in our communities.
          </Typography>
        </Box>

        {/* Leadership Section */}
        <Box mb={5}>
          <Typography variant="h5" fontWeight={600} mb={2} color="#fea434">
            Leadership Team
          </Typography>
          <Grid container spacing={3}>
            {topManagers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card sx={cardStyle}>
                  <CardMedia component="img" image={member.image} alt={`${member.name}`} sx={mediaStyle} />
                  <CardContent sx={contentStyle}>
                    <Typography variant="h6" sx={{ color: "#fea434", fontWeight: 600 }}>
                      {member.name} {member.surname}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontStyle="italic">
                      {member.position}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Grouped Departments */}
        {groupedRoles.map((group, idx) => (
          <Box key={idx} mb={5}>
            <Typography variant="h5" fontWeight={600} mb={2} color="#fea434">
              {group.category}
            </Typography>
            <Grid container spacing={3}>
              {group.members.map((member, i) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                  <Card sx={cardStyle}>
                    <CardMedia component="img" image={member.image} alt={member.name} sx={mediaStyle} />
                    <CardContent sx={contentStyle}>
                      <Typography variant="subtitle1" sx={{ color: "#fea434", fontWeight: 600 }}>
                        {member.name} {member.surname}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" fontStyle="italic">
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
