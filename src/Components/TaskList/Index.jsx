import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import ItemTaskRender from "./ItemTaskRender";

const TaskList = ({
    list,
    onPressTask
}) => {
    return (
        <View style={styles.view2}>
            <FlatList
                data={list}
                keyExtractor={(task) => task.id}
                renderItem={({ item }) =>ItemTaskRender({ item, onPressTask })}
            />
        </View>
    );
};

export default TaskList;

const styles = StyleSheet.create({
    view2: {
        height: "88%",
        backgroundColor: `#c0c0c0`,
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingVertical: 15,
    },
});