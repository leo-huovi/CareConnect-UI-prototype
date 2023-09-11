import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {css} from "aphrodite";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import {useNavigate} from "react-router-dom";

const darkTextColor = '#000000';
const lightTextColor = '#999999';
const dateTextColor = '#355e86';
const textFontSize = 22;
const textFontTitle = 30;
const textFontVote = 24;

const Events_2_en = () => {



    const navigate = useNavigate();
    const handlePageChange = (direction) => {
        if (direction === 'left') {
            navigate('/');
        } else {
            navigate('/');
        }
    };


    return (
        <TouchableOpacity onPress={handlePageChange}>
            <View style={styles.outerContainer}>
                {/* First Container */}
                <View style={styles.container}>
                    {/* Box 1 */}
                    <View style={styles.box}>
                        <Image source={require('./images/kirjasto.jpg')} style={styles.image} />
                        <View style={styles.textContainer}>
                            <Text style={[styles.text, { color: darkTextColor, fontSize: textFontTitle, fontWeight: 'bold', marginBottom: 35 }]}>Volunteer tech help</Text>
                            <Text style={[styles.text, { color: lightTextColor, fontSize: textFontSize, fontWeight: 'bold', marginBottom: 4 }]}>Request help and advice from locals</Text>
                            <Text style={[styles.text, { color: dateTextColor, fontSize: textFontSize, fontWeight: 'bold' }]}>Volunteer to help -> Check local requests</Text>
                        </View>

                    </View>

                    {/* Box 2 */}
                    <View style={styles.box}>
                        <Image source={require('./images/helpdesk.jpeg')} style={styles.image} />
                        <View style={styles.textContainer}>
                            <Text style={[styles.text, { color: darkTextColor, fontSize: textFontTitle, fontWeight: 'bold', marginBottom: 35 }]}>Local service provider helpline</Text>
                            <Text style={[styles.text, { color: lightTextColor, fontSize: textFontSize, fontWeight: 'bold', marginBottom: 4 }]}>Professional help - Calls, Video, AI</Text>
                            <Text style={[styles.text, { color: dateTextColor, fontSize: textFontSize, fontWeight: 'bold' }]}>Open 24h</Text>
                        </View>

                    </View>

                </View>

                {/* Second Container */}
                <View style={[styles.container, styles.bottomContainer]}>
                    {/* Box 1 */}
                    <View style={styles.box_2}>
                        <View style={styles.textContainer_2}>
                            <Text style={[styles.text_3, { color: darkTextColor, fontSize: textFontTitle, fontWeight: 'bold' }]}>
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
        marginTop: 30,
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
        backgroundColor: '#C7EDE6',
        flexDirection: 'row',
        padding: 16,
        marginVertical: 10,
        borderRadius: 20,
    },
    box_2: {
        minWidth: 380,
        height: 120,
        width: '40%',
        maxWidth: 400,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        marginVertical: 10,
        borderRadius: 20,
    },
    image: {
        marginBottom: 'auto',
        marginTop: 'auto',
        width: 200,
        height: 120,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#A7ABA6',
    },
    mail: {
        marginBottom: 'auto',
        marginTop: 'auto',
        width: 120,
        height: 120,
    },
    textContainer: {
        flex: 1,
        backgroundColor: '#fbfcff',
        padding: 16,
        marginLeft: 16,
        borderRadius: 18,
    },
    textContainer_2: {
        minWidth: 230,
        marginRight: 200,
        backgroundColor: '#FFFFFF',
        flex: 1,
        marginLeft: 16,
        marginBottom: 'auto',
        marginTop: 'auto',
        marginVertical: 10,
    },
    text: {
        fontFamily: 'Roboto',
    },
    text_2: {
        fontFamily: 'Roboto',
        flex: 1,
        padding: 8,
        borderRadius: 8,
    },
    text_3: {
        fontFamily: 'Roboto',
        marginLeft: 20
    },
    bottomContainer: {
        alignSelf: 'flex-end',
        marginTop: 20,

    },
    starContainer: {
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 'auto',
        right: 20,
        borderRadius: 40,
    },
    star: {
        alignSelf: 'center',
        width: 64,
        height: 64
    }


});


export default Events_2_en;
