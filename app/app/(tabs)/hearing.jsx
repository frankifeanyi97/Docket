import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';


const allHearings = [
  {
    id: '1',
    title: 'Adeyemi V. Lagos State',
    court: 'High Court Lagos',
    client: 'Emoka Adeyemi',
    date: '6 mar 2026',
    days: '2d',
    status: 'Urgent',
    thisWeek: true,
  },
  {
    id: '2',
    title: 'Adaugo V. NNPC',
    court: 'Federal High Court',
    client: 'Chidi Okonkwo',
    date: '7 mar 2026',
    days: '3d',
    status: 'Urgent',
    thisWeek: true,
  },
  {
    id: '3',
    title: 'Adeyemi V. Lagos State',
    court: 'High Court Lagos',
    client: 'Emoka Adeyemi',
    date: '7 mar 2026',
    days: '2d',
    status: 'Urgent',
    thisWeek: true,
  },
  {
    id: '4',
    title: 'Okafor Estate Matter',
    court: 'Federal High Court',
    client: 'Amaka Eze',
    date: '14 mar 2026',
    days: '3d',
    status: 'Upcoming',
    thisWeek: false,
  },
  {
    id: '5',
    title: 'Aliyu Divorce Proceedings',
    court: 'Family Court Lagos',
    client: 'Amaka Eze',
    date: '20 mar 2026',
    days: '3d',
    status: 'Upcoming',
    thisWeek: false,
  },
  {
    id: '6',
    title: 'Bello Corp Arbitration',
    court: 'Commercial Division',
    client: 'Tunde Bakare',
    date: '7 mar 2026',
    days: '3d',
    status: 'Upcoming',
    thisWeek: true,
  },
  {
    id: '7',
    title: 'Musa V. Abuja Municipality',
    court: 'Federal High Court',
    client: 'Ibrahim Musa',
    date: '20 mar 2026',
    days: '3d',
    status: 'Upcoming',
    thisWeek: false,
  },
];

// -------------------------------------------------------
// This is one hearing card — the box you see in the list
// It receives "item" which is one hearing from the list above
// -------------------------------------------------------
function HearingCard({ item }) {

  // If status is Urgent, use red. If Upcoming, use green.
  const isUrgent = item.status === 'Urgent';
  const statusColor = isUrgent ? '#EF4444' : '#22C55E';
  const leftBarColor = isUrgent ? '#EF4444' : '#22C55E';

  return (
    <View style={styles.card}>

      {/* The colored bar on the left side of the card */}
      <View style={[styles.leftBar, { backgroundColor: leftBarColor }]} />

      {/* The middle section: case title, court name, client name */}
      <View style={styles.cardMiddle}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardCourt}>{item.court}</Text>
        <Text style={styles.cardClient}>{item.client}</Text>
      </View>

      {/* The right section: days left, date, and status badge */}
      <View style={styles.cardRight}>

        {/* Days left — shown with a small calendar icon using text */}
        <View style={styles.daysRow}>
          <Text style={[styles.daysText, { color: statusColor }]}>🗓 {item.days}</Text>
        </View>

        {/* The date */}
        <Text style={styles.dateText}>{item.date}</Text>

        {/* The status badge — red box for Urgent, green box for Upcoming */}
        <View style={[styles.badge, { backgroundColor: isUrgent ? '#3B0A0A' : '#052E16' }]}>
          <Text style={[styles.badgeText, { color: statusColor }]}>{item.status}</Text>
        </View>

      </View>
    </View>
  );
}

