window.gaven = window.gaven || {};

(function() {

    function PlayerItem(file, ele) {

        this._name = file.name;
        this._type = file.type;
        this._path = file.path;

        this._htmlNode = document.createElement(ele);
        this._htmlNode.innerHTML = this._name;
        this._htmlNode.path = this._path;
        this._htmlNode.type = this._type;
        this._htmlNode.className = 'list_item';

        this._deleteHandle = document.createElement('div');
        this._deleteHandle.innerHTML = '×'
        this._deleteHandle.className = 'list_item_del';

        this._htmlNode.appendChild(this._deleteHandle);
    }

    var p = PlayerItem.prototype;

    Object.defineProperties(p, {
        htmlNode: {
            get: function() {
                return this._htmlNode;
            }
        },
        name: {
            get: function() {
                return this._name;
            }
        },
        path: {
            get: function() {
                return this._path;
            }
        },
        type: {
            get: function() {
                return this._type;
            }
        }
    })

    gaven.PlayerItem = PlayerItem;

})();
