(function() {

    var target = document.querySelector("body");
		var openBtn = document.querySelector('#Open');
		var proLine = document.querySelector('#prog');

    target.addEventListener("dragover", function(e) {
        e.preventDefault();
    });

    target.addEventListener("drop", function(e) {
        e.preventDefault();

        var files = e.dataTransfer.files;
        var reader;

        if (files && files.length) {

            var file = files[0];
						console.log(file);
            var player = document.createElement('video');
            // play

            switch (file.type) {
                case "text/plain":
                    reader = new FileReader();
                    reader.onload = function() {
                        target.innerHTML = reader.result;
                    };
                    reader.readAsText(file);
                    break;
                case "image/jpeg":
                    reader = new FileReader();
                    reader.onload = function() {
                        target.innerHTML = "<img src='" + reader.result + "'>";
                    };
                    reader.readAsDataURL(file);
                    break;
								case 'video/webm':
									reader = new FileReader();
									reader.onload = function(){
										// console.log(reader);
										target.innerHTML = '<video width="100%" height="100%" preload controls src="'+ reader.result +'">'
									};
									reader.onloadstart = function() {
										reader.onprogress = function (e) {
											console.log(e);
											proLine.style.width = e.loaded/e.total +'%';

										}
									}
									reader.readAsDataURL(file);
									break;
                default:
                    console.log(file);
                    break;
            }
        }
    });

})();
