$(document).ready(function () {
    const route = $('.btn-remove-user').data('route');
    const token = $('meta[name="csrf-token"]').attr('content');

    $('.btn-remove-user').click(function () {
        let id = $(this).data('id');
        let data = {
            data: id
        };

        sendDataRequest(route, data, token, 'delete');
    });

    let arrDataSelected = [];
    $('.checkbox-item').change(function () {
        $("input:checkbox[name=chk]:checked").each(function(){
            arrDataSelected.push($(this).data('id'));
        });

        if (arrDataSelected.length > 1) {
            $('.delete-all').removeClass('hidden');
        }
    })

    $('.delete-all').click(function () {
        $("#modal-confirm").modal('show');
    });

    $('#btn-confirm-deleted').on('click', function () {
        let arrayId = unique(arrDataSelected);
        let data = {
            data: arrayId
        }
        sendDataRequest(route, data, token, 'delete')
    })
})
