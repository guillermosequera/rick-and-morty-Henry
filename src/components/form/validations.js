const regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
const regexPassword = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;

export const validation = (data) => {
    const errors = {}

    if(!regexEmail.test(data.email)) errors.email = 'Debe ser un email ';
    if(!data.email)errors.email = 'Este campo es requerido';
    if(data.email.length > 35) errors.email = 'El email no puede tener mas de 35 caracteres';
    if(!regexPassword.test(data.password)) errors.password = 'La contraseña debe tener caracteres y numeros';
    if(data.password.length > 8 || data.password.length < 16) errors.password = 'La constraseña debe tener entre 8 y 16 caracteres';
    
    return errors;
}