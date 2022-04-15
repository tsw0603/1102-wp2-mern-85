import React from 'react'

import { useAppContext } from '../context/appContext_85'

const Alert_85 = () => {
    const { alertText, alertType } = useAppContext();
    return (
        <div className={`alert alert-${alertType}`}>
            {alertText}
        </div>
    )
}

export default Alert_85