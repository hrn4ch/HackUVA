import React from 'react'
import{
  View,
  Alert, 
  // Audio,
  Text,
  Constants,
  StyleSheet
} from 'react-native'
import PropTypes from 'prop-types';



export default class UserDisplay extends React.Component {
  static propTypes = {
    closeAlertMessage: PropTypes.func
  };
  
  alerted () {
    const alert = true
    if(alert){
      Alert.alert(
        'Contact Alerted',
        [
          {text: 'Contact Alerted!'}
        ],
        {
          cancelable: false
        });
    }
  }
  
  
  render = () => {
      return (
        <View style={styles.container}>
          <Text style={styles.paragraph}>Audio is being recorded.</Text>
        </View>
        );
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
  });
