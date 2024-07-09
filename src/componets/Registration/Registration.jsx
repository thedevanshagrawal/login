// Registration.js
import React from "react";
import "./Registration.css";

function Registration() {
  return (
    <div className="Registrationcontainer">
      <div className="Registrationform-container">
        <h2 className="Registrationform-title">Exam Portal Registration</h2>
        <form id="registration-form">
          <label htmlFor="reg-username" className="Registrationform-label">Username</label>
          <input type="text" id="reg-username" name="username" className="Registrationform-input" required />

          <label htmlFor="reg-password" className="Registrationform-label">Password</label>
          <input type="password" id="reg-password" name="password" className="Registrationform-input" required />

          <label htmlFor="reg-email" className="Registrationform-label">Email</label>
          <input type="email" id="reg-email" name="email" className="Registrationform-input" required />

          <button type="submit" className="Registrationform-button">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
