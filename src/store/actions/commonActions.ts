import {Commit} from "vuex";
import {ITaskItem} from "@/store/index.types";

export default {
    GET_TASK_LIST({commit}: {commit: Commit}) {
        commit('GET_TASK_LIST')
    },
    CREATE_TASK({commit}: {commit: Commit}, newTask: ITaskItem) {
        commit('CREATE_TASK', newTask)
    },
    SAVE_TASK({commit}: {commit: Commit}, newTask: ITaskItem) {
        commit('SAVE_TASK', newTask)
    },
    DELETE_TASK({commit}: {commit: Commit}, id: number) {
        commit('DELETE_TASK', id)
    },
    SET_REDACT_ID({commit}: {commit: Commit}, id: number) {
        commit('SET_REDACT_ID', id)
    },
}