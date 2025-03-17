import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const IndustryHelp = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Help'); // Default to 'Help'

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      <Text style={styles.header}>Help & Support</Text>

      {/* Scrollable Content */}
      <ScrollView 
        style={styles.contentContainer} 
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#999" />
          <TextInput 
            placeholder="Search FAQs" 
            style={styles.searchInput}
            placeholderTextColor="#999"
          />
        </View>

        {/* FAQ Section */}
        <Text style={styles.sectionTitle}>Commonly Asked Questions</Text>
        <View style={styles.faqContainer}>
          <FAQItem 
            question="How to connect with farmer directly?" 
            answer="You can contact a farmer via the Farmer Profile section in each transaction card or posted demand."
          />
          <FAQItem 
            question="How do I reset my password?" 
            answer="Go to 'Forgot Password' on the login screen, enter your email or phone number, and follow the instructions to reset it."
          />
          <FAQItem 
            question="How can I contact customer support?" 
            answer="You can reach support via in-app chat, email, or phone."
          />
        </View>

        {/* Account Settings */}
        <View style={styles.accountSettings}>
          <Text style={styles.settingsTitle}>Account settings</Text>
          <Text style={styles.settingsDescription}>Manage your account preferences.</Text>
        </View>

        {/* Contact Support */}
        <Text style={styles.contactSupport}>Contact Support</Text>

        <TouchableOpacity style={styles.supportButton}>
          <Icon name="mail-outline" size={20} color="#000" />
          <Text style={styles.supportButtonText}>Email Support</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.supportButton}>
          <Icon name="call" size={20} color="#000" />
          <Text style={styles.supportButtonText}>Call Support</Text>
        </TouchableOpacity>
      </ScrollView>

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
    </View>
  );
};

// FAQ Item Component
const FAQItem = ({ question, answer }) => (
  <View style={styles.faqItem}>
    <Text style={styles.faqQuestion}>{question}</Text>
    <Text style={styles.faqAnswer}>{answer}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
    zIndex: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  contentContainer: {
    flex: 1,
    marginBottom: 70, // To avoid overlapping with bottom nav
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  faqContainer: {
    marginBottom: 16,
  },
  faqItem: {
    marginBottom: 16,
  },
  faqQuestion: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  faqAnswer: {
    fontSize: 14,
    color: '#555',
  },
  accountSettings: {
    marginVertical: 16,
  },
  settingsTitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  settingsDescription: {
    fontSize: 14,
    color: '#555',
  },
  contactSupport: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  supportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D0C7FF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  supportButtonText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
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

export default IndustryHelp;
