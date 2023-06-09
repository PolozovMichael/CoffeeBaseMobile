import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native'
import styles from './welcome.styles'

import { useState } from 'react'

import search from '../../assets/img/search.png'

const typesOfCoffee = ['Cyber Space', 'Coffee', 'Members']

const Welcome = () => {
  const [activeTabType, setActiveTabType] = useState(typesOfCoffee[0])
  return (
    <View>
      <View className={styles.container}>
        <Text style={styles.hello}>Welcome to Coffee Base!</Text>
        <Text style={styles.welcomeMessage}>Grab your coffee and enjoy!</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={search}
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={typesOfCoffee}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeTabType, item)}
              onPress={() => {
                setActiveTabType(item)
              }}
            >
              <Text style={styles.tabText(activeTabType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: '10px' }}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome
