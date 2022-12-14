import React from "react";
import { Stack, Typography, Paper } from "@mui/material";

import Login from "components/page/Login";

import background from "./background.svg";

const main = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundSize: "cover",
        alignItems: "center",
        backgroundImage: `url(${background})`,
      }}
    >
      <Paper sx={{ p: 2, mb: 14.5 }}>
        <Stack spacing={3} sx={{ width: "360px" }}>
          <Stack direction="row" justifyContent="center">
            <Stack sx={{ width: 200 }}></Stack>
          </Stack>
          <Typography variant="h4" align="center" sx={{ fontWeight: "bold" }}>
            Login
          </Typography>
          <Login />
        </Stack>
      </Paper>
    </Stack>
  );
};

export default main;
