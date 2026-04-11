import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MyScreen = () => {
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const getColor = () => {
    if (count < 5) return "#4CAF50";
    if (count < 15) return "#FF9800";
    if (count < 30) return "#E91E63";
    return "#9C27B0";
  };

  const getMessage = () => {
    if (count === 0) return "Tap the button to start!";
    if (count < 5) return "Great start!";
    if (count < 15) return "Keep going!";
    if (count < 30) return "Amazing progress!";
    return "You are awesome!";
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Simple Counter</Text>
      </View>

      <View style={styles.content}>
        <Text style={[styles.counter, { color: getColor() }]}>
          {count}
        </Text>

        <Text style={styles.message}>
          {getMessage()}
        </Text>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: getColor() }]}
          onPress={handlePress}
        >
          <Text style={styles.buttonText}>TAP ME</Text>
        </TouchableOpacity>

        {count > 0 && (
          <TouchableOpacity
            style={styles.resetButton}
            onPress={handleReset}
          >
            <Text style={styles.resetText}>Reset</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: "#2196F3",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  counter: {
    fontSize: 80,
    fontWeight: "bold",
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  resetButton: {
    backgroundColor: "#757575",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  resetText: {
    color: "white",
    fontSize: 16,
  },
});

export default MyScreen;