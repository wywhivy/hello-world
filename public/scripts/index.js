$(function () {
    function post_insert(todo) {
        $.post("insert", todo, function (data) {
            console.log(data);

            get_find();
        });
    }

    function post_update(todo) {
        $.post("update", todo, function (data) {
            console.log(data);

            get_find();
        });
    }

    function post_delete(todo) {
        $.post("delete", todo, function (data) {
            console.log(data);

            get_find();
        });
    }

    function get_find() {
        $.get("find", function (data) {
            console.log(data);

            var props = ["title", "isFinished", ""];
            var $table = $("#container").empty();
            $table.append(_createTableHeader(props));
            $table.append(_createTableBody(data.concat([{ title: "", isFinished: false }]), props));
        });
    }
    function _createTableHeader(props) {
        var $thead = $("<thead></thead>");
        var $tr = $("<tr></tr>");
        for (var j = 0; j < props.length; j++) {
            var $th = $("<th></th>");
            if (props[j]) {
                $th.text(_capitalizeFirstLetter(props[j]));
            }
            $tr.append($th);
        }
        $thead.append($tr);
        return $thead;
    }
    function _capitalizeFirstLetter(str) {
        return str[0].toUpperCase() + str.substr(1);
    }
    function _createTableBody(data, props) {
        var $tbody = $("<tbody></tbody>");
        for (var i = 0; i < data.length; i++) {
            var $tr = $("<tr></tr>");
            for (var j = 0; j < props.length; j++) {
                var $td = $("<td></td>");
                if (props[j]) {
                    var value = data[i][props[j]];
                    if (typeof value === "boolean") {
                        $td.append($("<input type='checkbox' " + (value ? "checked" : "") + ">"));
                    } else {
                        $td.append($("<input type='text' value='" + value + "'>"));
                    }
                } else {
                    if (data[i]._id) {
                        $td.append($('<span class="fa fa-times"></span>'));
                    } else {
                        $td.append($('<span class="fa fa-plus"></span>'));
                    }
                }
                $tr.append($td);
            }
            _bindEvents($tr, data[i]._id);
            $tbody.append($tr);
        }
        return $tbody;
    }
    function _bindEvents($tr, id) {
        if (id) {
            $("input", $tr).change(function () {
                post_update({ _id: id, title: $("input[type=text]", $tr).val(), isFinished: $("input[type=checkbox]", $tr).prop("checked") });
            });
            $("span", $tr).click(function () {
                post_delete({ _id: id });
            });
        } else {
            $("span", $tr).click(function () {
                post_insert({ title: $("input[type=text]", $tr).val(), isFinished: $("input[type=checkbox]", $tr).prop("checked") });
            });
        }
    }

    get_find();
});