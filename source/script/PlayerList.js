window.gaven = window.gaven || {};

(function() {

	function PlayerList(files,containerid) {
		this._playerList = [];
		this._container = document.getElementById(containerid);
		this._htmlNode = document.createElement('ul');
		this._container.appendChild(this._htmlNode);

		var item;
		for (var i = 0; i < files.length; i++) {
			item = new gaven.PlayItem(files[i],'li'); //  改写，需要传入file item html node
			this._playerList.push(item);
			this.addItem(item);
		}
	}

	var p = PlayerList.prototype;

	Object.defineProperties(p,{
		htmlNode:{
			get:function() {
				return this._htmlNode;
			}
		},
		playerList:{
			get:function() {
				return this._playerList;
			}
		}
	});

	p.addItem = function(item) {
		console.log(this.htmlNode);
		this.htmlNode.appendChild(item.htmlNode);
	}

	gaven.PlayerList = PlayerList;

})();
