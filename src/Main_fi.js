
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { StyleSheet, css } from 'aphrodite';
import { BrowserRouter as Router, Route, Link, Switch, useNavigate } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';


function Main_fi() {
    const [activeIndex, setActiveIndex] = useState(null);
    const navigate = useNavigate();
    const gridContainerRef = useRef(null); // Ref for gridContainer


    const handleClick = (index) => {
        setActiveIndex(index);
        setTimeout(() => setActiveIndex(null), 550);
    };

    const ArrowButton = ({ direction, handleClick }) => {
        return (
            <button className={css(styles.arrowButton)} onClick={handleClick}>
                {direction === 'left' ? (
                    <FiChevronLeft className={css(styles.arrowIcon)} />
                ) : (
                    <FiChevronRight className={css(styles.arrowIcon)} />
                )}
            </button>
        );
    };

    const handlePageChange = (direction) => {
        if (direction === 'left') {
            navigate('/events');
        } else {
            navigate('/events_2');
        }
    };

    useEffect(() => {
        if (gridContainerRef.current) {
            const gridContainerHeight = gridContainerRef.current.clientHeight;
            const arrowContainer = document.getElementById('arrow-container');
            arrowContainer.style.marginTop = `${gridContainerHeight}px`;
        }
    }, []);




    return (
        <div className={css(styles.container)}>
            <h1>CareConnect - Palvelu</h1>

            <div className={css(styles.gridContainer)}>
                <div
                    className={`button ${activeIndex === 0 ? css(styles.animate) : ''}`}
                    onClick={() => handleClick(0)}
                >
                    <img src={require('./images/town.png')} alt="Talon tapahtumat" className={css(styles.image)} />
                    <p>Talon tapahtumat</p>
                </div>

                <div
                    className={`button ${activeIndex === 1 ? css(styles.animate) : ''}`}
                    onClick={() => handleClick(1)}
                >
                    <img src={require('./images/keys.png')} alt="Oma asuntosi" className={css(styles.image)} />
                    <p>Oma asuntosi</p>
                </div>

                <div
                    className={`button ${activeIndex === 2 ? css(styles.animate) : ''}`}
                    onClick={() => handleClick(2)}
                >
                    <img src={require('./images/fixing.png')} alt="Onko jokin rikki?" className={css(styles.image)} />
                    <p>Onko jokin rikki?</p>
                </div>


                <div
                    className={`button ${activeIndex === 3 ? css(styles.animate) : ''}`}
                    onClick={() => handleClick(3)}
                >
                    <img src={require('./images/medicine.png')} alt="Terveys" className={css(styles.image)} />
                    <p>Terveys</p>
                </div>


            </div>

            <div className={css(styles.divider)} />


            <div className={css(styles.gridContainer)}>



                <div
                    className={`button ${activeIndex === 4 ? css(styles.animate) : ''}`}
                    onClick={() => handleClick(4)}
                >
                    <img src={require('./images/company.png')} alt="Lähiseudun ryhmät"
                         className={css(styles.image)} />
                    <p>Lähiseudun ryhmät</p>
                </div>

                <div
                    className={`button ${activeIndex === 5 ? css(styles.animate) : ''}`}
                    onClick={() => handleClick(5)}
                >
                    <img src={require('./images/sports.png')} alt="Liikuntapalvelut" className={css(styles.image)} />
                    <p>Liikuntapalvelut</p>
                </div>

                <div
                    className={`button ${activeIndex === 6 ? css(styles.animate) : ''}`}
                    onClick={() => handleClick(6)}
                >
                    <img src={require('./images/school.png')} alt="Lähiseudun kurssit" className={css(styles.image)}
                    />
                    <p>Lähiseudun kurssit</p>
                </div>

                <div
                    className={`button ${activeIndex === 7 ? css(styles.animate) : ''}`}
                    onClick={() => handleClick(7)}
                >
                    <img src={require('./images/chess.png')} alt="Harrastukset" className={css(styles.image)} />
                    <p>Harrastukset</p>
                </div>
            </div>

            <div className={css(styles.arrowContainer)}>
                {/* Left arrow button */}
                <ArrowButton direction="left" handleClick={() => handlePageChange('left')} />

                {/* Right arrow button */}
                <ArrowButton direction="right" handleClick={() => handlePageChange('right')} />
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
    title: {
        fontSize: '48px',
        '@media (max-width: 600px)': {
            fontSize: '36px',
        },
    },
    divider: {
        height: '1px',
        width: '600px',
        minHeight: '1px',
        background: 'gray',
        margin: '20px 0',
        '@media (max-width: 900px)': {
            width: '400px',
        },
        '@media (max-width: 600px)': {
            width: '250px',
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
        fontSize: '24px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '5px',
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
    image: {
        width: '200px',
        height: '200px',
        '@media (max-width: 900px)': {
            width: '100px',
            height: '100px',
        },
        '@media (max-width: 600px)': {
            width: '150px',
            height: '150px',
        },
    },
    text: {
        '@media (max-width: 900px)': {
            fontSize: '12px',
        },
    },
    arrowContainer: {
        position: 'fixed',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        justifyContent: 'space-between',
        '@media (max-width: 900px)': {
            gridTemplateColumns: 'repeat(2, 1fr)',
            width: '1200px',
        },
        '@media (max-width: 600px)': {
            gridTemplateColumns: '1fr',
            width: '1200px',
        },
        width: '100%',
        padding: '0 20px',
        boxSizing: 'border-box',
        zIndex: '999',
        marginTop: '580px',
    },
    arrowButton: {
        backgroundColor: 'transparent',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
    },
    arrowIcon: {
        fontSize: '48px',
        color: 'teal',
    },

});

export default Main_fi;
