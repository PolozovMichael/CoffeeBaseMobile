import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground,
} from 'react-native-web'
import { Stack, useRouter } from 'expo-router'
import styles from './styles'
import Menu from '../components/Menu/Menu'
import HeaderSearch from '../components/HeaderSearch/HeaderSearch'
import Welcome from '../components/welcome/Welcome'
import News from '../components/News/News'
import MarketOverview from '../components/MarketOverview/MarketOverview'
import Tokens from '../components/Tokens/Tokens'
import CreateUser from '../components/CreateUser/CreateUser'

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#1E1E24',
          },
          headerTitleStyle: {
            fontWeight: 'medium',
            color: '#fff',
            fontSize: 24,
            fontFamily: 'ChkBold',
          },
          headerTitle: 'Coffee Base',
          headerTintColor: '#fff',
          headerLeft: () => <Menu />,
          headerRight: () => <HeaderSearch />,
        }}
      />
      <ImageBackground
        source={'../../assets/img/bg.jpg'}
        style={{
          flex: 1,
          backgroundSize: 'cover',
          backgroudPosition: 'center',
        }}
      >
        <ScrollView
          style={styles.containerMain}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <Welcome />
          <News />
          <CreateUser />
          <Tokens />
          <MarketOverview />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Home
