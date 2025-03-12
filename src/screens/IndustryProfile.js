import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';


const IndustryProfileScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Profile');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FeatherIcon name="arrow-left" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Industry Profile</Text>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        placeholderTextColor="#999"
      />

      {/* Tabs */}
      <View style={styles.tabs}>
        <Text style={[styles.tab, styles.activeTab]}>Overview</Text>
        <Text style={styles.tab}>Raw Materials</Text>
        <Text style={styles.tab}>Contact Info</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Industry Info */}
        <Text style={styles.industryName}>Agrovalley Industries</Text>
        <Text style={styles.location}>Annapolis, Maryland, United States</Text>

        {/* Contact Info */}
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <View style={styles.contactItem}>
          <FeatherIcon name="phone" size={16} color="#444" />
          <Text style={styles.contactText}>(301) 442-6785</Text>
        </View>
        <View style={styles.contactItem}>
          <FeatherIcon name="mail" size={16} color="#444" />
          <Text style={styles.contactText}>agrovalley@aol.com</Text>
        </View>

        {/* Raw Materials Required */}
        <Text style={styles.sectionTitle}>Raw Materials Required</Text>
        <View style={styles.materialsList}>
          <View style={styles.materialItem}>
            <MaterialCommunityIcons name="corn" size={32} color="#0f9b6e" />
            <Text style={styles.materialLabel}>Grains</Text>
          </View>
          <View style={styles.materialItem}>
            <MaterialCommunityIcons name="food-apple" size={32} color="#0f9b6e" />
            <Text style={styles.materialLabel}>Fruits</Text>
          </View>
        </View>
      </ScrollView>

      {/* Edit Profile Button */}
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => navigation.navigate('IndustryProfileEdit')}
      >
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        {[
          { name: 'Home', icon: 'home', screen: 'IndustryHome' },
          { name: 'Transaction', icon: 'account-balance-wallet', screen: 'IndustryTrans' },
          { name: 'Profile', icon: 'person-outline', screen: 'IndustryProfile' },
          { name: 'Help', icon: 'help-outline', screen: 'IndustryHelp' },
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
              style={[
                styles.navText,
                activeTab === tab.name && styles.activeNavText,
              ]}
            >
              {tab.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default IndustryProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 12,
  },
  searchInput: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    marginBottom: 16,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  tab: {
    marginRight: 24,
    fontSize: 14,
    color: '#777',
  },
  activeTab: {
    fontWeight: 'bold',
    color: '#0f9b6e',
    borderBottomWidth: 2,
    borderBottomColor: '#0f9b6e',
    paddingBottom: 4,
  },
  content: {
    flex: 1,
  },
  industryName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  contactText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
  },
  materialsList: {
    flexDirection: 'row',
    gap: 40,
    marginTop: 12,
    alignItems: 'center',
  },
  materialItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  materialLabel: {
    marginTop: 6,
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  editButton: {
    backgroundColor: '#ccc',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 16,
  },
  editButtonText: {
    fontWeight: '600',
    color: '#333',
    fontSize: 15,
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
    justifyContent: 'center',
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
