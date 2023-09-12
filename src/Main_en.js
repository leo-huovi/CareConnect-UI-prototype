
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { StyleSheet, css } from 'aphrodite';
import { BrowserRouter as Router, Route, Link, Switch, useNavigate } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';


function Main_en() {
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
            <h1>CareConnect Hub</h1>

            <div className={css(styles.gridContainer)}>
                <div
                    className={`button ${activeIndex === 0 ? css(styles.animate) : ''}`}
                    onClick={() => handleClick(0)}
                >
                    <img src={require('./images/town.png')} alt="Neighborhood events" className={css(styles.image)} />
                    <p>Neighborhood events</p>
                </div>

                <div
                    className={`button ${activeIndex === 1 ? css(styles.animate) : ''}`}
                    onClick={() => handleClick(1)}
                >
                    <img src={require('./images/keys.png')} alt="Your apartment" className={css(styles.image)} />
                    <p>Your apartment</p>
                </div>

                <div
                    className={`button ${activeIndex === 2 ? css(styles.animate) : ''}`}
                    onClick={() => handleClick(2)}
                >
                    <img src={require('./images/fixing.png')} alt="Something broken?" className={css(styles.image)} />
                    <p>Is something broken?</p>
                </div>


                <div
                    className={`button ${activeIndex === 3 ? css(styles.animate) : ''}`}
                    onClick={() => handleClick(3)}
                >
                    <img src={require('./images/medicine.png')} alt="Health help" className={css(styles.image)} />
                    <p>Health help</p>
                </div>


            </div>

            <div className={css(styles.divider)} />


            <div className={css(styles.gridContainer)}>



                <div
                    className={`button ${activeIndex === 4 ? css(styles.animate) : ''}`}
                    onClick={() => handleClick(4)}
                >
                    <img src={require('./images/company.png')} alt="Local groups"
                         className={css(styles.image)} />
                    <p>Local groups</p>
                </div>

                <div
                    className={`button ${activeIndex === 5 ? css(styles.animate) : ''}`}
                    onClick={() => handleClick(5)}
                >
                    <img src={require('./images/sports.png')} alt="Fitness for you" className={css(styles.image)} />
                    <p>Fitness for you</p>
                </div>

                <div
                    className={`button ${activeIndex === 6 ? css(styles.animate) : ''}`}
                    onClick={() => handleClick(6)}
                >
                    <img src={require('./images/school.png')} alt="Community courses" className={css(styles.image)}
                    />
                    <p>Community courses</p>
                </div>

                <div
                    className={`button ${activeIndex === 7 ? css(styles.animate) : ''}`}
                    onClick={() => handleClick(7)}
                >
                    <img src={require('./images/chess.png')} alt="Gaming friends" className={css(styles.image)} />
                    <p>Gaming friends</p>
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
        fontSize: '20px',
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
        width: '100%',
        padding: '0 20px',
        boxSizing: 'border-box',
        zIndex: '999',
        marginTop: '30%',
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

export default Main_en;
