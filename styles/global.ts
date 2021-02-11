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
    marginBottom: 12,
  },
  input: {
    minHeight: 51,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 100,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginLeft: 16,
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
    fontWeight: "bold",
  },
});

export default globalStyles;
