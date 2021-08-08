import React from 'react';
import {StyleSheet, View} from 'react-native';

import  Count from '../components/Count';
import  Total from '../components/Total';

const styles = StyleSheet.create({
    outputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#bdb2ff',
        borderRadius: 10,
        paddingVertical: 40,
        paddingHorizontal: 20,
    },
});

const SplitOutput = ({totalCount, handleCountAdd, handleCountRemove, totalAmount}) => {
    return (
        <View style={styles.outputContainer}>
            <Count
                totalCount={totalCount}
                handleCountAdd={handleCountAdd}
                handleCountRemove={handleCountRemove}
            />
            <Total totalAmount={totalAmount}/>
        </View>
    );
};

export default SplitOutput;