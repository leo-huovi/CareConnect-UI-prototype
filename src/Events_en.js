import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { css } from "aphrodite";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const darkTextColor = '#000000';
const lightTextColor = '#999999';
const dateTextColor = '#355e86';
const textFontSize = 23;
const textFontTitle = 32;
const textFontVote = 20;

const Events_en = () => {
    const navigate = useNavigate();
    const handlePageChange = (direction) => {
        if (direction === 'left') {
            navigate('/');
        } else {
            navigate('/');
        }
    };

    const [boxSize, setBoxSize] = useState(new Animated.Value(1));

    const handleBoxClick = () => {
        Animated.sequence([
            Animated.timing(boxSize, {
                toValue: 1.2, // Enlargen the box
                duration: 200, // Animation duration in milliseconds
                useNativeDriver: true,
                opacity: 1
            }),
            Animated.timing(boxSize, {
                toValue: 1, // Shrink the box back to its original size
                duration: 200,
                useNativeDriver: true,
                opacity: 1
            }),
        ]).start();
    };

    const boxStyle = [
        styles.box_2,
        { transform: [{ scale: boxSize }] },
    ];

    const [starContainerSize, setStarContainerSize] = useState(new Animated.Value(1));

    const handleStarContainerClick = () => {
        Animated.sequence([
            Animated.timing(starContainerSize, {
                toValue: 1.3, // Enlargen the starContainer
                duration: 200, // Animation duration in milliseconds
                useNativeDriver: true,
                opacity: 1
            }),
            Animated.timing(starContainerSize, {
                toValue: 1, // Shrink the starContainer back to its original size
                duration: 200,
                useNativeDriver: true,
                opacity: 1
            }),
        ]).start();
    };

    const [starContainer2Size, setStarContainer2Size] = useState(new Animated.Value(1));

    const handleStarContainer2Click = () => {
        Animated.sequence([
            Animated.timing(starContainer2Size, {
                toValue: 1.3, // Enlargen the starContainer
                duration: 200, // Animation duration in milliseconds
                useNativeDriver: true,
                opacity: 1
            }),
            Animated.timing(starContainer2Size, {
                toValue: 1, // Shrink the starContainer back to its original size
                duration: 200,
                useNativeDriver: true,
                opacity: 1
            }),
        ]).start();
    };


    return (
        <View style={styles.outerContainer}>
            {/* First Container */}
            <View style={styles.container}>
                {/* Box 1 */}
                <View style={styles.box}>
                    <Image source={require('./images/grillaus.jpg')} style={styles.image} />
                    <View style={styles.textContainer}>
                        <Text style={[styles.text, { color: darkTextColor, fontSize: textFontTitle, fontWeight: 'bold', marginBottom: 35 }]}>Grilling and lunch together</Text>
                        <Text style={[styles.text, { color: lightTextColor, fontSize: textFontSize, fontWeight: 'bold', marginBottom: 4 }]}>Thursday 18.00 - 20.00</Text>
                        <Text style={[styles.text, { color: dateTextColor, fontSize: textFontSize, fontWeight: 'bold' }]}>Kotikatu 1</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.6} onPress={handleStarContainerClick}>
                        <Animated.View style={[styles.starContainer, { transform: [{ scale: starContainerSize }] }]}>
                            <Image source={require('./images/star.png')} style={styles.star} />
                            <Text style={[styles.text_2, { color: darkTextColor, fontSize: textFontVote, fontWeight: 'bold' }]} numberOfLines={1}>I'm in!</Text>
                        </Animated.View>
                    </TouchableOpacity>

                </View>

                {/* Box 2 */}
                <View style={styles.box}>
                    <Image source={require('./images/pihatalkoot.jpg')} style={styles.image} />
                    <View style={styles.textContainer}>
                        <Text style={[styles.text, { color: darkTextColor, fontSize: textFontTitle, fontWeight: 'bold', marginBottom: 35 }]}>Yard cleaning</Text>
                        <Text style={[styles.text, { color: lightTextColor, fontSize: textFontSize, fontWeight: 'bold', marginBottom: 4 }]}>This saturday - 12.00 </Text>
                        <Text style={[styles.text, { color: dateTextColor, fontSize: textFontSize, fontWeight: 'bold' }]}>Kotikatu 1 </Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.6} onPress={handleStarContainer2Click}>
                        <Animated.View style={[styles.starContainer, { transform: [{ scale: starContainer2Size }] }]}>
                            <Image source={require('./images/star.png')} style={styles.star} />
                            <Text style={[styles.text_2, { color: darkTextColor, fontSize: textFontVote, fontWeight: 'bold' }]} numberOfLines={1}>I'm in!</Text>
                        </Animated.View>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Second Container */}
            <TouchableOpacity activeOpacity={0.6}  onPress={handleBoxClick}>
                <Animated.View style={boxStyle}>
                    <View style={[styles.container, styles.bottomContainer]}>
                        {/* Box 1 */}
                        <View style={styles.box_2}>
                            <Image source={require('./images/mailpost.png')} style={styles.mail} />
                            <View style={styles.textContainer_2}>
                                <Text style={[styles.text_3, { color: darkTextColor, fontSize: textFontVote, fontWeight: 'bold' }]}>
                                    Your own idea!
                                </Text>
                            </View>
                        </View>
                    </View>
                </Animated.View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        height: '100%',
        width: '100%'
    },
    outerContainer: {
    marginTop: 60,
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
        backgroundColor: '#e5d95d',
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
        marginLeft: 16,
    flexDirection: 'row', // Added flexDirection
    marginBottom: 'auto',
        marginTop: 'auto',
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#e0d56f',
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
    starContainer_2: {
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 40,
        right: 20,
        borderRadius: 40,
    },
starContainer: {
    alignSelf: 'center',
        position: 'absolute',
        marginTop: 40,
        right: 20,
        borderRadius: 40,
},
star: {
    alignSelf: 'center',
        width: 64,
        height: 64
}
});

export default Events_en;
