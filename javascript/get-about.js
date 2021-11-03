getData({
    path: '/about/',
})
.done((data) => {
    console.log(data);
}).fail(function (jqXHR) {
    console.log(jqXHR.responseText);
});