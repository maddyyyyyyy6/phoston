import * as BackgroundFetch from 'expo-background-fetch';
import { Vibration } from 'react-native';
const TASK_NAME = 'backgroundVibration'
const VIBRATION_INTERVAL = 10000; // 1 minute
import * as TaskManager from 'expo-task-manager';
const backgroundVibrationTask = async () => {
    Vibration.vibrate();
    return BackgroundFetch.Result.NewData; // Signal that the task is complete
};

// Define the task
TaskManager.defineTask(TASK_NAME, backgroundVibrationTask);
export { TASK_NAME,VIBRATION_INTERVAL };
