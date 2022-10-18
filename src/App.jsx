import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskTitle from './components/TaskTitle'

function App() {
  return (
    <>
      <TaskTitle />
      <TaskForm />
      <TaskList />
    </>
  );
}

export default App;
