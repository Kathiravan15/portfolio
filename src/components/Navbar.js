import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import "../../src/components/MyNavbar.css";

export default function MyNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const fullText = "Portfolio_kathiravanr";

  // ✅ Safe typing animation (no undefined bug)
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setDisplayText(fullText.substring(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(typingInterval);
      }
    }, 150);

    // Cleanup on unmount
    return () => clearInterval(typingInterval);
  }, [fullText]);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`my-navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Navbar expand="lg" variant="dark" className="py-3">
        <Container>
          {/* Animated Brand Name */}
          <motion.a
            href="#home"
            className="navbar-brand fw-bold text-gradient typing-text"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <span className="dot">⚡</span>
            {displayText}
          </motion.a>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav className="gap-3">
              {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-link nav-animated"
                  whileHover={{
                    scale: 1.15,
                    textShadow: "0px 0px 12px rgba(0,255,255,0.8)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item}
                </motion.a>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.nav>
  );
}
