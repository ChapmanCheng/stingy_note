import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import DateTimePicker from "@react-native-community/datetimepicker";

import { stingyNote, addNewStingyNote } from "../slices/stingyNotesSlice";

export default function Stingyform() {
  const [date, setDate] = useState(Date.now());
  const [sin, setSin] = useState("");
  const [penalty, setPenalty] = useState("");
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);

  const dispatch = useDispatch();

  const dateTimePickerChange = (e: any, selectedDate: any) => {
    if (e.type === "set") setDate(Date.parse(selectedDate));
  };

  const handleSubmit = () => {
    console.log("Hello");
    // if (date && sin) dispatch(addNewStingyNote({ date, sin, penalty }));
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
          textAlign="center"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.text}>乜事激嬲你</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSin(text)}
          value={sin}
          placeholder="e.g. 唔打電話俾我"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.text}>點懲罰好？</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPenalty(text)}
          value={penalty}
          placeholder="e.g. 打到佢變豬頭"
        />
      </View>
      <View
        style={StyleSheet.compose(styles.inputGroup, { marginLeft: "auto" })}
      >
        <TouchableOpacity style={styles.submitBtn} onPressOut={handleSubmit}>
          <Text style={styles.submitPlus}>+</Text>
          <Text style={styles.submitText}>記住佢</Text>
        </TouchableOpacity>
      </View>
      {showDateTimePicker && (
        <DateTimePicker
          value={new Date(date)}
          mode="date"
          onChange={dateTimePickerChange}
        />
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
    paddingHorizontal: 16,
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
  submitBtn: {
    backgroundColor: "#FFF2F2",
    borderRadius: 30,
    minWidth: 125,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  submitPlus: {
    fontSize: 30,
    fontFamily: "Norican",
    fontStyle: "italic",
    color: "#FFF",
    backgroundColor: "#F4D4D4",
    width: 30,
    height: 30,
    lineHeight: 28,
    borderRadius: 18,
  },
  submitText: {
    fontSize: 24,
    fontFamily: "Noto Sans Tamil",
    color: "#8B7878",
    letterSpacing: 0.1 * 8,
  },
});
