<template>
  <div>
    <span v-if="loading" class="spinner-border spinner-border-sm"></span>
    <span @click="deleteTask" class="bi bi-trash-fill"></span>
  </div>
</template>

<script>
import { useTaskStore } from '../../store/tasks';
import { ref } from "vue";

export default {
  name: "deleteTask",
  props: ["id"],
  setup(props) {
     const taskstore = useTaskStore();
    const loading = ref(false);

    async function deleteTask() {
      loading.value = true;
      await taskstore.deleteTaskAction(props.id);
      loading.value = false;
    }
    return { loading, deleteTask };
  },
};
</script>

<style></style>
