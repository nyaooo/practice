var _txts = new Array();
var _checkboxDatas = ["A", "B", "C"];

$(function () {
    detailInit();
});

function detailInit() {
    $("input,textarea").attr("readonly", "true");
}

var editInformations = function () {
    $(".btn").toggle();
    $("input[data-type=dinput], input[type=number], textarea").removeClass("noborder").removeAttr("readonly");

    //text
    $("input[data-type=dinput]").each(function (key) {
        _txts[key] = this.value;
    });
    // console.log(detailTexts);

    //number
    var _numbers = new Array();
    $("input[data-type=dnumber]").each(function (key) {
        _numbers[key] = $(this).val();
    }).parent().hide();
    $("input[type=number]").each(function (key) {
        $(this).val(_numbers[key]);
    }).parent().show();

    //select
    var _selects = new Array();
    $("input[data-type=dselect]").each(function (key) {
        _selects[key] = $(this).val();
    }).parent().hide();
    $("label[data-type=dselect] select").each(function (key) {
        $(this).find("option[data-txt='" + _selects[key] + "']").prop("selected", true);
    }).parent().show();

    //checkbox
    var checkNum = $("textarea[data-type=dcheckbox]").length;
    if (checkNum > 0) {
        var _checks = new Array();
        $("textarea[data-type=dcheckbox]").each(function () {
            _checks = $(this).hide().val().split(",");
            if (_checks == "") {
                return true;
            }
            mateCheckboxs(_checks);
            $(this).next().find("input[type=checkbox]").each(function () {
                var cval = $(this).val();
                for (var i = 0; i < _checks.length; i++) {
                    if (cval == _checks[i]) {
                        $(this).prop("checked", true);
                    }
                }
            });
        });
        $("div[data-type=dcheckbox]").show();
    }

    //radio
    var _radios = new Array();
    $("input[data-type=dradio]").each(function (key) {
        _radios[key] = $(this).val();
        $(this).siblings("[data-type=dradio]").each(function () {
            if ($(this).text().replace(/[\r\n]/g, "").replace(/[ ]/g, "") == _radios[key]) {
                var aradio = $(this).find("input[type=radio]");
                aradio.prop("checked", true);
            }
        }).show();
    }).hide();

};
var cancelEdit = function () {
    $(".btn").toggle();
    $("input[data-type=dinput], input[type=number], textarea").addClass("noborder").attr("readonly", "readonly");

    //text
    $("input[data-type=dinput]").each(function (key) {
        this.value = _txts[key];
    });

    //radio
    $("input[data-type=dradio]").show();
    $("label[data-type=dradio]").hide();

    //number
    $("input[data-type=dnumber]").parent().show();
    $("label[data-type=dnumber]").hide();


    //select
    $(".d-selects").show();
    $("label[data-type=dselect]").hide();


    //checkbox
    $("textarea[data-type=dcheckbox]").show();
    $("div[data-type=dcheckbox]").hide();
    $("input[type=checkbox]").prop("checked", false);
};

var mateCheckboxs = function (checks) {
    $.each(checks, function (i) {
        $.each(_checkboxDatas, function (j) {
            if (checks[i] == _checkboxDatas[j]) {
                checks[i] = j;
            }
        });
    });
};