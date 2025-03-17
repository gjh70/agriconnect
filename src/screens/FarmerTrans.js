import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // <-- Using MaterialIcons for bottom nav
import Feather from 'react-native-vector-icons/Feather';

const FarmerTrans = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState('Transaction');

  const transactions = [
    {
      id: '1',
      title: 'Dairy Industry',
      credits: 2,
      demand: 'Wheat demand: 200 tons'
    },
    {
      id: '2',
      title: 'Grain Suppliers',
      credits: 2,
      demand: 'Wheat demand: 200 tons'
    },
    {
      id: '3',
      title: 'Fruit Exporters',
      credits: 2,
      demand: 'Wheat demand: 200 tons'
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardCredits}>Credits gained: {item.credits}</Text>
        <Text style={styles.cardDemand}>{item.demand}</Text>
      </View>
      <TouchableOpacity style={styles.detailsButton}>
        <Text style={styles.detailsText}>Details</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Transaction History</Text>
        <Feather name="filter" size={24} color="#333" />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Feather name="search" size={18} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Transaction List */}
      <FlatList
        data={transactions.filter((item) =>
          item.title.toLowerCase().includes(searchText.toLowerCase())
        )}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />

      {/* Bottom Navigation Bar (REPLACED) */}
      <View style={styles.bottomNav}>
        {[
          { name: 'Home', icon: 'home', screen: 'FarmerHome' },
          { name: 'Transaction', icon: 'account-balance-wallet', screen: 'FarmerTrans' },
          { name: 'Profile', icon: 'person-outline', screen: 'FarmerProfile' },
          { name: 'Help', icon: 'help-outline', screen: 'FarmerHelp' },
        ].map((tab) => (
          <TouchableOpacity
            key={tab.name}
            style={styles.navItem}
            onPress={() => {
              setActiveTab(tab.name);
              navigation.navigate(tab.screen);
            }}
          >
            <Icon
              name={tab.icon}
              size={28}
              color={activeTab === tab.name ? 'green' : 'gray'}
            />
            <Text
              style={[styles.navText, activeTab === tab.name && styles.activeNavText]}
            >
              {tab.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 16 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 10,
  },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#111' },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
  },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, fontSize: 14 },
  listContainer: { paddingBottom: 80 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  cardImage: { width: 50, height: 50, borderRadius: 8, marginRight: 10 },
  cardContent: { flex: 1 },
  cardTitle: { fontWeight: 'bold', fontSize: 14, color: '#000' },
  cardCredits: { fontSize: 12, color: '#555' },
  cardDemand: { fontSize: 12, color: '#777' },
  detailsButton: {
    backgroundColor: '#004d40',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  detailsText: { color: '#fff', fontSize: 12, fontWeight: 'bold' },

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: { alignItems: 'center' },
  navText: { fontSize: 12, color: 'gray', marginTop: 2 },
  activeNavText: { color: 'green', fontWeight: 'bold' },
});

export default FarmerTrans;
