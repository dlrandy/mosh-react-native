import {  StyleSheet, Platform  } from 'react-native'

const TextProperties = Platform.select({
    ios:{
        fontSize: 20,
        fontFamily: 'Avenir',
    },
    android: {
        fontSize: 18,
        fontSize: 'Roboto',
    }
});

const styles = StyleSheet.create({
    text: {
        // fontSize: Platform.OS === 'android' ? 18 : 20,
        // fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        ...TextProperties,
    },
})


export default styles;