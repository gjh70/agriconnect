import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const FarmerProfileEdit = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Profile');
  const [selectedSection, setSelectedSection] = useState('Profile Details');

  const [form, setForm] = useState({
    name: '',
    location: '',
    contact: '',
  });

  const [selectedRawMaterials, setSelectedRawMaterials] = useState({
    Corn: false,
    Wheat: false,
    Rice: false,
    Soybeans: false,
  });

  const toggleMaterial = item => {
    setSelectedRawMaterials(prev => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FeatherIcon name="arrow-left" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <FeatherIcon name="bar-chart-2" size={22} />
      </View>

      {/* Search Box */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search raw materials..."
        placeholderTextColor="#aaa"
      />

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => setSelectedSection('Profile Details')}>
          <Text
            style={[
              styles.tabText,
              selectedSection === 'Profile Details' && styles.activeTab,
            ]}>
            Profile Details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AddRawMaterial')}>
          <Text
            style={[
              styles.tabText,
              selectedSection === 'Add Raw Material' && styles.activeTab,
            ]}>
            Add Raw Material
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.formContainer}>
        {/* Form Inputs */}
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={form.name}
          onChangeText={text => setForm({...form, name: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your location"
          value={form.location}
          onChangeText={text => setForm({...form, location: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your contact information"
          value={form.contact}
          onChangeText={text => setForm({...form, contact: text})}
        />

        {/* Raw Materials */}
        <Text style={styles.sectionTitle}>Raw Material Grown</Text>
        {Object.keys(selectedRawMaterials).map(item => (
          <View key={item} style={styles.checkboxRow}>
            <CheckBox
              value={selectedRawMaterials[item]}
              onValueChange={() => toggleMaterial(item)}
              tintColors={{true: '#0f9b6e', false: '#aaa'}}
            />
            <Text style={styles.checkboxLabel}>{item}</Text>
          </View>
        ))}

        {/* Add Raw Material Button */}
        <TouchableOpacity
          style={styles.addNewBtn}
          onPress={() => navigation.navigate('FarmerMaterial')}>
          <FeatherIcon name="user-plus" size={18} color="#0f9b6e" />
          <Text style={styles.addNewBtnText}>Add New Raw Material</Text>
        </TouchableOpacity>

        {/* Save/Cancel Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save Changes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        {[
          {name: 'Home', icon: 'home', screen: 'FarmerHome'},
          {
            name: 'Transaction',
            icon: 'account-balance-wallet',
            screen: 'FarmerTrans',
          },
          {name: 'Profile', icon: 'person-outline', screen: 'FarmerProfile'},
          {name: 'Help', icon: 'help-outline', screen: 'FarmerHelp'},
        ].map(tab => (
          <TouchableOpacity
            key={tab.name}
            style={styles.navItem}
            onPress={() => {
              setActiveTab(tab.name);
              navigation.navigate(tab.screen);
            }}>
            <MaterialIcon
              name={tab.icon}
              size={28}
              color={activeTab === tab.name ? 'green' : 'gray'}
            />
            <Text
              style={[
                styles.navText,
                activeTab === tab.name && styles.activeNavText,
              ]}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 48,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  searchInput: {
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 16,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 12,
    justifyContent: 'space-around',
  },
  tabText: {
    fontSize: 14,
    color: '#777',
    paddingBottom: 6,
  },
  activeTab: {
    color: '#0f9b6e',
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: '#8876e6',
  },
  formContainer: {
    flex: 1,
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    marginBottom: 14,
    fontSize: 14,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 14,
  },
  addNewBtn: {
    borderWidth: 1,
    borderColor: '#b6b0ff',
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    marginVertical: 16,
  },
  addNewBtnText: {
    fontWeight: '500',
    color: '#0f9b6e',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 30,
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#0f9b6e',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#eeeaff',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#666',
    fontSize: 15,
    fontWeight: '500',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#eee',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: 'gray',
  },
  activeNavText: {
    color: 'green',
    fontWeight: 'bold',
  },
});

export default FarmerProfileEdit;
