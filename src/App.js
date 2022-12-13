import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Update from './components/Update';
import Delete from './components/Delete';


function App() {
  return (
    <Router>
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

      <Route path = '/update' component={Update} />
      <Route path = '/delete' component={Delete} />
      
    </div>
    </Router>
  );
}

export default App;
