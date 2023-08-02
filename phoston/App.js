import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Base from './app/screens/Base';
import { useFonts, Inter_900Black, Inter_400Regular } from '@expo-google-fonts/inter';
export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black, Inter_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Base />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Inter_400Regular'
  },
});
