import {IState, ITaskItem} from "@/store/index.types";
import {saveTaskList} from "@/store/helpers/saveTaskList";

export default {
    GET_TASK_LIST: (state: IState) => {
        const taskList = localStorage.getItem("GET_TASK_LIST")
        if (taskList && taskList.length > 0) {
            state.taskList = JSON.parse(taskList)
        } else {
            state.taskList = []
        }
    },
    CREATE_TASK: (state: IState, newTask: ITaskItem) => {
        const task = {
            ...newTask,
            id: Math.random()
        }
        state.taskList = saveTaskList([task,...state.taskList])
    },
    SAVE_TASK: (state: IState, newTask: ITaskItem) => {
        const taskIndex = state.taskList.findIndex((item: ITaskItem) => item.id === newTask.id)
        const newTaskList = [... state.taskList]
        newTaskList[taskIndex] = newTask
        state.taskList = saveTaskList(newTaskList)
        state.redactIdTask = null
    },
    DELETE_TASK: (state: IState, id: number) => {
        state.taskList = saveTaskList(state.taskList.filter((item: ITaskItem) => item.id !== id))
    },
    SET_REDACT_ID: (state: IState, id: number) => {
        state.redactIdTask = id
    },
}