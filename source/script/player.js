(function() {

    var PlayerList = gaven(document.getElementById("PlayerList"));
    var ToggleBtn = gaven(document.getElementById("ToggleBtn"));
    var Play_Area = document.getElementById('Play_Area');
    window.ToggleBtn = ToggleBtn;

    ToggleBtn.addEventListener('click', function(event) {
        event.preventDefault();
        console.log(PlayerList.toggleClass('sh_playerlist'));
    });

    document.body.addEventListener('dragover', function(event) {
        event.preventDefault();
    });

    document.body.addEventListener('drop', function(event) {
        event.preventDefault();

        var files = event.dataTransfer.files;
        window.zsj = files;

        if (filelist) {
            filelist.addItems(files, 'div');
        } else {
            var filelist = new gaven.PlayerList(files, 'List_Area');
            filelist.addItems(files, 'div');
        }

        var ListItems = document.querySelectorAll('.list_item');
        window.items = [];
        for (var i = 0; i < ListItems.length; i++) {
            (function(i) {
                var item = gaven(ListItems[i]);
                item.childNodes[1].addEventListener('click', function(event) {
                    filelist.delItem(item);
                    event.cancelBubble = true;
                }, false);
                item.addEventListener('click', function() {
                    play(this); // 播放
                    alert(this.type)
                }, false);
            })(i);
            window.items.push(item);
        }

    });

    function play(item) {
        switch (item.type) {
            case 'audio/mp3':
                var audio = document.createElement('audio');
                audio.src = item.path;
                audio.className = 'music';
                audio.autoplay = 'true';
                Play_Area.innerHTML = '';
                Play_Area.appendChild(audio);
                break;
            case 'video/webm':
            case 'video/mp4':
                var video = document.createElement('video');
                video.src = item.path;
                video.className = 'video';
                video.autoplay = 'true';
                video.controls = 'controls'
                Play_Area.innerHTML = '';
                Play_Area.appendChild(video);
                console.log(video);
                break;
            default:
                alert('未知文件类型，敬请期待下个版本'+item.type);
                // alert(item.type + ' / ' + item.path);
                break;
        }

    }
})();
