import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image, FlatList, StyleSheet} from 'react-native';
import {images, icons, COLORS, SIZES, FONTS} from '../constants/';

const ScrollableTab = ({tabList, selectedTab, onPress}) => {
   const renderItem = ({item}) => {
      return (
         <TouchableOpacity
            style={{
               marginHorizontal: SIZES.padding
            }}
            onPress={() => onPress(item)}
         >
            <Text style={{color: COLORS.secondary, ...FONTS.body3}}>{item.name}</Text>
            {
               selectedTab.id == item.id && (
                  <View style={{alignItems: 'center', marginTop: SIZES.base}}>
                     <View style={{width: 10, height: 10, borderRadius: 5, backgroundColor: COLORS.blue}}></View>
                  </View>
               )
            }
         </TouchableOpacity>
      );
   };

   return (
      <View style={{marginTop: SIZES.padding}}>
         <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={tabList}
            renderItem={(item) => renderItem(item)}
            keyExtractor={item => item.id.toString()}
         />
      </View>
   );
}

const ScrollableCard = ({navigation, productList}) => {
   const renderCard = ({item}) => (
      <TouchableOpacity
         style={{marginLeft: SIZES.padding}}
         onPress={() => navigation.navigate('ItemDetail', {itemInfo: item})}
      >
         <View style={{width: SIZES.width / 2}}>
            <Image source={item.image} resizeMode='cover' style={{width: '100%', height: '100%', borderRadius: SIZES.radius * 2}} />
            <View style={{position: 'absolute', top: 15, left: '10%', right: '10%'}}>
               <Text style={{color: COLORS.lightGray2, ...FONTS.h3}}>Furniture</Text>
               <Text style={{marginTop: SIZES.base, color: COLORS.white, ...FONTS.h2}}>{item.productName}</Text>
            </View>
            <View
               style={{
                  position: 'absolute',
                  bottom: 20,
                  left: 30,
                  borderRadius: 15,
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  backgroundColor: COLORS.transparentLightGray
               }}
            >
               <Text style={{...FONTS.h2}}>$ {item.price.toFixed(2)}</Text>
            </View>
         </View>
      </TouchableOpacity>
   );
   return (
      <View style={{marginTop: SIZES.padding}}>
         <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={productList}
            renderItem={renderCard}
            keyExtractor={(item) => item.productId.toString()}
         />
      </View>
   );
}

