import React, { useEffect, useReducer } from "react";
import { data_users } from "../../../data";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import Header from "../dashboard/Header";
import { Box, Tooltip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { getAllUsers } from "../../../services/userService";
import { Typography } from "antd";
import { getAll } from "../../../services/orderService";
import PaymentsIcon from "@mui/icons-material/Payments";
const reducer = (state, action) => {
  switch (action.type) {
    case "ORDERS_LOADED":
      return { ...state, orders: action.payload };
    default:
      return state;
  }
};

const initialState = { orders: [] };

export default function Orders() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { orders } = state;

  useEffect(() => {
    let loadedProd = getAll();

    loadedProd.then((prod) =>
      dispatch({ type: "ORDERS_LOADED", payload: prod })
    );
  }, []);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  console.log(orders);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "NAME",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "createdAt", headerName: "DATE", flex: 1 },
    { field: "totalPrice", headerName: "PRICE", flex: 1 },

    // {
    //   field: "items",
    //   headerName: "ITEMS",
    //   flex: 1,

    //   renderCell: ({ row: { items } }) => {
    //     const formattedItems = items.map((item) => item.prod.name).join(", ");
    //     return (
    //       <Tooltip title={formattedItems} placement="top">
    //         <Typography style={{ color: "white" }}>{formattedItems}</Typography>
    //       </Tooltip>
    //     );
    //   },
    // },

    { field: "address", headerName: "ADDRESS", flex: 1 },
    {
      field: "status",
      headerName: " STATUS",
      flex: 1,
      renderCell: ({ row: { status } }) => {
        return (
          <Box
            width="100px"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              status === "PAYED"
                ? colors.greenAccent[600]
                : colors.redAccent[500]
            }
            borderRadius="1rem"
          >
            {status === "PAYED" && (
              <PaymentsIcon style={{ marginRight: "10px" }} />
            )}
            {!status && <SecurityOutlinedIcon />}
            <Typography color={colors.grey[100]}>{status}</Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="ORDERS" subtitle="Managing the Orders" />
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
        <DataGrid rows={orders} columns={columns} />
      </Box>
    </Box>
  );
}
