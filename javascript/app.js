function getData(pathName) {
    return $.ajax({
        type: 'get',
        url: 'http://solace.ist.rit.edu/~plgics/proxy.php',
        dataType: 'json',
        data: pathName,
        cache: false,
        async: true,
    });
}

