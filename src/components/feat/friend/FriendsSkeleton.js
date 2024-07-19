import * as React from "react";
import { Skeleton, Card, Stack } from "@mui/material";

export default function FriendsSkeleton() {
  return (
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
      ]}
    >
      <Skeleton
        variant="rectangular"
        width="100"
        height="100"
        alt=""
        sx={{
          borderRadius: 0.5,
          height: { xs: 200, sm: "100px" },
          width: { xs: "100%", sm: 100 },
          mr: { sm: 1.5 },
          mb: { xs: 1.5, sm: 0 },
        }}
      />
      <Stack sx={{ alignSelf: "center", ml: 2, width: 1 }}>
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem", flexGrow: 2 }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      </Stack>
    </Card>
  );
}
