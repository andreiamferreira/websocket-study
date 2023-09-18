import { updateTextEditor } from "./document.js";

// eslint-disable-next-line no-undef
const socket = io();

function textEditor(text){
    socket.emit("text_editor", text);
}

socket.on("text_editor_client", (text) => {
    updateTextEditor(text);
});

export { textEditor };