import React, { useState } from "react";

const CountRuns = () => {

  const [runs, setRuns] = useState(0);
  const [countsingle, setCountsingle] = useState(0);
  const [fours, setFours] = useState(0);
  const [countfour, setCountfour] = useState(0);
  const [sixes, setSixes] = useState(0);
  const [countsixruns, setCountsixruns] = useState(0);
  const [wide, setWide] = useState(0);
  const [countwide, setCountwide] = useState(0);

  const container = {
    width: "420px",
    margin: "50px auto",
    padding: "25px",
    borderRadius: "12px",
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    fontFamily: "Segoe UI, sans-serif",
    textAlign: "center"
  };

  const title = {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "15px"
  };

  const score = {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#2563eb",
    border: "2px solid #2563eb",
    borderRadius: "8px",
    padding: "10px",
    margin: "15px 0"
  };

  const statBox = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    marginBottom: "20px",
    textAlign: "left"
  };

  const stat = {
    backgroundColor: "#f3f4f6",
    padding: "8px",
    borderRadius: "6px",
    fontSize: "14px"
  };

  const buttonContainer = {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap"
  };

  const button = {
    padding: "10px 16px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#2563eb",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer"
  };

  const handleSingle = () => {
    setRuns(runs + 1);
    setCountsingle(countsingle + 1);
  };

  const handleFour = () => {
    setRuns(runs + 4);
    setFours(fours + 1);
    setCountfour(countfour + 4);
  };

  const handleSix = () => {
    setRuns(runs + 6);
    setSixes(sixes + 1);
    setCountsixruns(countsixruns + 6);
  };

  const handleWide = () => {
    setWide(wide + 1);
    setRuns(runs + 1);
    setCountwide(countwide + 1);
  };

  let message = null;

  if (runs >= 100) {
    message = <p> Century! Amazing batting</p>;
  } else if (runs >= 50) {
    message = <p> Half Century!</p>;
  }

  return (
    <div style={container}>

      <h2 style={title}>Cricket Scoreboard</h2>

      {message}

      <div style={score}>Runs: {runs}</div>

      <div style={statBox}>
        <div style={stat}>Singles: {countsingle}</div>
        <div style={stat}>Wides: {countwide}</div>
        <div style={stat}>Fours: {fours} ({countfour})</div>
        <div style={stat}>Sixes: {sixes} ({countsixruns})</div>
      </div>

      <div style={buttonContainer}>
        <button style={button} onClick={handleSingle}>Single</button>
        <button style={button} onClick={handleWide}>Wide</button>
        <button style={button} onClick={handleFour}>Four</button>
        <button style={button} onClick={handleSix}>Six</button>
      </div>

    </div>
  );
};

export default CountRuns;