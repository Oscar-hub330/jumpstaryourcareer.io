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
import CeliweImg from "../assets/celiwe.jpeg";
import FortunateImg from "../assets/fortunate.jpeg";
import GoodnessImg from "../assets/goodness.jpeg";
import HlanyisekaImg from "../assets/hlayiseka.jpeg";
import InnocentImg from "../assets/innocent.jpeg";
import lesediImg from "../assets/lesedi.jpeg";
import MxolisiImg from "../assets/mxolisi.jpeg";
import NondumisoHRImg from "../assets/nondumisoHR.jpeg";
import NokuthulamImg from "../assets/nokuthulaM.jpeg";
import OscarImg from "../assets/oscar.jpeg";
import TshepisoImg from "../assets/tshepiso.jpeg";
import WandileImg from "../assets/wandile.jpeg";
import BongiweImg from "../assets/bongiwe.jpeg";

const leadership = [
  {
    name: "Pleasure",
    surname: "Phelephe",
    position: "Centre Manager",
    image: PhelepheImg,
  },
  {
    name: "Hlayiseka",
    surname: "Mkhabela",
    position: "Programme Manager",
    image: HlanyisekaImg,
  },
  {
    name: "Goodness",
    surname: "Nkomo",
    position: "Project Manager",
    image: GoodnessImg,
  },
];

const departments = {
  communication: [
    {
      name: "Fortunate",
      surname: "Nkosi",
      position: "Communications Officer",
      image: FortunateImg,
    },
  ],
  marketing: [
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
      image: BongiweImg,
    },
  ],
  hr: [
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
      image: NondumisoHRImg,
    },
  ],
  finance: [
    {
      name: "Lesedi",
      surname: "Ndlovu",
      position: "Finance",
      image: lesediImg,
    },
  ],
  technology: [
    {
      name: "Wandile",
      surname: "Magagula",
      position: "Head of Technology",
      image: WandileImg,
    },
    {
      name: "Nokuthula",
      surname: "Msimango",
      position: "Technology Specialist",
      image: NokuthulamImg,
    },
    {
      name: "Tshepiso",
      surname: "Makuoa",
      position: "Technology Specialist",
      image: TshepisoImg,
    },
    {
      name: "Oscar",
      surname: "Madalane",
      position: "Technology Specialist",
      image: OscarImg,
    },
    {
      name: "Mxolisi",
      surname: "Ndimande",
      position: "Technology Specialist",
      image: MxolisiImg,
    },
  ],
};

const cardStyle = {
  border: "1px solid #e0e0e0",
  borderTop: "6px solid #fea434",
  borderRadius: 2,
  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
  transition: "all 0.3s ease-in-out",
  height: 320,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  "&:hover": {
    boxShadow: "0 6px 20px rgba(254, 164, 52, 0.2)",
    transform: "translateY(-4px)",
  },
};

const mediaStyle = {
  height: 180,
  objectFit: "cover",
  borderRadius: 1,
};

const contentStyle = {
  textAlign: "center",
  p: 2,
  flexGrow: 1,
};

const renderDepartment = (title, members) => (
  <Box>
    <Typography variant="h6" fontWeight={600} color="#fea434" textAlign="center" mb={2}>
      {title}
    </Typography>
    <Grid container spacing={2} direction="column">
      {members.map((member, idx) => (
        <Grid item key={idx}>
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
);

const Team = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #ffffff, #fef6ee)",
        py: 5,
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={7}>
          <Typography variant="h4" fontWeight="700" color="#fea434" gutterBottom>
            Meet Our Team
          </Typography>
          <Typography variant="body1" color="#444" maxWidth="700px" mx="auto">
            Passionate individuals leading operations, innovation, and creating sustainable livelihoods.
          </Typography>
        </Box>

        {/* Management Section */}
        <Box mb={6}>
          <Typography variant="h5" fontWeight={600} mb={3} color="#fea434" textAlign="center">
            Management
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {leadership.map((member, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
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

        {/* Horizontal Row: Communication | Marketing + HR | Finance */}
        <Box mb={6}>
          <Typography variant="h5" fontWeight={600} mb={3} color="#fea434" textAlign="center">
            Departments
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={3}>
              {renderDepartment("Communication", departments.communication)}
            </Grid>
            <Grid item xs={12} md={3}>
              {renderDepartment("Marketing", departments.marketing)}
              {renderDepartment("HR", departments.hr)}
            </Grid>
            <Grid item xs={12} md={3}>
              {renderDepartment("Finance", departments.finance)}
            </Grid>
          </Grid>
        </Box>

        {/* ICT Department */}
        <Box mb={6}>
          <Typography variant="h5" fontWeight={600} mb={3} color="#fea434">
            Technology Team
          </Typography>
          <Grid container spacing={4}>
            {departments.technology.map((member, idx) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
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
      </Container>
    </Box>
  );
};

export default Team;
