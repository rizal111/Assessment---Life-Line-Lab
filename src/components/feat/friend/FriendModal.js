import { useState, useEffect } from "react";
import dayjs from "dayjs";

import { Box, Button, CardMedia, Modal, Typography } from "@mui/material";
import { Stack } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 300, sm: 450 },
  bgcolor: "background.paper",
  borderRadius: "16px",
  boxShadow: 24,

  p: 2,
};

const FriendModal = ({ openThis }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    openThis.current = (value) => {
      console.log(value);
      setData(value);
      setOpen(true);
    };
  }, [openThis]);

  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {data ? (
        <Box sx={style}>
          <Stack alignItems="center">
            <CardMedia
              component="img"
              width="200"
              height="200"
              alt=""
              src={data.picture.large}
              sx={{
                borderRadius: 0.5,
                width: "200px",
                mr: { sm: 1.5 },
                mb: 1.5,
              }}
            />
          </Stack>

          <Stack spacing={1}>
            <Typography variant="body1" color="initial">
              Name : {data.name.first} {data.name.last}
            </Typography>
            <Typography variant="body1" color="initial">
              Email : {data.email}
            </Typography>
            <Typography variant="body1" color="initial">
              Phone : {data.phone}
            </Typography>
            <Typography variant="body1" color="initial">
              Date of Birth : {dayjs(data.dob.date).format("DD/MM/YYYY")}
            </Typography>
            <Stack direction="row">
              <Typography
                variant="body1"
                color="initial"
                sx={{ width: "90px" }}
              >
                Address :&nbsp;
              </Typography>
              <Typography variant="body1" color="initial">
                {data.location.street.number}, {data.location.street.name}
                <br />
                {data.location.city}, {data.location.state},{" "}
                {data.location.country}
              </Typography>
            </Stack>

            <Stack direction="row" justifyContent="flex-end">
              <Button color="secondary" onClick={() => setOpen(false)}>
                Close
              </Button>
            </Stack>
          </Stack>
        </Box>
      ) : (
        <div></div>
      )}
    </Modal>
  );
};

export default FriendModal;
