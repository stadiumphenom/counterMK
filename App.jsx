import { useState } from "react";
import { story } from "./story";

export default function App() {
  const [node, setNode] = useState("start");

  const current = story[node];

  const go = (next) => setNode(next);

  return (
    <div className="app">
      <div className="header">
        <div className="brand">counterMK ▸ OBEY&nbsp;OS</div>
        <div className="badge">v0.1 prototype</div>
      </div>

      <div className="text">{current.text}</div>

      <div className="choices">
        {current.choices.map((c, i) => (
          <button key={i} className="choice" onClick={() => go(c.next)}>
            {c.text}
          </button>
        ))}
      </div>

      <div className="hr" />

      <div className="footer">
        <span className="small">Crow Protocol: “Different name, same code.”</span>
        <span className="small">Node: {node}</span>
      </div>
    </div>
  );
}
