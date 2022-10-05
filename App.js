import React, {useState} from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Button, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import RadioButtonGroup, {RadioButtonItem} from 'expo-radio-button';

export default function App() {
  const [weight,setWeight] = useState(0);
  const [bottles,setBottles] = useState();
  const [time,setTime] = useState();
  var [gender,setGender] = useState("male");
  const [result,setResult] = useState(0);

  const createOneButtonAlert = () =>
  Alert.alert(
    "Weight is not typed in!",
    "Please type in weight",
    [
      {
        text: "OK",
        onPress: () => console.log("OK pressed")
      }
    ]
  );

  function calculate()
  {
    if (weight == 0)
    {
      createOneButtonAlert();
    }
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsleft = grams - burning * time;
    if (gender=="male")
    {
      const maleweight = weight * 0.7;
      var calculation = gramsleft / maleweight;
      if (calculation < 0)
      {
        calculation = 0;
        setResult(calculation);
      }
      else{
        setResult(calculation);
      }
    }
    else
    {
      const femaleweight = weight * 0.6;
      var calculation = gramsleft / femaleweight;
      if (calculation < 0)
      {
        calculation = 0;
        setResult(calculation);
      }
      else{
        setResult(calculation);
      }
    }    
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Alcometer</Text>
        <Text>Weight</Text>
        <TextInput style={styles.txtinput} value={weight} onChangeText={text => setWeight(text)}
        keyboardType='decimal-pad'/>
        <Text>Bottles</Text>
        <Picker
          selectedValue={bottles}
          onValueChange={(itemValue, itemIndex) =>
          setBottles(itemValue)
          }>
          <Picker.Item label="0" value="0" /> 
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
          <Picker.Item label="6" value="6"/>
          <Picker.Item label="7" value="7"/>
          <Picker.Item label="8" value="8"/>
          <Picker.Item label="9" value="9"/>
          <Picker.Item label="10" value="10"/>
        </Picker>
        <Text>Time</Text>
        <Picker
          selectedValue={time}
          onValueChange={(itemValue, itemIndex) =>
          setTime(itemValue)
          }>
          <Picker.Item label="0" value="0" /> 
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
          <Picker.Item label="6" value="6"/>
          <Picker.Item label="7" value="7"/>
          <Picker.Item label="8" value="8"/>
          <Picker.Item label="9" value="9"/>
          <Picker.Item label="10" value="10"/>
        </Picker>
        <RadioButtonGroup
          selected={gender}
          onSelected={(value) => setGender(value)}
        >
          <RadioButtonItem style={styles.margin} value="male" label="Male"/>
          <RadioButtonItem style={styles.margin} value="female" label="Female"/>
        </RadioButtonGroup>
        <Button onPress={calculate} title="Calculate"></Button>
        <Text style={styles.title}>Your blood alcohol level is:</Text>
        <Text style={styles.result}>{result.toFixed(2)}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   marginTop: 25,
   marginLeft: 10,
  },
  title: {
    marginTop: 25,
    fontSize:20,
    alignSelf:'center',
  },
  result: {
    fontSize: 30,
    alignSelf: 'center',
    marginTop: 10,
  },
  txtinput: {
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
  },
  margin: {
    marginBottom: 10,
  },

});
