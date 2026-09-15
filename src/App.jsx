import { useEffect, useState } from "react";
import "./App.css";

const IMG = "/images/gta-v";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeImage ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeImage]);

  const scrollTo = (id) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="site">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <header className="header">
        <button
          className="rockstar-logo"
          onClick={() => scrollTo("home")}
          aria-label="Rockstar Games"
        >
          R*
        </button>

        <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
          <button onClick={() => scrollTo("home")}>HOME</button>
          <button onClick={() => scrollTo("story")}>GTA-V</button>
          <button onClick={() => scrollTo("online")}>GTA ONLINE</button>
          <button onClick={() => scrollTo("features")}>FEATURES</button>
          <button onClick={() => scrollTo("media")}>MEDIA</button>
        </nav>

        <div className="header-right">
          <button className="buy-button" onClick={() => scrollTo("buy")}>
            BUY NOW
          </button>

          <button
            className={`menu-button ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}
      <section id="home" className="hero">
        <div className="hero-image" />

        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="hero-logo">
            <span className="gta">GRAND</span>
            <span className="gta">THEFT</span>
            <span className="gta">AUTO</span>

            <div className="v-logo">
              <span>V</span>
              <small>FIVE</small>
            </div>
          </div>

          <button
            className="hero-button"
            onClick={() => scrollTo("story")}
          >
            DISCOVER GTA-V
          </button>
        </div>

        <div className="scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* =====================================================
          WELCOME
      ===================================================== */}
      <section className="welcome section-dark">
        <div className="welcome-background" />

        <div className="welcome-content">
          <p className="eyebrow">ROCKSTAR GAMES PRESENTS</p>

          <h1>
            WELCOME TO
            <br />
            LOS SANTOS
          </h1>

          <div className="gold-line" />

          <p className="large-description">
            When a young street hustler, a retired bank robber, and a
            terrifying psychopath find themselves entangled with some of
            the most frightening and deranged elements of the criminal
            underworld, the U.S. government, and the entertainment
            industry, they must pull off a series of dangerous heists
            to survive in a ruthless city in which they can trust
            nobody — least of all each other.
          </p>
        </div>
      </section>

      {/* =====================================================
          STORY
      ===================================================== */}
      <section id="story" className="story section-light">
        <div className="story-image">
          <img
            src={`${IMG}/story.jpg`}
            alt="Grand Theft Auto V"
          />
        </div>

        <div className="story-content">
          <p className="eyebrow dark">GRAND THEFT AUTO V</p>

          <h2>
            THREE
            <br />
            PROTAGONISTS.
            <br />
            ONE CITY.
          </h2>

          <div className="black-line" />

          <p>
            Los Santos is a sprawling sun-soaked metropolis full of
            self-help gurus, starlets and fading celebrities once the
            envy of the Western world.
          </p>

          <p>
            Now, struggling to stay afloat in an era of economic
            uncertainty and cheap reality TV, three very different
            criminals risk everything in a series of daring and
            dangerous heists.
          </p>

          <div className="character-list">
            <div>
              <strong>MICHAEL</strong>
              <span>THE RETIRED BANK ROBBER</span>
            </div>

            <div>
              <strong>FRANKLIN</strong>
              <span>THE YOUNG STREET HUSTLER</span>
            </div>

            <div>
              <strong>TREVOR</strong>
              <span>THE TERRIFYING PSYCHOPATH</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CHARACTERS
      ===================================================== */}
      <section className="characters section-black">
        <div className="characters-heading">
          <p className="eyebrow">MEET THE CREW</p>

          <h2>
            THE
            <br />
            PROTAGONISTS
          </h2>
        </div>

        <div className="characters-grid">
          <Character
            image={`${IMG}/michael.jpg`}
            name="MICHAEL"
            number="01"
          />

          <Character
            image={`${IMG}/franklin.jpg`}
            name="FRANKLIN"
            number="02"
          />

          <Character
            image={`${IMG}/trevor.jpg`}
            name="TREVOR"
            number="03"
          />
        </div>
      </section>

      {/* =====================================================
          GTA ONLINE
      ===================================================== */}
      <section id="online" className="online">
        <div className="online-image">
          <img
            src={`${IMG}/online.jpg`}
            alt="GTA Online"
          />
        </div>

        <div className="online-content">
          <p className="eyebrow">GRAND THEFT AUTO ONLINE</p>

          <h2>
            YOUR
            <br />
            WORLD.
            <br />
            YOUR
            <br />
            RULES.
          </h2>

          <div className="gold-line" />

          <p>
            Experience GTA Online, a dynamic and ever-evolving online
            universe where you can rise from street-level hustler to
            become a kingpin of your own criminal empire.
          </p>

          <p>
            Pull off daring co-operative heists, compete in races,
            explore Los Santos with friends and build your criminal
            empire your way.
          </p>

          <button className="outline-button">
            EXPLORE GTA ONLINE
          </button>
        </div>
      </section>

      {/* =====================================================
          FEATURES
      ===================================================== */}
      <section id="features" className="features section-light">
        <div className="features-title">
          <p className="eyebrow dark">THE WORLD OF GTAV</p>

          <h2>
            EXPLORE
            <br />
            LOS SANTOS
          </h2>

          <div className="black-line" />
        </div>

        <div className="features-grid">
          <Feature
            number="01"
            title="STUNNING VISUALS"
            text="Explore a massive open world filled with incredible detail, lighting and atmosphere."
          />

          <Feature
            number="02"
            title="A LIVING WORLD"
            text="Los Santos and Blaine County are filled with characters, activities and unexpected events."
          />

          <Feature
            number="03"
            title="IMMERSIVE CONTROLS"
            text="Drive, fly, shoot and explore a world designed to keep you completely immersed."
          />

          <Feature
            number="04"
            title="3D AUDIO"
            text="Experience the sounds of the city, traffic, aircraft, gunfire and everything around you."
          />
        </div>
      </section>

      {/* =====================================================
          MEDIA / GALLERY
      ===================================================== */}
      <section id="media" className="media section-black">
        <div className="media-heading">
          <p className="eyebrow">MEDIA</p>

          <h2>
            LOS SANTOS
            <br />
            IN MOTION
          </h2>
        </div>

        <div className="gallery">
          <GalleryImage
            src={`${IMG}/gallery-1.jpg`}
            onClick={setActiveImage}
          />

          <GalleryImage
            src={`${IMG}/gallery-2.jpg`}
            onClick={setActiveImage}
          />

          <GalleryImage
            src={`${IMG}/gallery-3.jpg`}
            onClick={setActiveImage}
          />

          <GalleryImage
            src={`${IMG}/gallery-4.jpg`}
            onClick={setActiveImage}
          />

          <GalleryImage
            src={`${IMG}/gallery-5.jpg`}
            onClick={setActiveImage}
          />

          <GalleryImage
            src={`${IMG}/gallery-6.jpg`}
            onClick={setActiveImage}
          />
        </div>
      </section>

      {/* =====================================================
          BUY
      ===================================================== */}
      <section id="buy" className="buy-section">
        <div className="buy-background" />

        <div className="buy-content">
          <p className="eyebrow">GRAND THEFT AUTO V</p>

          <h2>
            EXPERIENCE
            <br />
            LOS SANTOS
          </h2>

          <p>
            Includes Grand Theft Auto V Story Mode and GTA Online.
          </p>

          <button className="buy-now">
            BUY NOW
          </button>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            R*
          </div>

          <div className="footer-links">
            <button onClick={() => scrollTo("home")}>HOME</button>
            <button onClick={() => scrollTo("story")}>GTAV</button>
            <button onClick={() => scrollTo("online")}>
              GTA ONLINE
            </button>
            <button onClick={() => scrollTo("media")}>MEDIA</button>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Rockstar Games</span>

          <span>
            GRAND THEFT AUTO V
          </span>

          <span>
            ALL RIGHTS RESERVED
          </span>
        </div>
      </footer>

      {/* =====================================================
          IMAGE LIGHTBOX
      ===================================================== */}
      {activeImage && (
        <div
          className="lightbox"
          onClick={() => setActiveImage(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setActiveImage(null)}
          >
            ×
          </button>

          <img
            src={activeImage}
            alt=""
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

/* =========================================================
   CHARACTER
========================================================= */

function Character({ image, name, number }) {
  return (
    <div className="character">
      <img src={image} alt={name} />

      <div className="character-overlay" />

      <div className="character-number">
        {number}
      </div>

      <div className="character-name">
        {name}
      </div>
    </div>
  );
}

/* =========================================================
   FEATURE
========================================================= */

function Feature({ number, title, text }) {
  return (
    <article className="feature">
      <div className="feature-number">
        {number}
      </div>

      <h3>{title}</h3>

      <p>{text}</p>
    </article>
  );
}

/* =========================================================
   GALLERY
========================================================= */

function GalleryImage({ src, onClick }) {
  return (
    <button
      className="gallery-item"
      onClick={() => onClick(src)}
    >
      <img src={src} alt="" />

      <span className="gallery-plus">
        +
      </span>
    </button>
  );
}

export default App;