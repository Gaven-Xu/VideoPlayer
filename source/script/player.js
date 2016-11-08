(function() {

    var PlayerList = gaven(document.getElementById("PlayerList"));
    var ToggleBtn = gaven(document.getElementById("ToggleBtn"));
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
        var filelist = new gaven.PlayerList(event.dataTransfer.files, 'List_Area');
    });
    // $('body').on('dragover', function(event) {
    //     event.preventDefault();
    //     /* Act on the event */
    // });
    //
    // $('body').on('drop', function(event) {
    //     event.preventDefault();
    //     /* Act on the event */
    //     var filelist = new gaven.PlayerList(event.originalEvent.dataTransfer.files, 'List_Area')
    // });
})();
