import { valida } from "./validaciones.js";

const validarCampos = () => {
    const campos = document.querySelectorAll("[data-tipo]");
    campos.forEach((campo) => {
        campo.addEventListener("blur", (campo) => {
            valida(campo.target);
        });
    });
}

export const limpiarCampos = () => {
    const campos = document.querySelectorAll("[data-tipo]");
    campos.forEach((campo) => {
        campo.value = "";
    });
}

export default validarCampos;
