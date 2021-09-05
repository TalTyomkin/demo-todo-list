import React, { Component } from 'react';
import SingleTask from './singleTask';

class TaskList extends Component {
    counter = 1;
    state = { 
        tasks:[]
     }
     constructor(){
         super();
         console.log('constractor is runing')
     }

     addTask = () =>{
        const {tasks} = this.state;
        const newTask = {id:this.counter++, title:'Task description'}
        // tasks.push({id:this.counter++, title:'Task description'})
        this.setState({tasks:[...tasks,newTask]});
    }
    removeTask = (task) => {
        let {tasks} = this.state;
        tasks = tasks.filter(id => id.id !== task.id);
        this.setState({tasks:tasks})
    }
    componentWillUnmount(){
        
    }
    componentDidMount(){
        console.log('componentDidMount runing')
        setTimeout(() => {
            this.setState({
                tasks: [
                    {id:1, title:"titl 1"},
                    {id:2, title:"titl 2"},
                    {id:3, title:"titl 3"},
                    {id:4, title:"titl 4"},
                ]
            })
        },3000)
    }
    componentDidUpdate(){
        console.log('componentDidUpdate is runing')
    }
    

    render() { 
        console.log('rendr is runing')

        const {tasks} = this.state;
        return ( 
            <div className='container'>
                <div className='row'>
                    <div className='col my-5'>
                        <u>
                            <h1>My Tasks</h1> 
                        </u>
                    </div>
                </div>
                <div className='row'>
                    <div className='col my-5'>
                        <button onClick={this.addTask} className='btn btn-primary'>+ Add task</button>
                    </div>
                </div>
                <div className='row mx-5'>
                    <div className='col my-4'>
                    <ul className="list-group">
                        {tasks.map(t => <SingleTask key={t.id} task={t} removeTask={this.removeTask}/> )}
                    </ul>
                    </div>
                </div>
            </div>
         );
    }
}
                        

export default TaskList;