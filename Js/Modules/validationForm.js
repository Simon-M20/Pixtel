export default function contactFormValidation() {
    const form = document.querySelector("form")
    const input = document.querySelectorAll("form [required]")

    // console.log(form,input);

    input.forEach(input => {
        const small = document.createElement("small")
        small.id = input.name
        small.textContent = input.title
        small.classList.add("contact-form-error", "none")
        input.insertAdjacentElement("afterend", small)
    
    })

    document.addEventListener("keyup", e => {
        if (e.target.matches("form [required]")) {
            // console.log(e.target);
            let input = e.target
            let pattern = input.pattern || input.dataset.pattern

            if (pattern && input.value !== "") {
            let regex = new RegExp(pattern)
            return !regex.exec(input.value)
                ? document.getElementById(input.name).classList.add("is-active")
                : document.getElementById(input.name).classList.remove("is-active")
            }

            if (!pattern) {
                return input.value === ""
                    ? document.getElementById(input.name).classList.add("is-active")
                    : document.getElementById(input.name).classList.remove("is-active")
            }
        }
    })
}