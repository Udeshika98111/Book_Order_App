import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, Alert,Dimensions,ImageBackground } from 'react-native';

 var he= Dimensions.get("window").height;


function ProductScreen ({navigation}) {

  const [cartItems, setCartItems] = useState([]);

  const products = [

       //novel

    { id: '1', name: 'Adaraniiya Bekam', price:500.00,author:"Yauwana Samimdra Rathnayaka", image: require('../assets/NAvel/1.jpg') },
    { id: '2', name: 'Hathdinnath athru', price:230.00,author:"Dilini Arachchihe",image: require('../assets/NAvel/2.jpg') },
    { id: '3', name: 'Dayabara Nooty(1)', price:400.00,author:"Yauwana Samimdra Rathnayaka",image: require('../assets/NAvel/3.jpg') },
    { id: '4', name: 'Dayabara Nooty(2)',price:400.00,author:"Yauwana Samimdra Rathnayaka",image: require('../assets/NAvel/4.jpg') },
    { id: '5', name: 'Dayabara Nooty(3)', price:400.00,author:"Yauwana Samimdra Rathnayaka",image: require('../assets/NAvel/5.jpg') },

    { id: '6', name: 'Lahiru Udanaya', price:300.00,author:"Gayani S Lakmali", image: require('../assets/NAvel/6.jpg') },
    { id: '7', name: 'Tani Tharuwa', price:300.00,author:"Chandi Kodikara", image: require('../assets/NAvel/7.jpg') },
    { id: '8', name: 'Nilambaree', price:150.00,author:"Sujeewa Prasanna Arachchi", image: require('../assets/NAvel/8.jpg') },
    { id: '9', name: 'Aduruthumiyani Premaye Oba', price:300.00,author:"Chandi Kodikara", image: require('../assets/NAvel/9.jpg') },
    
    { id: '10', name: 'Senkottan', price:3000.00,author:"Mahinda Prasad Masila",image: require('../assets/NAvel/10.jpg') },

     
   
    
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


      





      <Image
  >
      
      </Image>
      

      <Text style={styles.heading}>CART</Text>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}
      />
    </View>
     </ImageBackground>
  );
}

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