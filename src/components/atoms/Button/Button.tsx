import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./styles.module.scss";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}
const Button = ({ children, ...props }: IButtonProps) => {
	return (
		<button {...props} className={styles.button}>
			{children}
		</button>
	);
};

export default Button;
