import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home'
import Navbar from './Components/Navbar';
import Task from './Components/Task';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/task' element={<Task/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
