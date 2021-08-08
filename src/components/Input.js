// importing components and libaries
import React from 'react';
import { StyleSheet, Text, TextInput, View} from 'react-native';

// our stylesheet -- handles the look of our component that we define over here
// written in css
// we import from the StyleSheet as well
const styles = StyleSheet.create({
   section: {
       padding: 10,
       marginVertical: 10,
   },
    inputContainer: {
      flexDirection: 'row',
    },
   titleText:  {
       fontSize: 17,
       color: '#a8dadc',
       letterSpacing: 1.5,
       fontWeight: '700',
       marginVertical: 3
   },
    textInputView: {
       flexDirection: 'row',
       padding: 5,
        borderWidth: 0.5,
        color: 'gray',
        borderRadius: 5,
    },
    textInput: {
       fontSize: 20,
    },
});

// this is a FUNCTIONAL component (different from a class component)
const Input = ({label, amount, placeholderText, handleTextChange}) => {
    return (
        <View style={styles.section}>
            <Text style={styles.titleText}>{label}</Text>
            <View style={styles.textInputView}>
                <TextInput
                    style={styles.textInput}
                    keyboardType='numeric'
                    placeholder={placeholderText}
                    defaultValue={amount}
                    onChangeText={handleTextChange}
                />
                {label === 'Tip' ? <Text style={styles.textInput}>%</Text> : null}
            </View>
        </View>
    );
};

export default Input;

