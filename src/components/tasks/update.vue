<template>
  <div>
     <i v-if="task.completed" @click ="updateTask(task)" class="bi bi-check-all"></i>
      <i  v-else @click ="updateTask(task)" class="bi bi-check"></i>
      <span v-if="loading" class="spinner-border spinner-border-sm"></span>
  </div>
</template>

<script>
//import { useStore } from "vuex";
import { useTaskStore } from '../../store/tasks';
import {ref} from "vue";

export default {
    name:"updateTask",
     props: ["task"],

    setup(){
 const taskstore = useTaskStore();
      const loading = ref(false);

      async function updateTask(task){
        loading.value=true;
        await taskstore.updateTaskAction(task),
        loading.value = false;
      }
       return { updateTask,loading }
    }
}
</script>

<style>

</style>
