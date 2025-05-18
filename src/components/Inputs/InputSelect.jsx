import styles from './Inputs.module.css';

function InputSelect({ id, label, options = [], ...props }) {
    return (
        <>
            <div className={styles.inputSelect}>
                <label htmlFor={id}>{label}</label>
                <select id={id} {...props} >
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
}

export default InputSelect;