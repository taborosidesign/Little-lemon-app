import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Reservation.css";

const LS_KEY = "little-lemon-reservation";

const Confirm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return navigate("/reservation");

    try {
      const parsed = JSON.parse(raw);

      if (!parsed?.fullName || !parsed?.date || !parsed?.time || !parsed?.guests) {
        navigate("/reservation");
        return;
      }

      setData(parsed);
    } catch {
      navigate("/reservation");
    }
  }, [navigate]);

  if (!data) return null;

  return (
    <main className="reservation">
      <section className="reservation-wrap">
        <header className="reservation-header">
          <h1 className="brand">Little Lemon</h1>
          <p className="city">Chicago</p>
          <h2 className="headline">RESERVATION CONFIRMED</h2>
        </header>

        <div className="confirm-card">
          <p className="confirm-line">
            <strong>Name:</strong> {data.fullName}
          </p>
          <p className="confirm-line">
            <strong>Date:</strong> {data.date}
          </p>
          <p className="confirm-line">
            <strong>Time:</strong> {data.time}
          </p>
          <p className="confirm-line">
            <strong>Guests:</strong> {data.guests}
          </p>
          <p className="confirm-line">
            <strong>Occasion:</strong> {data.occasion}
          </p>

          <div className="actions">
            <Link className="btn btn-primary" to="/reservation">
              Edit Reservation
            </Link>

            <button
              className="btn btn-ghost"
              onClick={() => {
                localStorage.removeItem(LS_KEY);
                navigate("/reservation");
              }}
            >
              New Reservation
            </button>
          </div>

          <div className="actions">
            <Link className="btn btn-primary btn-full" to="/">
              Back Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Confirm;
