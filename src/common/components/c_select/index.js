import React from 'react'
import { getFormikErrorClass, getFormikErrorMessage } from '../../utils/app.formik.error';

function CSelect({ type = "select", autoComplete = "off", value = "", className = "form-select", options = [], defualt_option = "", option_lable = 'lable', option_value = "value", id, name, onChange, onBlur, error, disabled }) {

  return (
    <>
      <select
        type={type}
        id={id}
        name={name}
        disabled={disabled}
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
      >
        {defualt_option && <option value="">{defualt_option}</option>}
        {options && options.map((item, k) =>
          <option key={k} value={item[option_value]}>{item[option_lable]}</option>
        )}
      </select>
      {getFormikErrorMessage(error && error, name)}
    </>
  )
}

export default CSelect