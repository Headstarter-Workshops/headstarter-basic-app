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
        padding: 10,
        marginRight: 2,
    },
    tipContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    titleText:  {
        fontSize: 17,
        color: '#a8dadc',
        letterSpacing: 1.5,
        fontWeight: '700',
        marginVertical: 3
    },
});

const TipRow =  ({label, customTip}) => {
    return (
        <View style={styles.section}>
            <Text style={styles.titleText}>{label}</Text>
            <View style={styles.tipContainer}>
                <TouchableOpacity style={styles.tipButton}>
                    <Text> 15% </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tipButton}>
                    <Text> 20% </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tipButton}>
                    <Text> 25% </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tipButton}>
                    <Text> Custom Tip </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default TipRow;
