// middleware/authorization.js

import jwt from 'jsonwebtoken';

const authorizeUser = (req, res, next) => {
  // Extract token from 'Authorization' header
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided, authorization denied." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  
    next(); 
  } catch (error) {
    console.error("Authorization error:", error);
    return res.status(401).json({ message: "Token is not valid." });
  }
};

export default authorizeUser;
