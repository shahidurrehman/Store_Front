import React from 'react';

function ContactForm() {
  return (
    <div className="col-md-9 px-4">
      <div className="row row-cards">
        <div className="col-sm-6 col-lg-12">
          <div className="card-body">
            <div className="mb-3">
              <label className="form-label required">Subject</label>
              <div>
                <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Subject" />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label required">Your email</label>
              <div>
                <input type="password" className="form-control" placeholder="Enter email" />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label required">Phone no</label>
              <div>
                <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter Phone No" />
              </div>
            </div>
            <div className="mb-2">
              <label className="form-label">Your message (optional)</label>
              <textarea className="form-control" name="example-textarea-input" rows="6" placeholder="Enter your message"></textarea>
            </div>
            <div className="col-6 col-sm-4 col-md-2 col-xl py-3">
              <a href="#" className="btn btn-success btn-pill w-100">
                Submit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
