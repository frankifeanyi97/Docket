import { View, Text, Image, StyleSheet, Pressable, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Button2 from "../components/button";
import { router } from "expo-router";
import { useState } from "react";
import Line from "../components/line";
import { useRegistration } from "../context/RegistrationContext";

// ─── SCREEN 2 OF 3: SELECT YOUR ROLE ─────────────────────────
// Collects: role
//
// The role value must match exactly what the backend expects:
//   'senior_partner' | 'associate' | 'secretary'
//
// HOW THE ROLE SELECTION WORKS:
//   selectedRole holds ONE string at a time (or null if nothing chosen)
//   Each card checks: is selectedRole === MY_ROLE_VALUE?
//   If yes → highlight gold. If no → show outline only.
//   Tapping a card sets selectedRole to that card's value.
// ─────────────────────────────────────────────────────────────

// The three roles with their display label + API value + description
const ROLES = [
  {
    label       : 'Senior Partner',
    value       : 'senior_partner',          // ← sent to the API
    description : 'Full access — manage cases, team & reports',
  },
  {
    label       : 'Associate',
    value       : 'associate',
    description : 'View and manage cases assigned to you',
  },
  {
    label       : 'Legal Secretary',
    value       : 'secretary',
    description : 'Create & organize cases, clients and hearings firm-wide',
  },
];

const LoginScreen2 = () => {

  // selectedRole stores the API value of the chosen role, e.g. 'associate'
  // null means nothing is selected yet
  const [selectedRole, setSelectedRole] = useState(null);
  const [error, setError] = useState('');

  // Pull setField from context to save the role before navigating
  const { setField } = useRegistration();

  const handleContinue = () => {
    if (!selectedRole) {
      setError('Please select a role to continue.');
      return;
    }

    setError('');

    // Save the selected role to the shared context
    setField('role', selectedRole);

    router.push('./loginScreen3');
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
          Step 2 of 3 - Your Role
        </Text>
        <Line
          style={{ marginTop: 10, marginBottom: 10, maxHeight: 50 }}
          style1={{ backgroundColor: '#C9A84C' }}
          style2={{ backgroundColor: "#C9A84C" }}
          style3={{ backgroundColor: "#99C6FF" }}
        />
        <View style={{ borderBottomColor: '#99C6FF', borderBottomWidth: 1, width: 500, alignSelf: 'center', marginBottom: 30 }} />
      </View>

      <Text style={{ color: 'white', fontSize: 17, marginBottom: 20 }}>
        Select your role at{" "}<Text style={{ color: '#C9A84C' }}>Mex-trial & Associates</Text>{" "}.{"\n"}This determines what you can access in Docket.
      </Text>

      {/* ROLE CARDS
          We loop over the ROLES array and render one card per role.
          This is cleaner than copy-pasting 3 separate blocks. */}
      <View style={{ gap: 16, marginBottom: 30 }}>
        {ROLES.map((role) => {

          // isSelected is true when this card's value matches what the user picked
          const isSelected = selectedRole === role.value;

          return (
            <Pressable
              key={role.value}
              onPress={() => setSelectedRole(role.value)}
              style={[
                styles.roleCard,
                // Highlight the selected card with a gold border
                isSelected && { borderColor: '#C9A84C', borderWidth: 1.5 },
              ]}
            >
              <ScrollView horizontal contentContainerStyle={{ gap: 60, alignItems: 'center' }}>
                <View style={{ flex: 1, maxWidth: 260 }}>
                  <Text style={{ fontFamily: 'bold', fontSize: 20, color: 'white' }}>
                    {role.label}
                  </Text>
                  <Text style={{ fontFamily: 'light', fontSize: 12, color: '#99C6FF', marginTop: 4 }}>
                    {role.description}
                  </Text>
                </View>

                {/* Selection indicator — filled gold when selected */}
                <View style={[
                  styles.radioCircle,
                  isSelected && { backgroundColor: '#C9A84C', borderColor: '#C9A84C' },
                ]} />
              </ScrollView>
            </Pressable>
          );
        })}
      </View>

      {error ? (
        <Text style={{ color: '#FF6B6B', fontSize: 13, marginBottom: 10 }}>{error}</Text>
      ) : null}

      <ScrollView horizontal contentContainerStyle={{ gap: 50, marginHorizontal: 30 }} style={{ maxHeight: 100 }}>
        <View style={styles.btnContainer}>
          <Button2 onPress={() => { router.back() }} text={'Back'} style={{ width: 170, height: 40 }} />
        </View>
        <View style={styles.btnContainer}>
          <Button2 onPress={handleContinue} text={'Continue'} style={{ width: 170, height: 40 }} />
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
  roleCard: {
    borderWidth: 0.5,
    borderColor: '#99C6FF',
    borderRadius: 12,
    padding: 20,
    height: 90,
  },
  radioCircle: {
    borderWidth: 1,
    borderColor: '#99C6FF',
    borderRadius: 100,
    height: 36,
    width: 36,
  },
  btnContainer: {
    gap: 16,
  },
});

export default LoginScreen2;
