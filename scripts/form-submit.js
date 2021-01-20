window.addEventListener("load", function () {
    function sendData() {
        const XHR = new XMLHttpRequest();
        const FD = new FormData(form);

        for (file in files) {
            FD.append( file, files[file]);
        }

        let jsonObject = {};

        for (const [key, value] of FD) {
            jsonObject[key] = value;
        }

        console.log(jsonObject);

        XHR.addEventListener("load", function (event) {
            alert(event.target.responseText);
        });
        XHR.addEventListener("error", function (event) {
            alert('Oops! Something went wrong.');
        });
        XHR.open("POST", "destination");
        XHR.send(jsonObject);
    }
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        sendData();
    });
});