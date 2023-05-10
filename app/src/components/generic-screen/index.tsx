import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { IProcessData } from "../../types/processTypes";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import * as ScreenOrientation from 'expo-screen-orientation';
//import { Table, TableWrapper, Row } from 'react-native-table-component';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { styles } from "../../theme/styles";

interface Props {
    process: IProcessData;
}

async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
}

/*const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    header: { height: 50, backgroundColor: '#537791' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1' }
});*/

export default function GenericScreen({ navigation, route }: any) {
    const { process }: Props = route.params;
    const CONTENT = {
        tableHead: ['Sequência', 'Equipamento', 'TAG', 'Ação', 'Energia Envolvida', 'Check Condição'],
        widthArr: [150, 150, 200, 100, 150]
    };
    //changeScreenOrientation();

    const tableData: any[] | undefined = [];
    var rowData: (string | number | boolean)[][] = [];
    process.items.map(item => {
        rowData.push([
            item.sequence,
            item.equipment,
            item.tag,
            item.energyInvolved,
            item.action,
            item.checked,
        ]);
        tableData.push(rowData);
    });

    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                <Grid style={styles.containerGrid}>
                    <Text style={styles.titleText}>{process.title}</Text>
                    <Row>
                        <Col style={styles.cellGrid}>
                            <Text>Sequência</Text>
                        </Col>
                        <Col size={3} style={styles.cellGrid}>
                            <Text>Equipamento</Text>
                        </Col>
                        <Col style={styles.cellGrid}>
                            <Text>TAG</Text>
                        </Col>
                        <Col style={styles.cellGrid}>
                            <Text>Ação</Text>
                        </Col>
                        <Col style={styles.cellGrid}>
                            <Text>Energia Envolvida</Text>
                        </Col>
                        <Col style={styles.cellGrid}>
                            <Text>Check</Text>
                        </Col>
                    </Row>
                    {process.items.map(item => (
                        <>
                            <Row>
                                <Col style={styles.cellGrid}>
                                    <Text>{item.sequence}</Text>
                                </Col>
                                <Col size={3} style={styles.cellGrid}>
                                    <Text>{item.equipment}</Text>
                                </Col>
                                <Col style={styles.cellGrid}>
                                    <Text>{item.tag}</Text>
                                </Col>
                                <Col style={styles.cellGrid}>
                                    <Text>{item.action}</Text>
                                </Col>
                                <Col style={styles.cellGrid}>
                                    <Text>{item.energyInvolved}</Text>
                                </Col>
                                <Col style={styles.cellGrid}>
                                    <BouncyCheckbox size={25} onPress={(isChecked: boolean) => { }} fillColor='#1E51A4' iconStyle={{ borderColor: "red" }}
                                        innerIconStyle={{ borderWidth: 2 }} unfillColor="#FFFFFF" />
                                </Col>
                            </Row>
                        </>
                    ))}
                </Grid>
            </ScrollView>
        </View>


    );
}

/*<Col size={10}>
                            <Row style={styles.cellGrid}>
                                <Text>Equipamento</Text>
                            </Row>
                            <Row style={styles.cellGrid}>
                                <Text>{item.equipment}</Text>
                            </Row>
                        </Col>
                        <Col size={10}>
                            <Row style={styles.cellGrid}>
                                <Text>TAG</Text>
                            </Row>
                            <Row style={styles.cellGrid}>
                                <Text>{item.tag}</Text>
                            </Row>
                        </Col>
                        <Col size={10}>
                            <Row style={styles.cellGrid}>
                                <Text>Ação</Text>
                            </Row>
                            <Row style={styles.cellGrid}>
                                <Text>{item.action}</Text>
                            </Row>
                        </Col>
                        <Col size={10}>
                            <Row style={styles.cellGrid}>
                                <Text>Check Condição</Text>
                            </Row>
                            <Row style={styles.cellGrid}>
                                <BouncyCheckbox
                                    size={25}
                                    fillColor="red"
                                    unfillColor="#FFFFFF"
                                    text="Custom Checkbox"
                                    iconStyle={{ borderColor: "red" }}
                                    innerIconStyle={{ borderWidth: 2 }}
                                    textStyle={{ fontFamily: "JosefinSans-Regular" }}
                                    onPress={(isChecked: boolean) => { }}
                                />
                            </Row>
                        </Col>
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        <ScrollView horizontal={true}>
            <Grid style={styles.containerGrid}>
                <Text style={styles.titleText}>{process.title}</Text>
                <Row>
                    <Col style={styles.cellGrid}>
                        <Text>Sequência</Text>
                    </Col>
                    <Col style={styles.cellGrid}>
                        <Text>Equipamento</Text>
                    </Col>
                    <Col style={styles.cellGrid}>
                        <Text>TAG</Text>
                    </Col>
                    <Col style={styles.cellGrid}>
                        <Text>Ação</Text>
                    </Col>
                    <Col style={styles.cellGrid}>
                        <Text>Energia Envolvida</Text>
                    </Col>
                    <Col aria-expanded={true} style={styles.cellGrid}>
                        <Text>Check</Text>
                    </Col>
                </Row>
                {process.items.map(item => (
                    <>
                        <Row>
                            <Col style={styles.cellGrid}>
                                <Text>{item.sequence}</Text>
                            </Col>
                            <Col style={styles.cellGrid}>
                                <Text>{item.equipment}</Text>
                            </Col>
                            <Col style={styles.cellGrid}>
                                <Text>{item.tag}</Text>
                            </Col>
                            <Col style={styles.cellGrid}>
                                <Text>{item.action}</Text>
                            </Col>
                            <Col style={styles.cellGrid}>
                                <Text>{item.energyInvolved}</Text>
                            </Col>
                            <Col style={styles.cellGrid}>
                                <BouncyCheckbox size={25} onPress={(isChecked: boolean) => { }} fillColor='#1E51A4' iconStyle={{ borderColor: "red" }}
                                    innerIconStyle={{ borderWidth: 2 }} unfillColor="#FFFFFF" />
                            </Col>
                        </Row>
                    </>
                ))}
            </Grid>
        </ScrollView>
                        */