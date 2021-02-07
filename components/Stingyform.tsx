import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Keyboard } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function Stingyform() {
  const [date, setDate] = useState(Date.now());
  const [sin, setSin] = useState("無野");
  const [penalty, setPenalty] = useState("唔使");

  const [showDateTimePicker, setShowDateTimePicker] = useState(false);

  const dateTimePickerChange = (e: any, selectedDate: any): void => {
    if (e.type === "set") setDate(Date.parse(selectedDate));
  };
  return (
    <View>
      <View style={styles.inputGroup}>
        <Text style={styles.text}>邊日激嬲你</Text>
        <TextInput
          style={styles.input}
          onFocus={() => setShowDateTimePicker(true)}
          showSoftInputOnFocus={false}
          value={new Date(date).toLocaleDateString("zh-HK")}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.text}>乜事激嬲你</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSin(text)}
          value={sin}
          textAlign="center"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.text}>點懲罰好？</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPenalty(text)}
          value={penalty}
        />
      </View>
      {showDateTimePicker ? (
        <DateTimePicker
          value={new Date(date)}
          mode="date"
          onChange={dateTimePickerChange}
        />
      ) : (
        ""
      )}
    </View>
  );
}

const fontSize = 24;

const styles = StyleSheet.create({
  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 8 * 1.5,
  },
  input: {
    height: 51,
    width: 208,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    paddingHorizontal: 8,
    fontSize,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E9E1E1",
    borderRadius: 10,
  },
  text: {
    fontSize,
    lineHeight: 35,
  },
});
