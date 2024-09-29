import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { Outlet } from 'react-router-dom';
import MyProfile from './Components/MyProfile';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
