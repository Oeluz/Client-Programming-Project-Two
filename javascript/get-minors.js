getData({
        path: '/minors/',
    })
    .done((data) => {
        console.log(data);

        $('#minors').addClass('ui-widget ui-widget-shadow section');

        $('<h1/>', {
            text: 'MINORS',
            id: 'minors-section-name',
            class: 'section-name'
        }).appendTo('#minors');

        $.each(data.UgMinors, function (i, item) {
            $('<div/>', {
                id: item.name + '-minor',
                class: 'minor-div'
            }).appendTo('#minors');

            $('<h3/>', {
                text: item.title,
                class: 'minors-title'
            }).appendTo('#' + item.name + '-minor');

            $('<p/>', {
                text: item.description
            }).appendTo('#' + item.name + '-minor');

            var div = $('<div/>', {
                id: item.name + '-course-div'
            }).appendTo('#' + item.name + '-minor');

            div.attr('id', '#' + item.name + '-minor');

            var list = $('<ul/>', {}).appendTo(div);

            $.each(item.courses, function (i, innerItem) {
                list.append("<li><a href='#" + "tabs-" + i + "'>" + innerItem + "</a></li>");

                var course = $('<div/>', {
                    class: 'course-div'
                }).appendTo(div);

                course.attr('id', 'tabs-' + i);

                getData({
                    path: '/course/courseID=' + innerItem
                }).done((courseData) => {
                    $('<h3/>', {
                        text: (courseData.title + " (" + courseData.courseID + ")").replace(/&amp;/g, '&')
                    }).appendTo(course);

                    $('<p/>', {
                        text: courseData.description
                    }).appendTo(course);

                }).fail(function (jqXHR) {
                    console.log(jqXHR.responseText);
                });

            });
            div.tabs();
        });

    }).fail(function (jqXHR) {
        console.log(jqXHR.responseText);
    });