(function() {

    var PlayerList = gaven(document.getElementById("PlayerList"));
    var ToggleBtn = gaven(document.getElementById("ToggleBtn"));
    var PlayArea = gaven(document.getElementById('PlayArea'));

    window.ToggleBtn = ToggleBtn;

    ToggleBtn.addEventListener('click', function(event) {
        event.preventDefault();
        console.log(PlayerList.toggleClass('sh_playerlist'));
    });

    document.body.addEventListener('dragover', function(event) {
        event.preventDefault();
    });
    PlayArea.addEventListener('dragover', function(event) {
        event.preventDefault();
    });

    document.body.addEventListener('drop', function(event) {
        event.preventDefault();
				var files = event.dataTransfer.files
				
        if (filelist) {
            filelist.addItems(files, 'div');
        } else {
            var filelist = new gaven.PlayerList(files, 'List_Area');
            filelist.addItems(files, 'div');
        }

        var ListItems = document.querySelectorAll('.list_item');
        for (var i = 0; i < ListItems.length; i++) {
            (function(i) {
                var item = gaven(ListItems[i]);
                item.childNodes[1].addEventListener('click', function(event) {
                    filelist.delItem(item);
                    event.cancelBubble = true;
                }, false);
                item.addEventListener('click', function() {
                    play(item.path); // 播放
                }, false);
            })(i);
        }

    });

    function play(src) {
        if (PlayerList.hasChildNodes('iframe')) {
            // PlayerList.removeChild('iframe');
        }
        PlayArea.src = src;
    }
})();
