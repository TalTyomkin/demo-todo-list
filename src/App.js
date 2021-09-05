import './App.css';
import TaskList from './component/taskList';
import TestProps from './component/testProps';


function App() {
  return (
    <div className="App">
      <TaskList />
      <TestProps name={'tal'} age={27}>
        <h2>my child H2</h2>
        <p>my child P</p>
      </TestProps>
    </div>
  );
}

export default App;
