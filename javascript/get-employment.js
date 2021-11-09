getData({
        path: '/employment/',
    })
    .done((data) => {
        $('#employment').addClass('ui-widget ui-widget-shadow section');

        $('<h1/>', {
            text: 'EMPLOYMENT',
            id: 'employment-section-name',
            class: 'section-name'
        }).appendTo('#employment');

        $('<div/>', {
            id: 'employment-intro-div'
        }).appendTo('#employment');

        var intro = data.introduction;

        $('<h2/>', {
            text: intro.title,
            id: 'employment-intro-title'
        }).appendTo('#employment-intro-div');

        $.each(intro.content, function (i, item) {
            $('<h3/>', {
                text: item.title
            }).appendTo('#employment-intro-div');

            $('<p/>', {
                text: item.description
            }).appendTo('#employment-intro-div');
        });

        var stat = data.degreeStatistics;

        $('<div/>', {
            id: 'employment-stat-div'
        }).appendTo('#employment');

        $('<h2/>', {
            text: stat.title
        }).appendTo('#employment-stat-div');

        $.each(stat.statistics, function (i, item) {
            $('<div/>', {
                id: 'employment-statistic-' + i
            }).appendTo('#employment-stat-div')

            $('<h3/>', {
                text: item.value
            }).appendTo('#employment-statistic-' + i);

            $('<p/>', {
                text: item.description
            }).appendTo('#employment-statistic-' + i);
        });

        var employer = data.employers;

        $('<div/>', {
            id: 'employment-employers-div'
        }).appendTo('#employment');

        $('<h2/>', {
            text: employer.title
        }).appendTo('#employment-employers-div');

        var list = $('<ul/>', {}).appendTo('#employment-employers-div');

        $.each(employer.employerNames, function (i, item) {
            list.append('<li>' + item + '</li>');
        });

        var career = data.careers;

        $('<div/>', {
            id: 'employment-career-div'
        }).appendTo('#employment');

        $('<h2/>', {
            text: career.title
        }).appendTo('#employment-career-div');

        var list = $('<ul/>', {}).appendTo('#employment-career-div');

        $.each(career.careerNames, function (i, item) {
            list.append('<li>' + item + '</li>');
        });

        var table = data.coopTable;
        $('<div/>', {
            id: 'employment-coop-div'
        }).appendTo('#employment');

        $('<h2/>', {
            text: table.title
        }).appendTo('#employment-coop-div');

        $('<table/>', {
            id: 'coop-table',
            class: 'display'
        }).appendTo('#employment-coop-div');

        var thead = $('<thead/>', {}).appendTo('#coop-table');
        var tbody = $('<tbody/>', {}).appendTo('#coop-table');

        var headTr = $('<tr/>', {}).appendTo(thead);
        headTr.append('<th>Employer</th>');
        headTr.append('<th>Degree</th>');
        headTr.append('<th>City</th>');
        headTr.append('<th>Term</th>');

        $.each(table.coopInformation, function (i, item) {
            var tr = $('<tr/>', {}).appendTo(tbody);

            tr.append('<th>' + item.employer + '</th>');
            tr.append('<th>' + item.degree + '</th>');
            tr.append('<th>' + item.city + '</th>');
            tr.append('<th>' + item.term + '</th>');
        })

        $('#coop-table').DataTable();

    }).fail(function (jqXHR) {
        console.log(jqXHR.responseText);
    });