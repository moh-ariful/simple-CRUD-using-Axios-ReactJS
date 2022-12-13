import './App.css';
import Create from './components/Create';
import Read from './components/Read';


function App() {
  return (
    <div className='main'>
      <div>
      <h1>React CRUD Operations Using Axios</h1>
      </div>

      <div>
      <Create />
      </div>

      <div style={{marginTop: 30}}>
        <Read />
      </div>
      
    </div>
  );
}

export default App;
