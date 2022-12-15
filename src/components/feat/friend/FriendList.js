import React from "react";

import { Box, Card, Grid, CardMedia, Typography } from "@mui/material";
import FriendsSkeleton from "./FriendsSkeleton";

const FriendList = ({ data, status, error, onClick }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {status === "loading" ? (
          Array.from({ length: 24 }).map((it, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <FriendsSkeleton />
            </Grid>
          ))
        ) : status === "error" ? (
          <div>Error: {error.message}</div>
        ) : (
          data.map((value, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <Card
                variant="outlined"
                sx={[
                  {
                    display: { sm: "flex" },
                    p: 1,
                    flexDirection: {
                      xs: "column", // mobile
                      sm: "row", // tablet and up
                    },
                  },
                  (theme) => ({
                    "&:hover": {
                      background: "#c9dff4",
                    },
                  }),
                ]}
                onClick={() => onClick(value)}
              >
                <CardMedia
                  component="img"
                  width="100"
                  height="100"
                  alt=""
                  src={value.picture.large}
                  sx={{
                    borderRadius: 0.5,
                    height: { xs: 200, sm: "100px" },
                    width: { xs: "100%", sm: 100 },
                    mr: { sm: 1.5 },
                    mb: { xs: 1.5, sm: 0 },
                  }}
                />
                <Box sx={{ alignSelf: "center", ml: 2 }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {value.name.first} {value.name.last}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.email}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.phone}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default FriendList;
