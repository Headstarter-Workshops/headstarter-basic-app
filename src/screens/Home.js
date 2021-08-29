
import React, { useState, useEffect } from 'react';
import { StyleSheet, Modal, Pressable, TouchableWithoutFeedback, View, Text, Keyboard, Button } from 'react-native';


import Input from "../components/Input";
import SplitOutput from "../containers/SplitOutput";
import SendEmail from "../components/SendEmail";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 30,
    },
});

const Home = () => {
    const defaultVal = 0;
    const [modalVisible, setModalVisible] = useState(false);

    const [bill, setBill] = useState('0.00');
    const [tip, setTip] = useState('10');
    const [totalCount, setTotalCount] = useState('2');
    const [totalAmount, setTotalAmount] = useState('0.00');

    // User input/Usage are SIDE EFFECTS within the application
    // we have to take take care of the following operations:
    // entering bill amount
    // entering tip percentage
    // increasing or decreasing totalCount (which references the button that we press to plus or minus)

    // How do we manage these side effects?
    // we use another hook!
    // useEffect() hook

    useEffect(() => {
        const total = parseFloat(bill) || defaultVal; // '0.00'  to 0.00f
        const tipPercent = parseFloat(tip) || defaultVal;
        const splitVal = parseInt(totalCount) || defaultVal;

        // different totalAmount then the totalAmount above in useState; this is a local var
        // calculates actual split
        const totalAmountVal = ((total + (tipPercent / 100) * total) / splitVal).toFixed(2);

        // set the split to the calculated value
        setTotalAmount(totalAmountVal.toString());

    }, [bill, tip, totalCount]); // the variables in the array are function arguments to useEffect()


    const handleBillChange = (value) => {
        if (value.charAt(0) === '-') {
            value = value.substring(1);
            setBill(value);
        }
        else {
            setBill(value);
        }
    };

    const handleTipChange = (value) => {
        if (value.charAt(0) === '-') {
            value = value.substring(1);
            setTip(value);
        }
        else {
            setTip(value);
        }
    };

    const handleCountAdd = () => {
        setTotalCount((totalCount) => {
            const total = parseInt(totalCount) + 1;
            return total.toString();
        });
    };

    // User input/Usage are SIDE EFFECTS within the application
    // we have to take take care of the following operations:
    // entering bill amount
    // entering tip percentage
    // increasing or decreasing totalCount (which references the button that we press to plus or minus)

    // How do we manage these side effects?
    // we use another hook!
    // useEffect hook

    const handleCountRemove = () => {
        setTotalCount((totalCount) => {
            if (totalCount == 1) {
                const total = 1;
                return total.toString();
            }
            else {
                const total = parseInt(totalCount) - 1;
                return total.toString();
            }
        });
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <Input
                        label='Bill Total'
                        amount={bill}
                        placeholderText='0.00'
                        handleTextChange={handleBillChange}
                    />
                    <Input
                        label='Tip'
                        amount={tip}
                        placeholderText='10'
                        handleTextChange={handleTipChange}
                    />
                    <SplitOutput
                        totalCount={totalCount}
                        totalAmount={totalAmount}
                        handleCountAdd={handleCountAdd}
                        handleCountRemove={handleCountRemove}
                    />
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={{ paddingTop: 600, width: 500, height: 500, flexDirection: 'column', justifyContent: 'flex-end', alignSelf: 'center', backgroundColor: "white" }}>
                        <View style={{ height: 500, width: 300, alignSelf: 'center', justifyContent: 'center', backgroundColor: "white" }}>
                            <SendEmail people={totalCount} />
                            <Pressable
                                style={{ width: 300, height: 50, flexDirection: 'column', justifyContent: 'flex-end', alignSelf: 'center', backgroundColor: "white" }}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={{ width: 300, height: 50, flexDirection: 'column', justifyContent: 'flex-end', alignSelf: 'center', backgroundColor: "white" }}> Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Pressable
                    style={{ alignSelf: 'center', justifyContent: 'center' }}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={{ width: 300, height: 50, flexDirection: 'column', justifyContent: 'flex-end', alignSelf: 'center', backgroundColor: "white" }}>Send Email</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Home;
