import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MyNavbar from './components/common/Navbar';
import Home from './components/pages/Home';
import Workouts from './components/pages/Workouts';

import { Amplify } from 'aws-amplify';


import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

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
            <Route
              path='/workouts'
              element={<Workouts />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
