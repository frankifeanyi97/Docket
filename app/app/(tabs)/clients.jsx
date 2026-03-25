import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const allClients = [
  {
    id: '1',
    initials: 'TA',
    avatarColor: '#1E3A5F',
    name: 'Theresa Agbo',
    email: 'tagboinedu@gmail.com',
    type: 'Individual',
  },
  {
    id: '2',
    initials: 'SM',
    avatarColor: '#1F3D2B',
    name: 'Suberu Micheal Adefolarin',
    email: 'suberuadefolarin@yahoo.com',
    type: 'Individual',
  },
  {
    id: '3',
    initials: 'RH',
    avatarColor: '#3B1F0A',
    name: 'Resas Hub',
    email: 'resashubonline.com.ng',
    type: 'Corporate',
  },
  {
    id: '4',
    initials: 'IM',
    avatarColor: '#1F3D2B',
    name: 'Ibrahim Musa',
    email: 'i.musa@hotmail.com',
    type: 'Individual',
  },
  {
    id: '5',
    initials: 'FA',
    avatarColor: '#3B0A0A',
    name: 'Fatima Aliyu',
    email: 'fatimaaliyu@gmail.com',
    type: 'Corporate',
  },
  {
    id: '6',
    initials: 'CN',
    avatarColor: '#1E3A5F',
    name: 'Chikwu Nwachukwu',
    email: 'c.nwachukwu@gmail.com',
    type: 'Individual',
  },
  {
    id: '7',
    initials: 'EA',
    avatarColor: '#1E3A5F',
    name: 'Emeka Adeyemi',
    email: 'e.adeyemi@gmail.com',
    type: 'Individual',
  },

  {
    id: '8',
    initials: 'EA',
    avatarColor: '#3B0A0A',
    name: 'Precious Ali',
    email: 'preshy@gmail.com',
    type: 'Corporate',
  
  },
  {
    id: '9',
    initials: 'B&',
    avatarColor: '#3B1F0A',
    name: 'Bello & Associates',
    email: 'info@belloassoc.com.ng',
    type: 'Corporate',
  },
];


const filters = ['All', 'Individual', 'Corporate'];



function ClientCard({ item }) {


  const isCorporate = item.type === 'Corporate';
  const badgeBg = isCorporate ? '#1E3A5F' : '#1F2937';
  const badgeText = isCorporate ? '#60A5FA' : '#9CA3AF';

  return (
    <View style={styles.card}>

    
      <View style={[styles.avatar, { backgroundColor: item.avatarColor }]}>
        <Text style={styles.avatarText}>{item.initials}</Text>
      </View>

     
      <View style={styles.cardMiddle}>
        <Text style={styles.clientName}>{item.name}</Text>
        <Text style={styles.clientEmail}>{item.email}</Text>
      </View>

      <View style={[styles.typeBadge, { backgroundColor: badgeBg }]}>
        <Text style={[styles.typeText, { color: badgeText }]}>{item.type}</Text>
      </View>

    </View>
  );
}


