import './App.css';
import FuncType from './components/FuncType';
import GenericType from './components/GenericType';

function App(): JSX.Element {
  return (
    <div>
      <h1>hello world</h1>
      <h2>My name is John</h2>
      <FuncType />
      <GenericType />
    </div>
  );
}

export default App;
