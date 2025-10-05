import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Dziękujemy za kontakt, ${form.name}!`);
  };

  return (
    <div className="col-md-6 mx-auto">
      <h2>Kontakt</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Imię:</label>
          <input
            className="form-control"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-success">Wyślij</button>
      </form>
    </div>
  );
}
