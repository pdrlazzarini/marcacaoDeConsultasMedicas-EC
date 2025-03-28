import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Engenharia da Computação!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33A3E4FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 30,
    color: '#FFFFFF',
    alignItems: 'center',
  }
});
