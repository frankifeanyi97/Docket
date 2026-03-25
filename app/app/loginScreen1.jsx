import { View, Text, Image, StyleSheet, Pressable, ScrollView, TextInput } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/button";
import { router } from "expo-router";
import Line from "../components/line";
import { useState } from "react";
import { useRegistration } from "../context/RegistrationContext";




const LoginScreen1 = () => {

  const [fullName, setFullName]   = useState('');
  const [email, setEmail]         = useState('');
  const [specialty, setSpecialty] = useState('');
  const [error, setError]         = useState('');

  const { setField } = useRegistration();

  const handleContinue = () => {
    if (!fullName.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!specialty.trim()) {
      setError('Please enter your area of specialty.');
      return;
    }

    setError('');

    setField('full_name', fullName.trim());
    setField('email', email.trim().toLowerCase());
    setField('specialty', specialty.trim());

    router.push('./loginScreen2');
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#0D1B2A', flex: 1, paddingHorizontal: 20 }}>

      <ScrollView horizontal contentContainerStyle={{ gap: 20, marginTop: 90 }} style={{ maxHeight: 200 }}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../assets/images/docketLogo.png')} />
        </View>
        <View>
          <Text style={styles.text}>Docket</Text>
          <Text style={styles.text2}>Legal Case Management - Mex-Trial </Text>
        </View>
      </ScrollView>

      <View style={{ marginBottom: 30 }}>
        <Text style={{ color: 'white', fontFamily: 'bold', fontSize: 17, marginBottom: 20 }}>
          Create account
        </Text>
        <Text style={{ color: 'white', fontSize: 14 }}>
          Step 1 of 3 - Your Information
        </Text>
      </View>

      <Line
        style={{ marginTop: 10, marginBottom: 10, maxHeight: 50 }}
        style1={{ backgroundColor: '#C9A84C' }}
        style2={{ backgroundColor: "#99C6FF" }}
        style3={{ backgroundColor: "#99C6FF" }}
      />

      <View style={{ gap: 20 }}>

        <View>
          <Text style={{ color: 'white', fontSize: 15, marginBottom: 5 }}> FULL NAME</Text>
          <TextInput
            value={fullName}
            onChangeText={setFullName}
            placeholderTextColor={'white'}
            placeholder="e.g. Tunde Bakare"
            style={{ backgroundColor: '#FFFFFF66', borderRadius: 15, height: 50, paddingHorizontal: 10, color: 'white' }}
          />
        </View>

        <View>
          <Text style={{ color: 'white', fontSize: 15, marginBottom: 5 }}> WORK EMAIL</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholderTextColor={'white'}
            placeholder="e.g  amaka@yourfirm.ng"
            keyboardType="email-address"
            autoCapitalize="none"
            style={{ backgroundColor: '#FFFFFF66', borderRadius: 15, height: 50, paddingHorizontal: 10, color: 'white' }}
          />
        </View>

        <View>
          <Text style={{ color: 'white', fontSize: 15, marginBottom: 5 }}> SPECIALTY</Text>
          <TextInput
            value={specialty}
            onChangeText={setSpecialty}
            placeholderTextColor={'white'}
            placeholder="e.g. Corporate Law, Criminal Law"
            style={{ backgroundColor: '#FFFFFF66', borderRadius: 15, height: 50, paddingHorizontal: 10, color: 'white' }}
          />
        </View>

        <View>
          <Text style={{ color: 'white', fontSize: 15, marginBottom: 5 }}> LAW FIRM NAME</Text>
          <TextInput
            placeholderTextColor={'white'}
            placeholder="Mex-Trial & Associates"
            editable={false}
            style={{ backgroundColor: '#FFFFFF66', borderRadius: 15, height: 50, paddingHorizontal: 10, color: 'white' }}
          />
        </View>

        {error ? (
          <Text style={{ color: '#FF6B6B', fontSize: 13, marginTop: -10 }}>{error}</Text>
        ) : null}

        <View style={styles.btnContainer}>
          <Button onPress={handleContinue} text={'Continue'} style={{ width: 450 }} />
        </View>

      </View>

      <View>
        <ScrollView horizontal contentContainerStyle={{ gap: 20, marginHorizontal: 118 }}>
          <Text style={{ color: '#99C6FF', fontSize: 14 }}>
            Already have an account?
          </Text>
          <Pressable onPress={() => { router.back() }}>
            <Text style={{ color: '#C9A84C', fontSize: 14 }}>
              Sign In
            </Text>
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
    marginVertical: 40,
    alignSelf: 'center',
  },
});

export default LoginScreen1;
