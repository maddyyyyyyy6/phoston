import react, { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default Base = () => {
    const [state, setState] = useState(true);
    const On = () => {
        setState(false);
        
    }
    const Off = () => {
        setState(true);
    }
    return (
        <View >

            <Text>
                Phoston
            </Text>
            {
                state ?
                    <Button title="Start" onPress={On} />
                    :
                    <Button title="Stop" onPress={Off} />
            }
        </View>
    );
}