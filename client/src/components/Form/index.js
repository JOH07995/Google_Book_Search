import PropTypes from 'prop-types';
import React from 'react';

export function Input(props) {
    return (
        <div className="form-group" style={{ marginTop: 30, marginRight: 0, marginBottom: 50, marginLeft: 40 }}>
            <input className="form-control" {...props} />
        </div>
    );
}

export function Button(props) {
    return (
        <button
            {...props}
            style={{

                marginLeft: 10,
                marginRight: 30,
                marginBottom: 50,
                marginTop: 30
            }}
            className="btn btn-info"
        >
            {props.children}
        </button>
    );
}
Button.propTypes = {
    children: PropTypes.node,
};