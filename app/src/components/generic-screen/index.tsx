
import { View, Text, Button, FlatList } from "react-native";
import { IProcessData } from "../../types/processTypes";
import { styles } from "../../theme/styles";

interface Props {
    process: IProcessData;
}

export default function GenericScreen({ navigation, route }: any) {
    const { process }: Props = route.params;
    console.log()
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{process.title}</Text>
            <FlatList
                data={process.items}
                renderItem={({ item }) =>
                    <div>
                        <Text>{item.sequence}</Text>
                        <Text>{item.equipment}</Text>
                        <Text>{item.tag}</Text>
                        <Text>{item.action}</Text>
                        <Text>{item.energyInvolved}</Text>
                        <Text>{item.checked}</Text>
                    </div>
                }
            />
        </View>
    );
}