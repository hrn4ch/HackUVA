import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
//import { Constants } from 'expo';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
//import Expo, { Permissions } from 'expo';
import Permissions from 'expo';
import UserDisplay from './components/UserDisplay';
import ContactDisplay from './components/ContactDisplay';



const welcomeScreen = 'WELCOME';
const userDisplayScreen = "USER"
const contactDisplayScreen = "CONTACT"

export default class App extends React.Component {
  state = {
    screen: welcomeScreen,
  };

  componentWillMount = async() => {
    const result1 = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    this.setState({ hasAudioPermission: result1.status === 'granted' });
  }

  takeAudiorecording = async() => {
    console.log('Audio')
    //const aud = await Expo.soundObject.loadAsync(source, initialStatus = {}, downloadFirst = true)
    //if(!aud.cancelled){

  };


  // setUser = async () => {
  //   this.setState({ screen: userDisplayScreen})
  // };

  // setContact = async () => {
  //   this.setState({ screen: contactDisplayScreen})
  // };

  triggerAlert = async () => {
    //trigger alert by pitch

  };

  launchSafeTrek = async () => {
    //contact officials through SafeTrek
    //closeAlertMessage()
  };

  render = () => {
    const { screen } = this.state;
    if (screen === welcomeScreen) {
      return (
        <View style={styles.container}>
          <Text style={styles.paragraph}>
            Choose User or Contact Display
          </Text>
          <ActionButton buttonColor="rgba(231,76,60,1)">
            <ActionButton.Item
              buttonColor="#9b59b6"
              title="User"
              onPress={() => this.setState({screen: userDisplayScreen})}>
              <Icon name="android-create" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor="#3498db"
              title="Contact"
              onPress={() => this.setState({screen: contactDisplayScreen})}>
              <Icon
                name="android-notifications-none"
                style={styles.actionButtonIcon}
              />
            </ActionButton.Item>
          </ActionButton>
        </View>
      );
    }
    else if (screen === userDisplayScreen) {
      return <UserDisplay />;
    }
    else if (screen === contactDisplayScreen) {
      return <ContactDisplay />;
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
