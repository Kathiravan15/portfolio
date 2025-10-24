import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Projects.css";

// 💼 Company Projects
const companyProjects = [
  {
    title: "CCaaS – Contact Center as a Service",
    description: `
      • Implemented CSAT tracking, dashboard analytics, broadcast messaging, and notification systems.
      • Built real-time reporting and WebSocket-based analytics for customer insights and agent performance.
    `,
    link: "https://ccaas.worktual.co.uk/",
  },
  {
    title: "CCaaS Mobile App",
    description: `
      • Cross-platform app with React Native for iOS & Android.
      • Integrated SMS, Email, and AI-driven Agent Assist features for real-time customer interactions.
      • Implemented Agent Assist features to provide AI-driven suggestions and improve agent efficiency during customer interactions.
     
    `,
  },
  {
    title: "CVM – Customer Volume Management",
    description: `
      • Developed AI Pilot features for intelligent routing and customer profile management.
      • Built full-stack modules for configurable settings and real-time synchronization.
    `,
    link: "https://cvm.worktual.co.uk/",
  },
  {
    title: "LCR (Least Cost Routing) System",
    description: `
      • Built internal routing platform with telecom rate management and validation workflows.
      • Implemented cost-optimization logic for dynamic routing decisions.
    `,
      link: "https://lcr.worktual.in",
  },
];

// 💻 Personal Projects
const personalProjects = [
  {
    title: "Task Management App",
    description:
      "A task-tracking application built with React, Node.js, and MongoDB for managing productivity.",
    github: "https://github.com/Kathiravan15/Task-Managements-App",
  },
  {
    title: "E-commerce App",
    description:
      "A full-stack MERN e-commerce platform with user authentication, cart management, and Stripe payments.",
    github: "https://github.com/Kathiravan15/ecommerce-app",
  },
  {
    title: "CSV Book Editor",
    description:
      "A web-based CSV data editor that allows users to import, edit, and export structured book records.",
    github: "https://github.com/Kathiravan15/Csv-book-editor",
  },
 {
  title: "Portfolio Website",
  description:
    "A modern, responsive personal portfolio website built with React.js, showcasing my projects, skills, and professional experience with interactive UI and animations.",
  github: "https://github.com/Kathiravan15/Csv-book-editor",
}
];

export default function Projects() {
  return (
    <section className="projects-modern-section" id="projects">
      <Container>
        {/* 🚀 Main Title */}
        <motion.h2
          className="projects-modern-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          🚀 Projects
        </motion.h2>

        {/* 💼 Company Projects */}
        <motion.h3
          className="projects-modern-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          💼 Company Project Work
        </motion.h3>

        <Row>
          {companyProjects.map((proj, i) => (
            <Col md={6} key={i} className="mb-4">
              <motion.div
                className="projects-modern-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                <h5 className="projects-card-title">{proj.title}</h5>
                <p className="projects-card-desc">{proj.description}</p>

                {/* 🌐 Show link only if available */}
                {proj.link && (
                  <div className="projects-buttons">
                    <Button
                      variant="info"
                      href={proj.link}
                      target="_blank"
                      className="projects-btn"
                    >
                      Visit Project
                    </Button>
                  </div>
                )}
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* 💻 Personal Projects */}
        <motion.h3
          className="projects-modern-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          💻 Personal Projects
        </motion.h3>

        <Row>
          {personalProjects.map((proj, i) => (
            <Col md={4} sm={12} key={i} className="mb-4">
              <motion.div
                className="projects-modern-card personal"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
              >
                <h5 className="projects-card-title">{proj.title}</h5>
                <p className="projects-card-desc">{proj.description}</p>

                <div className="projects-buttons">
                  <Button
                    variant="dark"
                    href={proj.github}
                    target="_blank"
                    className="projects-btn"
                  >
                    GitHub
                  </Button>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
