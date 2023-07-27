import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button ,Alert,alert} from 'react-native-elements';

const PaymentForm = ({navigation}) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [total, setTotal] = useState('');

  const handlePayment = () => {
    // Use payment gateway API to process payment
  };

  return (
    
    <View>
      <Input
        label="Card Number"
        placeholder="Enter card number"
        value={cardNumber}
        onChangeText={setCardNumber}
      />
      <Input
        label="Expiry Date"
        placeholder="MM/YY"
        value={expiryDate}
        onChangeText={setExpiryDate}
      />
      <Input
        label="CVV"
        placeholder="Enter CVV"
        value={cvv}
        onChangeText={setCvv}
      />
        <Input
        label="Total"
        placeholder="Enter Total"
        value={total}
        onChangeText={setTotal}
      />
      <Button title="Pay"  onPress={() => {
    
        navigation.navigate('Dashboard');
        
      
    }} 
      />
    
      
    </View>
 
  );
};

export default PaymentForm;
