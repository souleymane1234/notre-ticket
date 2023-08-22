import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
  Pressable,
  Alert,
  Share,
  TextInput,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StoriesComponent} from '../../components/storiesComponent';
import {TopBoxComponent} from '../../components/topBoxComponent';
import {storiesData} from '../../donnee/storiesData';
import {topBoxData} from '../../donnee/topBoxData';
import VideoPlayer from 'react-native-video-player';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const heightVideo = Dimensions.get('window').height / 2.6;
const heightStotiesVideo = Dimensions.get('window').height / 1.2;

const MajesticDetailScreen = ({navigation, route}) => {
  // const { id, Token, Data } = route.params;
  const [home, setHome] = useState(true);
  // for home start
  const [event, setEvent] = useState(true);
  const [cinema, setCinema] = useState(false);
  const [transport, setTransport] = useState(false);
  const [sport, setSport] = useState(false);
  const [loisirs, setLoisirs] = useState(false);
  // for home end
  const [ticket, setTicket] = useState(false);
  const [profil, setProfil] = useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);

  //  console.log("data........", Data)
  // All cinema

  const BottomBar = (
    <View
      style={{
        height: 50,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        elevation: 10,
        zIndex: 2,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        flex: 1,
        right: 0,
        left: 0,
      }}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        {home == true ? (
          <TouchableOpacity
            onPress={() => {
              setHome(true);
              setTicket(false);
              setProfil(false);
            }}>
            <Icon
              size={30}
              name="home"
              pack="material"
              style={styles.bottomBarIconActif}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setHome(true);
              setTicket(false);
              setProfil(false);
            }}>
            <Icon
              size={30}
              name="home"
              pack="material"
              style={styles.bottomBarIconNoActif}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        {ticket == true ? (
          <TouchableOpacity
            onPress={() => {
              setHome(true);
              setTicket(false);
              setProfil(false);
            }}>
            <Icon
              size={30}
              name="ticket-confirmation"
              pack="material"
              style={styles.bottomBarIconActif}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setHome(false);
              setTicket(true);
              setProfil(false);
            }}>
            <Icon
              size={30}
              name="ticket-confirmation"
              pack="material"
              style={styles.bottomBarIconNoActif}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        {profil == true ? (
          <TouchableOpacity
            onPress={() => {
              setHome(true);
              setTicket(false);
              setProfil(false);
            }}>
            <Icon
              size={30}
              name="account-circle"
              pack="material"
              style={styles.bottomBarIconActif}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setHome(false);
              setTicket(false);
              setProfil(true);
            }}>
            <Icon
              size={30}
              name="account-circle"
              pack="material"
              style={styles.bottomBarIconNoActif}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  // share function
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "je suis heureux de vous partager l'application",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  // for home start
  const Event = (
    <View style={{height: windowHeight, width: windowWidth}}>
      <ScrollView>
        {/* event populaire start  */}
        <View style={{margin: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={[styles.blue, {fontSize: 18, fontWeight: 'bold'}]}>
              Evenement populaire
            </Text>
            <TouchableOpacity>
              <Text style={[styles.blue]}>Voir tout</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal style={{top: 10}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailEvenement')}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    top: '5%',
                    position: 'absolute',
                    zIndex: 1,
                    backgroundColor: '#aecbd7',
                    borderRadius: 5,
                    width: 35,
                    marginHorizontal: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: '#597797',
                      textAlign: 'center',
                    }}>
                    17 {'\n'} DEC
                  </Text>
                </View>
                <View
                  style={{
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 4,
                    },
                    shadowOpacity: 0.3,
                    shadowRadius: 4.65,

                    elevation: 8,
                    width: 150,
                    height: 140,
                    borderRadius: 10,
                  }}>
                  <Image
                    source={require('../../assets/concert.jpeg')}
                    resizeMode="contain"
                    style={{
                      justifyContent: 'center',
                      width: '100%',
                      height: '100%',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 10,
                }}>
                <View
                  style={{
                    top: '5%',
                    position: 'absolute',
                    zIndex: 1,
                    backgroundColor: '#aecbd7',
                    borderRadius: 5,
                    width: 35,
                    marginHorizontal: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: '#597797',
                      textAlign: 'center',
                    }}>
                    17 {'\n'} DEC
                  </Text>
                </View>

                <View
                  style={{
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 4,
                    },
                    shadowOpacity: 0.3,
                    shadowRadius: 4.65,

                    elevation: 8,
                    width: 150,
                    height: 140,
                    borderRadius: 10,
                  }}>
                  <Image
                    source={require('../../assets/magic.jpg')}
                    resizeMode="contain"
                    style={{
                      justifyContent: 'center',
                      width: '100%',
                      height: '100%',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    top: '5%',
                    position: 'absolute',
                    zIndex: 1,
                    backgroundColor: '#aecbd7',
                    borderRadius: 5,
                    width: 35,
                    marginHorizontal: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: '#597797',
                      textAlign: 'center',
                    }}>
                    17 {'\n'} DEC
                  </Text>
                </View>

                <View
                  style={{
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 4,
                    },
                    shadowOpacity: 0.3,
                    shadowRadius: 4.65,

                    elevation: 8,
                    width: 150,
                    height: 140,
                    borderRadius: 10,
                  }}>
                  <Image
                    source={require('../../assets/fally.jpg')}
                    resizeMode="contain"
                    style={{
                      justifyContent: 'center',
                      width: '100%',
                      height: '100%',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        {/* event populaire end  */}
        {/* recommander start  */}
        <View style={{margin: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={[styles.blue, {fontSize: 18, fontWeight: 'bold'}]}>
              Recommandé pour vous
            </Text>
            <TouchableOpacity>
              <Text style={[styles.blue]}>Voir tout</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal style={{top: 10}}>
            <TouchableHighlight>
              <View
                style={{
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 4.65,

                  elevation: 8,
                  width: 150,
                  height: 140,
                  borderRadius: 10,
                }}
                underlayColor="transparent">
                <Image
                  source={require('../../assets/majestic.png')}
                  resizeMode="contain"
                  style={{
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    borderRadius: 10,
                  }}
                />
              </View>
            </TouchableHighlight>
            <TouchableHighlight>
              <View
                style={{
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 4.65,
                  elevation: 8,
                  width: 150,
                  height: 140,
                  borderRadius: 10,
                  marginHorizontal: 10,
                }}
                underlayColor="transparent">
                <Image
                  source={require('../../assets/zoo.jpeg')}
                  resizeMode="contain"
                  style={{
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    borderRadius: 10,
                  }}
                />
              </View>
            </TouchableHighlight>
          </ScrollView>
        </View>
        {/* recommander end  */}
        {/* event en cours start  */}
        <View style={{margin: 10, marginBottom: 250}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={[styles.blue, {fontSize: 18, fontWeight: 'bold'}]}>
              Evènement en cours
            </Text>
            <TouchableOpacity>
              <Text style={[styles.blue]}>Voir tout</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal style={{top: 10}}>
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    top: '5%',
                    position: 'absolute',
                    zIndex: 1,
                    backgroundColor: '#aecbd7',
                    borderRadius: 5,
                    width: 35,
                    marginHorizontal: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: '#597797',
                      textAlign: 'center',
                    }}>
                    17 {'\n'} DEC
                  </Text>
                </View>
                <Image
                  source={require('../../assets/concert.jpeg')}
                  resizeMode="contain"
                  style={{
                    justifyContent: 'center',
                    width: 150,
                    height: 150,
                    borderRadius: 10,
                  }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 10,
                }}>
                <View
                  style={{
                    top: '5%',
                    position: 'absolute',
                    zIndex: 1,
                    backgroundColor: '#aecbd7',
                    borderRadius: 5,
                    width: 35,
                    marginHorizontal: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: '#597797',
                      textAlign: 'center',
                    }}>
                    17 {'\n'} DEC
                  </Text>
                </View>
                <Image
                  source={require('../../assets/concert.jpeg')}
                  resizeMode="contain"
                  style={{
                    justifyContent: 'center',
                    width: 150,
                    height: 150,
                    borderRadius: 10,
                  }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    top: '5%',
                    position: 'absolute',
                    zIndex: 1,
                    backgroundColor: '#aecbd7',
                    borderRadius: 5,
                    width: 35,
                    marginHorizontal: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: '#597797',
                      textAlign: 'center',
                    }}>
                    17 {'\n'} DEC
                  </Text>
                </View>
                <Image
                  source={require('../../assets/concert.jpeg')}
                  resizeMode="contain"
                  style={{
                    justifyContent: 'center',
                    width: 150,
                    height: 150,
                    borderRadius: 10,
                  }}
                />
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        {/* event en cours end  */}
      </ScrollView>
    </View>
  );
  const Cinema = (
    <View style={{height: windowHeight, width: windowWidth}}>
      <Text>Cinema</Text>
    </View>
  );
  const Transport = (
    <View style={{height: windowHeight, width: windowWidth}}>
      <Text>Transport</Text>
    </View>
  );
  const Sport = (
    <View style={{height: windowHeight, width: windowWidth}}>
      <Text>Sport</Text>
    </View>
  );
  const Loisirs = (
    <View style={{height: windowHeight, width: windowWidth}}>
      <Text>Loisirs</Text>
    </View>
  );
  // for home end

  const Home = (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
        backgroundColor: null,
        borderRadius: null,
      }}>
      {event && Event}
      {cinema && Cinema}
      {transport && Transport}
      {sport && Sport}
      {loisirs && Loisirs}
    </View>
  );

  const Ticket = (
    <SafeAreaView style={{height: windowHeight, width: windowWidth}}>
      <ScrollView>
        <View style={styles.topBox}>
          <Text style={{color: '#717c82', fontSize: 18}}>
            Vos meilleurs evenements
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );

  const Profil = (
    <View style={{height: windowHeight, width: windowWidth}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
        }}>
        <View>
          <Image
            style={{
              borderRadius: 60,
              width: 80,
              height: 80,
              resizeMode: 'contain',
            }}
            source={require('../../assets/imgConcert1.jpeg')}
          />
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text style={{color: '#fff'}}>prenom</Text>
          <Text style={{color: '#fff'}}>email</Text>
          <Text style={{color: '#fff'}}>number</Text>
        </View>
        <View style={{justifyContent: 'center'}}>
          <Icon
            size={25}
            color="#fff"
            name="account-cog"
            pack="material"
            style={{alignSelf: 'center'}}
          />
        </View>
      </View>
      <View style={{margin: 10}}>
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>
          Personnel
        </Text>
      </View>
      {/* box 1 start */}
      <TouchableOpacity
        onPress={() => navigation.navigate('MesTicketsCinema')}
        style={{
          backgroundColor: '#34424c',
          flexDirection: 'row',
          margin: 10,
          borderRadius: 10,
          height: 70,
        }}>
        <View style={{justifyContent: 'center', margin: 10}}>
          <Icon
            size={25}
            color="#fff"
            name="ticket-outline"
            pack="material"
            style={{alignSelf: 'center'}}
          />
        </View>
        <View style={{marginHorizontal: 20, justifyContent: 'center'}}>
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 18,
              marginBottom: 5,
            }}>
            Tickets
          </Text>
          <Text style={{color: '#717c82'}}>Tous tes tickets achetés</Text>
        </View>
      </TouchableOpacity>
      {/* box 1 end */}
      {/* box 2 start */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{
          backgroundColor: '#34424c',
          flexDirection: 'row',
          margin: 10,
          borderRadius: 10,
          height: 70,
        }}>
        <View style={{justifyContent: 'center', margin: 10}}>
          <Icon
            size={25}
            color="#fff"
            name="logout"
            pack="material"
            style={{alignSelf: 'center'}}
          />
        </View>
        <View style={{marginHorizontal: 20, justifyContent: 'center'}}>
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 18,
              marginBottom: 5,
            }}>
            Déconnexion
          </Text>
        </View>
      </TouchableOpacity>
      {/* box 2 end */}
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#1b3065" />
      {/* header start  */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/test.png')}
          resizeMode="contain"
          style={{
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            borderRadius: 1,
          }}
        />
      </View>
      {/* header end  */}
      <View style={{height: windowHeight, flex: 4, margin: 10}}>
        <View style={{margin: 10}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              color: '#1b3065',
            }}>
            Bienvenue sur votre espace Majestic
          </Text>
        </View>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 15,
            }}>
            <TouchableHighlight underlayColor="transparent">
              <View
                style={{
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 4.65,

                  elevation: 8,
                  width: 150,
                  height: 140,
                  borderRadius: 10,
                }}>
                <Image
                  source={require('../../assets/majestic/eternel.jpg')}
                  resizeMode="contain"
                  style={{
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    borderRadius: 10,
                  }}
                />
              </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="transparent">
              <View
                style={{
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 4.65,

                  elevation: 8,
                  width: 150,
                  height: 140,
                  borderRadius: 10,
                }}>
                <Image
                  source={require('../../assets/majestic/djagassa.png')}
                  resizeMode="contain"
                  style={{
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    borderRadius: 10,
                  }}
                />
              </View>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => navigation.navigate('DetailMajestic')}>
              <View
                style={{
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 4.65,

                  elevation: 8,
                  width: 150,
                  height: 140,
                  borderRadius: 10,
                }}>
                <Image
                  source={require('../../assets/majestic/fast.jpeg')}
                  resizeMode="contain"
                  style={{
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    borderRadius: 10,
                  }}
                />
              </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="transparent">
              <View
                style={{
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 4.65,

                  elevation: 8,
                  width: 150,
                  height: 140,
                  borderRadius: 10,
                }}>
                <Image
                  source={require('../../assets/majestic/bout.png')}
                  resizeMode="contain"
                  style={{
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    borderRadius: 10,
                  }}
                />
              </View>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
  },
});

export default MajesticDetailScreen;
