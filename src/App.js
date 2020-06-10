import React from 'react';
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";


function App() {

    const [todos, setTodos] = React.useState([
        {id: 1, complete: false, title: 'Запустить react '},
        {id: 2, complete: false, title: 'Написать первое приложение на реакт'},
        {id: 3, complete: false, title: 'Прыгать от счастья'}
    ])

    function toggleTodo (id){
        setTodos
        (todos.map (todo =>{
            if (todo.id === id){
                todo.completed = !todo.completed
            }
            return todo
            })
        )
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    function addTodo(title) {
        setTodos(todos.concat([{
            title,
            id: Date.now(),
            completed: false

        }]))
    }

    return(
    <Context.Provider value={{removeTodo}}>
        <div className="wrapper">
            <h1> Список задний на сегодня</h1>
            <AddTodo onCreate={addTodo}/>
            {todos.length ? (<TodoList todos={todos} onToggle={toggleTodo}/>) : (<h2> Задний нету :( </h2>)}

        </div>
    </Context.Provider>
    )
}

export default App
