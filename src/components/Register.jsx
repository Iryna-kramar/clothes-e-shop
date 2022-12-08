import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useNavigate, Link } from "react-router-dom";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";

const Register = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  // to store value in localStorage
  const handleSubmit = (e) => {
    e.preventDafault();
    localStorage.setItem("user", JSON.stringify(input));

    navigate("/login", true);
  };

  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
              alt="login form"
              className="rounded-start w-100"
            />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <MDBIcon
                  fas
                  icon="cubes fa-3x me-3"
                  style={{ color: "#ff6219" }}
                />
              </div>

              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Create an account
              </h5>

              <MDBInput
                wrapperClass="mb-4"
                label="Your name"
                id="formControlLg"
                type="text"
                size="lg"
                name="name"
                value={input.name}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
                name="email"
                value={input.email}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                name="password"
                value={input.password}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
              />

              <button
                className="btn btn-dark btn-lg btn-block mb-5"
                type="submit"
                onSubmit={handleSubmit}
              >
                Register
              </button>

              <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                Have already an account?{" "}
                <Link href="#!" style={{ color: "#393f81" }} to={`/login`}>
                  Login here
                </Link>
              </p>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
};

export default Register;
