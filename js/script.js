
const keysArray = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['CapsLK', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', '▲'],
    ['Ctrl', 'Win', 'Alt', 'space', 'Alt', 'Ctrl', '◄', '▼', '►']
];
const keysArrayUP = [
    ['`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
    ['CapsLK', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter'],
    ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift', '▲'],
    ['Ctrl', 'Win', 'Alt', 'space', 'Alt', 'Ctrl', '◄', '▼', '►']
];
const keysArrayRu = [
    ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '|'],
    ['CapsLK', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'Enter'],
    ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift', '▲'],
    ['Ctrl', 'Win', 'alt', 'space', 'Alt', 'Ctrl', '◄', '▼', '►']
];
const keysArrayRuUP = [
    ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '|'],
    ['CapsLK', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', "Э", 'Enter'],
    ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'Shift', '▲'],
    ['Ctrl', 'Win', 'alt', 'space', 'Alt', 'Ctrl', '◄', '▼', '►']
];
const codesArray = [
    ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
    ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
    ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp'],
    ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']
];
let container = document.createElement('div'),
    keyboard = document.createElement('div');
textArea = document.createElement('textarea');

container.classList.add('container');
document.body.appendChild(container);


textArea.classList.add(
    'text-area',
    'container__text-area'
);
container.appendChild(textArea);
textArea.setAttribute('autofocus', true);

keyboard.classList.add('keyboard', 'keyboardEn', 'keyboardDown');
container.appendChild(keyboard);
renderKeyboard(keysArray);

function renderKeyboard(keysArray) {                                                     //render default keyboard
    for (let t = 0; t < keysArray.length; t++) {
        let row = document.createElement('div');
        row.classList.add('row', `row${t}`);
        keyboard.append(row);

        for (let i = 0; i < keysArray[t].length; i++) {
            let key = document.createElement('div');
            key.classList.add('key', `key${keysArray[t][i]}`);

            row.appendChild(key);
            key.textContent = keysArray[t][i];

            key.addEventListener('click', () => {

                if (key.textContent === 'space') {
                    textArea.textContent += " ";
                } else if (key.textContent === 'Tab') {
                    textArea.textContent += "    ";
                } else if (key.textContent === 'CapsLK') {
                    textArea.textContent += "";

                } else if (key.textContent === 'Shift') {
                    textArea.textContent += "";
                } else if (key.textContent === 'Ctrl') {
                    textArea.textContent += "";
                } else if (key.textContent === 'Win') {
                    textArea.textContent += "";
                } else if (key.textContent === 'Alt') {
                    textArea.textContent += "";
                } else if (key.textContent === 'Enter') {
                    textArea.textContent += '\n';
                } else if (key.textContent === 'Backspace') {
                    textArea.textContent = textArea.textContent.slice(0, -1);
                } else if (key.textContent.length == 1) {
                    textArea.textContent += key.textContent;
                }
            });

        }

    }
}


document.addEventListener('keydown', (event) => {                               // ligthening virtual keyboard on press to fisical buttons
    for (let k = 0; k < codesArray.length; k++) {
        if (codesArray[k].indexOf(event.code) !== -1) {
            let y = codesArray[k].indexOf(event.code);
            let iner = k;
            let newKeyEn = document.querySelector(`.key${keysArray[iner][y]}`);
            let newKeyRu = document.querySelector(`.key${keysArrayRu[iner][y]}`);
            let newKeyEnUP = document.querySelector(`.key${keysArrayUP[iner][y]}`);
            let newKeyRuUP = document.querySelector(`.key${keysArrayRuUP[iner][y]}`);

            if (document.querySelector(".keyboard").classList.contains('keyboardDown') && document.querySelector(".keyboard").classList.contains('keyboardEn')) {

                newKeyEn.classList.add('key-act');

                document.addEventListener('keyup', (event) => {
                    newKeyEn = document.querySelector(`.key${keysArray[iner][y]}`);
                    newKeyEn.classList.remove('key-act');

                });
            } else if (document.querySelector(".keyboard").classList.contains('keyboardUP') && document.querySelector(".keyboard").classList.contains('keyboardEn')) {

                newKeyEnUP.classList.add('key-act');

                document.addEventListener('keyup', (event) => {
                    newKeyEnUP = document.querySelector(`.key${keysArrayUP[iner][y]}`);
                    newKeyEnUP.classList.remove('key-act');

                });
            } else if (document.querySelector(".keyboard").classList.contains('keyboardDown') && document.querySelector(".keyboard").classList.contains('keyboardRu')) {

                newKeyRu.classList.add('key-act');

                document.addEventListener('keyup', (event) => {
                    newKeyRu = document.querySelector(`.key${keysArrayRu[iner][y]}`);
                    newKeyRu.classList.remove('key-act');

                });
            } else if (document.querySelector(".keyboard").classList.contains('keyboardUP') && document.querySelector(".keyboard").classList.contains('keyboardRu')) {

                newKeyRuUP.classList.add('key-act');

                document.addEventListener('keyup', (event) => {
                    newKeyRuUP = document.querySelector(`.key${keysArrayRuUP[iner][y]}`);
                    newKeyRuUP.classList.remove('key-act');

                });
            }
        }

    }
});



