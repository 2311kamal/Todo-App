import Header from "./Components/header";
import TodoList from "./Components/todoList";
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <>
      

      <Routes>

        <Route path="/todos" element={<> <Header title='Here are the todos' /><TodoList /></>}></Route>
        <Route path="/" element={<Header title='ToDo App'></Header> }> </Route>
      </Routes>
    </>
  );
}

export default App;
