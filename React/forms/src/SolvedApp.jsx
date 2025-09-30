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

        <Input 
        value={form.username}
        onChange={handleChange} 
        placeholder="Enter Username"
        name="username"
        label="Username"
        type="text"
        errors={errors}
         />

        <Input 
        value={form.email}
        onChange={handleChange} 
        placeholder="Enter Email"
        name="email"
        label="Email"
        type="email"
        errors={errors}
         />

        <Input 
        value={form.password}
        onChange={handleChange} 
        placeholder="Enter Password"
        name="password"
        label="Password"
        type="password"
        errors={errors}
         />
        <Input 
        value={form.passwordConfirm}
        onChange={handleChange} 
        placeholder="Confirm password"
        name="passwordConfirm"
        label="Confirm Password"
        type="password"
        errors={errors}
         />

        <button type="submit" className="submit-btn">
          Register
        </button>
      </form>
    </div>
  );
}

function Input({value, onChange, name, errors, label, type="text", placeholder=""}) {
  return (
    <div className="form-control">
          <label>{label}</label>
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
          {errors[name] && (
            <span className="error">{errors[name]}</span>
          )}
        </div>
  )
}
