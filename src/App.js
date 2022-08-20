import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ComponenteA from './components/pure/componenteA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name='Michael'></Greeting>
        <GreetingF name='Michael'></GreetingF> */}
        {/* Componente de Listado de Tareas*/}
        {/* <TaskListComponent></TaskListComponent> */}
        <ComponenteA></ComponenteA>
      </header>
    </div>
  );
}

export default App;
