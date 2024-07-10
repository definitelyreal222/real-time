import React from 'react';

const Panel = ({ size, height, children, backgroundImage }) => {
    let panelClass = "panel ";

    switch (size) {
        case "large":
            panelClass += "panel-large col-12 col-md-6";
            break;
        case "medium":
            panelClass += "panel-medium col-12 col-md-4";
            break;
        case "wide":
            panelClass += "panel-wide col-12";
            break;
        default:
            panelClass += "col-12";
    }

    const panelStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <div className={panelClass} style={{height: height}} >
            <div className="panel-content" style={panelStyle}>
                {children}
            </div>
        </div>
    );
};

export default Panel;
