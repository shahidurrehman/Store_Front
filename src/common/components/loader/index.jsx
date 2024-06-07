import React from 'react';

// Then inside the component body

function CLoader({ show = false, handleClose }) {

    return (
        <>
            {show && <div className={`modal-backdrop  ${show ? 'show' : ''} t-index`}></div>}
            <div className={`modal modal-blur  fade ${show ? 'show' : 'hide'} cz-index`} id="modal-cloader" tabIndex={-1} role="dialog" aria-hidden="true" style={{ display: `${show ? 'block' : 'none'}` }} >
                <div className={`modal-dialog text-center`} role="document">
                    <div className="spinner-border c-spinner-grow" role="status">
                    </div>
                </div>
            </div>
        </>
    )
}

export default CLoader;