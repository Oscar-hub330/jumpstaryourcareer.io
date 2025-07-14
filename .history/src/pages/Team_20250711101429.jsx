import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from "@mui/material";

import PhelepheImg from "../assets/Phelephe.png";
import CeliweImg from "../assets/celiwe.jpeg";
import FortunateImg from "../assets/fortunate.jpeg";
import GoodnessImg from "../assets/goodness.jpeg";
import HlanyisekaImg from "../assets/hlayiseka.jpeg";
import InnocentImg from "../assets/innocent.jpeg";
import lesediImg from "../assets/lesedi.jpeg";
import MxolisiImg from "../assets/mxolisi.jpeg";
import NondumisoHRImg from "../assets/NondumisoHR.jpeg";
import NokuthulamImg from "../assets/nokuthulaM.jpeg";
import OscarImg from "../assets/oscar.jpeg";
import TshepisoImg from "../assets/tshepiso.jpeg";
import WandileImg from "../assets/wandile.jpeg";

// Executive Team
const leadership = [
  { name: "Pleasure", surname: "Phelephe", position: "Centre Manager", image: PhelepheImg },
  { name: "Hlayiseka", surname: "Mkhabela", position: "Program Manager", image: HlanyisekaImg },
  { name: "Goodness", surname: "Nkomo", position: "Project Manager", image: GoodnessImg },
  { name: "Lesedi", surname: "Ndlovu", position: "Finance Manager", image: lesediImg },
];

// Departments
const departments = [
  {
    title: "Communication",
    members: [
      { name: "Fortunate", surname: "Nkosi", position: "Communications Officer", image: FortunateImg },}
    ];
  
  const HR = [{
    title: "HR",
    members: [
      { name: "Innocent", surname: "Mathebula", position: "HR Specialist", image: InnocentImg },
      { name: "Nondumiso", surname: "Nkosi", position: "HR Specialist", image: NondumisoHRImg },
    ],
  },]
  
  {
    title: "Marketing",
    members: [
      { name: "Celiwe", surname: "Wadi", position: "Marketing Coordinator", image: CeliweImg },
      { name: "Bongile", surname: "Gama", position: "Marketing Coordinator", image: "/team/musa.png" },
    ],
  },
  {
    title: "ICT Team",
    members: [
      { name: "Wandile", surname: "Magagula", position: "Head of ICT Department", image: WandileImg },
      { name: "Nokuthula", surname: "Msimango", position: "Junior Developer", image: NokuthulamImg },
      { name: "Tshepiso", surname: "Makuoa", position: "Junior Developer", image: TshepisoImg },
      { name: "Oscar", surname: "Madalane", position: "Junior Developer", image: OscarImg },
      { name: "Mxolisi", surname: "Ndimande", position: "Junior Developer", image: MxolisiImg },
    ],
  },
];

const cardStyle = {
  border: "1px solid #e0e0e0",
  borderRadius: 2,
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
  },
};

const mediaStyle = {
  height: 220,
  objectFit: "cover",
  borderBottom: "4px solid #fea434",
};

const contentStyle = {
  textAlign: "center",
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: 2,
};

const Team = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #ffffff, #fef6ee)",
        py: 8,
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <Container maxWidth="lg">
        {/* Page Header */}
        <Box textAlign="center" mb={8}>
          <Typography variant="h4" fontWeight={700} color="#fea434" gutterBottom>
            Meet Our Team
          </Typography>
          <Typography variant="body1" color="#444" maxWidth="700px" mx="auto">
            Our professional team brings passion, strategy, and innovation to every project. Together,
            we drive impactful change in rural communities.
          </Typography>
        </Box>

        {/* Leadership Section */}
        <Box mb={6}>
          <Typography variant="h5" fontWeight={600} color="#fea434" mb={3}>
            Executive Leadership
          </Typography>
          <Grid container spacing={4}>
            {leadership.map((member, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Card sx={cardStyle}>
                  <CardMedia
                    component="img"
                    image={member.image}
                    alt={`${member.name} ${member.surname}`}
                    sx={mediaStyle}
                  />
                  <CardContent sx={contentStyle}>
                    <Typography variant="h6" color="#fea434" fontWeight={600}>
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

        <Divider sx={{ my: 6, borderColor: "#fea434" }} />

        {/* Department Teams */}
        {departments.map((dept, idx) => (
          <Box mb={6} key={idx}>
            <Typography variant="h5" fontWeight={600} color="#fea434" mb={3}>
              {dept.title}
            </Typography>
            <Grid container spacing={4}>
              {dept.members.map((member, i) => (
                <Grid item xs={12} sm={6} md={3} key={i}>
                  <Card sx={cardStyle}>
                    <CardMedia
                      component="img"
                      image={member.image}
                      alt={`${member.name} ${member.surname}`}
                      sx={mediaStyle}
                    />
                    <CardContent sx={contentStyle}>
                      <Typography variant="subtitle1" color="#fea434" fontWeight={600}>
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
