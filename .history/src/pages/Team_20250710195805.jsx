import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";

const teamData = {
  "Center Manager": [
    {
      name: "Nokwanda Mthembu",
      role: "Center Manager",
      photo: "/team/nokwanda.jpg",
    },
  ],
  "Project Manager": [
    {
      name: "Thabo Dlamini",
      role: "Project Manager",
      photo: "/team/thabo.jpg",
    },
  ],
  "Finance Manager": [
    {
      name: "Zanele Nkosi",
      role: "Finance Manager",
      photo: "/team/zanele.jpg",
    },
  ],
  "ICT Team": [
    {
      name: "Oscar Madalane",
      role: "Lead Developer",
      photo: "/team/oscar.jpg",
    },
    {
      name: "Lebo Ndlovu",
      role: "Junior Developer",
      photo: "/team/lebo.jpg",
    },
  ],
  Communication: [
    {
      name: "Ayanda Mkhize",
      role: "Comms Officer",
      photo: "/team/ayanda.jpg",
    },
  ],
  HR: [
    {
      name: "Sibongile Nene",
      role: "HR Coordinator",
      photo: "/team/sibongile.jpg",
    },
  ],
  Marketing: [
    {
      name: "Musa Khumalo",
      role: "Marketing Lead",
      photo: "/team/musa.jpg",
    },
  ],
};

const Team = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom right, #fff, #fef6ee)",
        py: 8,
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography variant="h3" fontWeight="bold" color="#fea434" mb={2}>
            Meet Our Team
          </Typography>
          <Typography variant="body1" color="#555" maxWidth="700px" mx="auto">
            Passionate individuals driving impact in technology, education, and
            community development.
          </Typography>
        </Box>

        {Object.entries(teamData).map(([category, members], idx) => (
          <Box key={category} mb={6}>
            <Typography
              variant="h5"
              fontWeight="bold"
              color="primary"
              mb={3}
              sx={{ color: "#01019D" }}
            >
              {category}
            </Typography>
            <Grid container spacing={4}>
              {members.map((member, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <Card
                    sx={{
                      borderRadius: 4,
                      textAlign: "center",
                      boxShadow: 3,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        boxShadow: 6,
                        transform: "translateY(-5px)",
                      },
                    }}
                  >
                    <Box pt={3}>
                      <Avatar
                        src={member.photo}
                        alt={member.name}
                        sx={{
                          width: 100,
                          height: 100,
                          mx: "auto",
                          mb: 2,
                          border: "4px solid #fea434",
                        }}
                      />
                    </Box>
                    <CardContent>
                      <Typography fontWeight="bold" fontSize="1.1rem">
                        {member.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        fontStyle="italic"
                      >
                        {member.role}
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
