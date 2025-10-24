import React, { useRef, useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null);

  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  console.log("SERVICE_ID:", SERVICE_ID);
  console.log("TEMPLATE_ID:", TEMPLATE_ID);
  console.log("PUBLIC_KEY:", PUBLIC_KEY);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setStatus("success");
          formRef.current.reset();
          setTimeout(() => setStatus(null), 4000);
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus("error");
          setTimeout(() => setStatus(null), 6000);
        }
      );
  };

  return (
    <section className="contact-modern-section" id="contact">
      <Container>
        <motion.h2
          className="contact-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          ✉️ Contact Me
        </motion.h2>

        <motion.div
          className="contact-form-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {status === "success" && (
            <Alert variant="success">Message sent successfully!</Alert>
          )}
          {status === "error" && (
            <Alert variant="danger">Oops! Something went wrong.</Alert>
          )}

          <Form ref={formRef} onSubmit={sendEmail}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={4}
                placeholder="Your Message"
                required
              />
            </Form.Group>

            <div className="text-center">
              <Button
                className="contact-btn"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </Form>
        </motion.div>
      </Container>
    </section>
  );
}
