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
import NondumisoHRImg from "../assets/nondumiso.jpeg";
import NokuthulamImg from "../assets/nokuthula.jpeg";
import OscarImg from "../assets/oscar.jpeg";
import TshepisoImg from "../assets/tshepiso.jpeg";
import WandileImg from "../assets/wandile.jpeg";

// Leadership
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
 
];

// All Departments
const departments = [
  {
    title: "Communication",
    members: [
      {
        name: "Fortunate",
        surname: "Nkosi",
        position: "Communications Officer",
        image: FortunateImg,
      },
    ],
  },
  {
    title: "HR",
    members: [
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
  },
  {
    title: "Finance",
    members: [
      {
        name: "Lesedi",
        surname: "Ndlovu",
        position: "Finance Manager",
        image: lesediImg,
      },
    ],
  },
  {
    title: "Marketing",
    members: [
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
        image: "/team/musa.png",
      },
    ],
  },
  {
    title: "ICT Team",
    members: [
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
        image: NokuthulamImg,
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
    ],
  },
];

const cardStyle = {
  border: "1px solid #e0e0e0",
  borderTop: "6px solid #fea434",
  borderRadius: 2,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
  transition: "all 0.3s ease-in-out",
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
  p: 2,
};

const Team = () => {
  return (
    <Box sx={{ background: "linear-gradient(to bottom, #ffffff, #fef6ee)", py: 8 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={8}>
          <Typography variant="h4" fontWeight={700} color="#fea434" gutterBottom>
            Meet Our Team
          </Typography>
          <Typography variant="body1" color="#444" maxWidth="700px" mx="auto">
            Passionate individuals leading innovation, operations, and growth in our communities.
          </Typography>
        </Box>

        {/* Executive Leadership */}
        <Box mb={6}>
          <Typography variant="h5" fontWeight={600} mb={3} color="#fea434">
            Executive Leadership
          </Typography>
          <Grid container spacing={4}>
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

        {/* Row of Communication, HR, Finance, Marketing */}
        <Grid container spacing={4} mb={6}>
          {departments.slice(0, 4).map((dept, deptIdx) => (
            <Grid item xs={12} sm={6} md={3} key={deptIdx}>
              <Box>
                <Typography
                  variant="h5"
                  fontWeight={600}
                  mb={2}
                  color="#fea434"
                  textAlign="center"
                >
                  {dept.title}
                </Typography>
                <Grid container spacing={2}>
                  {dept.members.map((member, memIdx) => (
                    <Grid item xs={12} key={memIdx}>
                      <Card sx={cardStyle}>
                        <CardMedia
                          component="img"
                          image={member.image}
                          alt={`${member.name} ${member.surname}`}
                          sx={mediaStyle}
                        />
                        <CardContent sx={contentStyle}>
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
            </Grid>
          ))}
        </Grid>

        {/* ICT Department Full Width */}
        <Box mb={6}>
          <Typography variant="h5" fontWeight={600} mb={3} color="#fea434">
            ICT Team
          </Typography>
          <Grid container spacing={4}>
            {departments[4].members.map((member, i) => (
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
      </Container>
    </Box>
  );
};

export default Team;
