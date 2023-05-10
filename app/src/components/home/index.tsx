
import { View, Text, Button } from "react-native";
import { IProcessData } from "../../types/processTypes";
import { styles } from "../../theme/styles";

interface Props {
    listProcess: Array<IProcessData>;
}

export default function HomeScreen({ navigation, route }: any) {
    const { listProcess }: Props = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Matriz de Bloqueio Caldeira de Recuperação</Text>
            {listProcess && listProcess.map(process => (
                <Button
                    key={process.title}
                    title={process.title}
                    onPress={() => navigation.push(process.title, { process: process })}

                />
            ))}
        </View>
    );
}