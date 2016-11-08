window.gaven = window.gaven || {};

(function() {

	function PlayItem(file,ele) {
		this._file = file;
		this._htmlNode = document.createElement(ele);
		this._htmlNode.innerHTML = file.name;
		this._htmlNode.title = file.name;
		this._htmlNode.className = 'list_item';
	}

	var p = PlayItem.prototype;

	Object.defineProperties(p,{
		htmlNode:{
			get:function() {
				return this._htmlNode;
			}
		}
	})

	gaven.PlayItem = PlayItem;
})();
