import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import NumericInput from 'react-native-numeric-input'

import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 17,
        color: '#2196F3',
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
    }
});

const Count =  ({totalCount, handleNumOfPeople}) => {
    return (
        <View>
            <Text style={styles.textTitle}>Number of People</Text>
            <View style={styles.splitContainer}>
                <NumericInput
                    rounded
                    onChange={handleNumOfPeople}
                    totalWidth={150}
                    totalHeight={40}
                    minValue={1}
                    borderColor={"black"}
                    editable={false}
                />
            </View>
        </View>
    );
};

export default Count;
