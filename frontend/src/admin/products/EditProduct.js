import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../scenes/dashboard/Header";
import { useEffect, useState } from "react";
import {
  deleteProduct,
  editProduct,
  getById,
} from "../../services/productServices";
import { toast } from "react-toastify";

export default function EditProduct() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const navigate = useNavigate();

  const handleFormSubmit = async (values) => {
    await editProduct(id, values);
  };

  const handleDelete = async (values) => {
    await deleteProduct(id);
    navigate("/products");
  };

  useEffect(() => {
    getById(id).then((result) => {
      setProduct(result);
    });
  }, [id]);

  return (
    <Box m="20px">
      <Header title="EDIT PRODUCT" subtitle={`Edit Product ${product.id}`} />

      <Formik
        enableReinitialize
        onSubmit={handleFormSubmit}
        initialValues={{
          name: product.name || "",
          memory: product.memory || "",
          price: product.price || "",
          tags: product.tags || "",
          colour: product.colour || "",
          img: product.img || "",
          description: product.description || "",
        }}
        validationSchema={null}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Memory"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.memory}
                name="memory"
                error={!!touched.memory && !!errors.memory}
                helperText={touched.memory && errors.memory}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.price}
                name="price"
                error={!!touched.price && !!errors.price}
                helperText={touched.price && errors.price}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Image"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.img}
                name="img"
                error={!!touched.img && !!errors.img}
                helperText={touched.img && errors.img}
                sx={{ gridColumn: "span 6" }}
              />{" "}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Color"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.colour}
                name="colour"
                error={!!touched.colour && !!errors.colour}
                helperText={touched.colour && errors.colour}
                sx={{ gridColumn: "span 3" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="array"
                label="Tags"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.tags}
                name="tags"
                error={!!touched.tags && !!errors.tags}
                helperText={touched.tags && errors.tags}
                sx={{ gridColumn: "span 3" }}
              />
              <TextField
                variant="filled"
                type="text"
                label="Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{
                  gridColumn: "span 6",
                  "& .MuiTextField": { m: 1, width: "25ch" },
                }}
              />
            </Box>
            <Box display="flex" justifyContent="space-between" mt="20px">
              <Button
                onClick={handleDelete}
                color="secondary"
                variant="contained"
              >
                Delete
              </Button>
              <Button type="submit" color="secondary" variant="contained">
                Save
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}
