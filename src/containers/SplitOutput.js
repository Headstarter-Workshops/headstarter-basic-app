import React from 'react';
import {StyleSheet, View} from 'react-native';

import  Count from '../components/Count';
import  Total from '../components/Total';

const styles = StyleSheet.create({
    outputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },

});

const SplitOutput = ({totalCount, totalAmount, handleNumOfPeople}) => {
    return (
        <View style={styles.outputContainer}>
            <Count
                totalCount={totalCount}
                handleNumOfPeople={handleNumOfPeople}
            />
            <Total totalAmount={totalAmount}/>
        </View>
    );
};

export default SplitOutput;
