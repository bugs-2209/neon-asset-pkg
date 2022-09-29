jQuery( window ).load( function() {
    let nameTable = jQuery('.table').data('name');
    let $dataList = jQuery( "#" + nameTable+ "-list" );

    // Initialize DataTable
    $dataList.DataTable( {
        "order": [[ 0 ,"desc" ]],
        "bJQueryUI": true,
        "sPaginationType": "full_numbers",
        "bPaginate": false,
        "bFilter": true,
        "bSort": true,
        "aoColumnDefs": [
        {
            "bSortable": false,
            "aTargets": [0]
        }, {
            "bSortable": false,
            "aTargets": [1]
        }, {
            "bSortable": true,
            "aTargets": [2]
        }, {
            "bSortable": true,
            "aTargets": [3]
        }, {
            "bSortable": true,
            "aTargets": [4]
        }],

    });

    $("#checkbox-all").on('change',function () {
        let checked = $(this).is(':checked');
        if (checked)
            $('.checkbox-item').each(function () {
                $(this).prop('checked', true);
                $('.delete-all').removeClass('hidden');
            })
        else
            $('.checkbox-item').each(function () {
                $(this).prop('checked', false);
                $('.delete-all').addClass('hidden');
            })
    })

    $('.checkbox-item').change(function () {
        if ($(this).is(':checked')) {
            let isAllChecked = 0;
            $('.checkbox-item').each(function () {
                if (!this.checked) {
                    isAllChecked = 1
                }
            })
            if (isAllChecked === 0) {
                $("#checkbox-all").prop('checked', true)
                $('.delete-all').removeClass('hidden');
            }
        } else {
            $("#checkbox-all").prop('checked', false)
            $('.delete-all').addClass('hidden');
        }
    })
} );
