window.gaven = window.gaven || {};

(function() {

    function PlayerList(files, containerid) {
        this._container = document.getElementById(containerid);
        this._playerList = [];
    }

    PlayerList.prototype.addItems = function(files, ele) {
        for (var i = 0; i < files.length; i++) {
            // var reader = new FileReader();
            // var path = reader.readAsDataURL(files[i]);
            item = new gaven.PlayerItem(files[i], ele); //  改写，需要传入file item html node
            this._container.appendChild(item.htmlNode);
        }
    }

    PlayerList.prototype.delItem = function(item) {
        this._container.removeChild(item);
    }


    gaven.PlayerList = PlayerList;

})();
