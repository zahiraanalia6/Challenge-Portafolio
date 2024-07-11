import { habilitarBotonEnviar } from "./js/habilitarBoton.js";
import validarCampos, { limpiarCampos } from "./js/validarCampos.js";
import { valida } from "./js/validaciones.js";

(() => {
    const formularioContacto = document.querySelector(".formcontato__form");

    validarCampos();
    habilitarBotonEnviar();

    const validarBtnFormulario = (event) => {
        const element = event.target;
        if (element && (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA')) {
            valida(element);  // Validar cada campo individualmente
            habilitarBotonEnviar();  // Actualizar el estado del botón de envío
        }
    }

    formularioContacto.addEventListener("keyup", validarBtnFormulario);
    window.addEventListener("DOMContentLoaded", limpiarCampos);
})();
