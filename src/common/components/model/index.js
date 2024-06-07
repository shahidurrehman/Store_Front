import React, { useEffect } from "react";
import { applyClassToBody } from "../../utils/app.util";
import { Link } from "react-router-dom";

function CModel({
  show,
  handleClose,
  handleClick,
  component,
  title,
  form_id,
  button_ok_text = "Submit",
  button_close_text = "",
  showSubmitButton = true,
  submitButtonClass= "primary",
  modalSize = "modal-sm",
  to = "",
}) {
  useEffect(() => {
    if (show) {
      applyClassToBody("modal-open");
    }
  }, []);

  return (
    <>
      {show && <div className={`modal-backdrop  ${show ? "show" : ""}`}></div>}
      <div
        className={`modal modal-blur  fade ${show ? "show" : "hide"}`}
        id="modal-verify-number"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
        style={{ display: `${show ? "block" : "none"}` }}
      >
        <div className={`modal-dialog ${modalSize}`} role="document">
          <div className="modal-content">
            {button_ok_text !== "Delete" && (
              <div className="">
                {to !== "" ? (
                  <Link to={to} className="btn btn-link p-0" target="_blank">
                    <div className="text-muted ">
                      {title}
                    </div>
                  </Link>
                ) : (
                  <h5 className="modal-title ">{title}</h5>
                )}

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleClose}
                />
              </div>
            )}
            <div className="modal-body">
              {button_ok_text === "Delete" && (
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleClose}
                />
              )}{" "}
              {component}
            </div>
            <div className="modal-footer">
              {button_close_text !== "" && (
                <button
                  type="button"
                  onClick={handleClose}
                  className="btn me-auto"
                  data-bs-dismiss="modal"
                >
                  {button_close_text}
                </button>
              )}
              {showSubmitButton && (
                <button
                  type="submit"
                  positive
                  content="Submit"
                  value="Submit"
                  form={form_id}
                  className={`btn btn-${submitButtonClass} ms-auto`}
                  data-bs-dismiss="modal"
                  onClick={handleClick}
                >
                  {button_ok_text}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CModel;
