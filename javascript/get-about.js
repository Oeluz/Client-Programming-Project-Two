getData({
    path: '/about/',
})
.done((data) => {
    console.log(data);
    
    $('#about').addClass('ui-widget ui-widget-shadow section');

    $('<h1/>', {
        text: 'ABOUT',
        id: 'about-section-name',
        class: 'section-name'
    }).appendTo('#about');
    
    $('<h2/>', {
        text: data.title,
        id: 'about-title'
    }).appendTo('#about');

    $('<p/>', {
        text: data.description,
        id: 'about-description'
    }).appendTo('#about');
    
    $('<div/>', {
        id: 'quote'
    }).appendTo('#about');

    $('<h3/>', {
        text: "\"" + data.quote + "\"",
        id: 'about-quote'
    }).appendTo('#quote');

    $('<h4/>', {
        text: data.quoteAuthor,
        id: 'about-author'
    }).appendTo('#quote');
}).fail(function (jqXHR) {
    console.log(jqXHR.responseText);
});