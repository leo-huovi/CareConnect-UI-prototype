import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {css} from "aphrodite";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import {useNavigate} from "react-router-dom";

const darkTextColor = '#000000';
const lightTextColor = '#999999';
const greenTextColor = '#00FF00';
const textFontSize = 16;
const textFontTitle = 32;

const Events = () => {



    const navigate = useNavigate();
    const handlePageChange = (direction) => {
        if (direction === 'left') {
            navigate('/events');
        } else {
            navigate('/index');
        }
    };


    return (
        <TouchableOpacity onPress={handlePageChange}>
            <View style={styles.outerContainer}>
                {/* First Container */}
                <View style={styles.container}>
                    {/* Box 1 */}
                    <View style={styles.box}>
                        <Image source={require('./images/company.png')} style={styles.image} />
                        <View style={styles.textContainer}>
                            <Text style={[styles.text, { color: darkTextColor, fontSize: textFontTitle, fontWeight: 'bold', marginBottom: 35 }]}>Text 1</Text>
                            <Text style={[styles.text, { color: lightTextColor, fontSize: textFontSize }]}>Text 2</Text>
                            <Text style={[styles.text, { color: greenTextColor, fontSize: textFontSize }]}>Text 3</Text>
                        </View>
                    </View>

                    {/* Box 2 */}
                    <View style={styles.box}>
                        <Image source={require('./images/company.png')} style={styles.image} />
                        <View style={styles.textContainer}>
                            <Text style={[styles.text, { color: darkTextColor, fontSize: textFontTitle, fontWeight: 'bold', marginBottom: 35 }]}>Text 3</Text>
                            <Text style={[styles.text, { color: lightTextColor, fontSize: textFontSize }]}>Text 4</Text>
                            <Text style={[styles.text, { color: greenTextColor, fontSize: textFontSize }]}>Text 5</Text>
                        </View>
                    </View>
                </View>

                {/* Second Container */}
                <View style={[styles.container, styles.bottomContainer]}>
                    {/* Box 1 */}
                    <View style={styles.box_2}>
                        <View style={styles.textContainer_2}>
                            <Text style={[styles.text, { color: darkTextColor, fontSize: textFontTitle, fontWeight: 'bold', marginBottom: 35 }]}>
                                Ehdota omaa
                            </Text>
                        </View>
                    </View>

                </View>
            </View>
        </TouchableOpacity>



    );
};

const styles = StyleSheet.create({

    body: {
        height: '100%',
        width: '100%'
    },
    outerContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',

    },
    container: {
        flex: 1,
        width: '100%',
        '@media (min-width: 900px)': {
            width: 800,
        },
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        height: 200,
        width: '90%',
        maxWidth: 1000,
        backgroundColor: '#0000FF',
        flexDirection: 'row',
        padding: 16,
        marginVertical: 10,
        borderRadius: 20,
    },
    box_2: {
        height: 200,
        width: '40%',
        maxWidth: 800,
        backgroundColor: '#8855FF',
        flexDirection: 'row',
        padding: 16,
        marginVertical: 10,
        borderRadius: 20,
    },
    image: {
        width: 80,
        height: 80,
    },
    textContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 16,
        marginLeft: 16,
        borderRadius: 8,
    },
    textContainer_2: {
        flex: 1,
        padding: 16,
        marginLeft: 16,
        borderRadius: 8,
    },
    text: {
        marginBottom: 8,
    },
    bottomContainer: {
        alignSelf: 'flex-end',
        marginTop: 20,

    },
});


export default Events;
