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
import Button from "./Button";

export default function Stingyform() {
  const [date, setDate] = useState(Date.now());
  const [sin, setSin] = useState("");
  const [penalty, setPenalty] = useState("");
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);

  const dispatch = useDispatch();

  const dateTimePickerChange = (e: DTPEvent, date: Date | undefined) => {
    if (date) setDate(Date.parse(date));
    setShowDateTimePicker(false);
  };

  const handleSubmit = () => {
    if (date && sin) {
      dispatch(addNewStingyNote({ date, sin, penalty }));
      setFormDefault();
    }
  };

  const setFormDefault = () => {
    setDate(Date.now());
    setSin("");
    setPenalty("");
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
        <Button handlePress={handleSubmit}>記住佢</Button>
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

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "auto",
  },
});
