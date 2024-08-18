import { Box, Typography, Paper, Divider, Grid, IconButton, Tooltip } from "@mui/material";
import { token } from "../theme";
import { useTheme } from '@mui/material/styles';
import AddIcon from "@mui/icons-material/Add";
import EditIcon from '@mui/icons-material/Edit';
import RemoveIcon from '@mui/icons-material/Remove';
import React, { memo, useEffect, useState } from "react";

const Profile = () => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);

  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [numberPhone, setNumberPhone] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    const storedFullname = sessionStorage.getItem("fullname");
    const storedEmail = sessionStorage.getItem("email");
    const storedNumberPhone = sessionStorage.getItem("numberPhone");
    const storedAddress = sessionStorage.getItem("address");

    if (storedFullname) setFullname(storedFullname);
    if (storedEmail) setEmail(storedEmail);
    if (storedNumberPhone) setNumberPhone(storedNumberPhone);
    if (storedAddress) setAddress(storedAddress);
  }, []);


  const handleEditClick = () => {
    if (selectedRow) {
      console.log(selectedRow);
      setOpen(true);
    } else {
      alert("Please select a row to edit");
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 3,
        backgroundColor: colors,
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          width: '100%',
          mb: 2,
        }}
      >
        <Tooltip title="Thêm">
          <IconButton color="primary" onClick={() => setOpen(true)}>
            <AddIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Sửa">
          <IconButton color="primary" onClick={handleEditClick}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Xóa">
          <IconButton color="primary" onClick={() => setOpen(true)}>
            <RemoveIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Paper elevation={3} sx={{ width: '100%', maxWidth: 1200, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Thông Tin Tài Khoản
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Họ và tên:</Typography>
            <Typography variant="body1">{fullname}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Email:</Typography>
            <Typography variant="body1">{email}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Số điện thoại:</Typography>
            <Typography variant="body1">{numberPhone}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Địa chỉ:</Typography>
            <Typography variant="body1">{address}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default memo(Profile);
