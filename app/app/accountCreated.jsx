import { View, Text, Image, StyleSheet, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/button";
import { router } from "expo-router";
import { useRegistration } from "../context/RegistrationContext";


const ROLE_LABELS = {
  senior_partner : 'Senior Partner',
  associate      : 'Associate',
  secretary      : 'Legal Secretary',
};

const AccountCreated = () => {

  const { registeredUser, formData } = useRegistration();

  const displayName = registeredUser?.full_name || formData?.full_name || 'there';
  const displayRole = ROLE_LABELS[registeredUser?.role || formData?.role] || 'Member';
  const firstName   = displayName.split(' ')[0];

  return (
    <SafeAreaView style={{ backgroundColor: '#0D1B2A', flex: 1, paddingHorizontal: 20 }}>

      <View style={styles.imageContainer}>

        <View style={{ height: 100, width: 96, backgroundColor: '#173F03', borderRadius: 20, padding: 20, marginHorizontal: 180 }}>
          <Image style={{ height: 50, width: 50 }} source={require('../assets/images/checkIcon.png')} />
        </View>

        <Text style={styles.text}>Account Created!</Text>

        <View>
          <ScrollView contentContainerStyle={{ gap: 5, marginHorizontal: 100 }} horizontal>
            <Text style={styles.text2}>Welcome to Docket,</Text>
            <Text style={{ fontFamily: 'bold', color: '#C9A84C' }}>{firstName}</Text>
          </ScrollView>
          <Text style={styles.text2}>
            Your account is pending activation by a Senior{'\n'}Partner. You'll receive confirmation shortly.
          </Text>
        </View>

      </View>

      <ScrollView
        horizontal
        contentContainerStyle={{ gap: 200 }}
        style={{ backgroundColor: '#99C6FF1A', height: 115, maxHeight: 115, borderRadius: 20, padding: 20 }}
      >
        <View style={{ gap: 30 }}>
          <Text style={styles.info}>ROLE</Text>
          <Text style={styles.info}>FIRM</Text>
        </View>

        <View style={{ gap: 20 }}>
          <View style={styles.category}>
            <Text style={{ fontSize: 12, color: '#99C6FF', fontFamily: 'medium' }}>
              {displayRole}
            </Text>
          </View>
          <Text style={styles.info}>Mex-Trial & Associates</Text>
        </View>
      </ScrollView>

      <View style={styles.btnContainer}>
        <Button
          onPress={() => { router.replace('/') }}
          text={'Go to Login'}
          style={{ width: 400 }}
        />
      </View>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 300,
    marginBottom: 70,
    gap: 20,
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
  info: {
    fontFamily: 'medium',
    color: 'white',
    fontSize: 16,
  },
  category: {
    borderWidth: 2,
    borderColor: '#99C6FF',
    borderRadius: 10,
    width: 120,
    height: 25,
    alignItems: 'center',
    padding: 2,
    backgroundColor: '#0D1B2A',
    alignSelf: 'flex-end',
  },
  btnContainer: {
    marginVertical: 40,
    marginHorizontal: 28,
  },
});

export default AccountCreated;
