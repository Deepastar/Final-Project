import React from "react";

const Jumbotron = ({children}) => (
    <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
            <h1 className="display-4">{children}</h1>
        </div>
        
    </div>
);

export default Jumbotron;
