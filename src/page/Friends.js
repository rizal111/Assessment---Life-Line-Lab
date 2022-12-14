import React, { useState, useEffect, useRef } from "react";
import { Stack, Typography, Box } from "@mui/material";

import Pagination from "components/base/Pagination";
import FriendList from "components/feat/friend/FriendList";
import FriendModal from "components/feat/friend/FriendModal";

import { getFriends } from "api/friends";

const Friends = () => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [friends, setFriends] = useState([]);

  const friendModal = useRef(null);

  const maxPage = 500;

  const fetchFriends = async (page) => {
    await getFriends({ page, total: 25 }).then((data) =>
      setFriends(data.data.results)
    );
  };

  useEffect(() => {
    fetchFriends();
    return () => {};
  }, []);

  const handlePage = async (value) => {
    console.log(value);
    setIsLoading(true);
    setPage(value);
    await fetchFriends(value);
    setIsLoading(false);
  };

  return (
    <Box
      sx={{
        py: 4,
        px: { xl: 25 },
        background: "#44a1ff",
      }}
    >
      <Stack spacing={3}>
        <Typography variant="h4" align="center" sx={{ fontWeight: "bold" }}>
          Friends
        </Typography>
        <FriendList data={friends} onClick={(v) => friendModal.current(v)} />
        <Pagination
          page={page}
          count={maxPage}
          onChange={(event, v) => handlePage(v)}
          onSubmit={(v) => handlePage(v)}
          disabled={isLoading}
        />
      </Stack>
      <FriendModal openThis={friendModal} />
    </Box>
  );
};

export default Friends;
