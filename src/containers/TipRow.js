import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import  Tip from '../components/Tip';

const styles = StyleSheet.create({
    section: {
        padding: 10,
        marginVertical: 10,
    },
    tipButton: {
        display: "flex",
        elevation: 8,
        backgroundColor: "#DDDDDD",
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 10,
        borderWidth: 1
    },
    tipContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    titleText:  {
        fontSize: 17,
        color: '#2196F3',
        letterSpacing: 1.5,
        fontWeight: '700',
        marginVertical: 3
    },
    textStyle: {
       fontSize: 14,
       color: "black"
    },
});

const TipRow =  ({label, handleTipChange, showCustomTip}) => {
    return (
        <View style={styles.section}>
            <Text style={styles.titleText}>{label}</Text>
            <View style={styles.tipContainer}>
                <Tip
                    tip={"15%"}
                    handleTipChange={handleTipChange}
                />
                <Tip
                    tip={"18%"}
                    handleTipChange={handleTipChange}
                />
                <Tip
                    tip={"20%"}
                    handleTipChange={handleTipChange}
                />
                <Tip
                    tip={"25%"}
                    handleTipChange={handleTipChange}
                />
                <TouchableOpacity
                    style={styles.tipButton}
                    onPress={showCustomTip}
                >
                    <Text style={styles.textStyle}> Custom Tip </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default TipRow;
