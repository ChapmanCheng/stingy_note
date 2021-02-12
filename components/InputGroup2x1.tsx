import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import globalStyles from "../styles/global";
import DateTimePicker, {
  Event as DTPEvent,
} from "@react-native-community/datetimepicker";

interface props {
  label1: string;
  inputValue1: number | null;
  handleInputValue1: (dateString: number) => void;
  label2: string;
  inputValue2: string;
  handleInputValue2: (text: string) => void;
}

export default function InputGroup2x1({
  label1,
  inputValue1,
  handleInputValue1,
  label2,
  inputValue2,
  handleInputValue2,
}: props) {
  const [showDTP, setShowDTP] = useState(false);

  const handleDTPChange = (e: DTPEvent, date: Date | undefined) => {
    if (date) handleInputValue1(Date.parse(date));
    setShowDTP(false);
  };

  return (
    <React.Fragment>
      <View style={styles.inputBlock}>
        <Text style={globalStyles.label}>{label1}</Text>
        <TextInput
          style={styles.shorterInput}
          value={
            inputValue1 ? new Date(inputValue1).toLocaleDateString("zh-hk") : ""
          }
          showSoftInputOnFocus={false}
          onFocus={() => setShowDTP(true)}
        />
        {showDTP && (
          <DateTimePicker
            value={new Date()}
            mode="date"
            onChange={handleDTPChange}
          />
        )}
      </View>
      <View style={styles.inputBlock}>
        <Text style={globalStyles.label}>{label2}</Text>
        <TextInput
          style={styles.shorterInput}
          value={inputValue2}
          onChangeText={(text) => handleInputValue2(text)}
        />
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  inputBlock: {
    alignItems: "center",
    marginHorizontal: 16,
  },
  shorterInput: {
    ...globalStyles.input,
    minWidth: 145,
    flexBasis: 51,
    textAlign: "center",
  },
});
