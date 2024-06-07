import React from 'react';

function ContactTab({

  component,
  formId,
  title = "",
  button="",
  handleshow,

}) {
  return (
    <div className="col-12 col-md-9">
      <div className="card">
        <div className="card-header">
          <h3 className="col-10 card-title">{title}</h3>
          <button className='col-2 btn btn-primary text-end' onClick={handleshow}>{button}</button>
        </div>                     
        <div className="card-body">
          {component}
        </div>
      </div>
    </div>
  )
}

export default ContactTab;