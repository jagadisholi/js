document.querySelector("#validate").addEventListener("submit", (e) => {
    let input = document.querySelector("#formInput");
    if (!input.value) {
        e.preventDefault();
        alert("input cant be empty");
    }
});
