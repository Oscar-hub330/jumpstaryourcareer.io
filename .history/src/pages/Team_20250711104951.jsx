import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
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

const departments = [
  {
    title: "Communication",
    members: [
      { name: "Fortunate", surname: "Nkosi", position: "Communications Officer", image: FortunateImg },
    ],
  },
  {
    title: "HR",
    members: [
      { name: "Innocent", surname: "Mathebula", position: "HR Specialist", image: InnocentImg },
      { name: "Nondumiso", surname: "Nkosi", position: "HR Specialist", image: NondumisoHRImg },
    ],
  },
  {
    title: "Finance",
    members: [
      { name: "Lesedi", surname: "Ndlovu", position: "Finance Manager", image: lesediImg },
    ],
  },
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
  borderTop: "6px solid #fea434",
  borderRadius: 2,
  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
  transition: "all 0.3s ease-in-out",
  height: "100%",
  minHeight: 360,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  "&:hover": {
    boxShadow: "0 6px 20px rgba(254, 164, 52, 0.2)",
    transform: "translateY(-4px)",
  },
};

const mediaStyle = {
  height: 180,
  objectFit: "cover",
  borderRadius: "4px",
};

const contentStyle = {
  textAlign: "center",
  p: 2,
};

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
        <Box textAlign="center" mb={7}>
          <Typography variant="h4" fontWeight="700" color="#fea434" gutterBottom>
            Meet Our Team
          </Typography>
          <Typography variant="body1" color="#444" maxWidth="700px" mx="auto">
            Passionate individuals leading innovation, operations, and growth in our communities.
          </Typography>
        </Box>

        {/* Leadership Section */}
        <Box mb={6}>
          <Typography variant="h5" fontWeight={600} mb={2} color="#fea434">
            Executive Leadership
          </Typography>
          <Grid container spacing={3}>
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

        {/* Departments Row: Communication, HR, Finance, Marketing */}
        <Box mb={6}>
          <Grid container spacing={3} alignItems="stretch">
            {departments.slice(0, 4).map((dept, deptIdx) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={deptIdx}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Card sx={cardStyle}>
                  <CardContent sx={{ pb: 0 }}>
                    <Typography
                      variant="h6"
                      fontWeight={600}
                      color="#fea434"
                      textAlign="center"
                      gutterBottom
                    >
                      {dept.title}
                    </Typography>
                  </CardContent>
                  <List dense sx={{ flexGrow: 1, overflowY: "auto" }}>
                    {dept.members.map((member, idx) => (
                      <ListItem key={idx} alignItems="flex-start" sx={{ px: 2 }}>
                        <ListItemAvatar>
                          <Avatar alt={`${member.name} ${member.surname}`} src={member.image} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography sx={{ color: "#fea434", fontWeight: 600 }}>
                              {member.name} {member.surname}
                            </Typography>
                          }
                          secondary={
                            <Typography variant="body2" color="text.secondary" fontStyle="italic">
                              {member.position}
                            </Typography>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ICT Department */}
        <Box mb={6}>
          <Typography variant="h5" fontWeight={600} mb={3} color="#fea434">
            ICT Department
          </Typography>
          <Grid container spacing={4}>
            {departments[4].members.map((member, idx) => (
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
