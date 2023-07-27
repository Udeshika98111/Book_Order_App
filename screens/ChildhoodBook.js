import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, Alert,ImageBackground,Dimensions } from 'react-native';
 var he= Dimensions.get("window").height;
var wi= Dimensions.get("window").width;


function ProductScreen ({navigation}) {


  const [cartItems, setCartItems] = useState([]);

  const products = [

       //childhoodbook

    { id: '1', name: 'Amba yaluwo', price:500.00,author:"T.M.Ilangarathna",image: require('../assets/imageschild/1.jpg') },
    { id: '2', name: 'kudahora', price:400.00,author:"Sibil weththasinhe",image: require('../assets/imageschild/2.jpg') },
    { id: '3', name: 'Doyi Amma  ', price:200.00,author:"Janaki sooriya Arachchi", image: require('../assets/imageschild/3.jpg') },
    { id: '4', name: 'Kurulu Podiththo',price:220.00,author:"Sarath Anurasiri", image: require('../assets/imageschild/4.jpg') },
    { id: '5', name: 'Hath Pana', price:500.00,author:"Kumarathunga Munudasa",image: require('../assets/imageschild/5.jpg') },
    { id: '6', name: 'Srimath', price:350.00,author:"Kumarathunga Munidasa", image: require('../assets/imageschild/6.jpg') },
    { id: '7', name: 'Hima Kumari', price:300.00,author:"Samudrika de Silwa",image: require('../assets/imageschild/7.jpg') },
    { id: '8', name: 'MadolDuwa', price:300.00,author:"Martin Wickramasinhe",image: require('../assets/imageschild/8.jpg') },
    { id: '9', name: 'Punchi Kitii', price:200.00,author:"Janaki sooriya Arachchi", image: require('../assets/imageschild/9.jpg') },
    
    { id: '10', name: 'Sorakama', price:480.00,author:"Sibil weththasinhe",image: require('../assets/imageschild/10.jpg') },

     
   
    
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    Alert.alert('Success', 'Product added to cart');
  };

  

const removeFromCart = (product) => {
  const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
  setCartItems(updatedCartItems);
  Alert.alert('Success', 'Product removed from cart');
};




  const handlePayment = () => {
    if (cartItems.length > 0) {
      const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
      Alert.alert('Youre Payment Cost:--', `Total amount: Rs${totalAmount}`);
      setCartItems([]);
      navigation.navigate("Payment");
      
    } else {
      Alert.alert('Error', 'Your cart is empty');
    }
  };


  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.itemtext}>{item.name}</Text>
      <Text style={styles.itemtext}>{item.author}</Text>
      <Text style={styles.pricetext}>Price: RS {item.price}</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.removeButton} onPress={() => removeFromCart(item)}>
      <Text style={styles.buttonText}>Remove</Text>
    </TouchableOpacity>

    </View>
  );

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.cartItemImage} />
      <View style={styles.cartItemDetails}>
        <Text >{item.name}</Text>
        <Text>Price: Rs {item.price}</Text>
        <Text>Author {item.author}</Text>
      </View>
    </View>
  );

  return (
      <ImageBackground
       style= {{flex:1, height:he}}
     source={require('../assets/bg3.jpg')
   
      }>
    <View style={styles.container}>
  
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>

      
      <TouchableOpacity 
      onPress={() => navigation.navigate("Payment")}>
      
      </TouchableOpacity>
      <Text style={styles.buttonText}>Proceed to Payment</Text>
      </TouchableOpacity>
      
      <Text style={styles.heading}>CART</Text>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}
      />
    
      
    </View>
   </ImageBackground>
  );
 
};

const styles = {
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    padding: 20,
  },
  productItem: {
    marginBottom: 20,
    //alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 5,
    flex:1,
    
    
  },
  addButton: {
    position:'absolute',
    backgroundColor: '#033570',
    paddingVertical:10,
    shadowColor:"red",
    borderRadius:30,
    width:99,
    left:118,
    bottom:15
    
  },
  paymentButton: {
    backgroundColor: '#2596be',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  cartItem: {
    flexDirection: 'column',
    marginBottom: 40,
  },
  cartItemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  cartItemDetails: {
    flex: 1,
  },

  pricetext:{
    fontSize:15,
    left:170,
    bottom:80
  },

  itemtext:{

    fontSize:15,
    fontWeight:'bold',
    left:165,
    bottom:90
  },

  removeButton:{

    position:'absolute',
    backgroundColor: '#033570',
    paddingVertical:10,
    shadowColor:"red",
    borderRadius:30,
    width:99,
    left:220,
    bottom:15
  },

  image1:{

    height:35,
    width:35,
    top:44,
    left:55
  }
};

export default ProductScreen;