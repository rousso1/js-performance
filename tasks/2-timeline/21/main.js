(function () {
    console.time('rendering');
    var doc = window.document;

    //Create posts
    for (var i = 0; i < data.length; i++) {
        var post = window.document.createElement('li'),
            paragraph = window.document.createElement('p'),
            author = window.document.createElement('strong'),
            time = window.document.createElement('time'),
            content = window.document.createElement('div');

        author.innerText = data[i].owner;
        time.innerHTML = data[i].date;

        content.innerHTML = data[i].content;

        paragraph.appendChild(author);
        paragraph.appendChild(time);

        post.appendChild(paragraph);
        post.appendChild(content);

        if (data[i].comments) {
            var button = window.document.createElement('button');

            button.innerHTML = 'comments (' + data[i].comments.length + ')';
            button.onclick = function () {
                alert('TODO - comment section');
            };
            post.appendChild(button);
        }

    }
    window.document.getElementById('timeline_list').appendChild(post);


    console.timeEnd('rendering');
})();