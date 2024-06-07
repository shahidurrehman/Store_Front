import React, { useState } from "react";

const AccordionItem = ({ data, component }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [collapsing, setCollapsing] = useState(false);

    const handleClick = () => {
        setCollapsing(true);
        setTimeout(() => {
            setCollapsed(prev => !prev);
            setCollapsing(false);
        }, 100);
    }

    return (
        <div className="accordion-item bg-white">
            <h2 className="accordion-header">
                <button className={`accordion-button ${!collapsed ? "collapsed" : ""}`} type="button" onClick={() => handleClick()} data-bs-toggle="collapse" aria-expanded={!collapsed}>
                    {data.name}
                </button>
            </h2>
            <div className={`accordion-collapse ${collapsing ? "collapsing" : !collapsed ? "collapse" : "collapse show"} `} data-bs-parent="#accordion-example" style={{}}>
                <div className="accordion-body pt-0">
                    {component}
                </div>
            </div>
        </div>
    )
}

export default AccordionItem;