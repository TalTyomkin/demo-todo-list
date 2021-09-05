import React, { Component } from 'react';
import SingleTask from './singleTask';

class TaskList extends Component {
    counter = 1;
    state = { 
        tasks:[]
     }

     addTask = () =>{
        const {tasks} = this.state;
        tasks.push({id:tasks.length+1, title:'Task description'})
        this.setState({tasks})
    }

    render() { 
        console.log(this.state);
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
                        {tasks.map(t => <SingleTask key={t.id} task={t}/> )}
                    </ul>
                    </div>
                </div>
            </div>
         );
    }
}
                        

export default TaskList;