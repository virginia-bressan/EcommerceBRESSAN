import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const ItemTaskRender = ({ item, onPressTask }) => {
    return (
        <Pressable onPress={() => onPressTask(item)}>
            <View style={
                item.completed ?
                    styles.taskCompleted :
                    styles.task}
                key={item.id}>
                <Text style={styles.taskText}>{item.task}</Text>
            </View>
        </Pressable>
    )
}

export default ItemTaskRender;

const styles = StyleSheet.create({
    task: {
        width: 200,
        padding: 10,
        backgroundColor: `#e9967a`,
        borderRadius: 6,
        borderColor: "#000",
        borderBottomWidth: 3,
        borderRightWidth: 3,
        marginBottom: 15,
    },
    taskText: {
        fontSize: 20,
    },
    taskCompleted: {
        width: 200,
        padding: 10,
        backgroundColor: `#90ee90`,
        borderColor: "#000",
        borderRadius: 6,
        borderBottomWidth: 3,
        borderRightWidth: 3,
        marginBottom: 15,
    }
})