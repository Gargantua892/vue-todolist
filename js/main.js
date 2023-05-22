const {createApp} = Vue;

createApp({
    data() {
        return {
            newTask: '',
            tasks: [
                {
                    text: "Prova elemento",
                    done: false,
                },
            ]
        }
    },
    methods: {
        deleteTask: function() {
            this.tasks.splice(this.task);
    },
        addTask(){
            this.tasks.push(this.newTask);
            // this.newTask = '';
            console.log(this);
        }
    },
}).mount("#app");


//pushare l'input dell'utente come oggetto nella lista