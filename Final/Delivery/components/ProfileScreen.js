import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { AuthContext } from '../context/AuthContext'

const ProfileScreen = () => {
  const { setIsLoggedIn } = React.useContext(AuthContext)
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Аккаунт</Text>
      <Text style={styles.headerSubtitle}>
        Редактируйте свою учетную запись и управляйте ею
      </Text>

      <View style={styles.profileCard}>
        <View style={styles.profileHeader}>
          <View style={styles.avatar}>
            <Image
              source={require('../assets/Person.png')}
              style={styles.avatarImage}
            />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Мадияр</Text>
            <Text style={styles.profileLocation}>📍 Алматы</Text>
          </View>
        </View>
        <View style={styles.profileDetails}>
          <Text style={styles.label}>ФИО</Text>
          <Text style={styles.value}>Әли Мадияр</Text>

          <Text style={styles.label}>Телефон</Text>
          <Text style={styles.value}>+7 777 777 7777</Text>

          <Text style={styles.label}>Почта</Text>
          <Text style={styles.value}>m_ali@kbtu.kz</Text>
        </View>
      </View>

      <Text style={styles.sectionHeader}>Помощь и обратная связь</Text>
      <Text style={styles.sectionSubtitle}>
        Задай свои вопросы по приложению
      </Text>

      <View style={styles.helpSection}>
        <TouchableOpacity style={styles.helpItem}>
          <Text style={styles.helpText}>FAQs</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.helpItem}>
          <Text style={styles.helpText}>Связаться с нами</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => setIsLoggedIn(false)}
      >
        <Text style={styles.logoutText}>Выйти</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
    marginTop: 30
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#999',
    marginBottom: 20
  },
  profileCard: {
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
    elevation: 2
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  },
  avatar: {
    marginRight: 15
  },
  avatarImage: {
    width: 50,
    height: 50
  },
  profileInfo: {
    justifyContent: 'center'
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000'
  },
  profileLocation: {
    fontSize: 14,
    color: '#666',
    marginTop: 4
  },
  profileDetails: {
    marginTop: 10
  },
  label: {
    fontSize: 12,
    color: '#888',
    marginTop: 8
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000'
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#999',
    marginBottom: 15
  },
  helpSection: {
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    paddingVertical: 10,
    marginBottom: 30
  },
  helpItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16
  },
  helpText: {
    fontSize: 14,
    color: '#666'
  },
  arrow: {
    fontSize: 18,
    color: '#999'
  },
  logoutButton: {
    alignSelf: 'flex-start'
  },
  logoutText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FECB4B'
  }
})

export default ProfileScreen
