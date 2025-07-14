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

// --- Team Member Images ---
import PhelepheImg from "../assets/Phelephe.png";
import CeliweImg from "../assets/celiwe.jpeg";
import FortunateImg from "../assets/fortunate.jpeg";
import GoodnessImg from "../assets/goodness.jpeg";
import HlanyisekaImg from "../assets/hlayiseka.jpeg";
import InnocentImg from "../assets/innocent.jpeg";
import lesediImg from "../assets/lesedi.jpeg";
import MxolisiImg from "../assets/mxolisi.jpeg";
import NondumisoImg from "../assets/nondumiso.jpeg";
import NokuthulaImg from "../assets/nokuthula.jpeg";
import OscarImg from "../assets/oscar.jpeg";
import TshepisoImg from "../assets/tshepiso.jpeg";
import WandileImg from "../assets/wandile.jpeg";

// --- Top-Level Leadership ---
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
    image: HlanyisekaImg,
  },
  {
    name: "Goodness",
    surname: "Nkomo",
    position: "Project Manager",
    image: GoodnessImg,
  },
  {
    name: "Lesedi",
    surname: "Ndlovu",
    position: "Finance Manager",
    image: lesediImg,
  },
];

// --- Department Teams (split into separate arrays) ---
const communicationTeam = [
  {
    name: "Fortunate",
    surname: "Nkosi",
    position: "Communications Officer",
    image: FortunateImg,
  },
];

const hrTeam = [
  {
    name: "Innocent",
    surname: "Mathebula",
    position: "HR Specialist",
    image: InnocentImg,
  },
  {
    name: "Nondumiso",
    surname: "Nkosi",
    position: "HR Specialist",
    image: NondumisoImg,
  },
];

const marketingTeam = [
  {
    name: "Celiwe",
    surname: "Wadi",
    position: "Marketing Coordinator",
    image: CeliweImg,
  },
  {
    name: "Bongile",
    surname: "Gama",
    position: "Marketing Coordinator",
    image: "/team/musa.png", // Ensure this path is valid relative to your project
  },
];

const ictTeam = [
  {
    name: "Wandile",
    surname: "Magagula",
    position: "Head of ICT Department",
    image: WandileImg,
  },
  {
    name: "Nokuthula",
    surname: "Msimango",
    position: "Junior Developer",
    image: NokuthulaImg,
  },
  {
    name: "Tshepiso",
    surname: "Makuoa",
    position: "Junior Developer",
    image: TshepisoImg,
  },
  {
    name: "Oscar",
    surname: "Madalane",
    position: "Junior Developer",
    image: OscarImg,
  },
  {
    name: "Mxolisi",
    surname: "Ndimande",
    position: "Junior Developer",
    image: MxolisiImg,
  },
];

// --- Departments (grouped for rendering) ---
const departments = [
  { title: "Communication", members: communicationTeam },
  { title: "HR", members: hrTeam },
  { title: "Marketing", members: marketingTeam },
  { title: "ICT Team", members: ictTeam },
];

// --- Card Styles ---
const cardStyle = {
  border: "1px solid #e0e0e0",
  borderTop: "6px solid #fea434",
  borderRadius: 2,
  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
  transition: "all 0.3s ease-in-out",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  "&:hover": {
    boxShadow: "0 6px 20px rgba(254, 164, 52, 0.2)",
    transform: "translateY(-4px)",
  },
};

const mediaStyle = {
  height: 200,
  objectFit: "cover",
};

const contentStyle = {
  textAlign: "center",
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  p: 2,
};

// --- Component ---
const Team = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #ffffff, #fef6ee)",
        py: 8,
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={8}>
          <Typography variant="h4" fontWeight="700" color="#fea434" gutterBottom>
            Meet Our Team
          </Typography>
          <Typography variant="body1" color="#444" maxWidth="700px" mx="auto">
            Passionate individuals leading innovation, operations, and growth in our communities.
          </Typography>
        </Box>

        {/* Leadership Section */}
        <Box mb={6}>
          <Typography variant="h5" fontWeight={600} mb={3} color="#fea434">
            Leadership Team
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {topManagers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card sx={cardStyle}>
                  <CardMedia
                    component="img"
                    image={member.image}
                    alt={`${member.name} ${member.surname}`}
                    sx={mediaStyle}
                  />
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

        {/* Department Sections */}
        {departments.map((dept, idx) => (
          <Box key={idx} mb={6}>
            <Typography variant="h5" fontWeight={600} mb={3} color="#fea434">
              {dept.title}
            </Typography>
            <Grid container spacing={4}>
              {dept.members.map((member, i) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                  <Card sx={cardStyle}>
                    <CardMedia
                      component="img"
                      image={member.image}
                      alt={`${member.name} ${member.surname}`}
                      sx={mediaStyle}
                    />
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
