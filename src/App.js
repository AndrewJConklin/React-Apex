import './App.css';
import Card from './components/Card';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <h1>Apex Leaderboards</h1>
      <h2>The Squad</h2>
      <div className='squad-container'>
        <Card
          games={20}
          wins={2}
          kills={30}
          deaths={22}
          kd={(30 / 22).toFixed(2)}
          damage={15000} />
        <Card
          games={20}
          wins={2}
          kills={30}
          deaths={22}
          kd={(30 / 22).toFixed(2)}
          damage={15000} />
        <Card
          games={20}
          wins={2}
          kills={30}
          deaths={22}
          kd={(30 / 22).toFixed(2)}
          damage={15000} />
        <Card
          games={20}
          wins={2}
          kills={30}
          deaths={22}
          kd={(30 / 22).toFixed(2)}
          damage={15000} />
      </div>

      <div className='game-log'>
        <h2>Game Log</h2>
        <Table
          place={'1st'}
          player1={'Conk'}
          player1kills={10}
          player1damage={2500}
          player1revives={0}
          player2={'Tim'}
          player2kills={5}
          player2damage={1000}
          player2revives={0}
          player3={'Bran'}
          player3kills={1}
          player3damage={10}
          player3revives={2}
        />
        <Table
          place={'1st'}
          player1={'Conk'}
          player1kills={10}
          player1damage={2500}
          player1revives={0}
          player2={'Tim'}
          player2kills={5}
          player2damage={1000}
          player2revives={0}
          player3={'Bran'}
          player3kills={1}
          player3damage={10}
          player3revives={2} />
        <Table
          place={'1st'}
          player1={'Conk'}
          player1kills={10}
          player1damage={2500}
          player1revives={0}
          player2={'Tim'}
          player2kills={5}
          player2damage={1000}
          player2revives={0}
          player3={'Bran'}
          player3kills={1}
          player3damage={10}
          player3revives={2} />
        <Table
          place={'1st'}
          player1={'Conk'}
          player1kills={10}
          player1damage={2500}
          player1revives={0}
          player2={'Tim'}
          player2kills={5}
          player2damage={1000}
          player2revives={0}
          player3={'Bran'}
          player3kills={1}
          player3damage={10}
          player3revives={2} />
      </div>
    </div >
  );
}

export default App;
