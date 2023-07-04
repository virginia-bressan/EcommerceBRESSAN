import { StyleSheet, View, } from 'react-native'
import React, { useState } from 'react'
import TopBar from '../Components/TopBar'
import TaskList from '../Components/TaskList/Index'
import ModalTask from '../Components/Modal'


const MainScreen = ({ taskList }) => {

    const [list, setList] = useState(taskList)
    const [input, setInput] = useState("")
    const [taskActive, setTaskActive] = useState({})
    const [modalVisible, setModalVisible] = useState(false);

    const onPressTask = (task) => {
        console.log(task)
        setTaskActive(task)
        setModalVisible(!modalVisible)
    }

    const onAddTask = () => {
        setList([
            ...list,
            {
                id: list.length + 1,
                task: input,
                completed: false,
            }
        ])
    }

    const onPressStatus = (status) => {
        console.log("Se presiono en onPressDone");
        const remainTask = list.filter(taskList => taskList.id !== taskActive.id)
        const orderedList = [
            ...remainTask,
            {
                ...taskActive,
                completed: status
            }
        ].sort(function (a, b) {
            if (a.id > b.id) {
              return 1;
            }
            if (a.id < b.id) {
              return -1;
            }
            return 0;
          })
        console.log(taskActive)
        setList(orderedList)
        setModalVisible(!modalVisible)
    }

    return (
        <View style={styles.conteiner}>
            <TopBar
            input={input}
            onAddTask={onAddTask}
            setInput={setInput}
            />
            <TaskList
            list={list}
            onPressTask={onPressTask}
            />
            <ModalTask
            modalVisible={modalVisible}
            taskActive={taskActive}
            setModalVisible={setModalVisible}
            onPressStatus={onPressStatus}
            />

        </View>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },

});