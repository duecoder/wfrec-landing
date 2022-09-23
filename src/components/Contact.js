import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img-new.png";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";
import { isEmail } from "validator";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const firstName = document.getElementById("name");
    const lastName = document.getElementById("lastname");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");
    let valid = true;

    const successToast = () => {
      console.log("Sent");
      toast.success("Your message has been sent!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    };

    if (!firstName.value) {
      toast.error("Field First Name must be filled!");
      valid = false;
    }

    if (!lastName.value) {
      toast.error("Field Last Name must be filled!");
      valid = false;
    }

    if (!isEmail(email.value)) {
      toast.error("Invalid E-mail");
      valid = false;
    }

    if (!phone.value) {
      toast.error("Field Phone must be filled!");
      valid = false;
    }

    if (!message.value) {
      toast.error("You must describe what you need!");
      valid = false;
    }

    if (valid) {
      emailjs
        .sendForm(
          "service_regetms",
          "template_x1ehdkh",
          form.current,
          "Xg0wgmPZ8qpufWOez"
        )
        .then(
          (result) => {
            console.log(result.text);
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
            e.target.reset();
          }
        );
      successToast();
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src={contactImg} alt="contact" />
          </Col>
          <Col md={6}>
            <h2 className="text-center">Get in Touch</h2>
            <form ref={form} onSubmit={sendEmail}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="user_name"
                    id="name"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="user_lastname"
                    id="lastname"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="user_email"
                    id="email"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    placeholder="Phone"
                    name="user_phone"
                    id="phone"
                  />
                </Col>
                <Col className="text-center">
                  <textarea
                    row="6"
                    placeholder="Message"
                    name="message"
                    id="message"
                  />
                  <button type="submit">
                    <span>Send</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
        <ToastContainer
          toastStyle={{ backgroundColor: "#191A19", color: "white" }}
        />
      </Container>
    </section>
  );
};
