export default function scrollTopBtn (btn) {
    const scrollbtn = document.querySelector(btn)

    window.addEventListener("scroll", e => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop

        if (scrollTop > 450) {
        scrollbtn.classList.remove("hidden")
        } else {
        scrollbtn.classList.add("hidden")
        }
    })

    document.addEventListener("click", e => {
        if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
        window.scroll({
            behavior: "smooth",
            top: 0
        })
        }
    })
}