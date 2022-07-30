//import liraries
import { Formik } from 'formik';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const AppForm = ({initialValues, onSubmit, validationSchema, children}) => {
    return (
        <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {
            ()=>(
                <>{children}</>
            )
        }


      </Formik>
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
export default AppForm;
