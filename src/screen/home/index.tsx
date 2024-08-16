import React from 'react';
import { View, StyleSheet } from 'react-native';
import { styles } from './styles';

const App = () => {
  return (
    <View style={styles.main}>
    
      <View style={styles.header}/>
      
        <View style={styles.container}> 
          <View style={styles.section}>
            <View style={styles.box} />
            <View style={styles.box} />
            <View style={styles.box} />
          </View>
      
          <View style={styles.section2}>
            <View style={styles.line} />
            <View style={styles.line} />
            <View style={styles.line} />
          </View>
        </View>

      <View style={styles.footer} />
      
    </View>
  );
};

export default App;