import {ITaskItem} from "@/store/index.types";

export const saveTaskList = (taskList: ITaskItem[]) => {
    localStorage.setItem("GET_TASK_LIST", JSON.stringify(taskList))
    return taskList
}