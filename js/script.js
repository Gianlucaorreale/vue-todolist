console.log('Vue OK', Vue);
const root = new Vue ({
    el: '#root',
    data:{
        newTask: '',
        tasks: [
            {
                text:'fare la spesa',
                done: true
            },
            {
                text:'andare dal meccanico',
                done: false
            },
            {
                text:'fare la lavatrice',
                done: true
            },
            {
                text:'andare a giocare a tennis',
                done: false
            },
        ]
    },
    methods:{
        deleteTask(index){
           this.tasks.splice(index, 1)
        },

        addTask(){
          this.tasks.push(this.newTask);
        }
    }

})