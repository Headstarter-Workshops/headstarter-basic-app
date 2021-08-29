import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

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
        paddingHorizontal: 9,
        paddingVertical: 10,
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
});

const TipRow =  ({label, handleTipChange, showCustomTip}) => {
    return (
        <View style={styles.section}>
            <Text style={styles.titleText}>{label}</Text>
            <View style={styles.tipContainer}>
                <TouchableOpacity
                    style={styles.tipButton}
                    onPress={handleTipChange}
                    key={1}
                >
                    <Text> 15% </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.tipButton}
                    onPress={handleTipChange}
                >
                    <Text> 18% </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.tipButton}
                    onPress={handleTipChange}
                >
                    <Text> 20% </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.tipButton}
                    onPress={handleTipChange}
                >
                    <Text> 25% </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.tipButton}
                    onPress={showCustomTip}
                >
                    <Text> Custom Tip </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default TipRow;
