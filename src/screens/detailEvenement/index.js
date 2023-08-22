import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Animated,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
const DetailEvenement = ({route, navigation}) => {
  const [vvip, setVvip] = useState(false);
  const [vip, setVip] = useState(false);
  const [gp, setGp] = useState(false);

  console.log(vvip, vip, gp);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/concert.jpeg')}
        resizeMode="contain"
        style={{
          justifyContent: 'center',
          width: '100%',
          flex: 1,
          borderRadius: 1,
        }}
      />
      <View
        style={{
          flex: 2,
          backgroundColor: '#fff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          top: '-2%',
        }}>
        <ScrollView style={{margin: 10}}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: '#fff',
                borderRadius: 50,
                justifyContent: 'center',
                borderWidth: 2,
                borderColor: '#1b59fa',
              }}>
              <View style={styles.menuActif}>
                <Icon
                  style={{alignSelf: 'center'}}
                  name="party-popper"
                  pack="material"
                  size={20}
                  color={'#fff'}
                />
              </View>
            </View>
            <View style={{justifyContent: 'center', marginHorizontal: 5}}>
              <Text style={[styles.blue, {fontSize: 18, fontWeight: 'bold'}]}>
                Event
              </Text>
            </View>
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: '#000'}}>
              Giga concert
            </Text>
            <Text>Concert de Josey</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                size={15}
                name="account-cog"
                pack="material"
                style={{alignSelf: 'center'}}
              />
              <Text style={{marginHorizontal: 10, fontSize: 12}}>
                08 Oct 24 - 16H00
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon
                size={15}
                name="account-cog"
                pack="material"
                style={{alignSelf: 'center'}}
              />
              <Text style={{marginHorizontal: 10, fontSize: 12}}>
                Stade de l'université
              </Text>
            </View>
          </View>
          <View>
            <Text>Ticket Disponible</Text>
            {vvip == true ? (
              <TouchableOpacity
                style={[
                  styles.priceCard,
                  {marginBottom: 10, borderWidth: 2, borderColor: '#1b59fa'},
                ]}
                onPress={() => {
                  setVvip(true);
                  setVip(false);
                  setGp(false);
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    style={{alignSelf: 'center'}}
                    name="ticket-confirmation"
                    pack="material"
                    size={25}
                    color={'#1b59fa'}
                  />
                  <View style={{justifyContent: 'center', marginHorizontal: 5}}>
                    <Text style={{fontWeight: 'bold'}}>TICKET VVIP</Text>
                  </View>
                </View>
                <View>
                  <Text style={[styles.blue, {fontWeight: 'bold'}]}>
                    20 000 FCFA
                  </Text>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.priceCard, {marginBottom: 10}]}
                onPress={() => {
                  setVvip(true);
                  setVip(false);
                  setGp(false);
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    style={{alignSelf: 'center'}}
                    name="ticket-confirmation"
                    pack="material"
                    size={25}
                    color={'#1b59fa'}
                  />
                  <View style={{justifyContent: 'center', marginHorizontal: 5}}>
                    <Text style={{fontWeight: 'bold'}}>TICKET VVIP</Text>
                  </View>
                </View>
                <View>
                  <Text style={[styles.blue, {fontWeight: 'bold'}]}>
                    20 000 FCFA
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            {vip == true ? (
              <TouchableOpacity
                style={[
                  styles.priceCard,
                  {marginBottom: 10, borderWidth: 2, borderColor: '#1b59fa'},
                ]}
                onPress={() => {
                  setVvip(false);
                  setVip(true);
                  setGp(false);
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    style={{alignSelf: 'center'}}
                    name="ticket-confirmation"
                    pack="material"
                    size={25}
                    color={'#1b59fa'}
                  />
                  <View style={{justifyContent: 'center', marginHorizontal: 5}}>
                    <Text style={{fontWeight: 'bold'}}>TICKET VIP</Text>
                  </View>
                </View>
                <View>
                  <Text style={[styles.blue, {fontWeight: 'bold'}]}>
                    10 000 FCFA
                  </Text>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.priceCard, {marginBottom: 10}]}
                onPress={() => {
                  setVvip(false);
                  setVip(true);
                  setGp(false);
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    style={{alignSelf: 'center'}}
                    name="ticket-confirmation"
                    pack="material"
                    size={25}
                    color={'#1b59fa'}
                  />
                  <View style={{justifyContent: 'center', marginHorizontal: 5}}>
                    <Text style={{fontWeight: 'bold'}}>TICKET VIP</Text>
                  </View>
                </View>
                <View>
                  <Text style={[styles.blue, {fontWeight: 'bold'}]}>
                    10 000 FCFA
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            {gp == true ? (
              <TouchableOpacity
                style={[
                  styles.priceCard,
                  {marginBottom: 5, borderWidth: 2, borderColor: '#1b59fa'},
                ]}
                onPress={() => {
                  setVvip(false);
                  setVip(false);
                  setGp(true);
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    style={{alignSelf: 'center'}}
                    name="ticket-confirmation"
                    pack="material"
                    size={25}
                    color={'#1b59fa'}
                  />
                  <View style={{justifyContent: 'center', marginHorizontal: 5}}>
                    <Text style={{fontWeight: 'bold'}}>TICKET GP</Text>
                  </View>
                </View>
                <View>
                  <Text style={[styles.blue, {fontWeight: 'bold'}]}>
                    5 000 FCFA
                  </Text>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.priceCard, {marginBottom: 5}]}
                onPress={() => {
                  setVvip(false);
                  setVip(false);
                  setGp(true);
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    style={{alignSelf: 'center'}}
                    name="ticket-confirmation"
                    pack="material"
                    size={25}
                    color={'#1b59fa'}
                  />
                  <View style={{justifyContent: 'center', marginHorizontal: 5}}>
                    <Text style={{fontWeight: 'bold'}}>TICKET GP</Text>
                  </View>
                </View>
                <View>
                  <Text style={[styles.blue, {fontWeight: 'bold'}]}>
                    5 000 FCFA
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 12}}>Frais opérateur</Text>
            <Text style={{fontSize: 12}}>50 FCFA</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={[styles.blue, {fontWeight: 'bold', fontSize: 16}]}>
              Montant a payer
            </Text>
            <Text style={[styles.blue, {fontWeight: 'bold', fontSize: 16}]}>
              5050 FCFA
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#1b59fa',
              height: 35,
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                color: '#fff',
                fontWeight: 'bold',
              }}>
              Confirmer le paiement
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
  },
  label: {fontSize: 16, color: '#222'},
  tab: {elevation: 0, shadowOpacity: 0, backgroundColor: '#FFCC80'},
  indicator: {backgroundColor: '#222'},
  container: {
    flex: 1,
  },
  textStyle: {
    textAlign: 'center',
    color: '#000',
    fontSize: 16,
    padding: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
  },
  blue: {
    color: '#1b59fa',
  },
  priceCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  menuActif: {
    backgroundColor: '#1b59fa',
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default DetailEvenement;
