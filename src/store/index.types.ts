export interface IState {
    taskList: ITaskItem[]
    redactIdTask: null | number
}

export interface ITaskItem {
    id: number
    title: string
    body: string
}