import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const IndustryHome = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [activeTab, setActiveTab] = useState('Home');

  const farmers = [
    { id: '1', name: 'John Smith', creditScore: 7, rawMaterials: ['Corn', 'Wheat'] },
    { id: '2', name: 'Mary Johnson', creditScore: 7.2, rawMaterials: ['Soybeans', 'Barley'] },
    { id: '3', name: 'Robert Brown', creditScore: 8, rawMaterials: ['Rice', 'Oats'] }
  ];

  // Categories of raw materials
  const filterCategories = ['Grains', 'Vegetables', 'Fruits'];

  // Map categories to raw materials
  const categoryMapping = {
    Grains: ['Corn', 'Wheat', 'Rice', 'Barley', 'Oats'],
    Vegetables: ['Tomatoes', 'Carrots', 'Peppers'],
    Fruits: ['Apples', 'Bananas', 'Grapes']
  };

  // Filter farmers based on selected filters
  const filteredFarmers = farmers.filter((farmer) => {
    if (selectedFilters.length === 0) return true; // No filters, show all
    return farmer.rawMaterials.some((material) =>
      selectedFilters.some((filter) => categoryMapping[filter]?.includes(material))
    );
  });

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Farmer Search</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Icon name="sort" size={28} color="black" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={24} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search farmers..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Farmers List */}
      <FlatList
        data={filteredFarmers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.farmerImage} />
            <View>
              <Text style={styles.farmerName}>{item.name}</Text>
              <Text style={styles.creditScore}>Credit Score: {item.creditScore}</Text>
              <Text style={styles.rawMaterials}>Raw Materials: {item.rawMaterials.join(', ')}</Text>
            </View>
          </View>
        )}
      />

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        {[
          { name: 'Home', icon: 'home', screen: 'IndustryHome' },
          
          { name: 'Transaction', icon: 'account-balance-wallet', screen: 'IndustryTrans' },
          { name: 'Profile', icon: 'person-outline', screen: 'IndustryProfile' },
          { name: 'Help', icon: 'help-outline', screen: 'IndustryHelp' }
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
            <Text style={[styles.navText, activeTab === tab.name && styles.activeNavText]}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Sort & Filter Modal */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Sort By</Text>
            <TouchableOpacity onPress={() => setSortBy('Credit Score')}>
              <Text style={[styles.optionText, sortBy === 'Credit Score' && styles.selectedText]}>
                Credit Score
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSortBy('Location')}>
              <Text style={[styles.optionText, sortBy === 'Location' && styles.selectedText]}>
                Location
              </Text>
            </TouchableOpacity>

            {/* Filter Section */}
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
                <Text
                  style={[
                    styles.optionText,
                    selectedFilters.includes(category) && styles.selectedText
                  ]}
                >
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
  container: { flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 16 },

  // Header Styles
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10 },
  title: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', flex: 1 },

  // Search Bar Styles
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F0F0F0', borderRadius: 8, padding: 8, marginBottom: 10 },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, fontSize: 16 },

  // Farmer Card Styles
  card: { flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 8, padding: 10, marginVertical: 5, elevation: 2 },
  farmerImage: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  farmerName: { fontSize: 16, fontWeight: 'bold' },
  creditScore: { fontSize: 14, color: '#666' },
  rawMaterials: { fontSize: 14, color: '#666' },

  // Bottom Navigation Styles
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#fff', padding: 10, borderTopWidth: 1, borderColor: '#ddd' },
  navItem: { alignItems: 'center' },
  navText: { fontSize: 12, color: 'gray' },
  activeNavText: { color: 'green', fontWeight: 'bold' },

  // Modal Styles
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContent: { width: 300, padding: 20, backgroundColor: 'white', borderRadius: 10, alignItems: 'center' },
  modalTitle: { fontSize: 16, fontWeight: 'bold', marginTop: 10 },
  optionText: { fontSize: 14, marginVertical: 5 },
  selectedText: { color: 'green', fontWeight: 'bold' },
  closeButton: { marginTop: 15, padding: 10, backgroundColor: 'green', borderRadius: 5 },
  closeText: { color: 'white', fontWeight: 'bold' },
});

export default IndustryHome;
