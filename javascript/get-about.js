getData({
    path: '/about/',
})
.done((data) => {
    console.log(data);

    $('<div/>', {
        text: 'About',
        id: 'about'
    }).appendTo('body');

    $('<h1/>', {
        text: data.title,
        id: 'title'
    }).appendTo('#about');
}).fail(function (jqXHR) {
    console.log(jqXHR.responseText);
});