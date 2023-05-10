import { StyleSheet } from "react-native";
import { theme } from "./";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingVertical: 24,
        alignItems: "center",
        backgroundColor: '#fff',
    },
    button: {
        paddingVertical: 8
    },
    titleText: {
        fontSize: 16,
        paddingBottom: 16,
        color: theme.colors.text_primary,
        fontFamily: theme.fonts.medium,
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