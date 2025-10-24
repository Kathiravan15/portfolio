import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import myPic from "../assets/698929.jpeg";
import myResume from "../assets/kathir_updated_new.pdf";
import "./Home.css"; // 👈 We'll create this next

export default function Home() {
  return (
    <section id="home" className="home-section">
      <Container fluid className="vh-100 d-flex align-items-center justify-content-center text-center text-white">
        <Row className="align-items-center w-100 mx-0 px-3">
          {/* Profile Image */}
          <Col md={5} sm={12} className="mb-5 mb-md-0 d-flex justify-content-center">
            <motion.div
              className="profile-pic-wrapper"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.img
                src={myPic}
                alt="Kathiravan Profile"
                className="profile-pic"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px #00e6ff" }}
              />
            </motion.div>
          </Col>

          {/* Text Section */}
          <Col md={7} sm={12} className="text-md-start text-center">
            <motion.h1
              className="fw-bold name-title"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              👋 Hi, I'm <span className="gradient-text">Kathiravan R</span>
            </motion.h1>

            <motion.h3
              className="subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Full Stack Developer 💻
            </motion.h3>

            <motion.p
              className="description mt-3 mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              I build scalable, high-performance web and mobile apps using
              <span className="highlight"> React.js</span>,
              <span className="highlight"> Node.js</span>,
              <span className="highlight"> React Native</span>,
              <span className="highlight"> Redux</span>, and
              <span className="highlight"> Socket.io</span>.
            </motion.p>

            <motion.div
              className="button-group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Button variant="info" href="#projects" size="lg" className="glow-btn me-3">
                View My Work 🚀
              </Button>

              <Button
                variant="outline-light"
                href={myResume}
                download="Kathir_Resume.pdf"
                size="lg"
                className="glow-btn-outline"
              >
                Download Resume 📄
              </Button>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Floating Particle Background */}
      <div className="animated-bg"></div>
    </section>
  );
}
