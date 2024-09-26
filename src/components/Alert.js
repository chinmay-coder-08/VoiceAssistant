import React from 'react'

const Alertcomp = (props) => {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.label)}:</strong> {props.alert.msg}
            </div>}
        </div>
    )
}

export default Alertcomp
