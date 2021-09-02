import React from 'react';
import Counter from "react-native-counters";

import {Image, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 17,
        color: '#40916c',
        letterSpacing: 1.5,
        fontWeight: '700',
        marginVertical: 3
    },
    splitContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 5
    },
    icon: {
        backgroundColor: '#FFE5B4',
        borderWidth: 1
    },
    splitInput: {
        borderWidth: 1
    },
    tinyLogo: {
        width: 500,
        height: 500,
    },
});

const Count =  ({totalCount, handleNumOfPeople}) => {
    return (
        <View>
            <Text style={styles.textTitle}>🧍🏽# of People</Text>
            <View style={styles.splitContainer}>
                <Counter
                    buttonStyle={{
                        borderColor: '#333',
                        borderWidth: 2,
                    }}
                    buttonTextStyle={{
                        color: '#333',
                    }}
                    countTextStyle={{
                        color: '#333',
                    }}
                    onChange={handleNumOfPeople}
                    start={1}
                    min={1}
                    max={25}
                />
            </View>
        </View>
    );
};

export default Count;
