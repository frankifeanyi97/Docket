import { View, Text, Image, StyleSheet, Pressable, ScrollView, TextInput, ActivityIndicator } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Button2 from "../components/button";
import { router } from "expo-router";
import { useState } from "react";
import Line from "../components/line";
import { useRegistration } from "../context/RegistrationContext";
import { register } from "../services/authService";




const LoginScreen3 = () => {

  const [password, setPassword]               = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading]                 = useState(false);
  const [error, setError]                     = useState('');

  const { formData, setRegisteredUser } = useRegistration();

  const handleSubmit = async () => {

    if (!password) {
      setError('Please enter a password.');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    setLoading(true);

    try {

      const result = await register({
        full_name : formData.full_name,
        email     : formData.email,
        password  : password,
        role      : formData.role,
        specialty : formData.specialty,
      });

      setRegisteredUser(result.data.user);
      router.push('./accountCreated');

    } catch (err) {

      const serverMessage = err?.response?.data?.message;
      setError(serverMessage || 'Something went wrong. Please try again.');

    } finally {

      setLoading(false);

    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#0D1B2A', flex: 1, paddingHorizontal: 20 }}>

      <ScrollView horizontal contentContainerStyle={{ gap: 20, marginTop: 90 }} style={{ maxHeight: 200 }}>
        <View>
          <Image style={styles.image} source={require('../assets/images/docketLogo.png')} />
        </View>
        <View>
          <Text style={styles.text}>Docket</Text>
          <Text style={styles.text2}>Legal Case Management - Mex-Trial </Text>
        </View>
      </ScrollView>

      <View style={{ marginBottom: 0 }}>
        <Text style={{ color: 'white', fontFamily: 'bold', fontSize: 17, marginBottom: 20 }}>
          Create account
        </Text>
        <Text style={{ color: 'white', fontSize: 14, marginBottom: 20 }}>
          Step 3 of 3 - Create Password
        </Text>
        <Line
          style={{ marginTop: 10, marginBottom: 10, maxHeight: 50 }}
          style1={{ backgroundColor: '#C9A84C' }}
          style2={{ backgroundColor: "#C9A84C" }}
          style3={{ backgroundColor: "#C9A84C" }}
        />
        <View style={{ borderBottomColor: '#99C6FF', borderBottomWidth: 1, width: 500, alignSelf: 'center', marginBottom: 30 }} />
      </View>

      <Text style={{ color: 'white', fontSize: 17, marginBottom: 40 }}>
        Create a strong password to secure your Docket{'\n'}account.
      </Text>

      <View style={{ gap: 20, marginBottom: 30 }}>

        <View>
          <Text style={{ color: '#99C6FF', fontSize: 14, marginBottom: 5 }}> PASSWORD</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholderTextColor={'white'}
            placeholder="Min. 8 characters"
            secureTextEntry={true}
            style={{ borderColor: '#99C6FF', borderWidth: 1, borderRadius: 15, height: 50, paddingHorizontal: 10, color: 'white' }}
          />
        </View>

        <View>
          <Text style={{ color: '#99C6FF', fontSize: 14, marginBottom: 5 }}> CONFIRM PASSWORD</Text>
          <TextInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholderTextColor={'white'}
            placeholder="Re-enter your password"
            secureTextEntry={true}
            style={{ borderColor: '#99C6FF', borderWidth: 1, borderRadius: 15, height: 50, paddingHorizontal: 10, color: 'white' }}
          />
        </View>

        {error ? (
          <Text style={{ color: '#FF6B6B', fontSize: 13 }}>{error}</Text>
        ) : null}

      </View>

      <ScrollView horizontal contentContainerStyle={{ gap: 50, marginHorizontal: 30 }} style={{ maxHeight: 100 }}>

        <View style={styles.btnContainer}>
          <Button2
            onPress={() => { router.back() }}
            text={'Back'}
            style={{ width: 170, height: 40 }}
          />
        </View>

        <View style={styles.btnContainer}>
          {loading ? (
            <View style={{ width: 170, height: 40, justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator color="#C9A84C" />
            </View>
          ) : (
            <Button2
              onPress={handleSubmit}
              text={'Create Account'}
              style={{ width: 170, height: 40 }}
            />
          )}
        </View>

      </ScrollView>

      <View>
        <ScrollView horizontal contentContainerStyle={{ gap: 20, marginHorizontal: 118 }}>
          <Text style={{ color: '#99C6FF', fontSize: 14 }}>Already have an account?</Text>
          <Pressable onPress={() => { router.back() }}>
            <Text style={{ color: '#C9A84C', fontSize: 14 }}>Sign In</Text>
          </Pressable>
        </ScrollView>
      </View>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 60,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginBottom: 20,
  },
  text: {
    fontFamily: 'bold',
    fontSize: 30,
    textAlign: 'left',
    color: 'white',
  },
  text2: {
    fontFamily: 'light',
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
  },
  btnContainer: {
    gap: 16,
  },
});

export default LoginScreen3;
