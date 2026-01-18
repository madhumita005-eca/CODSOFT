let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let val = btn.textContent;

        if (val === "AC") {
            display.value = "";
        }
        else if (val === "C") {
            display.value = display.value.slice(0, -1);
        }
        else if (val === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        }
        else {
            display.value += val;
        }
    });
});