document.addEventListener('keydown', (event) => {
    function runOnKeys(func, ...codes) {
        let pressed = new Set();

        document.addEventListener('keydown', function (event) {
            pressed.add(event.code);

            for (let code of codes) {
                if (!pressed.has(code)) {
                    return;
                }
            }

            pressed.clear();

            func();
        });

        document.addEventListener('keyup', function (event) {
            pressed.delete(event.code);
        });

    }

    runOnKeys(                                                                                       //change language
        () => {
                const selectorLengRu = document.querySelector(".keyboard").classList.contains('keyboardRu');
                const selectorLengEn = document.querySelector(".keyboard").classList.contains('keyboardEn');


            if (selectorLengEn) {
                let myNode1 = document.querySelector(".keyboard");
                while (myNode1.firstChild) {
                    myNode1.removeChild(myNode1.firstChild);
                }

                renderKeyboard(keysArrayRu);
                keyboard.classList.remove('keyboardEn');
                keyboard.classList.add('keyboardRu');
            } else if (selectorLengRu) {
                let myNod = document.querySelector(".keyboard");
                while (myNod.firstChild) {
                    myNod.removeChild(myNod.firstChild);
                }
                renderKeyboard(keysArray);
                keyboard.classList.remove('keyboardRu');
                keyboard.classList.add('keyboardEn');
            }
        },
        "AltLeft",
        "ShiftLeft"
    );
    runOnKeys(                                                                                        //capsLK
        () => {
            if (document.querySelector(".keyboard").classList.contains('keyboardDown') && document.querySelector(".keyboard").classList.contains('keyboardEn')) {
                let myNode2 = document.querySelector(".keyboard");
                while (myNode2.firstChild) {
                    myNode2.removeChild(myNode2.firstChild);
                }

                renderKeyboard(keysArrayUP);
                keyboard.classList.toggle('keyboardDown');
                keyboard.classList.toggle('keyboardUP');
            } else if (document.querySelector(".keyboard").classList.contains('keyboardUP') && document.querySelector(".keyboard").classList.contains('keyboardEn')) {
                let myNod3 = document.querySelector(".keyboard");
                while (myNod3.firstChild) {
                    myNod3.removeChild(myNod3.firstChild);
                }
                renderKeyboard(keysArray);
                keyboard.classList.toggle('keyboardUP');
                keyboard.classList.toggle('keyboardDown');
            } else if (document.querySelector(".keyboard").classList.contains('keyboardDown') && document.querySelector(".keyboard").classList.contains('keyboardRu')) {
                let myNod4 = document.querySelector(".keyboard");
                while (myNod4.firstChild) {
                    myNod4.removeChild(myNod4.firstChild);
                }
                renderKeyboard(keysArrayRuUP);
                keyboard.classList.toggle('keyboardDown');
                keyboard.classList.toggle('keyboardUP');
            } else if (document.querySelector(".keyboard").classList.contains('keyboardUP') && document.querySelector(".keyboard").classList.contains('keyboardRu')) {
                let myNod5 = document.querySelector(".keyboard");
                while (myNod5.firstChild) {
                    myNod5.removeChild(myNod5.firstChild);
                }
                renderKeyboard(keysArrayRu);
                keyboard.classList.toggle('keyboardUP');
                keyboard.classList.toggle('keyboardDown');
            }
        },
        "CapsLock"
    );
}
);

