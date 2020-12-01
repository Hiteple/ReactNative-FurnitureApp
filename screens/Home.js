import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {images, icons, COLORS, SIZES, FONTS} from '../constants/';

const Home = () => {

   // Render
   const renderHeader = () => {
      return (
         <View style={{paddingHorizontal: SIZES.padding}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
               <TouchableOpacity>
                  <Image source={icons.menu} resizeMode='contain' style={{width: 25, height: 25}} />
               </TouchableOpacity>

               <TouchableOpacity>
                  <Image source={icons.cart} resizeMode='contain' style={{width: 25, height: 25}} />
               </TouchableOpacity>
            </View>
         </View>
      );
   }

   return (
      <SafeAreaView style={styles.container}>
         {renderHeader()}
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: COLORS.white
   },
   shadow: {
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 3
      },
      shadowRadius: 0.32,
      shadowOpacity: 5.46,
      elevation: 9
   }
});

export default Home;