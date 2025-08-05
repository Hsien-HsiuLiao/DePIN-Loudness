import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, appContent } from "@repo/ui";

export default function Native() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{appContent.nativeTitle}</Text>
      <Text style={styles.description}>{appContent.welcome} {appContent.nativeDescription}</Text>
      <Text style={styles.description}>{appContent.sharedDescription}</Text>
      <Button
        onClick={() => {
          console.log(appContent.buttonLogMessage);
          alert(appContent.buttonLogMessage);
        }}
        text={appContent.buttonText}
      />
      <Text style={styles.testText}>{appContent.testText}</Text>
      <Text style={styles.testText}>{appContent.additionalContent}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 36,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
    color: "#666",
  },
  testText: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
    color: "#888",
  },
});
