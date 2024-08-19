import { Box, IconButton, Typography, useTheme, Tooltip } from "@mui/material";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { token } from "../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { memo } from "react";
import FormDialog from "../../../../pages/admin/components/FormDialog";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from '@mui/icons-material/Edit';
import RemoveIcon from '@mui/icons-material/Remove';
import { GetAllAccounts } from "../../../../services/AllServices";

const Team = () => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [rows, setRows] = useState([]);
  console.log('rows: ', rows);
  

  // Fetch data from API
  const fetchDataUser = async () => {
    try {
      const data = await GetAllAccounts();
      const formattedData = (data.$values || []).map((user) => {
        console.log('User data:', user.fullName); 
        return {
          id: user.$id, // Chú ý rằng bạn có thể cần sử dụng user.$id thay vì user.id
          full_name: user.fullName,
          username: user.userName || "N/A",
          email: user.email || "N/A",
          numberPhone: user.numberPhone || "N/A",
          status: user.userStatus === 1 ? "Active" : "Inactive" 
        };
      });
      console.log('Formatted data:', formattedData);
      setRows(formattedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataUser();
  }, []);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "full_name",
      headerName: "Full Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "username",
      headerName: "User name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "numberPhone",
      headerName: "Number Phone",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: ({ row: { status } }) => {
        return (
          <Box
            width="50%"
            m="10 auto"
            p="5px"
            marginTop={1}
            display="flex"
            justifyContent="center"
            alignSelf="center"
            backgroundColor={
              status === "Active"
              ? colors.greenAccent[600]
              : colors.redAccent[700]
            }
            borderRadius="4px"
          >
            {status === "Active" && <AdminPanelSettingsOutlinedIcon />}
            {status === "Inactive" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "10px" }}>
              {status }
            </Typography>
          </Box>
        );
      },
    },
  ];

  const handleSelectionModelChange = (selectionModel) => {
    const selectedID = selectionModel[0];
    const selectedRowData = rows.find((row) => row.id === selectedID);
    setSelectedRow(selectedRowData);
  };
  const handleEditClick = () => {
    if (selectedRow) {
      console.log(selectedRow);
      setOpen(true);
    } else {
      alert("Please select a row to edit");
    }
  };

  return (
    <Box m="20px">
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Header title="Người dùng" subtitle="Managing the Team Members" />
        <Box>
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
      </Box>

      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={rows} columns={columns} onRowSelectionModelChange={handleSelectionModelChange} />
      </Box>
      <FormDialog open={open} onClose={() => setOpen(false)} initialValues={selectedRow} />

    </Box>
  );
};

export default memo(Team);
