
    const input = document.querySelector("input");
    h2 = document.querySelector("h2");

    input.addEventListener("keyup", display);

    function display() {
        localStorage.setItem("value", input.value);

        console.log(localStorage.getItem("value"));

    //   h2.innerText = localStorage.getItem("value");
    }
