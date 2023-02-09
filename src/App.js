import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MyNavbar from './components/common/Navbar';
import Home from './components/common/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <div className="pages">
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
