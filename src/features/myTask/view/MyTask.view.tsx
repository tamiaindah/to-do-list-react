import { useState } from "react";
import Task from "../components/Task";
import s from "./MyTask.module.scss";

function getRndInteger(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const MyTask = () => {
	const [tasks, setTasks] = useState<any[]>([]);
	const [taskValue, setTaskValue] = useState<string>();

	const handleAddTask = () => {
		const newTask = {
			id: getRndInteger(0, 1000),
			taskName: taskValue,
		};
		setTasks((prev) => [...prev, newTask]);
	};

	const handleDeleteTask = (id: number) => {
		const filteredTasks = tasks.filter((task) => task.id !== id);
		setTasks(filteredTasks);
		console.log(filteredTasks);
	};

	return (
		<div className={s.wrapper}>
			<div className="header">
				<h1 className={s.title}>My to do list</h1>
			</div>

			<div className={s.fieldWrapper}>
				<div className={s.fieldTask}>
					<input
						onChange={(e) => setTaskValue(e.target.value)}
						className={s.inputTask}
						value={taskValue}
						type="text"
					></input>
					<button onClick={handleAddTask}>Add</button>
				</div>
			</div>

			{tasks.map((task) => (
				<Task key={task.id} taskId={task.id} taskName={task.taskName} onDelete={handleDeleteTask} />
			))}
		</div>
	);
};

export default MyTask;
