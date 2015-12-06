RUR.output = {};

RUR.output.write = function () {
    var output_string = '';
    RUR.control.sound_id = "#write-sound";
    for (var i = 0; i < arguments.length; i++) {
        output_string += arguments[i].toString();
  }
  output_string = output_string.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
    RUR.rec.record_frame("output", {"element": "#stdout", "message": output_string});
};

RUR.output._write = function () {
    var output_string = '';
    for (var i = 0; i < arguments.length; i++) {
        output_string += arguments[i].toString();
  }
    RUR.rec.record_frame("output", {"element": "#stdout", "message": output_string});
};


RUR.output.print_html = function (arg, append) {
    if (append) {
        RUR.rec.record_frame("output", {"element": "#print_html", "message": arg, "html": true, "append": true});
    } else {
        RUR.rec.record_frame("output", {"element": "#print_html", "message": arg, "html": true});
    }
};

RUR.output.clear_print = function () {
    RUR.rec.record_frame("output", {"element": "#stdout", "message": '', "html": true});
};

RUR.output.view_source = function(fn) {
    $("#Reeborg-explores").dialog("open");
    RUR.cd.show_feedback("#Reeborg-explores", "<pre class='js_code view_source'>" + fn + "</pre>" )
    $('.js_code').each(function() {
        var $this = $(this), $code = $this.text();
        $this.removeClass("js_code");
        $this.addClass("jscode");
        $this.empty();
        var myCodeMirror = CodeMirror(this, {
            value: $code,
            mode: 'javascript',
            lineNumbers: !$this.is('.inline'),
            readOnly: true,
            theme: 'reeborg-dark'
        });
    });
};