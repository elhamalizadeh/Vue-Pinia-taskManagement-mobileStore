import { defineStore } from "pinia";
import axios from "axios";
import Swal from 'sweetalert2'

export const useTaskStore = defineStore('tasks',{
    state:() =>{
        return { 
            tasks: [] 
        }
    },
    getters:{
        allTasks(state) {
            return state.tasks;
          },

    },
    actions:{
           //-----fetch tasks action ----
           async fetchTasks(limit) {
            try {
              const response = await axios.get(
                `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
              );
                this.tasks = response.data;
            } catch (error) {
              console.log("error");
            }
          },
          //------create task action ------
          async createTask(title) {
            try{
              const response = await axios.post(
                "https://jsonplaceholder.typicode.com/todos", {
                  title: title,
                  completed : false
              }
              );
              this.tasks.unshift(response.data)
              Swal.fire({
                title: "Task added",
                icon: "success",
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 850,
                toast: true,
                position: 'top',
            });
      
            }catch(error){
              console.log("error");
            }
      
          },
      
            //-----update tasks action ----
      
            async updateTaskAction(task) {
              try {
                  const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${task.id}`, {
                    id: task.id,
                    title: task.title,
                    completed: !task.completed
                })
      
                const index = this.tasks.findIndex(task => task.id == response.data.id);
                if(index != -1){
                  this.tasks.splice(index, 1,response.data) // --- replace
                }

                Swal.fire({
                  title: "Task updated",
                  icon: "success",
                  showConfirmButton: false,
                  timerProgressBar: true,
                  timer: 850,
                  toast: true,
                  position: 'top',
              });
        
              } catch (error) {
                console.log("error");
              }
            },
      
             //-----delete tasks action ----
      
             async deleteTaskAction(id) {
              try {
                await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
                this.tasks = this.tasks.filter(task => task.id != id)
                Swal.fire({
                  title: "Task deleted",
                  icon: "success",
                  showConfirmButton: false,
                  timerProgressBar: true,
                  timer: 850,
                  toast: true,
                  position: 'top',
              });
        
              } catch (error) {
                console.log("error");
              }
            },

    }
})
