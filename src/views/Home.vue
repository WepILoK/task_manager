<template>
  <div class="home">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CreateAndRedactTask from "@/components/CreateTask.vue"; // @ is an alias to /src

@Component({
  components: {
    CreateAndRedactTask
  },
})
export default class HomeView extends Vue {}
</script>
