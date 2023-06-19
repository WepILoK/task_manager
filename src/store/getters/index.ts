import {IState} from "@/store/index.types";

export default {
    TASK_LIST(state: IState) {
        return state.taskList
    },
    REDACT_ID_TASK(state: IState) {
        return state.redactIdTask
    },
}