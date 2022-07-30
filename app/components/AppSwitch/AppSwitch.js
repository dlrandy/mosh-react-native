//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

// create a component
const AppSwicth = ({value = false, handleValueChange}) => {
    const [isNew, setIsNew] = useState(value);
    return (
        <View style={styles.container}>
           <Switch value={isNew} onValueChange={value =>{
            setIsNew(value);
            handleValueChange(value);
           }} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default AppSwicth;
