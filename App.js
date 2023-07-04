import MainScreen from './src/Screens/MainScreen';

const taskList = [
  {
    id: 1,
    task: "Tender ropa",
    completed: false
  },{
    id: 3,
    task: "Limpiar el baño",
    completed: false
  },{
    id: 4,
    task: "Comprar verduras",
    completed: false
  },{
    id: 5,
    task: "Comprar alimento perro",
    completed: false
  },
]

export default function App() {
  return (
    <MainScreen taskList = {taskList}/>
  );
}