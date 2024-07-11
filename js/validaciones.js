const mensajeEncabezado = "Por favor, asegúrese de verificar los siguientes requerimientos: <br>";
const mensajeMaxCaracteres = "No puedes agregar más de 50 caracteres.";
const tiposDeErrores = [
    "valueMissing",
    "patternMismatch",
    "tooShort",
    "tooLong",
    "typeMismatch",
];

export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }

    const errorMensaje = input.parentElement.querySelector(".input-message-error");

    if (input.validity.valid) {
        input.parentElement.classList.remove("formcontato__input--incorrecto");
        errorMensaje.classList.add("hidden");
        errorMensaje.innerHTML = "";
    } else {
        input.parentElement.classList.add("formcontato__input--incorrecto");
        errorMensaje.classList.remove("hidden");
        errorMensaje.innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tiposDeErrores.forEach((error) => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar en blanco o vacío.",
        patternMismatch:
            mensajeEncabezado +
            "Debes incluir por lo menos un apellido. <br>" +
            "Sólo la primera letra de los nombres y apellidos debe ser mayúscula. <br>" +
            "No puede haber más de un espacio en blanco. <br>",
        tooShort: "El valor mínimo requerido de caracteres es de 3.",
        tooLong: mensajeMaxCaracteres,
    },
    email: {
        valueMissing: "El campo correo no puede estar en blanco o vacío.",
        patternMismatch: "El formato admitido debe ser en formato correo@dominio.com",
        typeMismatch:
            "Debe estar en formato e-mail conteniendo el caracter especial @ " +
            "seguido de un dominio o proveedor seguido de un punto(.).",
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar en blanco o vacío.",
        patternMismatch:
            mensajeEncabezado +
            "No se admiten números ni caracteres especiales, solo texto. <br>" +
            "No puede haber más de un espacio en blanco entre palabras",
        tooShort: "Debes ingresar mínimo 6 caracteres",
        tooLong: mensajeMaxCaracteres,
    },
    mensaje: {
        valueMissing: "El campo mensaje no puede estar en blanco o vacío.",
        tooLong: "Debe contener máximo 300 caracteres",
        tooShort: "Debe contener mínimo 20 caracteres",
    }
};

const validadores = {
    // Aquí puedes agregar validaciones personalizadas
};
