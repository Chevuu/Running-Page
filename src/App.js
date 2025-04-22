import React, { useState } from 'react';
import './App.css';

// ────────────────────────────────────────────────────────────────
// Reusable Box component: wraps its children in a coloured box
// with optional font overrides via props.
// ────────────────────────────────────────────────────────────────
function Box({ color, fontSize, fontColor, className = '', style = {}, children }) {
  const combined = { ...style };
  if (fontSize) combined.fontSize = fontSize;
  if (fontColor) combined.color = fontColor;

  return (
    <div className={`box ${color} ${className}`} style={combined}>
      {children}
    </div>
  );
}

// ────────────────────────────────────────────────────────────────
// LoadingBar: simple progress bar at the bottom of the top panel.
// ────────────────────────────────────────────────────────────────
function LoadingBar({ progress = 0 }) {
  return (
    <div className="loading-container">
      <div
        className="loading-bar"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// ────────────────────────────────────────────────────────────────
// Main App component: grid of Top / Middle / Bottom sections.
// Middle section has a two‑panel red area that expands/collapses.
// ────────────────────────────────────────────────────────────────
function App() {
  const [active, setActive] = useState(null);
  const anyActive = Boolean(active);

  // Once any panel is open, use smaller buttons everywhere.
  const btnClass = anyActive ? 'btn-small' : 'btn';

  // Toggle a panel on/off
  const toggle = (panel) => setActive((prev) => (prev === panel ? null : panel));

  // Example live progress value (could come from Strava, etc.)
  const progress = 65;

  return (
    <div className="grid-container">
      {/* ─── TOP SECTION ─── */}
      <div className="grid-row top">
        <div className="gradient-container">
          <div className="gradient-box" />
          <LoadingBar progress={progress} />
        </div>
      </div>

      {/* ─── MIDDLE SECTION ─── */}
      <div className="grid-row middle">
        {/* Left column: static text boxes */}
        <div className="middle-left">
          <Box color="black" fontSize="1.2rem" fontColor="#fff">
            BENELUX RUNNING FOR
          </Box>
          <Box color="black" fontSize="3vw" fontColor="#ffe0c4">
            STUDENTS IN SERBIA
          </Box>
          <div className="small-row">
            <Box color="yellow" fontSize="0.9rem" fontColor="#000">
              9/5 – 11/5
            </Box>
            <Box color="darkblue" fontSize="0.9rem" fontColor="#fff">
              ~XXX km
            </Box>
          </div>
        </div>

        {/* Right column: two red panels that expand/collapse */}
        <div className={`middle-right ${active ? `${active}-active` : ''}`}>
          {/* Donate panel (top) */}
          <div className="top-red">
            {active === 'donate' ? (
              <div className="btn-list">
                <button className={btnClass}>Tikkie</button>
                <button className={btnClass}>Paypal</button>
                <button className={btnClass}>Revolut</button>
              </div>
            ) : (
              <button className={btnClass} onClick={() => toggle('donate')}>
                Donate
              </button>
            )}
          </div>

          {/* Info panel (bottom) */}
          <div className="bottom-red">
            {active === 'info' ? (
              <div className="btn-list">
                <button className={btnClass}>Info 1</button>
                <button className={btnClass}>Info 2</button>
                <button className={btnClass}>Info 3</button>
              </div>
            ) : (
              <button className={btnClass} onClick={() => toggle('info')}>
                Info
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ─── BOTTOM SECTION ─── */}
      <div className="grid-row bottom">
        <Box color="green" />
        <Box color="yellow" />
        <Box color="darkblue" />
        <Box color="red" />
      </div>
    </div>
  );
}

export default App;