getData({
    path: '/minors/',
})
.done((data) => {
    console.log(data);
}).fail(function (jqXHR) {
    console.log(jqXHR.responseText);
});