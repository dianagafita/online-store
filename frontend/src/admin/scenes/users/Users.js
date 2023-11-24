import React, { useEffect, useReducer } from "react";
import { data_users } from "../../../data";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import Header from "../dashboard/Header";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { getAllUsers } from "../../../services/userService";
import { Typography } from "antd";

const reducer = (state, action) => {
  switch (action.type) {
    case "USERS_LOADED":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

const initialState = { users: [] };

export default function Users() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;

  useEffect(() => {
    let loadedProd = getAllUsers();

    loadedProd.then((prod) =>
      dispatch({ type: "USERS_LOADED", payload: prod })
    );
  }, []);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  console.log(users);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "NAME",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "email", headerName: "EMAIL", flex: 1 },
    { field: "address", headerName: "ADDRESS" },
    {
      field: "isAdmin",
      headerName: "ACCESS LEVEL",
      flex: 1,
      renderCell: ({ row: { isAdmin } }) => {
        return (
          <Box
            width="30%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              isAdmin ? colors.greenAccent[600] : colors.redAccent[500]
            }
            borderRadius="1rem"
          >
            {isAdmin && <AdminPanelSettingsOutlinedIcon />}
            {!isAdmin && <SecurityOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {isAdmin}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="USERS" subtitle="Managing the Users" />
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
            color: "#868dfb",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.grey[700],
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.grey[500],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.grey[700],
          },
        }}
      >
        <DataGrid rows={users} columns={columns} />
      </Box>
    </Box>
  );
}
