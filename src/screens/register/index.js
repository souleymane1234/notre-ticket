import React, {useContext, useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Alert,
  StatusBar,
  ImageBackground,
} from 'react-native';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
// import { Feather, FontAwesome5, AntDesign } from "@expo/vector-icons";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Register({navigation}) {
  const [checkPassword, setCheckPassword] = useState(true);
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [numero, setNumero] = useState('');
  const [Spinner, setSpinner] = React.useState(false);
  const [myData, setMyData] = useState();

  const sendData = () => {
    setSpinner(!Spinner);
    fetch('http://localhost:3000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nom: nom,
        prenom: prenom,
        email: email,
        password: password,
        numero: numero,
      }),
    })
      .then(res => res.json())
      .then(data => {
        setSpinner(!Spinner);
        if (data) {
          setSpinner(false);
          setMyData(data);
          navigation.navigate('HomeScreen', {
            id: data.user._id,
            Token: data.token,
            Data: data,
          });
          setSpinner(false);
        } else {
          setSpinner(false);
          Alert.alert(
            'Identifiants incorrects',
            'Nom d’utilisateur ou mot de passe incorrect',
          );
        }
        console.log('Patience');
      })
      .catch(error => {
        setSpinner(false);
        Alert.alert(
          'Identifiants incorrects',
          'Nom d’utilisateur ou mot de passe incorrect',
        );
        console.log('Notre erreur ', error);
      });
  };

  const Loader = (
    <OrientationLoadingOverlay
      visible={Spinner}
      color="white"
      indicatorSize="large"
      messageFontSize={10}
      message="Connexion en cours"
    />
  );
  return (
    <ScrollView>
      {Loader}
      <View style={styles.container}>
        <StatusBar animated={true} backgroundColor="#12222e" />
        <View>
          <Image
            source={require('../../assets/logo-scan.png')}
            style={{width: 100, height: 100}}
          />
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 25,
              top: '-10%',
              color: '#fff',
            }}>
            Inscription
          </Text>

          <TextInput
            style={styles.textInput}
            keyboardAppearance="dark"
            placeholder="Votre nom"
            onChangeText={text => setNom(text)}
            value={nom}
          />
          <TextInput
            style={styles.textInput}
            keyboardAppearance="dark"
            placeholder="Votre prenom"
            onChangeText={text => setPrenom(text)}
            value={prenom}
          />
          <TextInput
            style={styles.textInput}
            keyboardAppearance="dark"
            keyboardType="email-address"
            placeholder="Votre email"
            onChangeText={text => setEmail(text)}
            value={email}
          />
          <View
            style={[
              styles.row,
              styles.justifyCenter,
              styles.colorGray,
              styles.textInputPass,
            ]}>
            <TextInput
              secureTextEntry={checkPassword}
              style={styles.textInput2}
              placeholder="Votre mot de passe"
              keyboardAppearance="dark"
              onChangeText={text => setPassword(text)}
              value={password}
            />
            {/* {checkPassword ? (
                <Feather
                  onPress={() => {
                    setCheckPassword(!checkPassword);
                  }}
                  name="eye-off"
                  size={18}
                  color="black"
                />
              ) : (
                <Feather
                  onPress={() => {
                    setCheckPassword(!checkPassword);
                  }}
                  name="eye"
                  size={18}
                  color="black"
                />
              )} */}
          </View>
          <TextInput
            style={styles.textInput}
            keyboardAppearance="dark"
            keyboardType="numeric"
            placeholder="Votre numero"
            onChangeText={text => setNumero(text)}
            value={numero}
          />

          <TouchableOpacity
            // onPress={() => sendData()}
            // onPress={() => navigation.navigate('HomeScreen')}
            onPress={() => sendData()}
            style={[styles.btnLogin, styles.row, styles.justifyCenter]}>
            <Text style={[{color: '#fff'}]}>Inscription</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Text style={[{marginBottom: '5%', color: '#fff'}]}>
              Vous avez pas de compte?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.bold}> Connectez-vous</Text>
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity
              style={[styles.btnSocialG, styles.row, styles.justifyCenter]}
            >
              <Text style={{ color: "white", marginRight: 10 }}>
                Se connecter avec Email
              </Text>
              <AntDesign name="google" size={24} color="white" />
            </TouchableOpacity> */}
          {/* <TouchableOpacity
              style={[styles.btnSocialF, styles.row, styles.justifyCenter]}
            >
              <Text style={{ color: "white", marginRight: 10 }}>
                Se connecter avec Facebook
              </Text>
              <FontAwesome5 name="facebook" size={24} color="white" />
            </TouchableOpacity> */}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#12222e',
  },
  images: {
    resizeMode: 'contain',
    width: '40%',
    marginBottom: '15%',
  },
  textInput: {
    height: 50,
    width: '90%',
    paddingLeft: 10,
    borderRadius: 20,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  textInput2: {
    height: 50,
    width: '90%',
  },
  textInputPass: {
    height: 50,
    width: '90%',
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  colorGray: {
    height: 50,
    width: '90%',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    marginBottom: 25,
  },
  shadow: {
    height: 50,
    width: '90%',
    paddingLeft: 10,
    paddingRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1,
    borderRadius: 10,
    marginBottom: 25,
  },
  row: {
    flexDirection: 'row',
  },
  justifyCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnLogin: {
    backgroundColor: '#53c6ea',
    width: '70%',
    height: '8%',
    borderRadius: 15,
    marginBottom: 10,
  },
  btnSocialG: {
    backgroundColor: '#EC002A',
    width: '90%',
    height: '7%',
    borderRadius: 20,
    marginBottom: '2%',
    top: '10%',
  },
  btnSocialF: {
    backgroundColor: '#125D98',
    width: '90%',
    height: '7%',
    borderRadius: 20,
    marginBottom: '2%',
    top: '10%',
  },
  bold: {
    fontWeight: 'bold',
    color: '#53c6ea',
  },
});
