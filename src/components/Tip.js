import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  tipButton: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: '20%',
  },
  textStyle: {
      fontSize: 14,
     color: "black",
  },
  tipButton: {
      display: "flex",
      elevation: 8,
      backgroundColor: "#DDDDDD",
      borderRadius: 10,
      paddingHorizontal: 8,
      paddingVertical: 10,
      marginRight: 5,
      marginVertical: 5,
      borderWidth: 0
  },
});

const Tip = ({tip, handleTipChange}) => {
    return (
        <View>
            <TouchableOpacity
                style={styles.tipButton}
                onPress={handleTipChange}
            >
                <Text style={styles.textStyle}> {tip} </Text>
            </TouchableOpacity>
        </View>
    );
};


export default Tip
;
