import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Stack,
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

const departmentsSummary = [
  {
    title: "Communication",
    members: [
      { name: "Fortunate Nkosi", image: FortunateImg },
    ],
  },
  {
    title: "HR",
    members: [
      { name: "Innocent Mathebula", image: InnocentImg },
      { name: "Nondumiso Nkosi", image: NondumisoHRImg },
    ],
  },
  {
    title: "Finance",
    members: [
      { name: "Lesedi Ndlovu", image: lesediImg },
    ],
  },
  {
    title: "Marketing",
    members: [
      { name: "Celiwe Wadi", image: CeliweImg },
      { name: "Bongile Gama", image: BongiweImg },
    ],
  },
];

const cardStyle = {
  border: "1px solid #e0e0e0",
  borderTop: "6px solid #fea434",
  borderRadius: 2,
  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
  height: "100%",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    boxShadow: "0 6px 20px rgba(254, 164, 52, 0.2)",
    transform: "translateY(-4px)",
  },
};

const DepartmentCard = ({ title, members }) => (
  <Card sx={cardStyle}>
    <CardContent sx={{ textAlign: "center" }}>
      <Typography variant="h6" color="#fea434" fontWeight={600} gutterBottom>
        {title}
      </Typography>
      <Stack spacing={1} alignItems="center">
        {members.map((member, idx) => (
          <Stack key={idx} direction="row" spacing={1} alignItems="center">
            <Avatar
              src={member.image}
              alt={member.name}
              sx={{ width: 32, height: 32 }}
            />
            <Typography variant="body2">{member.name}</Typography>
          </Stack>
        ))}
      </Stack>
    </CardContent>
  </Card>
);

const TeamDepartmentsRow = () => {
  return (
    <Box sx={{ py: 5 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          fontWeight={600}
          mb={4}
          color="#fea434"
          textAlign="center"
        >
          Department Overview
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {departmentsSummary.map((dept, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <DepartmentCard title={dept.title} members={dept.members} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TeamDepartmentsRow;
