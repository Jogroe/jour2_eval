import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Form } from './composants/Form';
import { Redac } from './composants/Redac';

function App() {
  return (
    <div className="container">
      <Redac></Redac>
    </div>
  );
}

export default App;
