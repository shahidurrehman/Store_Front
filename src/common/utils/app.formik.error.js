/** Only Frontend Validation **/


// export const getFormikErrorClass = (obj, name, base = "", str = "") => {
//     return (obj && obj.touched[name]) && Boolean(obj && obj.errors[name])
//         ? `${base} ${str}`
//         : base;
// };

// export const getFormikErrorMessage = (obj, name) => {
//     return (obj && obj.touched[name]) && Boolean(obj && obj.errors[name]) &&
//         <div className="invalid-feedback d-block">{obj && obj.errors[name]}</div>
// };

/** Validation with backend **/

export const getFormikErrorClass = (obj, name, base = "", str = "") => {
    let error = null;
    if (!obj) {
        return base;
    }
    if (obj && obj.type === "formik") {
        let message = obj && obj.error;
        error = (message && message.touched[name]) && Boolean(message && message.errors[name]);
    } else {
        let message = obj && obj.error;
        if (message) {
            error = message[name] && message[name][0];
        }
    }
    return error
        ? `${base} ${str}`
        : base;
};

export const getFormikErrorMessage = (obj, name) => {
    let error = null;
    if (!obj) {
        return "";
    }


    if (obj && obj.type === "formik") {
        let message = obj && obj.error;
        error = ((message.touched && message.touched[name]) && Boolean(message.errors && message.errors[name])) ? message.errors[name] : "";
    } else {
        let message = obj && obj.error;

        if (message) {
            error = message[name] && message[name][0];
        }
    }



    return (error) &&
        <div className="invalid-feedback d-block">{error}</div>
};

{/* <a className="border btn-outline-secondary rounded-circle"><IconPlus /></a> */}

{/* <hr className="mt-4" /> */}
