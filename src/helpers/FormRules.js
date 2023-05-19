
export const Requered = ({ inputName = '' }) => {
    return {
        required: true,
        message: inputName == '' ? 'Campo es requerido' : `${inputName} es requerido`
    }
}

export const MostBeEmail = {
    type: "email",
    message: 'Ingrese un correo válido'
}

export const LengthMin = ({ min }) => {
    return {
        min,
        message: `Los carácteres mínimos son ${ min }`
    }
}
export const LengthMax = ({ max }) => {
    return {
        max,
        message: 'Ingrese un correo válido'
    }
}

export const ValueMin = ({ min }) => {
    return {
        min,
        message: `El valor mínimo debe ser ${ min }`
    }
}