import React, { useState, useEffect, useRef } from "react";
import { Stack, Typography, Box } from "@mui/material";
import {
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import Pagination from "components/base/Pagination";
import FriendList from "components/feat/friend/FriendList";
import FriendModal from "components/feat/friend/FriendModal";

import { getFriends } from "api/friends";

const Friends = () => {
  const [page, setPage] = useState(1);

  const queryClient = useQueryClient();

  const friendModal = useRef(null);

  const maxPage = 500;

  const fetchFriends = async (page) => {
    const { data } = await getFriends({ page, total: 27 });
    return data.results;
  };

  const { status, data, error, isPreviousData, isLoading } =
    useQuery({
      queryKey: ["friends", page],
      queryFn: () => fetchFriends(page),
      keepPreviousData: true,
      staleTime: 5000,
    });

  useEffect(() => {
    if (!isPreviousData && data?.hasMore) {
      queryClient.prefetchQuery({
        queryKey: ["friends", page + 1],
        queryFn: () => fetchFriends(page + 1),
      });
    }

    console.log(data);
  }, [data, isPreviousData, page, queryClient]);

  const handlePage = async (value) => {
    setPage(value);
  };

  // if (error) return "An error has occurred: " + error.message;

  return (
    <Box
      sx={{
        py: 4,
        px: { xl: 25 },
        background: "#44a1ff",
        minHeight: "100vh",
      }}
    >
      <Stack spacing={3}>
        <Typography variant="h4" align="center" sx={{ fontWeight: "bold" }}>
          Friends
        </Typography>
        <FriendList
          data={data}
          onClick={(v) => friendModal.current(v)}
          error={error}
          status={status}
        />
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