// -------------------------------------------------------
// This is the main Hearings screen
// -------------------------------------------------------
export default function Hearings() {
  const router = useRouter();

  // "activeTab" keeps track of which tab the user clicked
  // It starts as 'all' meaning "All Upcoming" is selected first
  const [activeTab, setActiveTab] = useState('all');

  // Based on the active tab, we either show all hearings
  // or only the ones where thisWeek is true
  const displayedHearings =
    activeTab === 'all'
      ? allHearings
      : allHearings.filter((h) => h.thisWeek === true);

  // Count how many hearings are happening this week
  const thisWeekCount = allHearings.filter((h) => h.thisWeek).length;

  return (
    <>
      {/* This hides the default header that Expo Router adds */}
      <Stack.Screen options={{ headerShown: false }} />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>

          {/* ---- TOP HEADER ROW ---- */}
          <View style={styles.headerRow}>

            {/* Back arrow button — takes the user back to the dashboard */}
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <Text style={styles.backArrow}>←</Text>
            </TouchableOpacity>

            {/* Title */}
            <Text style={styles.screenTitle}>Hearings</Text>

            {/* The small badge that says "2 this week" */}
            <View style={styles.weekBadge}>
              <Text style={styles.weekBadgeText}>{thisWeekCount} this week</Text>
            </View>

          </View>

          {/* ---- TAB BUTTONS: "All Upcoming" and "This week" ---- */}
          <View style={styles.tabRow}>

            {/* "All Upcoming" tab button */}
            <TouchableOpacity
              style={[
                styles.tabButton,
                activeTab === 'all' && styles.tabButtonActive, // highlight if selected
              ]}
              onPress={() => setActiveTab('all')} // switch to "all" tab when tapped
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === 'all' && styles.tabTextActive,
                ]}
              >
                All Upcoming
              </Text>
            </TouchableOpacity>

            {/* "This week" tab button */}
            <TouchableOpacity
              style={[
                styles.tabButton,
                activeTab === 'week' && styles.tabButtonActive, // highlight if selected
              ]}
              onPress={() => setActiveTab('week')} // switch to "week" tab when tapped
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === 'week' && styles.tabTextActive,
                ]}
              >
                This week
              </Text>
            </TouchableOpacity>

          </View>

          {/* ---- LIST OF HEARING CARDS ---- */}
          {/* FlatList is like a ScrollView but better for long lists */}
          <FlatList
            data={displayedHearings}           // the array of hearings to show
            keyExtractor={(item) => item.id}   // each item needs a unique key
            renderItem={({ item }) => <HearingCard item={item} />} // how to draw each card
            showsVerticalScrollIndicator={false} // hide the scrollbar on the side
            contentContainerStyle={{ paddingBottom: 20 }} // space at the bottom
          />

        </View>

        {/* ---- BOTTOM TAB BAR ---- */}
        <View style={styles.tabBar}>

          <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/dashboard/dashB')}>
            <Ionicons name="home-outline" size={22} color="#9CA3AF" />
            <Text style={styles.tab}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/dashboard/cases')}>
            <MaterialIcons name="cases" size={22} color="#9CA3AF" />
            <Text style={styles.tab}>Cases</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/dashboard/clients')}>
            <Ionicons name="people-outline" size={22} color="#9CA3AF" />
            <Text style={styles.tab}>Clients</Text>
          </TouchableOpacity>

        
          <TouchableOpacity style={styles.tabItem}>
            <Ionicons name="calendar" size={22} color="#FBBF24" />
            <Text style={styles.activeTab}>Hearings</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/dashboard/settings')}>
         <Ionicons name="settings-outline" size={22} color="#9CA3AF" />
         <Text style={styles.tab}>Settings</Text>
        </TouchableOpacity>

        </View>
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
    marginBottom: 16,
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

  
  weekBadge: {
    backgroundColor: '#3B0A0A',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },

  weekBadgeText: {
    color: '#EF4444',
    fontSize: 11,
    fontWeight: '600',
  },

 
  tabRow: {
    flexDirection: 'row',
    backgroundColor: '#0F223A',
    borderRadius: 10,
    padding: 4,
    marginBottom: 16,
  },

 
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },

  
  tabButtonActive: {
    backgroundColor: '#FBBF24',
  },


  tabText: {
    color: '#9CA3AF',
    fontSize: 13,
    fontWeight: '500',
  },

 
  tabTextActive: {
    color: '#000',
    fontWeight: '700',
  },


  card: {
    flexDirection: 'row',
    backgroundColor: '#0F223A',
    borderRadius: 10,
    marginBottom: 8,
    overflow: 'hidden', 
    alignItems: 'stretch',
  },

 
  leftBar: {
    width: 4,
  },

 
  cardMiddle: {
    flex: 1,
    padding: 12,
  },

  cardTitle: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 3,
  },

  cardCourt: {
    color: '#9CA3AF',
    fontSize: 11,
    marginBottom: 3,
  },

  cardClient: {
    color: '#9CA3AF',
    fontSize: 11,
  },

  
  cardRight: {
    padding: 12,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

 
  daysRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  daysText: {
    fontSize: 12,
    fontWeight: '600',
  },

  dateText: {
    color: '#9CA3AF',
    fontSize: 10,
    marginTop: 2,
  },

  
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    marginTop: 4,
  },

  badgeText: {
    fontSize: 10,
    fontWeight: '600',
  },

  tabBar: {
     flexDirection: 'row', 
     justifyContent: 'space-between', 
     paddingHorizontal: 16, 
     paddingVertical: 10, 
     borderTopWidth: 1, 
     borderColor: '#1F2937', 
     backgroundColor: '#071426'
     },

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
});