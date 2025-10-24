import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import pic from "../assets/Screenshot 2025-10-10 023205.png";
import "./About.css";

export default function AboutModern() {
  const skills = [
    { name: "React", value: 90 },
    { name: "Node.js", value: 80 },
    { name: "Redux", value: 70 },
  ];

  return (
    <section id="about" className="about-modern-section">
      <Container fluid>
        <motion.h2
          className="about-modern-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        <Row className="align-items-center about-modern-row">
          <Col md={4} sm={12} className="text-center mb-4 mb-md-0">
            <motion.div
              className="about-modern-pic-container"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <img src={pic} alt="Profile" className="about-modern-pic" />
            </motion.div>
          </Col>

          <Col md={8} sm={12}>
            <motion.p
              className="about-modern-text about-animated-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              I’m a passionate{" "}
              <span className="about-modern-highlight rainbow">
                Full Stack Developer
              </span>
              skilled in building dynamic, user-friendly applications using
              modern technologies like{" "}
              <span className="about-modern-highlight pink">React.js</span>,{" "}
              <span className="about-modern-highlight cyan">Node.js</span>,{" "}
              <span className="about-modern-highlight purple">Redux</span>, and{" "}
              <span className="about-modern-highlight green">Socket.io</span>.
            </motion.p>

            <h5 className="about-modern-skills-title">Skills Overview</h5>
            {skills.map((skill, i) => (
              <motion.div
                className="about-modern-skillbar"
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.3 }}
              >
                <p>{skill.name}</p>
                <div
                  className="about-modern-progress progress"
                  style={{ "--progress-value": `${skill.value}%` }}
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${skill.value}%` }}
                    aria-valuenow={skill.value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {skill.value}%
                  </div>
                </div>
              </motion.div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
