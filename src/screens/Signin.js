import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import icons

const SignupScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [agree, setAgree] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Create your account to get started</Text>

      {/* Full Name Field */}
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Email Field */}
      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Your email address"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Password Field */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Create a password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Retype Password Field */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Retype your password"
          secureTextEntry
          value={retypePassword}
          onChangeText={setRetypePassword}
        />
      </View>

      {/* Checkbox */}
      <View style={styles.checkboxContainer}>
        <Checkbox
          status={agree ? 'checked' : 'unchecked'}
          onPress={() => setAgree(!agree)}
        />
        <Text style={styles.checkboxText}>I agree with Terms & Conditions</Text>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => console.log('Signed up')}>
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Login Link */}
      <Text style={styles.loginText}>
        Already registered? <Text style={styles.loginLink}>Log In</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '100%',
    height: 50,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxText: {
    fontSize: 14,
    marginLeft: 5,
  },
  signupButton: {
    width: '100%',
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  signupText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    marginTop: 15,
    fontSize: 14,
  },
  loginLink: {
    color: 'green',
    fontWeight: 'bold',
  },
});

export default SignupScreen;
