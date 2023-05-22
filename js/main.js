const {createApp} = Vue;

createApp({
    data() {
        return {
            tasks: [
                {
                    text: "Testo della task",
                    done: false,
                },
            ]
        }
    },
    methods: {
        deleteTask: function(task) {
            this.tasks.splice(this.task);
    },
    },
}).mount("#app");


//pushare l'input dell'utente come oggetto nella lista