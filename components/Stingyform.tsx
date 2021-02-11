import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import DateTimePicker, {
  Event as DTPEvent,
} from "@react-native-community/datetimepicker";

import { addNewStingyNote } from "../slices/stingyNotesSlice";

import globalStyles from "../styles/global";

export default function Stingyform() {
  const [date, setDate] = useState(Date.now());
  const [sin, setSin] = useState("");
  const [penalty, setPenalty] = useState("");
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);

  const dispatch = useDispatch();

  const dateTimePickerChange = (e: DTPEvent, date: Date | undefined) => {
    if (e.type === "set") setDate(Date.parse(date));
    setShowDateTimePicker(false);
  };

  const handleSubmit = () => {
    if (date && sin) {
      dispatch(addNewStingyNote({ date, sin, penalty }));
      setDate(Date.now());
      setSin("");
      setPenalty("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={globalStyles.inputGroup}>
        <Text style={globalStyles.label}>邊日激嬲你</Text>
        <TextInput
          style={globalStyles.input}
          onFocus={() => setShowDateTimePicker(true)}
          showSoftInputOnFocus={false}
          value={new Date(date).toLocaleDateString("zh-hk")}
          textAlign="center"
        />
      </View>
      <View style={globalStyles.inputGroup}>
        <Text style={globalStyles.label}>乜事激嬲你</Text>
        <TextInput
          style={globalStyles.input}
          onChangeText={(text) => setSin(text)}
          value={sin}
          placeholder="e.g. 唔打電話俾我"
        />
      </View>
      <View style={globalStyles.inputGroup}>
        <Text style={globalStyles.label}>點懲罰好？</Text>
        <TextInput
          style={globalStyles.input}
          onChangeText={(text) => setPenalty(text)}
          value={penalty}
          placeholder="e.g. 打到佢變豬頭"
        />
      </View>
      <View style={{ ...globalStyles.inputGroup, justifyContent: "flex-end" }}>
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
  container: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
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
    textAlign: "center",
    // fontFamily: "Norican",
    fontStyle: "italic",
    color: "#FFF",
    backgroundColor: "#F4D4D4",
    width: 30,
    height: 30,
    lineHeight: 32,
    borderRadius: 18,
  },
  submitText: {
    fontSize: 24,
    // fontFamily: "Noto Sans Tamil",
    color: "#8B7878",
    letterSpacing: 0.1 * 8,
  },
});
