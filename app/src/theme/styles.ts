import { StyleSheet } from "react-native";
import { theme } from "./";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingVertical: 24,
        alignItems: "center",
        backgroundColor: '#fff',
    },
    buttonView: {
        paddingVertical: 8,
        width: '100%'
    },
    titleText: {
        fontSize: 16,
        paddingBottom: 16,
        color: theme.colors.text_primary,
        fontFamily: theme.fonts.medium,
    },
    titleTextCenter: {
        fontSize: 20,
        paddingBottom: 16,
        color: theme.colors.text_primary,
        fontFamily: theme.fonts.medium,
        width: '100%',
        textAlign: 'center'
    },
    titleBody: {
        fontSize: 12,
        color: theme.colors.text_primary,
        fontFamily: theme.fonts.medium,
    },
    containerGrid: {
        width: '100%',
        height: '100%',
        padding: 16,
        backgroundColor: '#fff',
    },
    cellGrid: {
        borderWidth: 1,
        borderColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center'
    },
});