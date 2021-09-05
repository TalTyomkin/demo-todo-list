import React, { Component } from 'react';

class SingleTask extends Component {
    state = {  }
    render() { 
        const {task, removeTask} = this.props;
        return ( 
            <li className="list-group-item">
                {task.id} my tasks is: {task.title}
                <button onClick={() => removeTask(task)} className='btn btn-danger offset-md-2'>Delete</button>
            </li>
         );
    }
}
 
export default SingleTask;