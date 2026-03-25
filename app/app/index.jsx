import { View, Text, Image, StyleSheet, Pressable, ScrollView, TextInput, ActivityIndicator } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/button";
import { router } from "expo-router";
import { useState } from "react";
import { login } from "../services/authService";




const Index = () => {

  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState('');

  const handleSignIn = async () => {

    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!password) {
      setError('Please enter your password.');
      return;
    }

    setError('');
    setLoading(true);

    try {

      const result = await login({ email: email.trim().toLowerCase(), password });

      // result.data = { token, user: { id, full_name, email, role } }
      // TODO: store result.data.token in AsyncStorage when ready
      router.replace('./(tabs)/home');

    } catch (err) {

      const serverMessage = err?.response?.data?.message;
      setError(serverMessage || 'Something went wrong. Please try again.');

    } finally {

      setLoading(false);

    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#0D1B2A', flex: 1, paddingHorizontal: 20 }}>

      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/docketLogo.png')} />
        <Text style={styles.text}>Docket</Text>
        <Text style={styles.text2}>Legal Case Management - Mex-Trial </Text>
      </View>

      <View style={styles.welcome}>
        <Text style={styles.text3}>Welcome back</Text>
        <Text style={styles.text4}>Sign in to your firm account</Text>
      </View>

      <ScrollView horizontal contentContainerStyle={{ gap: 70, marginHorizontal: 4 }} style={{ maxHeight: 70 }}>
        <View style={styles.category}>
          <Text style={{ fontSize: 12, color: '#99C6FF', fontFamily: 'medium' }}>Senior Partner</Text>
        </View>
        <View style={styles.category}>
          <Text style={{ fontSize: 12, color: '#99C6FF', fontFamily: 'medium' }}>Associate</Text>
        </View>
        <View style={styles.category}>
          <Text style={{ fontSize: 12, color: '#99C6FF', fontFamily: 'medium' }}>Secretary</Text>
        </View>
      </ScrollView>

      <View style={{ gap: 20 }}>

        <View>
          <Text style={{ color: '#99C6FF', fontSize: 14, marginBottom: 5 }}> EMAIL ADDRESS</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholderTextColor={'white'}
            placeholder="chidi@mex-trial.ng"
            keyboardType="email-address"
            autoCapitalize="none"
            style={{ backgroundColor: '#FFFFFF66', borderRadius: 15, height: 50, paddingHorizontal: 10, color: 'white' }}
          />
        </View>

        <View>
          <Text style={{ color: '#99C6FF', fontSize: 14, marginBottom: 5 }}> PASSWORD</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholderTextColor={'white'}
            placeholder="**********"
            secureTextEntry={true}
            style={{ backgroundColor: '#FFFFFF66', borderRadius: 15, height: 50, paddingHorizontal: 10, color: 'white' }}
          />
        </View>

        {error ? (
          <Text style={{ color: '#FF6B6B', fontSize: 13 }}>{error}</Text>
        ) : null}

      </View>

      <View>

        <View style={styles.btnContainer}>
          {loading ? (
            <View style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator color="#C9A84C" />
            </View>
          ) : (
            <Button onPress={handleSignIn} text={'Sign In'} />
          )}
        </View>

        <View>
          <ScrollView horizontal contentContainerStyle={{ gap: 20, marginHorizontal: 118 }}>
            <Text style={{ color: '#99C6FF', fontSize: 14 }}>New to Docket?</Text>
            <Pressable onPress={() => { router.push('./loginScreen1') }}>
              <Text style={{ color: '#C9A84C', fontSize: 14 }}>Create an account</Text>
            </Pressable>
          </ScrollView>
        </View>

      </View>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 100,
    marginBottom: 100,
  },
  image: {
    width: 120,
    height: 113,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginBottom: 20,
  },
  text: {
    fontFamily: 'bold',
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
  text2: {
    fontFamily: 'light',
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
  },
  welcome: {
    marginBottom: 30,
    gap: 10,
  },
  text3: {
    fontFamily: 'medium',
    fontSize: 17,
    textAlign: 'left',
    color: 'white',
  },
  text4: {
    fontFamily: 'light',
    fontSize: 14,
    textAlign: 'left',
    color: '#99C6FF',
  },
  category: {
    borderWidth: 2,
    borderColor: '#99C6FF',
    borderRadius: 10,
    width: 100,
    height: 25,
    alignItems: 'center',
    padding: 2,
    backgroundColor: '#0D1B2A',
  },
  btnContainer: {
    gap: 16,
    marginVertical: 40,
    width: 300,
    alignSelf: 'center',
  },
});

export default Index;
