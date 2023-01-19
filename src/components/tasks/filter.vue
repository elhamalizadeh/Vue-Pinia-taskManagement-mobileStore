<template>
  <div class="container">
    <div class="row">
      <div class="col-md-2"><label> Numbers Of Tasks</label>
        <select v-model="number" class="form-select form-select-small" @change="FilterTasks">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="200">200</option>
        </select>
      </div>
    </div>
  </div>
</template>
<script>
//import { useStore } from "vuex";
import { useTaskStore } from '../../store/index';
import { ref } from "vue";
export default{
    name: 'FilterTasks',

    setup(){
 const taskstore = useTaskStore();
         const number = ref();

function FilterTasks(){
    console.log("selected is: " + number.value);
        taskstore.fetchTasks(number.value);
        
    }
    return { FilterTasks , number }
    }

}

</script>

<style>
</style>