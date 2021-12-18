import React, { useState, useEffect } from "react";

const useForm = (initialFieldValues) => {
    const [values, setValues] = useState(initialFieldValues)

    const handleInputChange = e => {
        const { name, value } = e.target
        const fieldValue = { [name]: value }
        setValues({
            ...values,
            ...fieldValue
        })
    }

    const resetForm = () => {
        setValues({
            ...initialFieldValues
        })
    }

    return {
        values,
        setValues,
        handleInputChange,
        resetForm
    };
}

export default useForm;