const Home = ({navigation}) => {
   // State
   const [tabList, setTabList] = React.useState([
      {
          id: 1,
          name: "Chair",
          title: "chairs",
          productList: [
              {
                  productId: 1,
                  productName: 'Chair Green Colour',
                  price: 10.00,
                  image: images.greenChair,
              },
              {
                  productId: 2,
                  productName: 'Chair Peach Colour',
                  price: 10.00,
                  image: images.redChair,
              },
              {
                  productId: 3,
                  productName: 'Chair White Colour',
                  price: 10.00,
                  image: images.whiteChair,
              },
          ]
      },
      {
          id: 2,
          name: "Cupboard",
          title: 'cupboards',
          productList: [
              {
                  productId: 4,
                  productName: 'Product 4',
                  price: 10.00,
                  image: images.redChair,
              },
              {
                  productId: 5,
                  productName: 'Product 5',
                  price: 10.00,
                  image: images.redChair,
              },
              {
                  productId: 6,
                  productName: 'Product 6',
                  price: 10.00,
                  image: images.redChair,
              },

          ]
      },
      {
          id: 3,
          name: "Table",
          title: 'tables',
          productList: [
              {
                  productId: 7,
                  productName: 'Product 7',
                  price: 10.00,
                  image: images.redChair,
              },
              {
                  productId: 8,
                  productName: 'Product 8',
                  price: 10.00,
                  image: images.redChair,
              },
              {
                  productId: 9,
                  productName: 'Product 9',
                  price: 10.00,
                  image: images.redChair,
              },

          ]
      },
      {
          id: 4,
          name: "Accessories",
          title: 'accessories',
          productList: [
              {
                  productId: 10,
                  productName: 'Product 10',
                  price: 10.00,
                  image: images.redChair,
              },
              {
                  productId: 11,
                  productName: 'Product 11',
                  price: 10.00,
                  image: images.redChair,
              },
              {
                  productId: 12,
                  productName: 'Product 12',
                  price: 10.00,
                  image: images.redChair,
              },

          ]
      }
  ]);

  const [selectedTab, setSelectedTab] = React.useState(
   {
      id: 1,
      name: "Chair",
      title: "chairs",
      productList: [
          {
              productId: 1,
              productName: 'Chair Green Colour',
              price: 10.00,
              image: images.greenChair,
          },
          {
              productId: 2,
              productName: 'Chair Peach Colour',
              price: 10.00,
              image: images.redChair,
          },
          {
              productId: 3,
              productName: 'Chair White Colour',
              price: 10.00,
              image: images.whiteChair,
          },
      ]
  },
  );

   // Render
   const renderHeader = () => {
      return (
         <View style={{paddingHorizontal: SIZES.padding}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
               <TouchableOpacity onPress={() => console.log('pressed menu')}>
                  <Image source={icons.menu} resizeMode='contain' style={{width: 25, height: 25}} />
               </TouchableOpacity>

               <TouchableOpacity onPress={() => console.log('pressed cart')}>
                  <Image source={icons.cart} resizeMode='contain' style={{width: 25, height: 25}} />
               </TouchableOpacity>
            </View>
         </View>
      );
   }

   const renderTitle = (title) => {
      return (
         <View style={{marginTop: SIZES.padding, marginHorizontal: SIZES.padding}}>
            <Text style={{color: COLORS.black, ...FONTS.largeTitle}}>Collection of</Text>
            <Text style={{color: COLORS.black, ...FONTS.largeTitle}}>{title}</Text>
         </View>
      );
   }

   const renderPromotionCard = () => {
      return (
         <View
            style={[{
               flexDirection: 'row',
               marginHorizontal: SIZES.padding,
               padding: SIZES.radius,
               height: 110,
               borderRadius: 20,
               backgroundColor: COLORS.white
            }, styles.shadow]}
         >
            <View style={{width: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.lightGray2, borderRadius: 20}}>
               <Image source={images.sofa} resizeMode='contain' style={{width: '50%', height: '60%'}} />
            </View>
            
            {/* Wording section */}
            <View style={{flex: 1, marginLeft: SIZES.radius * 2, justifyContent: 'center'}}>
               <Text style={{...FONTS.h3}}>Special Offer</Text>
               <Text style={{...FONTS.body4}}>Adding to your cart!</Text>
            </View>

            {/* Button */}
            <View style={{marginRight: SIZES.radius, alignItems: 'center', justifyContent: 'center'}}>
               <TouchableOpacity
                  style={{
                     backgroundColor: COLORS.primary,
                     justifyContent: 'center',
                     alignItems: 'center',
                     height: '70%',
                     width: 40,
                     borderRadius: 10
                  }}
                  onPress={() => console.log('pressed CTA')}
               >
                  <Image source={icons.chevron} resizeMode='contain' style={{width: '50%', height: '50%'}} />
               </TouchableOpacity>
            </View>
         </View>
      );
   }

   return (
      <SafeAreaView style={styles.container}>
         {/* Header */}
         {renderHeader()}
         {renderTitle(selectedTab.title)}

         {/* Categories */}
         <ScrollableTab
            tabList={tabList}
            selectedTab={selectedTab}
            onPress={(item) => setSelectedTab(item)}
         />

         {/* Scrollable card */}
         <View style={{flex: 1}}>
            <ScrollableCard
               navigation={navigation}
               productList={selectedTab.productList}
            />
         </View>

         {/* Footer */}
         <View style={{height: '19%', justifyContent: 'flex-end'}}>
            {renderPromotionCard()}
         </View>
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
      shadowRadius: 5.46,
      shadowOpacity: 0.32,
      elevation: 9
   }
});

export default Home;