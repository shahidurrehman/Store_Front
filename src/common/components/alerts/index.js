import React from 'react';
import IconAlertCircle from '../../../assets/icons/alert-circle';
import IconAlertTriangle from '../../../assets/icons/alert-triangle';
import IconChecks from '../../../assets/icons/checks';
import IconInfoCircle from '../../../assets/icons/info-circle';

const defaultIconProps = {
    className: "icon alert-icon",
    width: 24,
    height: 24,
    stroke: "currentColor",
}

const Alert = ({ title = "", text = "", type = "info", closeable = false }) => {
    return (
        <div className={`alert alert-${type} alert-dismissible`} role="alert">
            <div className="d-flex">
                <div>
                    {type === "danger" ?
                        <IconAlertCircle {...defaultIconProps} />
                        :
                        type === "success" ?
                            <IconChecks {...defaultIconProps} />
                            :
                            type === "warning" ?
                                <IconAlertTriangle {...defaultIconProps} />
                                :
                                <IconInfoCircle {...defaultIconProps} />
                    }

                </div>
                <div>
                    <h4 className="alert-title">{title}</h4>
                    <div className="text-muted">{text}</div>
                </div>
            </div>
            {closeable &&
                <a className="btn-close" data-bs-dismiss="alert" aria-label="close" />}

        </div>

    )
}


export default Alert;