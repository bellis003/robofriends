import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflow: 'auto', height: '80vh', width: '100%' }}>
            {props.children}
        </div>
    );
};

export default Scroll;
