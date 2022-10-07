//Get route of CKFinder
function getRouteCKFinder() {
    return $('.route-ckfinder').data('route');
}

//Select Image With CKFinder
function selectFileWithCKFinder( route ) {
    CKFinder.modal( {
        connectorPath: route,
        chooseFiles: true,
        width: 800,
        height: 600,
        onInit: function( finder ) {
            finder.on( 'files:choose', function( evt ) {
                let file = evt.data.files.first();
                let urlImage = file.getUrl();
                $('.image-demo').attr('src', urlImage);
                $('#avatar').val(urlImage);
            } );
        },
    } );
}

//Send data to request
function sendDataRequest(route, dataRequest, token, action) {
    $.ajax({
        type: "POST",
        headers: {
            'X-CSRF-TOKEN': token
        },
        url: route,
        data: dataRequest,
        success: function (response) {
            if (response.status == 200) {
                if (action === 'delete') {
                    toastr.error('Delete data successfully');
                    setTimeout(location.reload.bind(location), 500);
                }
            }
        }
    })
}

//Check unique in array
function unique(list) {
    let result = [];
    $.each(list, function(i, e) {
        if ($.inArray(e, result) === -1) result.push(e);
    });

    return result;
}
