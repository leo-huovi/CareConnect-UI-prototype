import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Events from './Events';
import Events_2 from './Events_2';


function App() {
  return (
      <Router style={{ height: '100%' }}>
        {/*<Navbar />*/}
        <Routes>
          <Route path='/' exact element={<Main />} />
          <Route path='/events' element={<Events />} />
            <Route path='/events_2' element={<Events_2 />} />
          {/*<Route path='/contact' element={<Contact />} />*/}
          {/*<Route path='/blogs' element={<Blogs />} />*/}
          {/*<Route path='/sign-up' element={<SignUp />} />*/}
        </Routes>
      </Router>
  );
}


export default App;