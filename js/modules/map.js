
/*
 *  App
 */

define(["jquery"], function() {
    var module = {};

    module.createRandomMap = function(x, y, palette){
        var map = module.createRandomMapArray(x, y, palette.length);
        return module.createMap(map, palette);
    };

    module.createMap = function(map, palette) {
        var $map = $("<div class='map'></div>");
        for (var y = 0; y < map.length; y++) {
            var $row = $("<div class='row'></div>");
            for (var x = 0; x < map[y].length; x++) {
                //cell
                var $cell = $("<div class='cell'></div>");
                $cell.addClass("x" + x);
                $cell.addClass("y" + y);
                //conetent
                var palette_id = map[y][x];
                var $content = $(palette[palette_id]);
                $content.addClass("e");
                $cell.append($content);
                $row.append($cell);
            }
            $map.append($row);
        }
        return $map;
    };

    module.addClassToRandomObject = function($set, className, count) {
        count = count ? count : 1;
        //$set.removeClass(className);
        var arr = $set.toArray();
        for (var i = 0; i < count; i++) {
            var random_index = Math.floor(Math.random() * $set.length);
            $(arr[random_index]).addClass(className);
            arr.splice(random_index, 1);
        }
    };

    module.addObjectToRandomClass = function($set, classSet, count) {
        count = count ? count : 1;
        count = (count < classSet.length) ? count : classSet.length;
        $($set).each(function(key, el) {
            var $el = $(el);
            var rclasses = classSet;//.slice(0);
            for (var i = 0; i < count; i++) {
                var className = rclasses[i];
                $el.addClass(className);
                rclasses.splice(i, 1);
            }
            var index = Math.floor(Math.random() * classSet.length);
            $($el).addClass(classSet[index]);
        });
    };

    module.createRandomMapArray = function(x, y, count) {
        var rows = [];
        for (var yi = 0; yi < y; yi++) {
            var row = [];
            for (var xi = 0; xi < x; xi++) {
                row.push( Math.floor(Math.random() * count) );
            }
            rows.push(row);
        }
        return rows;
    };

    return module;
});
