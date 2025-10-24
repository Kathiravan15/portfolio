import React from "react";
import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaUserTie } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const iconVariants = {
    hover: { scale: 1.3, rotate: 10, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <footer
      className="text-white py-4"
      style={{
        background: "linear-gradient(135deg, #0d1117, #1a1f25)",
        boxShadow: "0 -2px 10px rgba(0,0,0,0.3)",
      }}
    >
      <Container className="text-center">
        <div className="d-flex justify-content-center mb-3">
          <motion.a
            href="https://github.com/Kathiravan15?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-info mx-3"
            variants={iconVariants}
            whileHover="hover"
          >
            <FaGithub size={30} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/kathiravan-r-9a3b2727a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-info mx-3"
            variants={iconVariants}
            whileHover="hover"
          >
            <FaLinkedin size={30} />
          </motion.a>

          <motion.a
            href="https://www.naukri.com/mnjuser/profile?id=&altresid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-info mx-3 d-flex align-items-center"
            variants={iconVariants}
            whileHover="hover"
            style={{ gap: "6px" }}
          >
            <FaUserTie size={28} />
            <span style={{ fontSize: "15px", color: "#9be9a8", fontWeight: "500" }}>
              
            </span>
          </motion.a>
        </div>

        <motion.p
          className="mb-0"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ fontSize: "14px", color: "#adb5bd" }}
        >
          © {new Date().getFullYear()} <strong>Kathiravan R</strong> | All Rights Reserved
        </motion.p>
      </Container>
    </footer>
  );
}
