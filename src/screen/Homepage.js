import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {styles} from '../styles/Homepage/Homepage';
import avatar from '../assets/image/Oval.png';
import magnifer from '../assets/icon/magnifier.png';
import cekIcon from '../assets/icon/cekbox.png';
import editIcon from '../assets/icon/editIcon.png';
import trash from '../assets/icon/trasher.png';
import taskbar from '../assets/icon/taskbar.png';
import plusButton from '../assets/icon/plus.png';

class Homepage extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.barIcon}
              onPress={() => this.props.navigation.openDrawer()}>
              <Image style={styles.barIcon} source={taskbar} />
            </TouchableOpacity>

            <Image source={avatar} style={styles.avatar} />
            <Text style={styles.font1}>
              Hi Fulan,{' '}
              {'                                                            '}
              <Text style={styles.font2}>How're you today?</Text>
            </Text>
          </View>
          <View style={styles.searchBar}>
            <Image source={magnifer} style={styles.magnifer} />
            <TextInput
              style={styles.textInput}
              placeholder="Search your target"
            />
          </View>
          <View>
            <Text style={styles.fontBody}>Your Target</Text>
          </View>
          <View style={styles.body}>
            <Image source={editIcon} style={styles.editIcon} />
            <TextInput
              style={styles.inputTarget}
              placeholder="Tafadhol di isi"
            />
            <Image style={styles.cekIcon} source={cekIcon} />
            <Image style={styles.trashIcon} source={trash} />
          </View>
          <View style={styles.body}>
            <Image source={editIcon} style={styles.editIcon} />
            <TextInput
              style={styles.inputTarget}
              placeholder="Tafadhol di isi"
            />
            <Image style={styles.cekIcon} source={cekIcon} />
            <Image style={styles.trashIcon} source={trash} />
          </View>
          <View style={styles.body}>
            <Image source={editIcon} style={styles.editIcon} />
            <TextInput
              style={styles.inputTarget}
              placeholder="Tafadhol di isi"
            />
            <Image style={styles.cekIcon} source={cekIcon} />
            <Image style={styles.trashIcon} source={trash} />
          </View>
          <View style={styles.body}>
            <Image source={editIcon} style={styles.editIcon} />
            <TextInput
              style={styles.inputTarget}
              placeholder="Tafadhol di isi"
            />
            <Image style={styles.cekIcon} source={cekIcon} />
            <Image style={styles.trashIcon} source={trash} />
          </View>
          <View style={styles.body}>
            <Image source={editIcon} style={styles.editIcon} />
            <TextInput
              style={styles.inputTarget}
              placeholder="Tafadhol di isi"
            />
            <Image style={styles.cekIcon} source={cekIcon} />
            <Image style={styles.trashIcon} source={trash} />
          </View>
          <View style={styles.body}>
            <Image source={editIcon} style={styles.editIcon} />
            <TextInput
              style={styles.inputTarget}
              placeholder="Tafadhol di isi"
            />
            <Image style={styles.cekIcon} source={cekIcon} />
            <Image style={styles.trashIcon} source={trash} />
          </View>
          <TouchableOpacity>
            <View style={styles.plusButton}>
              <Image source={plusButton} />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default Homepage;