export default function Clients() {
  const router = useRouter();

  const [activeFilter, setActiveFilter] = useState('All');

 
  const [searchText, setSearchText] = useState('');

  const filteredClients = allClients.filter((c) => {
    const matchesFilter = activeFilter === 'All' || c.type === activeFilter;
    const matchesSearch =
      c.name.toLowerCase().includes(searchText.toLowerCase()) ||
      c.email.toLowerCase().includes(searchText.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>

         
          <View style={styles.headerRow}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <Text style={styles.backArrow}>←</Text>
            </TouchableOpacity>
            <Text style={styles.screenTitle}>Clients</Text>



            <View style={styles.countBadge}>
              <Text style={styles.countBadgeText}>{allClients.length}</Text>
            </View>
          </View>

   
          <View style={styles.searchBar}>
            <Ionicons name="search-outline" size={16} color="#9CA3AF" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search clients..."
              placeholderTextColor="#9CA3AF"
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>


          <View style={styles.filterRow}>
            {filters.map((filter) => (
              <TouchableOpacity
                key={filter}
                style={[
                  styles.filterTab,
                  activeFilter === filter && styles.filterTabActive,
                ]}
                onPress={() => setActiveFilter(filter)}
              >
                <Text
                  style={[
                    styles.filterTabText,
                    activeFilter === filter && styles.filterTabTextActive,
                  ]}
                >
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </View>


          <FlatList
            data={filteredClients}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ClientCard item={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          />

        </View>

       
        <TouchableOpacity style={styles.fab}>
          <Text style={styles.fabText}>+</Text>
        </TouchableOpacity>

     
        {/* <View style={styles.tabBar}>

          <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/dashboard/dashB')}>
            <Ionicons name="home-outline" size={22} color="#9CA3AF" />
            <Text style={styles.tab}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/dashboard/cases')}>
            <MaterialIcons name="cases" size={22} color="#9CA3AF" />
            <Text style={styles.tab}>Cases</Text>
          </TouchableOpacity> */}

          {/* Clients is active on this screen */}
          {/* <TouchableOpacity style={styles.tabItem}>
            <Ionicons name="people" size={22} color="#FBBF24" />
            <Text style={styles.activeTab}>Clients</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/dashboard/hearings')}>
            <View style={{ position: 'relative' }}>
              <Ionicons name="calendar-outline" size={22} color="#9CA3AF" />
              <View style={styles.notifBadge}>
                <Text style={styles.notifText}>1</Text>
              </View>
            </View>
            <Text style={styles.tab}>Hearings</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/dashboard/settings')}>
         <Ionicons name="settings-outline" size={22} color="#9CA3AF" />
         <Text style={styles.tab}>Settings</Text>
        </TouchableOpacity>
        </View> */}

      </SafeAreaView>
    </>
  );
}


const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: '#071426',
    marginBottom:80
    
  },

  container: {
    flex: 1,
    backgroundColor: '#071426',
    paddingHorizontal: 16,
   marginTop: 30,
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 14,
  },

  backButton: {
    marginRight: 10,
    padding: 4,
  },

  backArrow: {
    color: '#fff',
    fontSize: 20,
  },

  screenTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },

  countBadge: {
    backgroundColor: '#0F223A',
    width: 60,
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  countBadgeText: {
    color: '#9CA3AF',
    fontSize: 19,
    fontWeight: '600',
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0F223A',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
  },

  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 13,
    marginLeft: 8,
  },

  filterRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 14,
  },

  filterTab: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#0F223A',
  },

  filterTabActive: {
    backgroundColor: '#FBBF24',
  },

  filterTabText: {
    color: '#9CA3AF',
    fontSize: 12,
  },

  filterTabTextActive: {
    color: '#000',
    fontWeight: '700',
  },

 
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0F223A',
    borderRadius: 12,
    borderColor: 'white',
    borderWidth: 1,
    padding: 14,
    marginBottom: 18,
  },

  avatar: {
    width: 49,
    height: 49,
    borderRadius: 12,
    borderColor: 'white',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  avatarText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },

  cardMiddle: {
    flex: 1,
  },

  clientName: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 3,
  },

  clientEmail: {
    color: '#9CA3AF',
    fontSize: 11,
  },

  typeBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },

  typeText: {
    fontSize: 10,
    fontWeight: '600',
  },


  fab: {
    position: 'absolute',
    bottom: 24,
    right: 20,
    backgroundColor: '#FBBF24',
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5, 
  },

  fabText: {
    color: '#000',
    fontSize: 26,
    fontWeight: 'bold',
    lineHeight: 30,
  },

  fab: {
     position: 'absolute',
   bottom: 80, 
   right: 20}, 

  tabBar: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderTopWidth: 1, 
    borderColor: '#1F2937', 
    backgroundColor: '#071426' },

  tabItem: { 
    alignItems: 'center' 
  },

  activeTab: { 
    color: '#FBBF24', 
    fontSize: 11,
     marginTop: 3 
    },


  tab: {
     color: '#9CA3AF', 
     fontSize: 11,
      marginTop: 3
     },


  notifBadge: { 
    position: 'absolute', 
    top: -4, right: -6, 
    backgroundColor: '#EF4444', 
    borderRadius: 10,
     width: 16, 
     height: 16,
    alignItems: 'center', 
    justifyContent: 'center'
   },


  notifText: { 
    color: '#fff', 
    fontSize: 10,
     fontWeight: 'bold'
     },
});