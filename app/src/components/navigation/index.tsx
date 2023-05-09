import { Image, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from '../../../assets/bracell-logo.png';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../home/index';
import React from 'react';
import { IProcessData } from '../../types/processTypes';
import GenericScreen from '../generic-screen';

function LogoTitle() {
    return (
        <Image style={{ width: 180, height: 50 }} source={Logo} />
    );
}

const Stack = createNativeStackNavigator();

interface Props {
    listProcess: Array<IProcessData>;
}

export default function Navigation({ listProcess }: Props) {
    if (listProcess)
        return (
            <NavigationContainer >
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} initialParams={{ listProcess: listProcess }} options={{ headerTitle: LogoTitle }} />
                    {listProcess.map(process => (
                        <Stack.Screen key={process.title} name={process.title} component={GenericScreen} initialParams={{ listProcess: listProcess }} options={{ headerTitle: LogoTitle }} />
                    ))}
                </Stack.Navigator>
            </NavigationContainer>
        );
    else return null;
}