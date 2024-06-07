import React from "react";
import AccordionItem from "./accordion_item";

function Accordion({ data = [] , component }) {

    return (
        <div className="accordion">
            {data && data.map((item, i) =>
                <AccordionItem index={i} data={item} component={component}/>
            )}
        </div>
    );
}

export default Accordion;
