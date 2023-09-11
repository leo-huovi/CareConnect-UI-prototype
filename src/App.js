import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main_en from './Main_en';
import Events_en from './Events_en';
import Events_2_en from './Events_2_en';
import Main_fi from './Main_fi';
import Events_fi from './Events_fi';
import Events_2_fi from './Events_2_fi';


function App() {
  return (
      <Router style={{ height: '100%' }}>
        {/*<Navbar />*/}
        <Routes>
            <Route path='/' exact element={<Main_en />} />
            <Route path='/events' element={<Events_en />} />
            <Route path='/events_2' element={<Events_2_en />} />
            <Route path='/fi' exact element={<Main_fi />} />
            <Route path='/events_fi' element={<Events_fi />} />
            <Route path='/events_2_fi' element={<Events_2_fi />} />
        </Routes>
      </Router>
  );
}


export default App;