$(document).ready(function () {
    $("#file-upload").click(function (e) {
        const routeCKFinder = getRouteCKFinder();

        selectFileWithCKFinder(routeCKFinder);
    })
})
