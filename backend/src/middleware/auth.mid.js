import jwt from "jsonwebtoken";
import { UNAUTHORIZED } from "../constants/httpStatus.js";

export default (req, res, next) => {
  const token = req.headers.access_token;

  if (!token) {
    return res.status(UNAUTHORIZED).send("Access token is missing");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    return next();
  } catch (error) {
    console.error("Token verification error:", error.message);
    return res.status(UNAUTHORIZED).send("Invalid access token");
  }
};
