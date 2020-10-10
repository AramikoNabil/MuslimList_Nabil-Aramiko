import React from 'react';
import {Text, View, Image, KeyboardAvoidingView} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../styles/Login/styles';
import eyeIcon from '../assets/icon/Shape.png';
class Login extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       show: true,
  //       setShow: true,
  //     };
  //   }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.fontHeader}>
          <Text style={styles.fontHeader1}> Welcome Back! </Text>
        </View>
        <KeyboardAvoidingView behavior="position">
          <View>
            <Text style={styles.fontEmail}>Email</Text>
          </View>
          <View>
            <TextInput
              style={styles.fontInput}
              placeholder="example@gmail.com"
              keyboardType="email-address"
            />
          </View>
          <View>
            <Text style={styles.fontPassword}>Password</Text>
          </View>
          <View style={styles.eyePassword}>
            <TextInput
              style={styles.fontInputPass}
              underlineColorAndroid="transparent"
              placeholder="Password"
              secureTextEntry={true}
              // secureTextEntry={(show) => this.show(show)}
            />
            <TouchableOpacity
              // onPress={(show) => this.setShow(!show)}
              style={styles.eye}>
              <Image source={eyeIcon} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('RootDrawer')}>
              <Text
                style={styles.buttonText}
                onPress={() => this.props.navigation.navigate('RootDrawer')}>
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>

        <View>
          <Text
            style={styles.fontForgetPass}
            onPress={() => this.props.navigation.navigate('ResetPassword')}>
            Forget Password?
          </Text>
          <Text style={styles.fontloginAnother}>
            Log in with social account
          </Text>
        </View>
        <View style={styles.socialMedia}>
          <TouchableOpacity onPress={() => {}} style={styles.buttonFacebook}>
            <Text style={styles.textFacebook}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.buttonGoogle}>
            <Text style={styles.fontGoogle}>Google</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.fontloginAnother}>
            Don't have an account ?{' '}
            <Text
              style={styles.textSignUp}
              onPress={() => this.props.navigation.navigate('Registration')}>
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

export default Login;
