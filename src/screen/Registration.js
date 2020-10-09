import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Picker,
  KeyboardAvoidingView,
} from 'react-native';
import {styles} from '../styles/Registration/Registration';
import iconBack from '../assets/icon/arrow-left.png';
import flag from '../assets/icon/indonesia.png';
import eyeIcon from '../assets/icon/Shape.png';

class Registration extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            style={styles.headBarIcon}
            onPress={() => this.props.navigation.goBack()}>
            <Image
              source={iconBack}
              style={styles.barIcon}
              onPress={() => this.props.navigation.goBack()}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.Header}>Registration</Text>
        </View>
        <View>
          <Text style={styles.fontBody}>
            Already have an account?{' '}
            <Text
              style={styles.fontLogin}
              onPress={() => this.props.navigation.navigate('Login')}>
              Login
            </Text>
          </Text>
        </View>
        <View>
          <Text style={styles.fontEmail}>Email</Text>
        </View>
        <KeyboardAvoidingView>
          <View>
            <TextInput
              style={styles.fontInputPw}
              placeholder="example@gmail.com"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.mobileNumber}>
            <Text>Mobile Number</Text>
          </View>
          <View style={styles.number}>
            <Picker style={styles.picker}>
              <Picker.Item label="+62" value="+62" />
              <Picker.Item label="+4343" value="+4343" />
            </Picker>
            <TextInput style={styles.inputNumber} keyboardType="number-pad" />
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
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text
                style={styles.buttonText}
                onPress={() => this.props.navigation.navigate('Login')}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>

          <View>
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
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default Registration;
