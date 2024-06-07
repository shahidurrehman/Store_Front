
import IconAlertTriangle from "../../assets/icons/alert-triangle"

function Confirmation({ title = "Are You Sure?", text = " Do you really want to remove this Service? What you've done cannot be undone." }) {
    return (
        <>
            <div className="modal-content">
                <div className="modal-body text-center">
                    <IconAlertTriangle className="text-danger" />
                    <h3>{title}</h3>
                    <div className="text-muted">{text}</div>
                </div>
            </div>
        </>
    )
}
export default Confirmation