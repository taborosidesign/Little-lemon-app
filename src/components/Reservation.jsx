// src/pages/Reservation.jsx
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Reservation.css";

const LS_KEY = "little-lemon-reservation";

const buildTimes = () => {
  const times = [];
  for (let h = 12; h <= 22; h++) {
    times.push(`${String(h).padStart(2, "0")}:00`);
    if (h !== 22) times.push(`${String(h).padStart(2, "0")}:30`);
  }
  return times;
};

const occasions = ["Birthday", "Anniversary", "Date night", "Business", "Other"];

const Reservation = () => {
  const navigate = useNavigate();
  const timeOptions = useMemo(() => buildTimes(), []);

  const [form, setForm] = useState({
    fullName: "",
    date: "",
    time: "12:00",
    guests: "",
    occasion: "Birthday",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return;
    try {
      const saved = JSON.parse(raw);
      setForm((prev) => ({ ...prev, ...saved }));
    } catch {}
  }, []);


  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(form));
  }, [form]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: "" }));
  };

  const validate = () => {
    const next = {};


    if (!form.fullName.trim()) next.fullName = "Please enter your full name.";
    else if (form.fullName.trim().length < 3)
      next.fullName = "Name must be at least 3 characters.";

    
    if (!form.date) next.date = "Please choose a date.";
    if (!form.time) next.time = "Please choose a time.";


    const n = Number(form.guests);
    if (!form.guests) next.guests = "Please enter number of guests (1-20).";
    else if (!Number.isInteger(n) || n < 1 || n > 20)
      next.guests = "Guests must be between 1 and 20.";

    if (!form.occasion) next.occasion = "Please choose an occasion.";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    localStorage.setItem(LS_KEY, JSON.stringify(form));
    navigate("/confirmed");
  };

  const clear = () => {
    const cleared = {
      fullName: "",
      date: "",
      time: "12:00",
      guests: "",
      occasion: "Birthday",
    };
    setForm(cleared);
    setErrors({});
    localStorage.setItem(LS_KEY, JSON.stringify(cleared));
  };

  return (
    <main className="reservation">
      <section className="reservation-wrap">
        <header className="reservation-header">
          <h1 className="brand">Little Lemon</h1>
          <p className="city">Chicago</p>
          <h2 className="headline">Find a Table for any occasion</h2>
        </header>

        <form className="reservation-form" onSubmit={onSubmit}>
         
          <label className="field">
            <span className="label">Full Name:</span>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={onChange}
              placeholder="Name as on reservation"
              autoComplete="name"
              autoCapitalize="words"
              className={`control ${errors.fullName ? "is-error" : ""}`}
            />
            {errors.fullName && (
              <span className="error">{errors.fullName}</span>
            )}
          </label>

          <label className="field">
            <span className="label">Date:</span>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={onChange}
              className={`control ${errors.date ? "is-error" : ""}`}
            />
            {errors.date && <span className="error">{errors.date}</span>}
          </label>

         
          <label className="field">
            <span className="label">Time:</span>
            <select
              name="time"
              value={form.time}
              onChange={onChange}
              className={`control ${errors.time ? "is-error" : ""}`}
            >
              {timeOptions.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            {errors.time && <span className="error">{errors.time}</span>}
          </label>

          
          <label className="field">
            <span className="label">Number of Guests:</span>
            <input
              type="number"
              name="guests"
              value={form.guests}
              onChange={onChange}
              min={1}
              max={20}
              placeholder="1-20"
              className={`control ${errors.guests ? "is-error" : ""}`}
            />
            {errors.guests && <span className="error">{errors.guests}</span>}
          </label>

        
          <label className="field">
            <span className="label">Occasion:</span>
            <select
              name="occasion"
              value={form.occasion}
              onChange={onChange}
              className={`control ${errors.occasion ? "is-error" : ""}`}
            >
              {occasions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
            {errors.occasion && (
              <span className="error">{errors.occasion}</span>
            )}
          </label>

         
          <div className="actions">
            <button type="submit" className="btn btn-primary">
              Make Your Reservation
            </button>

            <button type="button" className="btn btn-ghost" onClick={clear}>
              Clear
            </button>
          </div>

         
          <div className="actions">
            <Link to="/" className="btn btn-primary btn-full">
              Back
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Reservation;
