import { StyleSheet } from "react-native";

const fontSize = 24;

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
    paddingTop: 16,
    paddingHorizontal: 8,
  },
  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  label: {
    fontSize,
    lineHeight: 35,
    fontWeight: 'bold'
  },
  
});

export default globalStyles;
