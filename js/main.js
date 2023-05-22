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
        deleteTask: function(index) {
            this.tasks.splice(index, 1);
    },
    //metodo per creare le nuove task (aggiunge oggetto ad array)
        addTask: function(){
            var text = this.newTask;
            if (text) {
                this.tasks.unshift({ text: text, done: false })
                console.log(this.tasks);
                this.newTask = '';
            }
        },

        //metodo testo barrato
        lineThrough: function(){
            //toggle della proprietà done da falso a vero
            this.tasks.done = !this.tasks.done;
            console.log(this.tasks.done);
            
        }
    },
}).mount("#app");


//pushare l'input dell'utente come oggetto nella lista