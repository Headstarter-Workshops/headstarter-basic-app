import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 17,
        color: '#2196F3',
        letterSpacing: 1.5,
        fontWeight: '700',
        marginVertical: 3
    },
    textOutput: {
        fontSize: 20,
        color: 'black',
        padding: 5,
        borderWidth: 1,
        flex: 1,
        marginVertical: 5,
        borderRadius: 10,

    },
    priceContainer: {
        width: 110,
        height: 75,
        alignSelf: 'center'
    }
});


const Total = ({ totalAmount }) => {
    return (
        <View style={styles.priceContainer}>
            <Text style={styles.textTitle}>Price</Text>
            <Text style={styles.textOutput}>${totalAmount}</Text>
        </View>
    );
};

export default Total;
