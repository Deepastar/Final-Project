import React from "react";

const Jumbotron = ({children}) => (
    <div class="jumbotron jumbotron-fluid mt-5 text-center bg-info text-warning">
        <div class="container">
            <h1 class="display-4">{children}</h1>
        </div>
    </div>
);

export default Jumbotron;
