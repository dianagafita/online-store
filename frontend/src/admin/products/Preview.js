import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import classes from "./Preview.module.css";
import Price from "../../components/Price/Price";

const container = {
  position: "absolute",
  top: "50%",
  left: "50%",
  display: "flex",
  fleDirection: "row",
  transform: "translate(-50%, -50%)",
  width: 450,
  height: "fit-content",
  bgcolor: "white",
  borderRadius: "1rem",
  opacity: 0.95,
  boxShadow: 24,
  p: 4,
};

const details = {
  display: "flex",
  flexDirection: "column",
  color: "black",
  marginLeft: "1rem",
};
export default function Preview({ show, handleClose, value }) {
  console.log(value);
  return (
    <div>
      <Modal
        open={show}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={container}>
          <Box>
            <img src={value.img} alt={value.name} className={classes.img} />
          </Box>
          <Box sx={details}>
            {" "}
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ fontSize: "1rem", fontWeight: "600" }}
            >
              Product Specifications
            </Typography>
            {/* {Object.keys(value).map((key, index) => (
              <Typography
                id="modal-modal-description"
                sx={{ mt: 1, fontWeight: 600 }}
              >
                {key}:<span style={{ fontWeight: 100 }}> {value[key]}</span>
              </Typography>
            ))} */}
            <Typography sx={{ mt: 1, fontWeight: 600 }}>
              Name:<span style={{ fontWeight: 100 }}> {value.name}</span>
            </Typography>
            <Typography sx={{ mt: 0.5, fontWeight: 600 }}>
              Memory:<span style={{ fontWeight: 100 }}> {value.memory}</span>
            </Typography>
            <Typography sx={{ mt: 0.5, fontWeight: 600 }}>
              Color:<span style={{ fontWeight: 100 }}> {value.colour}</span>
            </Typography>
            <Typography sx={{ mt: 0.5, fontWeight: 600 }}>
              Description:
              <span style={{ fontWeight: 100 }}> {value.description}</span>
            </Typography>
            <Typography sx={{ mt: 0.5, fontWeight: 600 }}>
              Price:
              <span style={{ fontWeight: 100, color: "red" }}>
                <Price price={value.price} />
              </span>
            </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
