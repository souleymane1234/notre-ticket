import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height / 6;

export const EventComponent = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        height: windowHeight,
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
          source={props.image}
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
  );
};
