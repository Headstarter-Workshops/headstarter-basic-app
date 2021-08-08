import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 17,
        color: 'black',
        fontWeight: '700',
        letterSpacing: 1.5,
    },
    splitContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        backgroundColor: '#94d2bd',
    },
});

const Count =  ({totalCount, handleCountAdd, handleCountRemove}) => {
    return (
        <View>
            <Text style={styles.textTitle}>Split</Text>
            <View style={styles.splitContainer}>
                <Ionicons
                    style={styles.icon}
                    name='add'
                    size={24}
                    onPress={handleCountAdd}
                />
                <Text style={styles.splitInput}>{totalCount}</Text>
                <Ionicons
                    style={styles.icon}
                    name='remove'
                    size={24}
                    onPress={handleCountRemove}
                    disabled={totalCount < 2}
                />
            </View>
        </View>
    );
};

export default Count;