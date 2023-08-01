import react, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, Vibration, View } from 'react-native';

export default Base = () => {
    const [state, setState] = useState(false);
    const On = () => {
        setState(true);
        Vibration.vibrate(10 * 20);
        console.log("Alarm is working")
        
    }
    const Off = () => {
        setState(false);
        Vibration.vibrate(10 * 20);
        console.log("Alarm stopped")
    }
    return (
        <View style={styles.area} >

            <Text style={styles.tag}>
                Phoston
            </Text>
            {
                !state ?
                    // <Button title="Start" onPress={On} />
                    <Buzzer state={state} onPress={On} />
                    :
                    // <Button title="Stop" onPress={Off} />
                    <Buzzer state={state} onPress={Off} />
            }
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
            width: 200,
            height: 200,
            borderRadius: 100,
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center'
        },
        text: {

            fontSize: 60,
            fontWeight: 'bold',
            color: '#36816C',
        }

    }
    const off = {
        container: {
            backgroundColor: '#DC2F02',
            width: 200,
            height: 200,
            borderRadius: 100,
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center'

        },
        text: {

            fontSize: 60,
            fontWeight: 'bold',
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
        width: 200,
        height: 200,
        borderRadius: 100,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buzzerText: {
        fontSize: 60,
        fontWeight: 'bold',

    }
})