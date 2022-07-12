
import './App.css';
import Child from './component/Child';

export default function App(){
  return (
    <div className="App">
      <Child state="DEFAULT"></Child>
      <Child state="BAR"></Child>
      <Child state="FOO"></Child>
    </div>
  )
}
