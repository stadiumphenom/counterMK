import { useState } from 'react';
import story from './story';
import './index.css';
import Stats from './Stats';

function App() {
  const [currentNode, setCurrentNode] = useState('intro');
  const [stats, setStats] = useState({ freedom: 50, awareness: 50 });

  const makeChoice = (choice) => {
    const { effect, next } = choice;
    if (effect) {
      setStats(prev => ({
        freedom: Math.min(100, Math.max(0, prev.freedom + (effect.freedom || 0))),
        awareness: Math.min(100, Math.max(0, prev.awareness + (effect.awareness || 0))),
      }));
    }
    setCurrentNode(next);
  };

  const node = story[currentNode];

  return (
    <div className="app">
      <h1>counterMK: Obey OS</h1>
      <Stats stats={stats} />
      <p>{node.text}</p>
      <div className="choices">
        {node.choices.map((choice, index) => (
          <button key={index} onClick={() => makeChoice(choice)}>{choice.text}</button>
        ))}
      </div>
    </div>
  );
}

export default App;
