import styles from './Inputs.module.css';

function InputBox({ id, label, ...props }) {
    return (
        <>
            <div className={styles.inputBox}>
                <label htmlFor={id}>{label}</label>
                <input id={id} {...props} />
            </div>
        </>
    );
}

export default InputBox;