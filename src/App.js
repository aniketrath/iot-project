import React from 'react';
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { Homepage } from './pages/homepage/index';
import { AddFace } from './pages/newfaceid/index';
import { AddFingerPrint} from './pages/newfprintid/AddFingerPrint'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/addfaceid" element={<AddFace/>} />
        <Route path="/addfprintid" element={<AddFingerPrint/>} />
      </Routes>
    </Router>
  );
}

export default App;
