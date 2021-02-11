import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import globalStyles from "../styles/global";
import LinearGradientBackground from "../utilities/LinearGradientBackground";

export default function We() {
  return (
    <LinearGradientBackground>
      <View style={globalStyles.inputGroup}>
        <Image source={require("../assets/boyface.png")} />
        <TextInput style={styles.longerInput} />
      </View>
      <View style={globalStyles.inputGroup}>
        <Image source={require("../assets/girlface.png")} />
        <TextInput style={styles.longerInput} />
      </View>
      <View style={globalStyles.inputGroup}>
        <Text style={globalStyles.label}>拍拖紀念日</Text>
        <TextInput style={globalStyles.input} />
      </View>
      <Text style={styles.comment}>~嘩！10週年</Text>
      <View style={globalStyles.inputGroup}>
        <Text style={globalStyles.label}>拍拖紀念日</Text>
        <TextInput style={globalStyles.input} />
      </View>
      <Text style={styles.comment}>~好sweet呀~</Text>

      {/* ~~~~~~~~~~ JUST FOR VISUAL ~~~~~~~~~~ */}

      <View style={styles.inputGroup2x1}>
        <View style={styles.inputBlock}>
          <Text style={globalStyles.label}>幾時表白?</Text>
          <TextInput style={styles.shorterInput} />
        </View>
        <View style={styles.inputBlock}>
          <Text style={globalStyles.label}>喺邊表白?</Text>
          <TextInput style={styles.shorterInput} />
        </View>
      </View>
      <View style={styles.inputGroup2x1}>
        <View style={styles.inputBlock}>
          <Text style={globalStyles.label}>幾時初吻?</Text>
          <TextInput style={styles.shorterInput} />
        </View>
        <View style={styles.inputBlock}>
          <Text style={globalStyles.label}>初吻喺邊?</Text>
          <TextInput style={styles.shorterInput} />
        </View>
      </View>
      <Text style={styles.comment}>{"寫低就唔會忘記啦^_<"}</Text>
    </LinearGradientBackground>
  );
}

const styles = StyleSheet.create({
  inputGroup2x1: {
    ...globalStyles.inputGroup,
    justifyContent: "center",
    marginBottom: 24,
  },
  longerInput: {
    ...globalStyles.input,
    minWidth: 265,
  },
  shorterInput: {
    ...globalStyles.input,
    minWidth: 145,
    flexBasis: 51
  },
  inputBlock: { alignItems: "center", marginHorizontal: 16 },
  comment: {
    textAlign: "center",
    fontSize: 22,
    marginBottom: 24,
    fontWeight: "bold",
  },
});
