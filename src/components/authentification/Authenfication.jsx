import React, { useState } from "react";
import axios from "axios";
import { Container, Grid, TextField, Button, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const initialState = {
  username: "",
  password: "",
  FullName: "",
  signupSuccessMessage: "",
  signupErrorMessage: "",
  loginSuccessMessage: "",
  loginErrorMessage: "",
};

const Authenfication = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/signup`,
        {
          username: formData.username,
          password: formData.password,
          FullName: formData.FullName,
        }
      );

      setFormData({
        ...formData,
        signupSuccessMessage: response.data.message,
        signupErrorMessage: "",
      });
    } catch (err) {
      setFormData({
        ...formData,
        signupSuccessMessage: "",
        signupErrorMessage: err.response.data.message,
      });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/login`,
        {
          username: formData.username,
          password: formData.password,
        }
      );

      localStorage.setItem("token", response.data.token);


      setFormData({
        ...formData,
        loginSuccessMessage: "Login successful",
        loginErrorMessage: "",
      });
      navigate("/Dashboard");
    } catch (err) {
      setFormData({
        ...formData,
        loginSuccessMessage: "",
        loginErrorMessage: err.response.data.message,
      });
    }
  };

  return (
    <Container maxWidth={"md"} className="mb-5">
      <Grid container justifyContent="center" spacing={3}>
        <Grid item xs={12} sm={6}>
          <Accordion>
            <AccordionSummary aria-controls="login-content" id="login-header">
              <Typography>Login</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <form onSubmit={handleLogin} style={{ width: "100%" }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      type="password"
                      label="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                      Login
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </AccordionDetails>
          </Accordion>
          {formData.loginSuccessMessage && (
            <Alert severity="success">{formData.loginSuccessMessage}</Alert>
          )}
          {formData.loginErrorMessage && (
            <Alert severity="error">{formData.loginErrorMessage}</Alert>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Accordion>
            <AccordionSummary
              aria-controls="signup-content"
              id="signup-header"
            >
              <Typography>Signup</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <form onSubmit={handleSignup} style={{ width: "100%" }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      type="password"
                      label="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Full Name"
                      name="FullName"
                      value={formData.FullName}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                      Signup
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </AccordionDetails>
          </Accordion>
          {formData.signupSuccessMessage && (
            <Alert severity="success">{formData.signupSuccessMessage}</Alert>
          )}
          {formData.signupErrorMessage && (
            <Alert severity="error">{formData.signupErrorMessage}</Alert>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Authenfication;
