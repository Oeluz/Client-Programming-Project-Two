getData({
    path: '/research/',
})
.done((data) => {
    console.log(data);
}).fail(function (jqXHR) {
    console.log(jqXHR.responseText);
});

const config = {
    type = 'polarArea',
    data: data,
    options: {}
};

const data = {
    
}