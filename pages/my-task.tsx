import dynamic from "next/dynamic";

const MyTaskView = dynamic(() => import("@features/myTask/view"));
const MyTaskPage = () => {
	return <MyTaskView />;
};

export default MyTaskPage;
