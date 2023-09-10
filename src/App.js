import React, { useState } from 'react';
import './App.css';
import { StyleSheet, css } from 'aphrodite';

function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
    setTimeout(() => setActiveIndex(null), 550);
  };

  return (
      <div className={css(styles.container)}>
        <h1>CareConnect - Palvelu</h1>

        <div className={css(styles.gridContainer)}>
          <div
              className={`button ${activeIndex === 0 ? css(styles.animate) : ''}`}
              onClick={() => handleClick(0)}
          >
            <img src={require('./images/town.png')} alt="Talon tapahtumat" />
            <p>Talon tapahtumat</p>
          </div>

          <div
              className={`button ${activeIndex === 1 ? css(styles.animate) : ''}`}
              onClick={() => handleClick(1)}
          >
            <img src={require('./images/keys.png')} alt="Oma asuntosi" />
            <p>Oma asuntosi</p>
          </div>

          <div
              className={`button ${activeIndex === 2 ? css(styles.animate) : ''}`}
              onClick={() => handleClick(2)}
          >
            <img src={require('./images/fixing.png')} alt="Onko jokin rikki?" />
            <p>Onko jokin rikki?</p>
          </div>


        <div
              className={`button ${activeIndex === 3 ? css(styles.animate) : ''}`}
              onClick={() => handleClick(3)}
          >
            <img src={require('./images/medicine.png')} alt="Terveys" />
            <p>Terveys</p>
          </div>


        </div>

        <div className={css(styles.divider)} />


        <div className={css(styles.gridContainer)}>



        <div
              className={`button ${activeIndex === 4 ? css(styles.animate) : ''}`}
              onClick={() => handleClick(4)}
          >
            <img src={require('./images/company.png')} alt="Lähiseudun ryhmät" />
            <p>Lähiseudun ryhmät</p>
          </div>

          <div
              className={`button ${activeIndex === 5 ? css(styles.animate) : ''}`}
              onClick={() => handleClick(5)}
          >
            <img src={require('./images/sports.png')} alt="Liikuntapalvelut" />
            <p>Liikuntapalvelut</p>
          </div>

          <div
              className={`button ${activeIndex === 6 ? css(styles.animate) : ''}`}
              onClick={() => handleClick(6)}
          >
            <img src={require('./images/school.png')} alt="Lähiseudun kurssit" />
            <p>Lähiseudun kurssit</p>
          </div>

          <div
              className={`button ${activeIndex === 7 ? css(styles.animate) : ''}`}
              onClick={() => handleClick(7)}
          >
            <img src={require('./images/chess.png')} alt="Harrastukset" />
            <p>Harrastukset</p>
          </div>
        </div>
      </div>
  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  divider: {
    height: '1px',
    width: '800px',
    minHeight: '1px',
    background: 'gray',
    margin: '20px 0',
    '@media (max-width: 900px)': {
      width: '500px',
    },
    '@media (max-width: 600px)': {
      width: '300px',
    },
  },
  animate: {
    animationName: {
      '0%': {
        transform: 'scale(0.85)'
      },
      '50%': {
        transform: 'scale(1.15)'
      },
      '100%': {
        transform: 'scale(0.85)'
      }
    },
    animationDuration: '550ms',
    animationTimingFunction: 'ease-in-out'
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    marginBottom: '20px',
    '@media (max-width: 900px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      width: '500px',
    },
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
      width: '300px',
    },
  },
});


export default App;