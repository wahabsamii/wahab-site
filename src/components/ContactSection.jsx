import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const ContactSection = () => {
  const {currentUser} = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState(currentUser ? currentUser?.email : '');
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      const res = await axios.post("https://wahab-me-backend.vercel.app/api/appointment/book-appointment", {
        name,
        email,
        subject,
        phone,
        message,
      });

      if (res.data.success) {
        setResponseMsg("✅ Your appointment has been booked.");
        // Clear form
        setName("");
        setEmail("");
        setSubject("");
        setPhone("");
        setMessage("");
      } else {
        setResponseMsg(`❌ ${res.data.message || "Booking failed."}`);
      }
    } catch (error) {
      setResponseMsg("❌ An error occurred while booking your appointment.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-white py-20 px-6 md:px-20">
      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 px-8 md:px-16 py-16 rounded-xl"
        style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
      >
        {/* Left Content */}
        <div className="md:w-1/2 space-y-4">
          <p className="text-[#FF014F] font-medium uppercase">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-snug">
            Elevate your brand <br /> with Me
          </h2>
          <p className="text-gray-400 text-sm">
            It's a known fact that a visitor gets distracted by readable content while looking at its layout. Let's make sure your message is heard.
          </p>
        </div>

        {/* Right Form */}
        <div className="md:w-1/2">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-transparent border border-gray-700 text-white p-3 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="bg-transparent border border-gray-700 text-white p-3 rounded-md w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-transparent border border-gray-700 text-white p-3 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="bg-transparent border border-gray-700 text-white p-3 rounded-md w-full"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="bg-transparent border border-gray-700 text-white p-3 rounded-md w-full"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#FF014F] hover:bg-[#FF014F]/90 text-white font-semibold py-3 rounded-full transition"
            >
              {loading ? "Booking..." : "Appointment Now →"}
            </button>

            {responseMsg && (
              <p className="text-sm mt-2" style={{ color: responseMsg.startsWith("✅") ? "lightgreen" : "red" }}>
                {responseMsg}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
