import { useEffect, useMemo, useRef, useState } from "react";
import { navLinks } from "../data.js";
import "../styles/NavBar.css";
import logo from "../assets/Logo.svg";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const menuRef = useRef(null);

  const links = useMemo(() => (Array.isArray(navLinks) ? navLinks : []), []);

  useEffect(() => {
    function onDown(e) {
      if (!open) return;
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, [open]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const ids = links
      .map((l) => l.targetId)
      .filter(Boolean)
      .filter((id) => id !== "home");

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { root: null, threshold: [0.3, 0.6] }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, [links]);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY < 40) setActive("home");
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleNavClick(link) {
    return (e) => {
      setOpen(false);


      if (link.href === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActive("home");
        return;
      }

      if (typeof link.href === "string" && link.href.startsWith("#")) {
        e.preventDefault();
        const id = link.href.slice(1);
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          setActive(id);
        }
      }
    };
  }

  return (
    <header className="nav">
      <div className="nav-inner" ref={menuRef}>
        <a
          href="/"
          className="nav-brand"
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActive("home");
          }}
        >
          <img src={logo} alt="Little Lemon Logo" className="nav-logo" />
        </a>

        <nav className={`nav-menu ${open ? "is-open" : ""}`} aria-label="Primary">
          {links.map((link) => {
            const isActive = active === link.targetId;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`nav-link ${isActive ? "is-active" : ""}`}
                onClick={handleNavClick(link)}
              >
                {link.title}
              </a>
            );
          })}
        </nav>

        <button
          className={`nav-toggle ${open ? "is-open" : ""}`}
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-bar" />
          <span className="nav-bar" />
          <span className="nav-bar" />
        </button>
      </div>

      <div
        className={`nav-overlay ${open ? "is-open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
    </header>
  );
}
