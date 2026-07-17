import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true)
  setStatus("Sending message...");

  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: form.name,
        email: form.email,
        message: form.message,
        time: new Date().toLocaleString(),
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setLoading(false)
      setStatus("✅ Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      setLoading(false)
      setStatus("❌ Failed to send message. Please try again.");
    });
};
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <span className="contact-eyebrow">Get In Touch</span>
        <h2 className="contact-title">Let's work together</h2>
        <p className="contact-subtitle">
          Have a project in mind or just want to say hi? Send me a message
          and I'll get back to you soon.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell me a bit about your project..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="contact-submit">
             {loading ? "Sending..." : "Send Message"}
          </button>

          {status && <p className="contact-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}
