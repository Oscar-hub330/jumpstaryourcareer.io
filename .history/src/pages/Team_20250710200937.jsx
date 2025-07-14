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

// Split top managers and other roles
const topManagers = [
  {
    name: "Pleasure",
    surname: "Phelephe",
    position: "Centre Manager",
    image: "/team/phelephe.png",
  },
  {
    name: "Hlayiseka",
    surname: "Makhubela",
    position: "Program Manager",
    image: "/team/hlayiseka.png",
  },
  {
    name: "Thandi",
    surname: "Nkosi",
    position: "Finance Lead",
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
        name: "Sibongile",
        surname: "Mthembu",
        position: "HR Specialist",
        image: "/team/sibongile.png",
      },
    ],
  },
  {
    category: "Marketing",
    members: [
      {
        name: "Musa",
        surname: "Khumalo",
        position: "Marketing Coordinator",
        image: "/team/musa.png",
      },
    ],
  },
  {
    category: "ICT Team",
    members: [
      {
        name: "Oscar",
        surname: "Madalane",
        position: "Lead Developer",
        image: "/team/oscar.png",
      },
      {
        name: "Lebo",
        surname: "Ndlovu",
        position: "Junior Developer",
        image: "/team/lebo.png",
      },
    ],
  },
];

const Team = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #fff, #fef6ee)",
        py: 8,
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        {/* Page Title */}
        <Box textAlign="center" mb={8}>
          <Typography variant="h3" fontWeight="bold" color="#fea434" mb={2}>
            Meet Our Team
          </Typography>
          <Typography variant="body1" color="#555" maxWidth="700px" mx="auto">
            Passionate individuals leading innovation, operations, and growth in our communities.
          </Typography>
        </Box>

        {/* Managers Section (Single Horizontal Grid) */}
        <Box mb={6}>
          <Typography
            variant="h5"
            fontWeight="bold"
            mb={3}
            sx={{ color: "#01019D" }}
          >
            Leadership Team
          </Typography>
          <Grid container spacing={4}>
            {topManagers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    border: "2px solid #fea434",
                    borderRadius: 3,
                    boxShadow: 3,
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={member.image}
                    alt={`${member.name} ${member.surname}`}
                    sx={{ height: 220, objectFit: "cover" }}
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

        {/* Other Roles (Grouped Sections) */}
        {groupedRoles.map((group, idx) => (
          <Box key={idx} mb={6}>
            <Typography
              variant="h5"
              fontWeight="bold"
              mb={3}
              sx={{ color: "#01019D" }}
            >
              {group.category}
            </Typography>
            <Grid container spacing={4}>
              {group.members.map((member, i) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                  <Card
                    sx={{
                      border: "2px solid #fea434",
                      borderRadius: 3,
                      boxShadow: 3,
                      overflow: "hidden",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={member.image}
                      alt={`${member.name} ${member.surname}`}
                      sx={{ height: 220, objectFit: "cover" }}
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
        ))}
      </Container>
    </Box>
  );
};

export default Team;
