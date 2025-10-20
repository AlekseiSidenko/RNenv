import { StyleSheet, Text } from 'react-native';
import Config from 'react-native-config';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

function App() {

  return (
    <SafeAreaProvider>
      <Text
        style={styles.text}
      >Test App .env</Text>
      <Text
        style={styles.text}
      >
        {Config.API_URL}
      </Text>
      <Text
        style={styles.text}
      >
        {Config.GOOGLE_MAPS_API_KEY}
      </Text>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: 600,
    marginTop: 40
  }
});

export default App;
