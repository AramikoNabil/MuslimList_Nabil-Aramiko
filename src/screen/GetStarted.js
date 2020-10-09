import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles/GetStarted/styles';
import img from '../assets/image/background.png';

class GetStarted extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image source={img} style={styles.img} />
        </View>
        <View>
          <Text style={styles.font1}>Mari List Target Antum</Text>
          <Text style={styles.font2}>
            Merapikan Target Antum dengan aplikasi Muslim List
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text
              style={styles.buttonText}
              onPress={() => this.props.navigation.navigate('Login')}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default GetStarted;
