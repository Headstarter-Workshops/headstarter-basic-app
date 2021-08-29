import React, {useState, useEffect} from 'react';
import {StyleSheet, TouchableWithoutFeedback, Modal, Text, TouchableOpacity, View, Keyboard} from 'react-native';

import Input from "../components/Input"
import SplitOutput from "../containers/SplitOutput";
import Tip from "../components/Tip"

const styles = StyleSheet.create({
   container: {
       flex: 1,
       paddingTop: 40,
       paddingHorizontal: 30,
   },
   centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingBottom: 30,
    paddingTop: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
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

const Home = () => {
    const defaultVal = "0";

    const [bill, setBill] = useState('0.00');
    const [tip, setTip] = useState("0");
    const [totalCount, setTotalCount] = useState('2');
    const [totalAmount, setTotalAmount] = useState('0.00');
    const [modalVisible, setModalVisible] = useState(false);
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
        if (value.charAt(0) === '-'){
            value = value.substring(1);
            setBill(value);
        }
        else
        {
            setBill(value);
        }
    };

    const handleTip1 = () => {
        setTip(15);
    };
    const handleTip2 = () => {
        setTip(18);
    };
    const handleTip3 = () => {
        setTip(20);
    };
    const handleTip4 = () => {
        setTip(25);
    };


    const handleCustomTipChange = (value) => {
        if (value.charAt(0) === '-'){
            value = value.substring(1);
            setTip(value);
        }
        else
        {
            setTip(value);
        }
    };

    const showCustomTip = () => {
        console.log("clicked")
        setTip("0")
        setModalVisible(true)
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
            if (totalCount == 1){
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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Input
                    label='Bill Total'
                    amount={bill}
                    placeholderText='0.00'
                    handleTextChange={handleBillChange}
                />
                <View style={styles.section}>
                    <Text style={styles.titleText}>Tip</Text>
                    <View style={styles.tipContainer}>
                        <Tip
                            tip={"15%"}
                            handleTipChange={handleTip1}
                        />
                        <Tip
                            tip={"18%"}
                            handleTipChange={handleTip2}
                        />
                        <Tip
                            tip={"20%"}
                            handleTipChange={handleTip3}
                        />
                        <Tip
                            tip={"25%"}
                            handleTipChange={handleTip4}
                        />
                        <TouchableOpacity
                            style={styles.tipButton}
                            onPress={showCustomTip}
                        >
                            <Text style={styles.textStyle}> Custom Tip </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <SplitOutput
                    totalCount={totalCount}
                    totalAmount={totalAmount}
                    handleCountAdd={handleCountAdd}
                    handleCountRemove={handleCountRemove}
                />
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
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Input
                                    label='Custom Amount'
                                    amount={tip}
                                    placeholderText='0.00'
                                    handleTextChange={handleCustomTipChange}
                                />
                                <TouchableOpacity
                                  style={[styles.button, styles.buttonClose]}
                                  onPress={() => setModalVisible(!modalVisible)}
                                >
                                  <Text style={styles.textStyle}>Done</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Home;
