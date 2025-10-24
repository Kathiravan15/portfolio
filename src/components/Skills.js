import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Skills.css";

const skills = [
  { name: "HTML", icon: FaHtml5, percent: 85},
  { name: "CSS", icon: FaCss3Alt, percent: 80 },
  { name: "JavaScript", icon: FaJs, percent: 90},
  { name: "React.js", icon: FaReact, percent: 90 },
  { name: "Redux", icon: FaReact, percent: 85 }, // Using React icon for Redux
  { name: "Node.js", icon: FaNodeJs, percent: 90 },
  { name: "SQL", icon: FaDatabase, percent: 75 },
];

export default function Skills() {
  return (
    <section className="skills-modern-section" id="skills">
      <Container>
        <motion.h2
          className="skills-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          💡 My Skills
        </motion.h2>

        <Row className="justify-content-center mt-5">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <Col xs={6} md={3} key={i} className="mb-5">
                <motion.div
                  className="skill-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                >
                  <Icon size={50} className="skill-icon" />
                  <h5 className="skill-name">{skill.name}</h5>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      style={{ width: `${skill.percent}%` }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percent}%` }}
                      transition={{ duration: 1.5, delay: i * 0.2 }}
                    />
                  </div>
                  <span className="skill-percent">{skill.percent}%</span>
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
