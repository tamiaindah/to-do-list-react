import s from "./Task.module.scss";

interface ITaskProps {
	onDelete?: (id: number) => void;
	taskName?: string;
	taskId?: number;
}

const Task = ({ taskId, onDelete, taskName }: ITaskProps) => {
	const handleClickDelete = () => {
		if (onDelete && taskId) {
			onDelete(taskId);
		}
	};
	return (
		<div className={s.taskWrapper}>
			<div className={s.task}>{taskName}</div>
			<button onClick={handleClickDelete}>Delete</button>
		</div>
	);
};

export default Task;
