import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import {  MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const allCases = [
  {
    id: '1',
    caseId: 'DKT-001',
    category: 'Civil Litigation',
    title: 'Adeyemi V. Lagos State',
    client: 'Emeka Adeyemi',
    days: '2d',
    status: 'Urgent',
  },
  {
    id: '2',
    caseId: 'DKT-002',
    category: 'Property',
    title: 'Okafor Estate Matter',
    client: 'Ngozi Okafor',
    days: '10d',
    status: 'In Review',
  },
  {
    id: '3',
    caseId: 'DKT-003',
    category: 'Corporate',
    title: 'Bello Corp Arbitration',
    client: 'Bello & Associates',
    days: '17d',
    status: 'Active',
  },
  {
    id: '4',
    caseId: 'DKT-004',
    category: 'Criminal',
    title: 'Musa V. Abuja Municipality',
    client: 'Ibrahim Musa',
    days: '29d',
    status: 'Pending',
  },
  {
    id: '5',
    caseId: 'DKT-005',
    category: 'Family',
    title: 'Aliyu Divorce Proceedings',
    client: 'Fatima Aliyu',
    days: '10d',
    status: 'Active',
  },
  {
    id: '6',
    caseId: 'DKT-006',
    category: 'Criminal',
    title: 'Musa V. Abuja Municipality',
    client: 'Ibrahim Musa',
    days: '29d',
    status: 'Pending',
  },
];


const filters = ['All', 'Urgent', 'Active', 'Pending', 'In Review'];


function getStatusColor(status) {
  if (status === 'Urgent') return { bg: '#3B0A0A', text: '#EF4444' };
  if (status === 'Active') return { bg: '#052E16', text: '#22C55E' };
  if (status === 'Pending') return { bg: '#2D1B00', text: '#F97316' };
  if (status === 'In Review') return { bg: '#1E3A5F', text: '#60A5FA' };
  return { bg: '#1F2937', text: '#9CA3AF' };
}


function CaseCard({ item }) {
  const statusColor = getStatusColor(item.status);

  return (
    <View style={styles.card}>

      <View style={styles.cardTopRow}>
        <Text style={styles.caseId}>
          {item.caseId}.{' '}
          <Text style={styles.category}>{item.category}</Text>
        </Text>

       
        <View style={[styles.statusBadge, { backgroundColor: statusColor.bg }]}>
          <Text style={[styles.statusText, { color: statusColor.text }]}>
            {item.status}
          </Text>
        </View>
      </View>

      <Text style={styles.caseTitle}>{item.title}</Text>

      <View style={styles.cardBottomRow}>
        <Text style={styles.clientName}>{item.client}</Text>

       
        <View style={styles.daysRow}>
          <Ionicons name="calendar-outline" size={13} color="#9CA3AF" />
          <Text style={styles.daysText}> {item.days}</Text>
        </View>
      </View>

    </View>
  );
}


export default function Cases() {
  const router = useRouter();


  const [activeFilter, setActiveFilter] = useState('All');


  const [searchText, setSearchText] = useState('');

 
  const filteredCases = allCases.filter((c) => {
    const matchesFilter = activeFilter === 'All' || c.status === activeFilter;
    const matchesSearch =
      c.title.toLowerCase().includes(searchText.toLowerCase()) ||
      c.client.toLowerCase().includes(searchText.toLowerCase());
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
            <Text style={styles.screenTitle}>Cases</Text>
            <View style={styles.countBadge}>
              <Text style={styles.countBadgeText}>
                {filteredCases.length} of {allCases.length}
              </Text>
            </View>
          </View>

       
          <View style={styles.searchBar}>
            <Ionicons name="search-outline" size={16} color="#9CA3AF" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search cases, clients, IDs..."
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
            data={filteredCases}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CaseCard item={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          />

        </View>

        
        {/* <View style={styles.tabBar}>

          <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/dashboard/dashB')}>
            <Ionicons name="home-outline" size={22} color="#9CA3AF" />
            <Text style={styles.tab}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem}>
            <MaterialIcons name="cases" size={22} color="#FBBF24" />
            <Text style={styles.activeTab}>Cases</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/dashboard/clients')}>
            <Ionicons name="people-outline" size={22} color="#9CA3AF" />
            <Text style={styles.tab}>Clients</Text>
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
  },

  container: {
    flex: 1,
    backgroundColor: '#071426',
    paddingHorizontal: 16,
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
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },

  countBadgeText: {
    color: '#9CA3AF',
    fontSize: 11,
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
    flexWrap: 'wrap',
  },

  filterTab: {
    paddingHorizontal: 14,
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
    backgroundColor: '#0F223A',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
  },

  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },

  caseId: {
    color: '#9CA3AF',
    fontSize: 11,
  },

  category: {
    color: '#FBBF24',
    fontSize: 11,
  },

  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },

  statusText: {
    fontSize: 10,
    fontWeight: '600',
  },

  caseTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },

  cardBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  clientName: {
    color: '#9CA3AF',
    fontSize: 12,
  },

  daysRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  daysText: {
    color: '#9CA3AF',
    fontSize: 12,
  },

  tabBar: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 10, borderTopWidth: 1, borderColor: '#1F2937', backgroundColor: '#071426' },
  tabItem: { alignItems: 'center' },
  activeTab: { color: '#FBBF24', fontSize: 11, marginTop: 3 },
  tab: { color: '#9CA3AF', fontSize: 11, marginTop: 3 },
  notifBadge: { position: 'absolute', top: -4, right: -6, backgroundColor: '#EF4444', borderRadius: 10, width: 16, height: 16, alignItems: 'center', justifyContent: 'center' },
  notifText: { color: '#fff', fontSize: 10, fontWeight: 'bold' },
});