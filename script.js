//your JS code here. If required.

const input = document.getElementById("ip");
const button = document.getElementById("btn");
const output = document.getElementById("output");

function delay(ms, value) {
    return new Promise(resolve => {
        setTimeout(() => resolve(value), ms);
    });
}

button.addEventListener("click", function () {
    const num = Number(input.value);

    if (input.value.trim() === "") {
        output.innerText = "Please enter a number";
        return;
    }

    delay(2000, num)
        .then(result => {
            output.innerText = `Result: ${result}`;
            return delay(2000, result * 2);
        })
        .then(result => {
            output.innerText = `Result: ${result}`;
            return delay(1000, result - 3);
        })
        .then(result => {
            output.innerText = `Result: ${result}`;
            return delay(1000, result / 2);
        })
        .then(result => {
            output.innerText = `Result: ${result}`;
            return delay(1000, result + 10);
        })
        .then(result => {
            output.innerText = `Final Result: ${result}`;
        })
        .catch(error => {
            console.error(error);
        });
});
