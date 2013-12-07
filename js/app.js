/*
 *  Settings
 */
require.config({
    /*shim: {
     gmap: {
     exports: 'google'
     },
     validate: {
     deps: ['validate_core']
     },
     stickyfloat: {
     deps: ['app/core','jquery']
     }
     },*/
    paths: {
        backbone: "libs/backbone.js/backbone",
        jquery: "libs/jquery/jquery",
        underscore: "libs/underscore.js/underscore"
    },
    i18n: {
        locale: 'pl'
    }
});


/*
 *  App
 */

define(["modules/map", "data/palette", "fn/waitInterval", "jquery"], function(map, palette, waitInterval) {
    $(function() {
        var $mymap = map.createRandomMap(13, 13, palette);
        var $cells = $mymap.find(".cell");
        map.addClassToRandomObject($cells, "moleMound", 22);

        var killedMoleCount = 0;
        var runMoleCount = 0;

        //loop
        waitInterval(function() {
            //
            var $noKillMoles = $mymap.find(".mole");
            $noKillMoles.removeClass("mole");
            runMoleCount+=$noKillMoles.size();
            $(".runMoleCount").html(runMoleCount);
            //add new mound
            var $moleMound = $mymap.find(".moleMound");
            map.addClassToRandomObject($moleMound, "mole", 4);
            //alert("go");
        }, 1000, 100);

        $("#main").on("click", ".mole", function() {
            var $this = $(this);
            $this.removeClass("mole");
            $this.removeClass("moleMound");
            killedMoleCount++;
            $(".killedMoleCount").html(killedMoleCount);
        });

        $("#main").empty().append($mymap);

    });
});
