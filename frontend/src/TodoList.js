import React from 'react';

export default function TodoList({displayCompleted, viewCompleted}) {
    return (
        <div className="nav nav-tabs" style={{"cursor": "pointer"}}>
            <span 
                className={viewCompleted ? "nav-link active" : "nav-link"}
                onClick={() => displayCompleted(true)}
            >
                Complete
            </span>
            <span 
                className={viewCompleted ? "nav-link" : "nav-link active"}
                onClick={() => displayCompleted(false)}
            >
                Incomplete
            </span>
        </div>
    )
};
