import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const MyScreen = () => {
  const [step, setStep] = useState('signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');

  const handleSignup = () => {
    if (email && password) {
      setStep('welcome');
    }
  };

  const handleCompleteProfile = () => {
    setStep('complete');
  };

  const handleSkip = () => {
    setStep('complete');
  };

  if (step === 'welcome') {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome!</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.welcomeMessage}>
            Help us personalize your experience (optional)
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
            placeholderTextColor="#999"
          />

          <TextInput
            style={styles.input}
            placeholder="Company"
            value={company}
            onChangeText={setCompany}
            placeholderTextColor="#999"
          />

          <TextInput
            style={styles.input}
            placeholder="Role"
            value={role}
            onChangeText={setRole}
            placeholderTextColor="#999"
          />

          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#4CAF50', marginTop: 20 }]}
            onPress={handleCompleteProfile}
          >
            <Text style={styles.buttonText}>Complete Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.resetButton}
            onPress={handleSkip}
          >
            <Text style={styles.resetText}>Skip for now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  if (step === 'complete') {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>You're all set!</Text>
        </View>

        <View style={styles.content}>
          <Text style={[styles.counter, { color: '#4CAF50' }]}>
            ✓
          </Text>
          <Text style={styles.message}>
            Your account has been created successfully
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sign Up</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.message}>
          Create your account in seconds
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#999"
        />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#4CAF50', marginTop: 30 }]}
          onPress={handleSignup}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
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
  welcomeMessage: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 8,
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