import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Used in bottom navigation
import { useNavigation } from '@react-navigation/native';

const FarmerHelp = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Help'); // Default active tab is Help

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help & Support</Text>
      </View>

      {/* Search Input */}
      <View style={styles.searchBox}>
        <Feather name="search" size={18} color="#aaa" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search FAQs"
          placeholderTextColor="#999"
        />
      </View>

      <ScrollView style={styles.scrollArea} showsVerticalScrollIndicator={false}>
        {/* FAQs */}
        <Text style={styles.sectionHeading}>Commonly Asked Questions</Text>

        <View style={styles.faqItem}>
          <Text style={styles.faqQuestion}>How to connect with industries?</Text>
          <Text style={styles.faqAnswer}>
            Learn how to establish connections with farmers.
          </Text>
        </View>

        <View style={styles.faqItem}>
          <Text style={styles.faqQuestion}>How do I reset my password?</Text>
          <Text style={styles.faqAnswer}>
            Go to 'Forgot Password' on the login screen, enter your email or phone number,
            and follow the instructions to reset it.
          </Text>
        </View>

        <View style={styles.faqItem}>
          <Text style={styles.faqQuestion}>How can I contact customer support?</Text>
          <Text style={styles.faqAnswer}>
            You can reach support via in-app chat, email, or phone.
          </Text>
        </View>

        {/* Account Settings */}
        <Text style={styles.sectionHeading}>Account settings</Text>
        <Text style={styles.sectionSubtext}>
          Manage your account preferences.
        </Text>

        {/* Contact Support Buttons */}
        <Text style={styles.sectionHeading}>Contact Support</Text>

        <TouchableOpacity style={styles.contactButton}>
          <MaterialIcons name="email" size={20} color="#000" style={styles.contactIcon} />
          <Text style={styles.contactText}>Email Support</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactButton}>
          <MaterialIcons name="call" size={20} color="#000" style={styles.contactIcon} />
          <Text style={styles.contactText}>Call Support</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        {[
          { name: 'Home', icon: 'home', screen: 'FarmerHome' },
          { name: 'Transaction', icon: 'account-balance-wallet', screen: 'FarmerTrans' },
          { name: 'Profile', icon: 'person-outline', screen: 'FarmerProfile' },
          { name: 'Help', icon: 'help-outline', screen: 'FarmerHelp' }
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
  searchIcon: {
    marginRight: 8,
  },
  scrollArea: {
    flex: 1,
  },
  sectionHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  sectionSubtext: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  faqItem: {
    marginBottom: 16,
  },
  faqQuestion: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  faqAnswer: {
    fontSize: 14,
    color: '#555',
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d9c7ff',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  contactIcon: {
    marginRight: 12,
  },
  contactText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 10,
    marginTop: 12,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: 'gray',
    marginTop: 2,
  },
  activeNavText: {
    color: 'green',
    fontWeight: 'bold',
  },
});

export default FarmerHelp;
