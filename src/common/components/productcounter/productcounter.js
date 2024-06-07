import React, { useState } from 'react';

const ProductCounter = () => {
    const [count, setCount] = useState(0);

    const incrementCounter = () => {
        setCount(count + 1);
    };

    const decrementCounter = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="input-group w-50">
            <span className="input-group-btn">
                <button onClick={decrementCounter} type="button" className="btn btn-default btn-number" data-type="minus" data-field="quant[1]">
                    <span className="glyphicon glyphicon-minus">-</span>
                </button>
            </span>
            <input type="text" className="form-control form-control-sm text-center" value={count} size="3" aria-label="Invoices count" />
            <span className="input-group-btn">
                <button onClick={incrementCounter} type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                    <span className="glyphicon glyphicon-plus">+</span>
                </button>
            </span>
        </div>

    );
};

export default ProductCounter;
