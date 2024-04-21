import React from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";

const FourOhFour = () => {
  return (
    <>
      <Header />

      <Container style={{ marginTop: "9%" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="row"
        >
          <div className="d-flex justify-content-center align-items-center row mx-auto text-center">
            <h1>404 Error Page</h1>
            <p>The requested page does not exist.</p>
            <p>
              <i>Not Found</i>
            </p>
            <p>
              <a href="/">Go back to Home Page</a>
            </p>
          </div>
        </motion.div>
      </Container>
    </>
  );
};

export default FourOhFour;
