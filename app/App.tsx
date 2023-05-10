import Navigation from "./src/components/navigation";
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import React from "react";
import { StatusBar, View, Text } from 'react-native';
import { IProcessData } from "./src/types/processTypes";
import ProcessDataService from "./src/services/process";

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [isLoading, setLoading] = React.useState(true);
  const [listProcess, setListProcess] = React.useState<Array<IProcessData> | null>(null);

  React.useEffect(() => {
    ProcessDataService.getAll().then(resp => {
      setListProcess(resp.data);
      setLoading(false);
    });
  }, []);

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if (isLoading || !listProcess)
    return (
      <View style={{ flex: 1 }}>
        <Text>Carregando...</Text>
      </View>
    );

  SplashScreen.hideAsync();

  if (!isLoading)
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Navigation listProcess={listProcess} />
        <StatusBar backgroundColor="transparent" translucent />
      </View>
    );
}