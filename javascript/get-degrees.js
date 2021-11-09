getData({
        path: '/degrees/',
    })
    .done((data) => {
        console.log(data);

        $('#degrees').addClass('ui-widget ui-widget-shadow section');

        $('<h1/>', {
            text: 'DEGREES',
            id: 'degrees-section-name',
            class: 'section-name'
        }).appendTo('#degrees');

        $.each(data.undergraduate, function (i, item) {
            add(item);
        });

        $.each(data.graduate, function (i, item) {
            add(item);
        });

    }).fail(function (jqXHR) {
        console.log(jqXHR.responseText);
    });

function add(item) {
    if (item.degreeName.indexOf("certificate") >= 0) {
        return false;
    }
    $('<h2/>', {
        text: item.degreeName.toUpperCase() + " - " + item.title,
        class: 'degrees-name'
    }).appendTo('#degrees');

    $('<p/>', {
        text: item.description
    }).appendTo('#degrees');

    $('<div/>', {
        id: item.degreeName
    }).appendTo('#degrees');

    $('<h3/>', {
        text: 'Concentrations'
    }).appendTo("#" + item.degreeName);

    $('<div/>', {
        id: item.degreeName + "-accordion"
    }).appendTo("#" + item.degreeName);

    $.each(item.concentrations, function (i, concentration) {
        $('<h4/>', {
            text: concentration
        }).appendTo('#' + item.degreeName + "-accordion");
    })

    $('#' + item.degreeName).accordion({
        collapsible: true,
        active: false,
        heightStyle: '#degrees'
    });
}