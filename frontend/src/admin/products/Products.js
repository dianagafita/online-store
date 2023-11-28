import React, { useEffect, useReducer } from "react";
import { useTheme } from "@emotion/react";
import { tokens } from "../theme";
import Header from "../scenes/dashboard/Header";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { getAll } from "../../services/productServices";
import { useNavigate } from "react-router-dom";

const reducer = (state, action) => {
  switch (action.type) {
    case "PRODUCTS_LOADED":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

const initialState = { products: [] };

export default function Products() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = state;

  useEffect(() => {
    let loadedProd = getAll();

    loadedProd.then((prod) =>
      dispatch({ type: "PRODUCTS_LOADED", payload: prod })
    );
  }, []);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  console.log(products);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      renderCell: (params) => (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/product/${params.row.id}`)}
        >
          {params.row.id}
        </div>
      ),
    },

    {
      field: "name",
      headerName: "NAME",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "price", headerName: "PRICE", flex: 1 },
    { field: "tags", headerName: "TAGS", flex: 1 },
  ];

  return (
    <Box m="20px">
      <Header title="PRODUCTS" subtitle="Managing the Products" />
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
        <DataGrid rows={products} columns={columns} />
      </Box>
    </Box>
  );
}
