getData({
        path: '/people/',
    })
    .done((data) => {
        console.log(data);

        $('#faculty').addClass('ui-widget ui-widget-shadow section');

        $('<h1/>', {
            text: 'FACULTY',
            id: 'faculty-section-name',
            class: 'section-name'
        }).appendTo('#faculty');

        $.each(data.faculty, function (i, item) {
            var div = $('<div/>', {
                class: 'faculty-div ui-widget-shadow'
            }).appendTo('#faculty');

            $('<img/>', {
                class: 'faculty-image',
                src: item.imagePath,
            }).appendTo(div);

            var infoDiv = $('<div/>', {
                class: 'faculty-information',
            }).appendTo(div);

            $('<h2/>', {
                text: item.name
            }).appendTo(infoDiv);

            $('<h3/>', {
                text: item.title
            }).appendTo(infoDiv);

            $('<h4/>', {
                text: 'Office: ' + item.office
            }).appendTo(infoDiv);

            $('<h4/>', {
                text: item.email
            }).appendTo(infoDiv);

            $('<h4/>', {
                text: item.phone
            }).appendTo(infoDiv);
        });
    }).fail(function (jqXHR) {
        console.log(jqXHR.responseText);
    });