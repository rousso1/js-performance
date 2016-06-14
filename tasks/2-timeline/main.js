(function () {
    //Create posts
    for (var i = 0; i < data.length; i++) {
        var post = window.document.createElement('li');

        post.style.setProperty('box-sizing', 'border-box');
        post.style.setProperty('-moz-box-sizing', 'border-box');
        post.style.setProperty('font-family', '"lucida grande",tahoma,verdana,arial,sans-serif');
        post.style.setProperty('font-size', '13px');
        post.style.setProperty('list-style', 'none');
        post.style.setProperty('width', '450px');
        post.style.setProperty('border', '1px solid #bebebe');
        post.style.setProperty('padding', '15px');
        post.style.setProperty('margin', '5px 0 0 0');
        post.style.setProperty('position', 'relative');

        if (i % 2) {
            post.style.setProperty('float', 'right');
            post.style.setProperty('clear', 'right');
        } else {
            post.style.setProperty('float', 'left');
            post.style.setProperty('clear', 'left');
        }

        var paragraph = window.document.createElement('p'),
            author = window.document.createElement('strong'),
            time = window.document.createElement('time'),
            content = window.document.createElement('div');

        author.innerHTML = data[i].owner;
        time.innerHTML = data[i].date;
        time.style.setProperty('display', 'block');

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

        window.document.getElementById('timeline_list').appendChild(post);
    }

    //Create dots
    for (var i = 0; i < window.document.getElementById('timeline_list').children.length; i++) {
        var dot = window.document.createElement('div');
        dot.style.setProperty('width', '16px');
        dot.style.setProperty('height', '16px');
        dot.style.setProperty('border-radius', '50%');
        dot.style.setProperty('background', '#bebebe');
        dot.style.setProperty('position', 'absolute');
        dot.style.setProperty('left', '467px');
        dot.style.setProperty('top', (window.document.getElementById('timeline_list').children[i].offsetTop + 15) + 'px');

        window.document.getElementById('timeline').appendChild(dot);
    }
})();