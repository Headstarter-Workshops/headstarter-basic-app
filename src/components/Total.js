import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 17,
        color: 'black',
        fontWeight: '700',
        letterSpacing: 1.5,
    },
    textOutput: {
        fontSize: 25,
        color: 'black',
    },
});


const Total = ({ totalAmount }) => {
    return (
        <View>
            <Text style={styles.textTitle}>Total</Text>
            <Text style={styles.textOutput}>{totalAmount}</Text>
        </View>
    );
};

export default Total;
