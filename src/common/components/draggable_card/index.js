import React, { useEffect } from 'react';
import IconCopy from '../../../assets/icons/icon-copy';

function DraggableCard({ data }) {

  // let str=data.assistantResponsibleName;
  // const firstAssiatnt =str.charAt(0)

  // let str2=data.leadResponsibleName;
  // const firstlead=str2.charAt(0)

  // let str3=data.seniorResponsibleName;
  // const firstSenior=str3.charAt(0)


  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    window.open(`/task/edit/${data.taskId}`, "_blank")
  }

  const createUrl = (`${window.location.origin}/task/edit/${data.taskId}`)


  return (
    <div className="card card-sm">
      <div className="card-body">
        <span className='btn btn-link p-0' onClick={handleClick}>
          <div className="text-muted">
            #{data.taskId}
          </div>
        </span>
        <div className="font-weight-medium">
          {data.title}
        </div>
        {/* 
        <h3 className="card-title">
          {data.title}
        </h3> */}
        {data.img &&

          <div className="ratio ratio-16x9">
            <img
              src={data.img}
              className="rounded object-cover"
              alt="Enable analytics tracking"
            />
          </div>
        }
        <div className="mt-4">
          <div className="row">
            <div className="col">
              <div className="avatar-list avatar-list-stacked">
                <span>
                <img
                    className="avatar avatar-xs avatar-rounded"
                    src={` https://ui-avatars.com/api/?name=${data.leadResponsibleName}`}
                  />          
                </span>

                <span
                  style={{
                    backgroundImage:
                      "url(./static/avatars/003f.jpg)",
                  }}
                >
                   <img
                    className="avatar avatar-xs avatar-rounded"
                    src={` https://ui-avatars.com/api/?name=${data.assistantResponsibleName}`}
                  />
                  
                </span>
                <span >
                  <img
                    className="avatar avatar-xs avatar-rounded"
                    src={` https://ui-avatars.com/api/?name=${data.seniorResponsibleName}`}
                  />
                  
                </span>
              </div>
            </div>
            <div className="col-auto text-muted">
              <button
                className="switch-icon switch-icon-scale"
                data-bs-toggle="switch-icon"

              >
                <span className="cursor-pointer" onClick={() => { navigator.clipboard.writeText(createUrl); alert("Copied to clipboard."); }} >
                  {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                  <IconCopy />
                </span>

              </button>

            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DraggableCard;

