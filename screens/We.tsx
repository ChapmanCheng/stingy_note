import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import globalStyles from "../styles/global";
import LinearGradientBackground from "../utilities/LinearGradientBackground";
import InputGroup2x1 from "../components/InputGroup2x1";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Button from "../components/Button";

const key = 'we';

export default function We() {
  const [boyName, setBoyName] = useState("");
  const [girlName, setGirlName] = useState("");
  const [datingAnniversary, setDatingAnniversary] = useState<number | null>(
    null
  );
  const [showDatingAnniversary, setShowDatingAnniversary] = useState(false);
  const [whoConfessed, setWhoConfessed] = useState("");
  const [confessDate, setConfessDate] = useState<number | null>(null);
  const [confessLocation, setConfessLocation] = useState("");
  const [firstKissDate, setfirstKissDate] = useState<number | null>(null);
  const [firstKissLocation, setfirstKissLocation] = useState("");

  const permaSave = async  () => {
    AsyncStorage.setItem(
      key, 
      JSON.stringify({ boyName, girlName, datingAnniversary, whoConfessed, confessDate, confessLocation, firstKissDate, firstKissLocation })
    ).then(()=>console.log('We saved'))
  }

  const restoreWeData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(key)
      if (jsonData) {
        const { boyName, girlName, datingAnniversary, whoConfessed, confessDate, confessLocation, firstKissDate, firstKissLocation } = JSON.parse(jsonData)
        setBoyName(boyName)
        setGirlName(girlName)
        setDatingAnniversary(datingAnniversary)
        setWhoConfessed(whoConfessed)
        setConfessDate(confessDate)
        setConfessLocation(confessLocation)
        setfirstKissDate(firstKissDate)
        setfirstKissLocation(firstKissLocation)
      }

    } catch (e) {
      console.error(e)
    }
  } 

  useEffect(() => {
    restoreWeData()
  }, [])
  
  return (
    <LinearGradientBackground>
      <View style={globalStyles.inputGroup}>
        <Image source={require("../assets/boyface.png")} />
        <TextInput
          style={styles.longerInput}
          value={boyName}
          onChangeText={(text) => setBoyName(text)}
        />
      </View>
      <View style={globalStyles.inputGroup}>
        <Image source={require("../assets/girlface.png")} />
        <TextInput
          style={styles.longerInput}
          value={girlName}
          onChangeText={(text) => setGirlName(text)}
        />
      </View>

      {/* ~~~~~~~~~~ JUST FOR VISUAL ~~~~~~~~~~ */}
      <View style={globalStyles.inputGroup}>
        <Text style={globalStyles.label}>拍拖紀念日</Text>
        <TextInput
          style={{ ...globalStyles.input, textAlign: "center" }}
          value={
            datingAnniversary
              ? new Date(datingAnniversary).toLocaleDateString("zh-hk")
              : ""
          }
          showSoftInputOnFocus={false}
          onFocus={() => setShowDatingAnniversary(true)}
        />
        {showDatingAnniversary && (
          <DateTimePicker
            value={new Date()}
            mode="date"
            onChange={(e, date) => {
              if (date) setDatingAnniversary(Date.parse(date));
              setShowDatingAnniversary(false);
            }}
          />
        )}
      </View>
      <Text style={styles.comment}>~嘩！10週年~</Text>

      {/* ~~~~~~~~~~ JUST FOR VISUAL ~~~~~~~~~~ */}
      <View style={globalStyles.inputGroup}>
        <Text style={globalStyles.label}>邊個表白</Text>
        <TextInput
          style={globalStyles.input}
          value={whoConfessed}
          onChangeText={(text) => setWhoConfessed(text)}
        />
      </View>
      <Text style={styles.comment}>~好sweet呀~</Text>

      {/* ~~~~~~~~~~ JUST FOR VISUAL ~~~~~~~~~~ */}

      <View style={styles.inputGroup2x1}>
        <InputGroup2x1
          label1="幾時表白?"
          inputValue1={confessDate}
          handleInputValue1={setConfessDate}
          label2="喺邊表白?"
          inputValue2={confessLocation}
          handleInputValue2={setConfessLocation}
        />
      </View>
      <View style={styles.inputGroup2x1}>
        <InputGroup2x1
          label1="幾時初吻?"
          inputValue1={firstKissDate}
          handleInputValue1={setfirstKissDate}
          label2="初吻喺邊?"
          inputValue2={firstKissLocation}
          handleInputValue2={setfirstKissLocation}
        />
      </View>
      <Text style={styles.comment}>{"寫低就唔會忘記啦^_<"}</Text>
      <Button handlePress={permaSave}>記住先!</Button>
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
  comment: {
    textAlign: "center",
    fontSize: 22,
    marginBottom: 24,
    fontWeight: "bold",
  },
});
