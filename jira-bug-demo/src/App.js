import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch} from 'react-router-dom'
import Loading from './components/Loading/Loading';
function App() {
  return (
    <BrowserRouter>
      <Loading />
      
      <Switch>

      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
