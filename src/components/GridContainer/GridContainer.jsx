import './GridContainer.css';

function GridContainer({ className, children }) {
    return (
        <div className={`grid-container ${className}`}>
            {children}
        </div >
    );
}

export default GridContainer;