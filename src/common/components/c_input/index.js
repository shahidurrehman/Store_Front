import React, { useState, useEffect } from 'react';
import IconEye from '../../../assets/icons/eye';
import { getFormikErrorClass, getFormikErrorMessage } from '../../utils/app.formik.error';


const CInput = ({
  type = "text",
  autoComplete = "off",
  value = "",
  checked = null,
  className = "form-control",
  style = null,
  disabled = false,
  pattern,
  id,
  name,
  rows,
  placeholder,
  error,
  onChange,
  onKeyPress,
  onBlur,
}) => {

  const [showPassword, setShowPassword] = useState(false);
  const [fieldType, setFieldType] = useState("");

  const getFieldType = (_type) => {
    if (type === "password") {
      if (showPassword === true) {
        setFieldType("text");
      } else {
        setFieldType(type);
      }
    } else {
      setFieldType(type);
    }
  };

  useEffect(() => {
    getFieldType(type);
  }, []);

  useEffect(() => {
    if (fieldType) {
      getFieldType(fieldType);
    }
  }, [showPassword]);

  return (
    <>
      <div
        className={
          type == "password"
            ? getFormikErrorClass(
              error && error,
              name,
              "input-group input-group-flat",
              "is-invalid"
            )
            : ""
        }
      >
        {type === "textarea" ? (
          <textarea
            type="text"
            id={id}
            name={name}
            rows={rows}
            placeholder={placeholder}
            autoComplete={autoComplete}
            className={getFormikErrorClass(
              error && error,
              name,
              className,
              "is-invalid"
            )}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
          />
        ) : (
          <input
            type={fieldType}
            id={id}
            name={name}
            value={value}
            placeholder={placeholder}
            autoComplete={autoComplete}
            className={getFormikErrorClass(
              error && error,
              name,
              className,
              "is-invalid"
            )}
            style={style}
            pattern={pattern}
            checked={checked}
            onChange={onChange}
            onBlur={onBlur}
            onKeyPress={onKeyPress}
            disabled={disabled}
          />
        )}
        {type === "password" && (
          <span
            className={getFormikErrorClass(
              error && error,
              name,
              "input-group-text",
              "c-is-invalid"
            )}
          >
            <a
              href="#"
              onClick={() => setShowPassword((prev) => !prev)}
              className="link-secondary"
              title="Show password"
              data-bs-toggle="tooltip"
            >
              <IconEye
                className="icon"
                width="24"
                height="24"
                stroke="currentColor"
              />
            </a>
          </span>
        )}
      </div>
      {getFormikErrorMessage(error && error, name)}
    </>
  );
};


export default CInput;