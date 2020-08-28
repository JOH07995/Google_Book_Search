import React from "react";

// Exporting the Container, Row, and Col components from this file

// Container component allows use of a bootstrap container without class name worries
export function Container({ fluid, children }) {
    return <div className={'container${fluid ? "-fluid" : ""}'}>{children}</div>;
}

// Row component allows use of a bootstrap row without class name concerns
export function Row({ fluid, children }) {
    return <div className={'row${fluid ? "-fluid" : ""}'}>{children}</div>;
}

// Col component allows us to size bootstrap columns with less syntax
// for example <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, children }) {
    return (
        <div
            className={size
                .split(" ")
                .map(size => "col-" + size)
                .join(" ")}
        >
            {children}
        </div>
    );
}