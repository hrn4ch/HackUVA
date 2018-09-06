import React from 'react'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import{
  View,
  Button,
  Text,
  Constants,
  StyleSheet
} from 'react-native'
import PropTypes from 'prop-types';

export default class ContactDisplay extends React.Component {
  state ={
    alert: true
  }
  static propTypes = {
    closeAlertMessage: PropTypes.func
  };
  // changeAlert = () =>{
  //   alert = false
  // }
  render = () => {
    const { alert } = this.state;
    if(alert){
      return (
        <View style={styles.container}>
          <Text style={styles.title}>User In Distress</Text>
          <ActionButton buttonColor="rgba(231,76,60,1)">
            <ActionButton.Item
              buttonColor="#9b59b6"
              title="Contact Emergency Officials"
              onPress={() => this.launchSafeTrek}>
              <Icon name="android-create" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor="#3498db"
              title="Cancel Alert"
              onPress={() => this.setState({alert: false})}>
              <Icon
                name="android-notifications-none"
                style={styles.actionButtonIcon}
              />
            </ActionButton.Item>
          </ActionButton>
        </View>
        );
    }
    if(!alert){
      return(
       <View style={styles.container}>
          <Text style={styles.title}>No Distress Detected</Text>
      </View>
      );
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
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
