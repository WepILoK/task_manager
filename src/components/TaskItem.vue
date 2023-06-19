<template>
  <div class="task-item">
    <input
        v-if="taskItem.id === REDACT_ID_TASK"
        v-model="title"
        placeholder="Название"
    />
    <div class="task-item-title" v-else>
      {{ taskItem.title }}
    </div>
    <input
        v-if="taskItem.id === REDACT_ID_TASK"
        v-model="body"
        placeholder="Описание"
    />
    <div class="task-item-body" v-else>
      {{ taskItem.body }}
    </div>
    <div class="btns">
      <div
          class="btn save"
          v-if="REDACT_ID_TASK === taskItem.id"
          @click="saveTask({
          title: title,
          body: body,
          id: taskItem.id
          })"
      >
        <img :src="require('@/assets/icons/save.svg')" alt="img">
      </div>
      <div
          v-if="taskItem.id !== REDACT_ID_TASK"
          class="btn edit"
          @click="SET_REDACT_ID(taskItem.id)"
      >
        <img :src="require('@/assets/icons/edit.svg')" alt="img">
      </div>
      <div v-if="taskItem.id !== REDACT_ID_TASK"
           class="btn close"
           @click="DELETE_TASK(taskItem.id)"
      >
        <img :src="require('@/assets/icons/close.svg')" alt="img">
      </div>
      <div v-if="taskItem.id === REDACT_ID_TASK"
           class="btn cancel"
           @click="cancelRedactTask"
      >
        <img :src="require('@/assets/icons/cancel.svg')" alt="img">
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {ITaskItem} from "@/store/index.types";
import {defineComponent, PropType} from "vue";
import {mapActions, mapGetters} from "vuex";

export default defineComponent({
  name: 'TaskItem',
  props: {
    taskItem: {
      type: Object as PropType<ITaskItem>,
      required: true
    },
  },
  data() {
    return {
      title: this.taskItem?.title,
      body: this.taskItem?.body,
    }
  },
  computed: {
    ...mapGetters([
      'REDACT_ID_TASK',
    ]),
  },
  methods: {
    ...mapActions([
      'DELETE_TASK',
      "SET_REDACT_ID",
        "SAVE_TASK"
    ]),
    saveTask(task: ITaskItem) {
      if (task.title === '' || task.body === "") {
        alert("Необходимо заполнить все поля")
        return
      }
      this.SAVE_TASK(task)
    },
    cancelRedactTask() {
      this.title = this.taskItem?.title
      this.body = this.taskItem?.body
      this.SET_REDACT_ID(null)
    }
  }
})
</script>

<style lang="sass">
.task-item
  text-align: start

  .task-item-title
    padding-bottom: 8px
    max-width: 400px
    font-size: 18px
    font-weight: 600

  .task-item-body
    max-width: 500px

</style>