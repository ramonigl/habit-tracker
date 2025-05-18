import styles from './Button.module.css';

function Button({ text, type = "button", className = "btn", ...props}) {
    return (
        <>
            <button type={type} className={styles[className]}>{text}</button>
        </>
    );

}

export default Button;