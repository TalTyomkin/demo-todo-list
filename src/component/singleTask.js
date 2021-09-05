import React, { Component } from 'react';

class SingleTask extends Component {
    state = {  }
    render() { 
        const {task} = this.props;
        return ( 
            <li class="list-group-item">
                {task.id} my tasks is: {task.title}
                <button className='btn btn-danger offset-md-2'>Delete</button>
            </li>
         );
    }
}
 
export default SingleTask;