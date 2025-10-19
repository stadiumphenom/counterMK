function Stats({ stats }) {
  return (
    <div className="stats">
      <div className="stat">
        <label>🧠 Awareness</label>
        <progress value={stats.awareness} max="100"></progress>
      </div>
      <div className="stat">
        <label>🔓 Freedom</label>
        <progress value={stats.freedom} max="100"></progress>
      </div>
    </div>
  );
}

export default Stats;
