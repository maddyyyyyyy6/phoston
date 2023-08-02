import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Base from './app/screens/Base';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import * as BackgroundFetch from 'expo-background-fetch';
import { useEffect } from 'react';
import { TASK_NAME, backgroundVibrationTask, VIBRATION_INTERVAL } from './app/background/BackgroundVibration';
export default function App() {

  useEffect(() => {
    // Register the background task
    // BackgroundFetch.registerTaskAsync(TASK_NAME, {
    //   minimumInterval: 60000, // Set the minimum interval for the task
    //   stopOnTerminate: false, // Keep the task running after the app is terminated
    //   startOnBoot: true, // Start the task when the device boots
    // });

    // return () => {
    //   // Unregister the task when the component unmounts
    //   BackgroundFetch.unregisterTaskAsync(TASK_NAME);
    // };

    // const backgroundTask = async () => {
    //   try {
    //     // Register the background task using the TASK_NAME constant
    //     await BackgroundFetch.registerTaskAsync(TASK_NAME, {
    //       minimumInterval: VIBRATION_INTERVAL,
    //       stopOnTerminate: false,
    //       startOnBoot: true,
    //     });
    //     console.log(`Background task '${TASK_NAME}' registered.`);
    //   } catch (error) {
    //     console.log(`Failed to register background task: ${error}`);
    //   }

    //   return () => {
    //     // Unregister the task using the TASK_NAME constant
    //     BackgroundFetch.unregisterTaskAsync(TASK_NAME);
    //     console.log(`Background task '${TASK_NAME}' unregistered.`);
    //   };
    // };

    // backgroundTask();


    const backgroundTask = async () => {
      try {
        // Register the background task using the TASK_NAME constant
        await TaskManager.registerTaskAsync(TASK_NAME, {
          minimumInterval: VIBRATION_INTERVAL,
          stopOnTerminate: false,
          startOnBoot: true,
        });
        console.log(`Background task '${TASK_NAME}' registered.`);
      } catch (error) {
        console.log(`Failed to register background task: ${error}`);
      }

      return () => {
        // Unregister the task using the TASK_NAME constant
        TaskManager.unregisterTaskAsync(TASK_NAME);
        console.log(`Background task '${TASK_NAME}' unregistered.`);
      };
    };

    backgroundTask();
  }, []);
  return (
    <View style={styles.container}>
      <Base />
      <StatusBar style="auto" />
    </View>
  );
}


AppRegistry.registerComponent(appName, () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Inter_400Regular'
  },
});
