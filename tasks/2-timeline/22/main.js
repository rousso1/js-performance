(function () {
    var doc = window.document,
        timeline_list = doc.getElementById('timeline_list'),
        timeline = doc.getElementById('timeline'),
        fragment = doc.createDocumentFragment();

    //Create posts
    for (var i = 0; i < data.length; i++) {
        var post = doc.createElement('li'),
            paragraph = doc.createElement('p'),
            author = doc.createElement('strong'),
            time = doc.createElement('time'),
            content = doc.createElement('div'),
            dot = doc.createElement('div'),
            postData = data[i];

        author.innerText = postData.owner;
        time.innerText = postData.date;
        content.innerText = postData.content;
        dot.classList.add('dot');

        paragraph.appendChild(author);
        paragraph.appendChild(time);

        post.appendChild(paragraph);
        post.appendChild(content);
        post.appendChild(dot);

        if (postData.comments) {
            var button = doc.createElement('button');

            button.innerText = 'comments (' + postData.comments.length + ')';
            post.appendChild(button);
        }

        fragment.appendChild(post);
    }

    timeline_list.appendChild(fragment);

    timeline_list.onclick = function (event) {
        if(event.target.tagName === 'BUTTON') {
            alert('TODO - comment section');
        }
    };
})();