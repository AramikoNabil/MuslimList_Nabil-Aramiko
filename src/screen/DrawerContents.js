import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Homepage from './Homepage';
import Avatar from '../assets/icon/ava.png';
import starIcon from '../assets/icon/star.png';
import locateIcon from '../assets/icon/bookmark.png';
import {styles} from '../styles/DrawContents/DrawContets';

const Drawer = createDrawerNavigator();

const RootDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="Homepage" component={Homepage} />
    </Drawer.Navigator>
  );
};

const DrawerContent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Avatar} style={styles.Avatar} />
      </View>
      <View style={styles.User}>
        <Text style={styles.Name}>Aramiko Nabil</Text>
        <Text style={styles.username}>@username</Text>
        <Text style={styles.font1}>
          202 <Text style={styles.font2}>Followers </Text>
          <Text style={styles.font1}>
            202 <Text style={styles.font2}>Followers</Text>
          </Text>
        </Text>
      </View>
      <View style={styles.BodyIcon}>
        <Image source={starIcon} style={styles.Icon} />
        <Text style={styles.fontPopular}>Popular</Text>
      </View>
      <View style={styles.BodyIcon}>
        <Image source={locateIcon} style={styles.LocateIcon} />
        <Text style={styles.fontPopular}>Bookmarks</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.buttonSignOut}
          onPress={() => this.props.navigation.navigate('GetStarted')}>
          <Text
            style={styles.fontSignOut}
            onPress={() => this.props.navigation.navigate('GetStarted')}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RootDrawer;
