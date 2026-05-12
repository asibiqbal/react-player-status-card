import './App.css';

function App() {
  return (
    <div className="container">
      <Player
        name="Asib"
        rating={102}
        country="Bangladesh"
        isOnline={true}
      />

      <Player
        name="Messi"
        rating={108}
        country="Argentina"
        isOnline={true}
      />
      <Player
        name="Ronaldo"
        rating={98}
        country="Portugal"
        isOnline={false}
      />
    </div>
  );
}

function Player({ name, rating = 'No Rating Yet', country, isOnline }) {

  const playerStatus =
    rating >= 100 ? 'Legend Player' : 'Normal Player';

  return (
    <div className={`player-card ${isOnline ? 'online' : 'offline'}`}>
      
      <span className="status">
        {isOnline ? '🟢 Online' : '🔴 Offline'}
      </span>

      <h2>Player Name: {name}</h2>

      <p>Rating: {rating}</p>

      <p>Country: {country}</p>

      <p>Player Status: {playerStatus}</p>

    </div>
  );
}

export default App;