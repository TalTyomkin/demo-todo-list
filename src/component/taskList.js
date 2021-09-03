import React, { Component } from 'react';

class TaskList extends Component {
    counter = 1;
    state = { 
        tasks:[
            {id:1, title: 'Task description'},
            {id:2, title: 'Task description'},
        ]
     }

    render() { 
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
                        <button className='btn btn-primary'>+ Add task</button>
                    </div>
                </div>
                <div className='row mx-5'>
                    <div className='col my-4'>
                        task list is here
                    </div>
                </div>
            </div>
         );
    }
}
                        

export default TaskList;