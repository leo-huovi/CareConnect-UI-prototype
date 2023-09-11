import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Events from './Events';


function App() {
  return (
      <Router style={{ height: '100%' }}>
        {/*<Navbar />*/}
        <Routes>
          <Route path='/' exact element={<Main />} />
          <Route path='/events' element={<Events />} />
          {/*<Route path='/contact' element={<Contact />} />*/}
          {/*<Route path='/blogs' element={<Blogs />} />*/}
          {/*<Route path='/sign-up' element={<SignUp />} />*/}
        </Routes>
      </Router>
  );
}


export default App;