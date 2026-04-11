import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';

const MyScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isEmailValid = validateEmail(email);
  const isPasswordValid = password.length >= 8;
  const isNameValid = name.trim().length >= 2;
  const isConfirmPasswordValid = confirmPassword === password && password.length > 0;

  const getPasswordStrength = () => {
    if (password.length === 0) return { label: '', color: '#ccc', width: '0%' };
    if (password.length < 8) return { label: 'Too short', color: '#E91E63', width: '33%' };
    if (password.length < 12) return { label: 'Good', color: '#FF9800', width: '66%' };
    return { label: 'Strong', color: '#4CAF50', width: '100%' };
  };

  const completedFields = [isNameValid, isEmailValid, isPasswordValid, isConfirmPasswordValid].filter(Boolean).length;
  const totalFields = 4;

  const handleSignup = () => {
    setNameTouched(true);
    setEmailTouched(true);
    setPasswordTouched(true);
    setConfirmPasswordTouched(true);

    if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      alert('Signup successful!');
    }
  };

  const passwordStrength = getPasswordStrength();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Simple Counter</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>
            {completedFields} of {totalFields} fields complete
          </Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${(completedFields / totalFields) * 100}%` }]} />
          </View>
        </View>

        <Text style={styles.subtitle}>Create your account</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Name</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              onBlur={() => setNameTouched(true)}
              placeholder="Enter your name"
              placeholderTextColor="#999"
            />
            {nameTouched && isNameValid && (
              <Text style={styles.checkmark}>✓</Text>
            )}
          </View>
          {nameTouched && !isNameValid && (
            <Text style={styles.errorText}>Please enter at least 2 characters</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              onBlur={() => setEmailTouched(true)}
              placeholder="your@email.com"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {emailTouched && isEmailValid && (
              <Text style={styles.checkmark}>✓</Text>
            )}
          </View>
          {emailTouched && !isEmailValid && (
            <Text style={styles.errorText}>Please enter a valid email address</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password (minimum 8 characters)</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              onBlur={() => setPasswordTouched(true)}
              placeholder="Enter password"
              placeholderTextColor="#999"
              secureTextEntry
            />
            {passwordTouched && isPasswordValid && (
              <Text style={styles.checkmark}>✓</Text>
            )}
          </View>
          {password.length > 0 && (
            <View style={styles.strengthContainer}>
              <View style={styles.strengthBar}>
                <View style={[styles.strengthFill, { width: passwordStrength.width, backgroundColor: passwordStrength.color }]} />
              </View>
              <Text style={[styles.strengthText, { color: passwordStrength.color }]}>
                {passwordStrength.label}
              </Text>
            </View>
          )}
          {passwordTouched && !isPasswordValid && (
            <Text style={styles.errorText}>Password must be at least 8 characters</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              onBlur={() => setConfirmPasswordTouched(true)}
              placeholder="Re-enter password"
              placeholderTextColor="#999"
              secureTextEntry
            />
            {confirmPasswordTouched && isConfirmPasswordValid && (
              <Text style={styles.checkmark}>✓</Text>
            )}
          </View>
          {confirmPasswordTouched && !isConfirmPasswordValid && (
            <Text style={styles.errorText}>Passwords must match</Text>
          )}
        </View>

        <TouchableOpacity
          style={[styles.button, { opacity: completedFields === totalFields ? 1 : 0.6 }]}
          onPress={handleSignup}
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>

        <Text style={styles.noteText}>
          Additional profile details can be added later
        </Text>
      </View>
    </ScrollView>
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
    padding: 20,
  },
  progressContainer: {
    marginBottom: 30,
  },
  progressText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
    textAlign: "center",
  },
  progressBar: {
    height: 6,
    backgroundColor: "#e0e0e0",
    borderRadius: 3,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#2196F3",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginBottom: 25,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
  },
  checkmark: {
    position: "absolute",
    right: 15,
    fontSize: 20,
    color: "#4CAF50",
    fontWeight: "bold",
  },
  errorText: {
    fontSize: 12,
    color: "#E91E63",
    marginTop: 5,
  },
  strengthContainer: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  strengthBar: {
    flex: 1,
    height: 4,
    backgroundColor: "#e0e0e0",
    borderRadius: 2,
    marginRight: 10,
    overflow: "hidden",
  },
  strengthFill: {
    height: "100%",
  },
  strengthText: {
    fontSize: 12,
    fontWeight: "500",
    width: 60,
  },
  button: {
    backgroundColor: "#2196F3",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  noteText: {
    fontSize: 13,
    color: "#999",
    textAlign: "center",
    fontStyle: "italic",
  },
});

export default MyScreen;