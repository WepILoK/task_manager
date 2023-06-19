<template>
  <div class="create-task task-item">
    <input
        v-model="title"
        placeholder="Название"
    />
    <input
        v-model="body"
        placeholder="Описание"
    />
    <div class="btns">
      <div
          class="btn save"
          @click="createTask({
          title: title,
          body: body,
          })"
      >
        <img :src="require('@/assets/icons/save.svg')" alt="img">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {ITaskItem} from "@/store/index.types";
import {mapActions} from "vuex";
import {defineComponent} from "vue";

export default defineComponent({
  name: 'CreateTask',
  methods: {
    ...mapActions([
      'CREATE_TASK',
    ]),
    createTask(task: ITaskItem) {
      if(task.title === '' || task.body === "") {
        alert("Необходимо заполнить все поля")
        return
      }
      this.CREATE_TASK(task)
      this.title = ''
      this.body = ''
    }
  },
  data() {
    return {
      title: '',
      body: ''
    }
  }
})
</script>
