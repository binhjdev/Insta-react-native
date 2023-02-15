import { View, StyleSheet, Image, Text, SafeAreaView, ScrollView } from 'react-native';
import colors from './src/theme/colors';
import fonts from './src/theme/fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.post}>
          {/*  header */}
          <View style={styles.header}>

            <Image 
              source={{
                uri: 'https://thethaovanhoa.mediacdn.vn/Upload/QDN4HPIpMrJuoPNyIvLDA/files/2021/12/Jimin-Insta3.jpg'
              }}
              style={styles.userAvatar}
            />

            <Text style={styles.userName}>BTS-Jimin</Text>

            <Entypo name="dots-three-horizontal" size={16} style={styles.threeDots}/>
          </View>

          {/* content */}
          <Image 
            source={{
              uri:'https://i.pinimg.com/564x/81/ab/5e/81ab5edd803fd72fe9357f937547a219.jpg',
            }}
            style={styles.image}
          />

          {/* footer} */}
          <View style={styles.footer}>
            <View style={styles.iconContainer}>
              <AntDesign
              name={'hearto'} 
              size={24} 
              style={styles.icon}
                color={colors.black}
              />
              <Ionicons 
                name="chatbubble-outline" 
                size={24} 
                style={styles.icon}
                />
              <Feather 
              name="send" 
              size={24} 
              style={styles.icon}
              />
              <Feather 
              name="bookmark"
              size={24}
                style={{marginLeft: 'auto'}}
                />
            </View>

            {/* Likes */}
            <Text>
              Liked by {' '}
              <Text style={{fontWeight: fonts.weight.bold}}>binhtt</Text> and{' '} 
              <Text style={{fontWeight: fonts.weight.bold}}>22 others </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create(
  {
    post : {

    },
    image: {
      width: '100%',
      aspectRatio: 1,
    },
    header : {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
    userAvatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    userName: {
      fontWeight: fonts.weight.bold,
      color: colors.black
    },
    threeDots: {
      marginLeft: 'auto',
    },
    footer: {
      padding: 10,
    },
    iconContainer: {
      flexDirection: 'row',
      marginBottom: 5,
    },
    icon :{
      marginHorizontal: 5,
    }
  }
);
export default App;