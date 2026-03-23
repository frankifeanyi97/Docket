import { View, Text, Image, StyleSheet, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/button";
import { router } from "expo-router";
import { useRegistration } from "../context/RegistrationContext";

// ─── ACCOUNT CREATED SCREEN ───────────────────────────────────
// Shows confirmation after a successful registration.
//
// HOW IT GETS REAL DATA:
//   loginScreen3 called the API → got back { token, user }
//   It saved user to: setRegisteredUser(result.data.user)
//   Now we read it here with: const { registeredUser } = useRegistration()
//
// registeredUser shape (from the API):
//   { id, full_name, email, role }
// ─────────────────────────────────────────────────────────────

// Maps the API role value to a human-readable label for display
const ROLE_LABELS = {
  senior_partner : 'Senior Partner',
  associate      : 'Associate',
  secretary      : 'Legal Secretary',
};

const AccountCreated = () => {

  // Read the user that was saved by loginScreen3 after the API call
  const { registeredUser, formData } = useRegistration();

  // Use the API response if available, fall back to formData as a safety net
  const displayName = registeredUser?.full_name || formData?.full_name || 'there';
  const displayRole = ROLE_LABELS[registeredUser?.role || formData?.role] || 'Member';

  // First name only for the greeting
  const firstName = displayName.split(' ')[0];

  return (
    <SafeAreaView style={{ backgroundColor: '#0D1B2A', flex: 1, paddingHorizontal: 20 }}>

      <View style={styles.imageContainer}>

        {/* Success icon */}
        <View style={{ height: 100, width: 96, backgroundColor: '#173F03', borderRadius: 20, padding: 20, marginHorizontal: 180 }}>
          <Image style={{ height: 50, width: 50 }} source={require('../assets/images/checkIcon.png')} />
        </View>

        <Text style={styles.text}>Account Created!</Text>

        <View>
          {/* Real first name from the API response */}
          <ScrollView contentContainerStyle={{ gap: 5, marginHorizontal: 100 }} horizontal>
            <Text style={styles.text2}>Welcome to Docket,</Text>
            <Text style={{ fontFamily: 'bold', color: '#C9A84C' }}>{firstName}</Text>
          </ScrollView>
          <Text style={styles.text2}>
            Your account is pending activation by a Senior{'\n'}Partner. You'll receive confirmation shortly.
          </Text>
        </View>

      </View>

      {/* Summary card — shows the real role and firm from registration */}
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
          {/* Real role from the API response */}
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
