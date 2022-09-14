import React from "react";
import { TouchableOpacity } from "react-native";

const MyButton = props => {
    return (
        <TouchableOpacity>
            <Text style={{ fontSize: 24}}>{props.title}</Text>
        </TouchableOpacity>
    );
};

export default MyButton;