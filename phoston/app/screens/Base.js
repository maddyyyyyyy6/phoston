import { Picker } from '@react-native-picker/picker';
import react, { useEffect, useState } from 'react';
import { StyleSheet, Text, ToastAndroid, TouchableOpacity, Vibration, View } from 'react-native';

export default Base = () => {
    const [state, setState] = useState(false);
    const [intervalue, setIntervalue] = useState(60000)
    const On = () => {
        setState(true);
        Vibration.vibrate(10 * 20);
        console.log("Alarm is working", intervalue)
        ToastAndroid.show("Phoston Working in background", ToastAndroid.SHORT)

    }
    const Off = () => {
        setState(false);
        Vibration.vibrate(10 * 20);
        console.log("Alarm stopped", intervalue)
        ToastAndroid.show("Phoston Stopped", ToastAndroid.SHORT)
    }

    useEffect(() => {
        // Start the interval when the component mounts

        const interval = setInterval(() => {
            // Vibrate the device for 1 second
            if (state) {
                Vibration.vibrate(1000);
            }
        }, intervalue); // 1 minute (60000 milliseconds)

        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
    }, [state]);
    return (
        <View style={styles.area} >
            {/* 
            <Text style={styles.tag}>
                Phoston
            </Text> */}
            {
                !state ?
                    // <Button title="Start" onPress={On} />
                    <Buzzer state={state} onPress={On} />
                    :
                    // <Button title="Stop" onPress={Off} />
                    <Buzzer state={state} onPress={Off} />
            }

            {/* area for options */}
            <View
                style={{ borderWidth: 1, borderColor: 'black', borderRadius: 10 }}

            >

                <Picker
                    selectedValue={intervalue.toString()}
                    onValueChange={(value) => setIntervalue(parseInt(value))}
                >
                    <Picker.Item label="1 second" value="1000" />
                    <Picker.Item label="2 seconds" value="2000" />
                    <Picker.Item label="5 seconds" value="5000" />
                    <Picker.Item label="10 seconds" value="10000" />
                    <Picker.Item label="30 seconds" value="30000" />
                    <Picker.Item label="1 minute" value="60000" selected />
                    <Picker.Item label="2 minutes" value="120000" />
                </Picker>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    area: {
        flex: 1,
        paddingTop: 50,
        alignContent: 'center',
        justifyContent: 'space-evenly'
    },
    tag: {
        fontSize: 50,

    }
})


const Buzzer = ({ onPress, state }) => {
    const [current, setCurrent] = useState(state)
    const handlePress = () => {
        onPress()
    }

    const on = {
        container: {
            backgroundColor: '#52B69A',
        },
        text: {

            color: '#36816C',
        }

    }
    const off = {
        container: {
            backgroundColor: '#DC2F02',

        },
        text: {

            color: '#9D0208',
        }

    }

    useEffect(() => {
        setCurrent(state)
    }, [state])

    return (
        <TouchableOpacity onPress={handlePress}>

            <View style={[buzzer.buzzerContainer, !state ? on.container : off.container]}>
                <Text style={[buzzer.buzzerText, !state ? on.text : off.text]}>
                    {
                        !state ? "Start" : "Stop"
                    }
                </Text>

            </View>
        </TouchableOpacity>
    )
}

const buzzer = StyleSheet.create({
    buzzerContainer: {
        width: 250,
        height: 250,
        borderRadius: 150,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buzzerText: {
        fontSize: 80,
        fontWeight: 'bold',
        // fontFamily: 'Inter_400Regular'

    }
})