import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";

import { Container } from "@mui/material";

const ProtectedCompo = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const token = localStorage.getItem("token");
  const [showUploadModal, setShowUploadModal] = useState(false);

  // Check if the user is an admin based on the token
  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      setIsAdmin(decodedToken.isAdmin);
    }
  }, [token]);

  const handleUploadSuccess = () => {
    setShowUploadModal(false);
  };

  return (
    <>
      {isAdmin ? (
        <p> Bienvenue client</p>
      ) : (
        <p> Bienvenue Boss</p>
      )}
    </>
  );
};

export default ProtectedCompo;
