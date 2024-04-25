import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.back}>
      <View style={styles.root}>
        <View style={styles.container}>
          <Text style={{ color: '#dc143c' }}>
            #crushingit
          </Text>
          <StatusBar style="auto" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  root: {
    flex: 1,
    backgroundColor: '#dc143c',
    padding: 20,
  },
  back: {
    flex: 1,
    backgroundColor: '#25292e',
    padding: 20,
  },
});
