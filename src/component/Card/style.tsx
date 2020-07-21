
import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")

const style = StyleSheet.create({
    viewContainer: {
        position: "absolute",
        alignItems: "center",
        left: 30,
        right: 30,
        top: 30,
        bottom: 30,
        borderWidth: 1,
        borderRadius: 20
    },
    viewContent1: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
        margin: 10
    },
    viewContent2: {
        flex: 2,
        // justifyContent: "center",
        alignItems: "center",
        margin: 10,
        width: width * 2 / 3
    },
    viewATV: {
        height: width / 3 + 10,
        width: width / 3 + 10,
        borderRadius: 65,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0.5,
        borderColor: "#4C5264"
    },
    imgAVT: {
        height: width / 3,
        width: width / 3,
        borderRadius: 60
    },
    txtName: {
        fontWeight: "600",
        fontSize: 18,
        color: "#4C5264",
        marginTop: 30,
        textAlign: "center"
    },
    txtAddress: {
        fontWeight: "600",
        fontSize: 22,
        color: "black",
        marginTop: 15,
        textAlign: "center"
    },
    viewBottomtab: {
        flexDirection: "row",
        marginTop: 40
    },
    touchActive: {
        justifyContent: "center",
        alignItems: "center",
        borderTopColor: "#66CC00",
        borderTopWidth: 0.5
    },
    touch: {
        justifyContent: "center",
        alignItems: "center",
        borderTopColor: "black",
        borderTopWidth: 1
    },
    txtItem: {
        fontSize: 16,
        margin: 5,
    },
    icon: {
        height: 30,
        width: 30,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        resizeMode: "contain"
    }
});

export default style;