import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {ConsumerHeader} from './ConsumerHomeScreen';

export const Notifications = ({navigation, title}) => {
  return (
    <View>
      <ConsumerHeader navigation={navigation} title='Notifications'/>
      <Text>Notificatins</Text>
      
    </View>
  );
};