<template>
  <div class="task-list">
    <CreateTask/>
    <TaskItem
        v-for="task in TASK_LIST"
        :key="task.id"
        :task-item="task"
    />
  </div>
</template>

<script>

import CreateTask from "@/components/CreateTask.vue";
import {mapActions, mapGetters} from "vuex";
import TaskItem from "@/components/TaskItem";

export default {
  name: 'TaskList',
  components: {
    CreateTask,
    TaskItem
  },
  computed: {
    ...mapGetters([
      'TASK_LIST',
    ]),
  },
  methods: {
    ...mapActions([
      'GET_TASK_LIST',
    ]),
  },
  mounted() {
    this.GET_TASK_LIST()
  },
}
</script>

<style lang="sass">
.task-list
  display: flex
  align-items: center
  flex-direction: column
  margin: auto auto
  width: 700px
  .task-item
    padding: 20px
    margin: 10px 0
    border-radius: 8px
    box-shadow: 0 0 8px 0 #c0c0c0
    width: 600px
    min-height: 50px
    display: flex
    flex-direction: column
    input
      height: 24px

      &:first-child
        margin-bottom: 8px
    .btns
      display: flex
      flex-direction: row
      justify-content: end
      width: 100%
      margin-top: 20px
      .btn
        border-radius: 50%
        width: 30px
        height: 30px
        cursor: pointer
        img
          padding: 2px
          width: 25px
          height: 25px
        &:first-child
          margin-right: 8px
      .save
        background-color: #09ff00
      .edit
        background-color: #0023ff
      .close
        background-color: #ff0000
      .cancel
        background-color: #ff8800
</style>