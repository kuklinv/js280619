let bufferClear = makeBuffer();

function makeBuffer() {
    let currentBuffer = '';
    function buffer(arg) {
        if (arg) {
            return currentBuffer += arg;
        }
        return currentBuffer;
    };
    buffer.clear = function () {
        currentBuffer = '';
    };
    return buffer;
}

export default bufferClear;

// bufferClear("Тест");
// bufferClear(" тебя не съест ");
// alert(bufferClear()); // Тест тебя не съест
//
// bufferClear.clear();
//
// alert(bufferClear()); // ""