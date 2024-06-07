import React from "react";

function ContactInfo() {
  return (
    <div className="col-md-3">
      <hr />
      <form action="./" method="get" autoComplete="off" noValidate>
        <h1 className="page-title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-whatsapp"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
          </svg>
          Phone | Whatsapp
        </h1>
        <div className="list-group list-group-transparent mb-3 px-3">
          <a
            className="list-group-item list-group-item-action d-flex align-items-center"
            href="#"
          >
            Mobile: 0306 5601818<br />
            Mobile: 0336 5060911
          </a>
          <hr />

          <h1 className="page-title px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-mail-opened"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 9l9 6l9 -6l-9 -6l-9 6"></path>
              <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"></path>
              <path d="M3 19l6 -6"></path>
              <path d="M15 13l6 6"></path>
            </svg>
            Email
          </h1>
          <a
            className="list-group-item list-group-item-action d-flex align-items-center pt-0"
            href="#"
          >
            strahlenstudios.com
          </a>
        </div>
      </form>
    </div>
  );
}

export default ContactInfo;
