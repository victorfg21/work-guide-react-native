import { StyleSheet } from "react-native";
import { theme } from "./";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingVertical: 24,
        alignItems: "center",
    },
    titleText: {
        fontSize: 16,
        color: theme.colors.text_primary,
        fontFamily: theme.fonts.medium,
    },
    titleBody: {
        fontSize: 12,
        color: theme.colors.text_primary,
        fontFamily: theme.fonts.medium,
    },
    image: {
        width: 24,
        height: 24,
        marginRight: 8,
    },
    input: {
        height: 112,
        padding: 12,
        marginBottom: 8,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: theme.colors.stroke,
        color: theme.colors.text_primary,
        fontFamily: theme.fonts.regular,
    },
    footer: {
        flexDirection: "row",
        marginBottom: 16,
    },
});