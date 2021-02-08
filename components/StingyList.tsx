import React from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import { selectAllStingyNotes } from "../slices/stingyNotesSlice";

export default function StingyList() {
  const stingyNotes = useSelector(selectAllStingyNotes);
  const { height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <FlatList
        data={stingyNotes}
        keyExtractor={({ date }) => date.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.date}>
              {new Date(item.date).toLocaleDateString("zh-hk")}
            </Text>
            <View
              style={
                item.penalty ? styles.textHolderWithPenalty : styles.textHolder
              }
            >
              <Text style={styles.text} numberOfLines={1}>
                {item.sin}
              </Text>
              {item.penalty && (
                <React.Fragment>
                  {/* ! missing stroke color for 要 */}
                  <Text style={styles.yiu}>要</Text>
                  <Text style={styles.text} numberOfLines={1}>
                    {item.penalty}
                  </Text>
                </React.Fragment>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    flexShrink: 2,
    flexBasis: Dimensions.get("window").height * 0.6,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginBottom: 15,
    paddingHorizontal: 9,
    paddingVertical: 4,
    justifyContent: "space-evenly",
    borderRadius: 16,
  },
  date: {
    fontSize: 26,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  textHolder: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textHolderWithPenalty: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    lineHeight: 35,
  },
  yiu: {
    fontSize: 48,
    lineHeight: 48,
    color: "#FFF",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 4, height: 4 },
  },
});
