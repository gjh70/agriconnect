import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const IndustryTrans = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Transaction');

  const farmers = [
    { id: '1', name: 'John Smith', creditScore: 7, rawMaterials: ['Corn', 'Wheat'] },
    { id: '2', name: 'Mary Johnson', creditScore: 8, rawMaterials: ['Soybeans', 'Barley'] },
    { id: '3', name: 'Robert Brown', creditScore: 8, rawMaterials: ['Rice', 'Oats'] }
  ];

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Transaction History</Text>
        <TouchableOpacity>
          <Icon name="bar-chart" size={28} color="black" />
        </TouchableOpacity>
      </View>

      {/* Transaction History Title */}
      <Text style={styles.sectionTitle}>Transaction History</Text>

      {/* Farmers List */}
      <FlatList
        data={farmers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.farmerImage} />
            <View style={styles.farmerDetails}>
              <Text style={styles.farmerName}>{item.name}</Text>
              <Text style={styles.creditScore}>Credit Score: {item.creditScore}</Text>
              <Text style={styles.rawMaterials}>Raw Materials: {item.rawMaterials.join(', ')}</Text>
              <TouchableOpacity style={styles.reconnectButton}>
                <Text style={styles.reconnectText}>Reconnect</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        {[
          { name: 'Home', icon: 'home', screen: 'IndustryHome' },
        
          { name: 'Transaction', icon: 'account-balance-wallet',screen:'IndustryTrans'},
          { name: 'Profile', icon: 'person-outline',screen:'IndustryProfile'},
          { name: 'Help', icon: 'help-outline',screen:'IndustryHelp' }
        ].map((tab) => (
          <TouchableOpacity
            key={tab.name}
            style={styles.navItem}
            onPress={() => {
              setActiveTab(tab.name);
              if (tab.screen) {
                navigation.navigate('IndustryHome');

              }
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

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 16 },

  // Header Styles
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10 },
  title: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', flex: 1 },

  // Section Title
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginVertical: 10 },

  // Farmer Card Styles
  card: { flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 8, padding: 10, marginVertical: 5, elevation: 2 },
  farmerImage: { width: 60, height: 60, borderRadius: 30, marginRight: 10 },
  farmerDetails: { flex: 1 },
  farmerName: { fontSize: 16, fontWeight: 'bold' },
  creditScore: { fontSize: 14, color: '#666' },
  rawMaterials: { fontSize: 14, color: '#666' },

  // Reconnect Button
  reconnectButton: { marginTop: 5, paddingVertical: 4, paddingHorizontal: 4, borderWidth: 1, borderColor: 'green', borderRadius: 2, alignSelf: 'flex-start' },
  reconnectText: { color: 'green', fontSize: 14, fontWeight: 'bold' },

  // Bottom Navigation Styles
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#fff', padding: 10, borderTopWidth: 1, borderColor: '#ddd' },
  navItem: { alignItems: 'center' },
  navText: { fontSize: 12, color: 'gray' },
  activeNavText: { color: 'green', fontWeight: 'bold' }
});

export default IndustryTrans;
