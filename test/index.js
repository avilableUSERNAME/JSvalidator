document.myForm.addEventListener('submit', (e) => {

    e.preventDefault()

    document.getElementById("demo").innerHTML = ''

    let fields = {
        'checkbox-test': ['checked'],
        'checkbox-test-2': {
            checked: "why don't you check this one for me :)",
        },
        'checkbox-test-3': {
            checked: () => {
                document.getElementById('myErr').style = 'display: block;'
            }
        },
    }


    document.getElementById('myErr').style = 'display: none;'

    let validation = validate(fields)

    if (validation) {

        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            document.getElementById("demo").innerHTML = this.responseText;
        }
        xhttp.open("GET", "ajax_info.txt", true);
        xhttp.send();

    }

})