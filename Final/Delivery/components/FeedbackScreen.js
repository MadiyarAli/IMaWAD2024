import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
  Image
} from 'react-native'
import { useCart } from '../context/CartContext'
import { useNavigation } from '@react-navigation/native'

const FeedbackScreen = () => {
  const { cart } = useCart()
  const navigation = useNavigation()
  const [rating, setRating] = useState(0)
  const [itemRatings, setItemRatings] = useState({})
  const [comments, setComments] = useState('')
  const [itemComments, setItemComments] = useState({})
  const [selectedTags, setSelectedTags] = useState({})

  const updateItemRating = (id, value) => {
    setItemRatings((prev) => ({ ...prev, [id]: value }))
  }

  const updateItemComment = (id, text) => {
    setItemComments((prev) => ({ ...prev, [id]: text }))
  }

  const toggleTag = (id) => {
    setSelectedTags((prev) => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const tags = [
    {
      id: 1,
      label: 'Вкусная еда',
      img: require('../assets/Feedback/PlateImg.png')
    },
    { id: 2, label: 'Сервис', img: require('../assets/Feedback/HandImg.png') },
    {
      id: 3,
      label: 'Чистота',
      img: require('../assets/Feedback/BrushImg.png')
    },
    {
      id: 4,
      label: 'Персонал',
      img: require('../assets/Feedback/PersonalImg.png')
    }
  ]

  const renderStars = (currentRating, onRate, starSize = 30) => (
    <View style={styles.stars}>
      {[1, 2, 3, 4, 5].map((star) => (
        <TouchableOpacity key={star} onPress={() => onRate(star)}>
          <Text
            style={[
              styles.star,
              { fontSize: starSize },
              currentRating >= star && styles.filledStar
            ]}
          >
            ★
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Спасибо {'\n'}Ваш заказ оплачен</Text>

      <Text style={styles.sectionTitle}>Оцените наш сервис</Text>
      {renderStars(rating, setRating, 50)}

      <Text style={styles.sectionTitle}>За что похвалить ресторан?</Text>
      <View style={styles.tags}>
        {tags.map((tag) => (
          <View key={tag.id} style={styles.tagContainer}>
            <TouchableOpacity
              style={[styles.tag, selectedTags[tag.id] && styles.activeTag]}
              onPress={() => toggleTag(tag.id)}
            >
              <Image source={tag.img} style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.tagText}>{tag.label}</Text>
          </View>
        ))}
      </View>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Text style={styles.itemName}>{item.name}</Text>
              {renderStars(itemRatings[item.id] || 0, (value) =>
                updateItemRating(item.id, value)
              )}
              <Text style={styles.itemPrice}>
                {item.price.toLocaleString()} ₸
              </Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Комментарий ..."
              value={itemComments[item.id] || ''}
              onChangeText={(text) => updateItemComment(item.id, text)}
            />
          </View>
        )}
        scrollEnabled={false}
      />

      <TextInput
        style={styles.largeInput}
        placeholder="Комментарий ..."
        value={comments}
        onChangeText={setComments}
        multiline
      />

      <View style={{ marginBottom: 40 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Tabs')
          }}
        >
          <Text style={styles.buttonText}>ГОТОВО</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FECB4B',
    textAlign: 'center',
    marginBottom: 30
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  stars: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  star: {
    fontSize: 30,
    color: '#ccc',
    marginRight: 5
  },
  filledStar: {
    color: '#FECB4B'
  },
  tags: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30
  },
  tagContainer: {
    alignItems: 'center'
  },
  tag: {
    backgroundColor: '#F3F3F3',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8
  },
  activeTag: {
    backgroundColor: '#FECB4B'
  },
  tagText: {
    fontSize: 12,
    color: '#444',
    marginTop: 10
  },
  item: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingBottom: 10
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  itemPrice: {
    fontSize: 14,
    color: '#000',
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 17,
    padding: 10,
    fontSize: 14,
    height: 40
  },
  largeInput: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    height: 100,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#FECB4B',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 'auto'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  }
})

export default FeedbackScreen
