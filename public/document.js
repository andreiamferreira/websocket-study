
// eslint-disable-next-line no-undef
import { textEditor } from "./socket-front-document.js";

const editorText = document.getElementById("editor-texto");

// emit emite um evento no socket.io
// executa ele no lado do cliente, para escutar ele no server side com o metodo on()
editorText.addEventListener("keyup", () => {
    textEditor(editorText.value);
});

function updateTextEditor(text) {
    editorText.value = text;
}

export { updateTextEditor };