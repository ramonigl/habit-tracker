import styles from './GridContainer.module.css';

function GridContainer({ className, children }) {
    return (
        <div className={`${styles.gridContainer} ${className ? styles[className] : ''}`}>
            {children}
        </div >
    );
}

export default GridContainer;