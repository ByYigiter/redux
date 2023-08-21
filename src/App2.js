import React, { useEffect, useState } from "react";
import "./App2.css";
import axios from "axios";

const App2 = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const fetchTodos = async () => {
			try {
				const response = await axios.get(
					"https://jsonplaceholder.typicode.com/todos/"
				);
				setTodos(response.data);
			} catch (err) {
				console.log("Error", err);
			}
		};

		fetchTodos();
	}, []);
	
	return (
		<div>
			<div className="todo-wrapper"></div>
			{todos.map((todo) => {
				return (
					<div key={todo.id} className="todo">
						<h3>{todo.title}</h3>
						<input
							type="checkbox"
							checked={todo.completed}
							className="todo-completed"
						/>
					</div>
				);
			})}
		</div>
	);
};

export default App2;
