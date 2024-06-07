import React from 'react';
import IconAddPlus from '../../../assets/icons/add_plus';
import IconCheck from '../../../assets/icons/check';
import IconMinus from '../../../assets/icons/minus';
import IconPlus from '../../../assets/icons/plus';
import IconTrash from '../../../assets/icons/trash';

const RemoveableCard = ({ component, id, arrayLength, index, addRow, deleteRow, name, update }) => {

    return (
        <div className="col-12" key={index}>       
            {/* {arrayLength > 1 &&
                <div className="text-end mb-2">                
                    <span onClick={() => deleteRow(id, index)} className="cursor-pointer text-end">
                        <IconTrash />
                    </span>               
                </div>
            } */}
            {component}
            {((arrayLength - 1) === index) &&

                <div className="text-end mb-3">
                    <span className=" col-xl-6 text-indigo bg-transparent cursor-pointer" onClick={addRow}>
                        <IconAddPlus />  {name}
                    </span>


                </div>


            }
            <hr className="mt-2 mb-3" />
        </div>
    )
}
export default RemoveableCard;