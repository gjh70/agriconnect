import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const industryData = [
  { id: '1', title: 'Agriculture', demand: 'Wheat demand: 200 tons', description: 'Connect with suppliers' },
  { id: '2', title: 'Food Processing', demand: 'Soybeans needed: 500 tons', description: 'Find processing units' },
  { id: '3', title: 'Energy', demand: 'Corn supply: 1000 tons', description: 'Contact energy firms' },
];

const filterCategories = ['Agriculture', 'Food Processing', 'Energy'];

const FarmerHome = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('Locations');
  const [activeTab, setActiveTab] = useState('Home');
  const [modalVisible, setModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.headerIcon}>
          <Icon name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Industry Listing</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.headerIcon}>
          <Icon name="filter-list" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={18} color="#888" style={styles.searchIcon} />
        <TextInput placeholder="Search for an industry..." style={styles.searchInput} />
      </View>

      {/* Tab Switcher */}
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setSelectedTab('Locations')}>
          <Text style={[styles.tab, selectedTab === 'Locations' && styles.activeTab]}>Locations</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('Crops')}>
          <Text style={[styles.tab, selectedTab === 'Crops' && styles.activeTab]}>Crops</Text>
        </TouchableOpacity>
      </View>

      {/* Industry List */}
      <FlatList
        data={industryData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDemand}>{item.demand}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
              <TouchableOpacity style={styles.connectButton}>
                <Text style={styles.connectButtonText}>Connect</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Bottom Navigation Bar */}
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
            <Icon name={tab.icon} size={28} color={activeTab === tab.name ? 'green' : 'gray'} />
            <Text style={[styles.navText, activeTab === tab.name && styles.activeNavText]}>{tab.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Sort & Filter Modal */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Sort By</Text>
            <TouchableOpacity onPress={() => setSortBy('Credit Score')}>
              <Text style={[styles.optionText, sortBy === 'Credit Score' && styles.selectedText]}>Credit Score</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSortBy('Location')}>
              <Text style={[styles.optionText, sortBy === 'Location' && styles.selectedText]}>Location</Text>
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Filter By</Text>
            {filterCategories.map((category) => (
              <TouchableOpacity
                key={category}
                onPress={() => {
                  setSelectedFilters((prev) =>
                    prev.includes(category)
                      ? prev.filter((f) => f !== category)
                      : [...prev, category]
                  );
                }}
              >
                <Text style={[styles.optionText, selectedFilters.includes(category) && styles.selectedText]}>
                  {category}
                </Text>
              </TouchableOpacity>
            ))}

            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerIcon: { padding: 5 },
  title: { fontSize: 20, fontWeight: 'bold', flex: 1, textAlign: 'center' },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1 },
  tabContainer: { flexDirection: 'row', marginBottom: 10 },
  tab: { fontSize: 16, marginRight: 20, color: '#888' },
  activeTab: {
    fontWeight: 'bold',
    color: 'green',
    borderBottomWidth: 2,
    borderBottomColor: 'green',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  cardText: { flex: 1 },
  cardTitle: { fontSize: 16, fontWeight: 'bold' },
  cardDemand: { fontSize: 14, color: '#555' },
  cardDescription: { fontSize: 12, color: '#777', marginBottom: 6 },
  connectButton: {
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 6,
    padding: 6,
    width: 80,
    alignItems: 'center',
  },
  connectButtonText: { color: 'green', fontSize: 14 },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
  navItem: { alignItems: 'center' },
  navText: { fontSize: 12, color: 'gray' },
  activeNavText: { color: 'green', fontWeight: 'bold' },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  optionText: { fontSize: 16, marginVertical: 6 },
  selectedText: { color: 'green', fontWeight: 'bold' },
  closeButton: {
    marginTop: 20,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  closeText: { color: '#fff', fontWeight: 'bold' },
});

export default FarmerHome;
