import { useState } from "react";
import "./App.css";

export default function App() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [errors, setErrors] = useState({});

  // Walidacja poszczególnych pól
  const validateField = (name, value) => {
    switch (name) {
      case "username":
        return value.length < 5 ? "Username must be at least 5 characters" : "";
      case "email":
        return value.includes("@") ? "" : "Invalid email address";
      case "password":
        return value.length < 5 ? "Password must be at least 5 characters" : "";
      case "passwordConfirm":
        return value !== form.password ? "Passwords do not match" : "";
      default:
        return "";
    }
  };

  // Obsługa zmiany pola
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };



  // Obsługa submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Walidacja całego formularza
    const newErrors = {};
    Object.keys(form).forEach((field) => {
      const error = validateField(field, form[field]);
      if (error) newErrors[field] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert("Form submitted successfully ✅");
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="title">Register</h2>

        {/* Username */}
        <div className="form-control">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Enter username"
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>

        {/* Email */}
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        {/* Password */}
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
          {errors.password && (
            <span className="error">{errors.password}</span>
          )}
        </div>

        {/* Password Confirm */}
        <div className="form-control">
          <label>Confirm Password</label>
          <input
            type="password"
            name="passwordConfirm"
            value={form.passwordConfirm}
            onChange={handleChange}
            placeholder="Confirm password"
          />
          {errors.passwordConfirm && (
            <span className="error">{errors.passwordConfirm}</span>
          )}
        </div>

        <button type="submit" className="submit-btn">
          Register
        </button>
      </form>
    </div>
  );
}
