import React from 'react';
import {View, Image, ActivityIndicator} from 'react-native';

import {styles} from '../styles/SplashScreen/styles';
import img from '../assets/icon/icon1.png';

class SplashScreen extends React.Component {
  state = {
    role: true,
  };
  splash = () => {
    if (this.state.role) {
      return (
        <View>
          <View style={styles.bg}>
            <Image source={img} style={styles.img} />
            <View style={styles.containerSplashScreen}>
              <ActivityIndicator
                size="large"
                color="deepskyblue"
                style={styles.indicator}
              />
            </View>
          </View>
        </View>
      );
    } else {
      this.props.navigation.navigate('GetStarted');
    }
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        role: false,
      });
    }, 3000);
  }
  render() {
    return (
      <View>
        <View style={styles.splash}>{this.splash()}</View>
      </View>
    );
  }
}

export default SplashScreen;
