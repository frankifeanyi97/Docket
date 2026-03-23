import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

const hearings = [
  { id: '1', title: 'Adeyemi v. Lagos State', court: 'High Court Lagos', date: '6 Mar 2026', days: '10 d', color: '#EF4444' },
  { id: '2', title: 'Adauga v. NNPC', court: 'Federal High Court', date: '7 Mar 2026', days: '10 d', color: '#EF4444' },
  { id: '3', title: 'Okafor Estate Matter', court: 'Federal High Court', date: '14 Mar 2026', days: '10 d', color: '#22C55E' },
  { id: '4', title: 'Aliyu Divorce Proceedings', court: 'Family Court Lagos', date: '18 Mar 2026', days: '14 d', color: '#22C55E' },
];



function HearingItem({ item }) {

  const router = useRouter();


  return (
    <View style={styles.hearingItem}>
      <View style={[styles.leftBar, { backgroundColor: item.color }]} />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.sub}>{item.court}</Text>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <Text style={[styles.days, { color: item.color }]}>{item.days}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  );
}



export default function dashboard() {

  const router = useRouter();

    return (
        <>
          <Stack.Screen options={{ headerShown: false }} />
          <SafeAreaView style={{ flex: 1}}>
            <View style={styles.container}>
            <Text style={styles.greeting}>GOOD MORNING</Text>
        <Text style={styles.name}>Chidi Okonkwo</Text>
        <Text style={styles.badge}>Senior Partner</Text>

    
        <View style={styles.row}>
          <View style={[styles.card, { backgroundColor: '#0F2A44' }]}>
            <Text style={styles.cardNumber}>10</Text>
            <Text style={styles.cardLabel}>All cases</Text>
          </View>
          <View style={[styles.card, { backgroundColor: '#3B0A0A' }]}>
            <Text style={styles.cardNumber}>2</Text>
            <Text style={styles.cardLabel}>Urgent</Text>
          </View>
          <View style={[styles.card, { backgroundColor: '#3B1F0A' }]}>
            <Text style={styles.cardNumber}>2</Text>
            <Text style={styles.cardLabel}>This week</Text>
          </View>
        </View>

       
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Upcoming Hearings</Text>
          <TouchableOpacity onPress={() => router.push('/dashboard/hearings')}>
          <Text style={styles.seeAll}>See all →</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={hearings}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <HearingItem item={item} />}
          style={{ marginBottom: 1 }}
        />

        
        <Text style={styles.sectionTitle}>Case Overview</Text>

        <View style={styles.row}>
          <View style={[styles.overviewCard, { backgroundColor: '#1F3D2B' }]}>
            <Text style={styles.overviewLabel}>Active</Text>
            <Text style={styles.overviewNumber}>4</Text>
          </View>
          <View style={[styles.overviewCard, { backgroundColor: '#3B1F0A' }]}>
            <Text style={styles.overviewLabel}>Pending</Text>
            <Text style={styles.overviewNumber}>2</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.outlineCard}>
            <Text style={styles.outlineLabel}>In Review</Text>
            <Text style={styles.outlineNumber}>2</Text>
          </View>
          <View style={styles.outlineCard}>
            <Text style={styles.outlineLabel}>Closed</Text>
            <Text style={styles.outlineNumber}>1</Text>
          </View>
        </View>

        
        <View style={styles.tabBar}>
          <TouchableOpacity style={{ alignItems: 'center' }} >
          <Ionicons name="home" size={24} color="#FBBF24" />
          <Text style={styles.activeTab}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => router.push('/dashboard/cases')}  style={{ alignItems: 'center' }}>
  
        <View style={{ position: 'relative' }}>
          <MaterialIcons name="cases" size={24} color="white" />
    
   
         <View style={{
          position: 'absolute',
          top: -4,
           right: -6,
           backgroundColor: '#EF4444',
            borderRadius: 10,
            width: 16,
            height: 16,
           alignItems: 'center',
           justifyContent: 'center',
        }}>
       <Text style={{ color: '#fff', fontSize: 10, fontWeight: 'bold' }}>1</Text>
     </View>

    </View>

  <Text style={styles.tab}>Cases</Text>
          </TouchableOpacity>



          <TouchableOpacity onPress={() => router.push('/dashboard/clients')} style={{ alignItems: 'center' }}>
          <Ionicons name="people" size={24} color="white" />
          <Text style={styles.tab}>Clients</Text>
          </TouchableOpacity>


          <TouchableOpacity style={{ alignItems: 'center' }}>
  
  <View style={{ position: 'relative' }}>
  <Feather name="calendar" size={24} color="white" />

   <View style={{
    position: 'absolute',
    top: -4,
     right: -6,
     backgroundColor: '#EF4444',
      borderRadius: 10,
      width: 16,
      height: 16,
     alignItems: 'center',
     justifyContent: 'center',
  }}>
 <Text style={{ color: '#fff', fontSize: 10, fontWeight: 'bold' }}>1</Text>
</View>

</View>

<Text style={styles.tab}>Hearings</Text>
    </TouchableOpacity>


    <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/dashboard/settings')}>
  <Ionicons name="settings-outline" size={22} color="#9CA3AF" />
  <Text style={styles.tab}>Settings</Text>
</TouchableOpacity>
        </View>

            </View>
          </SafeAreaView>
        </>
      );
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071426',
    padding: 20,
    paddingTop: 40
  },
  greeting: { color: '#6B7280', fontSize: 15, padding:15, paddingLeft:0},
  name: { color: '#fff', fontSize: 20, fontWeight: 'bold', padding:15, paddingLeft:0 },
  badge: {
    backgroundColor: '#FBBF24',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    padding:15,
    paddingLeft:4,
    marginTop: 5,
    fontSize: 10,
  },

  row: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },

  card: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
  },
  cardNumber: { color: '#fff', fontWeight: 'bold' },
  cardLabel: { color: '#9CA3AF', fontSize: 11 },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  sectionTitle: { color: '#fff', fontSize: 14, marginBottom: 5 },
  seeAll: { color: '#FBBF24', fontSize: 12 },

  hearingItem: {
    flexDirection: 'row',
    backgroundColor: '#0F223A',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  leftBar: { width: 4, height: '100%', marginRight: 10 },
  title: { color: '#fff', fontSize: 13 },
  sub: { color: '#9CA3AF', fontSize: 11 },
  days: { fontSize: 12, fontWeight: 'bold' },
  date: { color: '#9CA3AF', fontSize: 10 },

  overviewCard: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
  },
  overviewLabel: { color: '#D1D5DB', fontSize: 12 },
  overviewNumber: { color: '#fff', fontSize: 18, fontWeight: 'bold' },

  outlineCard: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1F2937',
  },
  outlineLabel: { color: '#9CA3AF', fontSize: 12 },
  outlineNumber: { color: '#fff', fontSize: 16 },

  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: '#1F2937',
  },
  activeTab: { color: '#FBBF24', fontSize: 12 },
  tab: { color: '#9CA3AF', fontSize: 12 },
});
