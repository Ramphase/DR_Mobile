import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export function DisplayImage(){
  return (
    <View>
      <Image
        style={styles.tinyLogo}
        source={require('C:\Users\A.L.F.R.E.D\Documents\GitHub\DR_Mobile\src\pages/StopWatch2')}
      />
    
    </View>
  );
}