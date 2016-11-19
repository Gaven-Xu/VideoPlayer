window.gaven = window.gaven || {};

(function() {

    function gaven(obj) {

        if (typeof obj == 'string') {
            var target = document.getElementById(obj);
        } else {
            var target = obj;
        }
        //
        ClassHandle(target);
        return target;
    }

    window.gaven = gaven;

})();

function ClassHandle(obj) {

		obj.hasClass = function(cls) {
				if (this.className.indexOf(cls) == -1) {
						return false;
				} else {
						return true;
				}
		};

		obj.addClass = function(cls) {
				if (!this.hasClass(cls)) obj.className += " " + cls;
				return this;
		};

		obj.removeClass = function(cls) {
				if (this.hasClass(cls)) {
						var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
						obj.className = obj.className.replace(reg, ' ');
				}
				return this;
		};

		obj.toggleClass = function(cls) {
				if (!this.hasClass(cls)) {
						this.addClass(cls);
				} else {
						this.removeClass(cls);
				}
				return this;
		};

}
