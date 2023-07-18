const checked = (elt, error_handler=null) => {

    let err = document.getElementById(`vlidate_error_checked_${elt.name}`)
    if (err) err.remove()

    if (!elt.checked) {

        if (typeof error_handler === "function") {
            error_handler()
        } else {
            let spanError = document.createElement('span')
            spanError.id = `vlidate_error_checked_${elt.name}`
            spanError.innerText = !error_handler ? "this checkbox must be cheked" : error_handler
            spanError.style = "color: red"
            elt.insertAdjacentElement("afterend", spanError)
        }
    }

    return elt.checked
}