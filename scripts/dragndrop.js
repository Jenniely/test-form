const dragDrop = {
    hzone: null,
    hstat: null,
    hform: null,
    init: function () {
        dragDrop.hzone = document.getElementById("upload-zone");
        dragDrop.hstat = document.getElementById("upload-status");
        dragDrop.hform = document.getElementById("upload-form");
        dragDrop.hzone.addEventListener("dragenter", function (e) {
            e.preventDefault();
            e.stopPropagation();
            dragDrop.hzone.classList.add('highlight');
        });
        dragDrop.hzone.addEventListener("dragleave", function (e) {
            e.preventDefault();
            e.stopPropagation();
            dragDrop.hzone.classList.remove('highlight');
        });

        dragDrop.hzone.addEventListener("dragover", function (e) {
            e.preventDefault();
            e.stopPropagation();
            dragDrop.hzone.classList.add('highlight');
        });
        dragDrop.hzone.addEventListener("drop", function (e) {
            e.preventDefault();
            e.stopPropagation();
            dragDrop.hzone.classList.remove('highlight');
            let dt = e.dataTransfer;
            files = dt.files;
        });
    }
}
let files = {};

window.addEventListener("DOMContentLoaded", dragDrop.init);