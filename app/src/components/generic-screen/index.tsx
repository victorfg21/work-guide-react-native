import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { IProcessData } from "../../types/processTypes";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import * as ScreenOrientation from 'expo-screen-orientation';
//import { Table, TableWrapper, Row } from 'react-native-table-component';
//import { Col, Row, Grid } from 'react-native-easy-grid';
import { styles } from "../../theme/styles";
import { Container, Row, Col } from 'react-native-flex-grid';


interface Props {
    process: IProcessData;
}

export default function GenericScreen({ navigation, route }: any) {
    const { process }: Props = route.params;
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                <Container fluid>
                    <Text style={styles.titleText}>{process.title}</Text>
                    <Row>
                        <Col xs="auto" style={styles.cellGrid}>
                            <Text>Sequência</Text>
                        </Col>
                        <Col xs="auto" style={styles.cellGrid}>
                            <Text>Equipamento</Text>
                        </Col>
                        <Col xs="auto" style={styles.cellGrid}>
                            <Text>TAG</Text>
                        </Col>
                        <Col xs="auto" style={styles.cellGrid}>
                            <Text>Ação</Text>
                        </Col>
                        <Col xs="auto" style={styles.cellGrid}>
                            <Text>Energia Envolvida</Text>
                        </Col>
                        <Col xs="auto" style={styles.cellGrid}>
                            <Text>Check</Text>
                        </Col>
                    </Row>
                    {process.items.map(item => (
                        <>
                            <Row>
                                <Col xs="auto" style={styles.cellGrid}>
                                    <Text>{item.sequence}</Text>
                                </Col>
                                <Col xs="auto" style={styles.cellGrid}>
                                    <Text>{item.equipment}</Text>
                                </Col>
                                <Col xs="auto" style={styles.cellGrid}>
                                    <Text>{item.tag}</Text>
                                </Col>
                                <Col xs="auto" style={styles.cellGrid}>
                                    <Text>{item.action}</Text>
                                </Col>
                                <Col xs="auto" style={styles.cellGrid}>
                                    <Text>{item.energyInvolved}</Text>
                                </Col>
                                <Col xs="auto" style={styles.cellGrid}>
                                    <BouncyCheckbox size={25} onPress={(isChecked: boolean) => { }} fillColor='#1E51A4' iconStyle={{ borderColor: "red" }}
                                        innerIconStyle={{ borderWidth: 2 }} unfillColor="#FFFFFF" />
                                </Col>
                            </Row>
                        </>
                    ))}
                </Container>
            </ScrollView>
        </View>
    );
}