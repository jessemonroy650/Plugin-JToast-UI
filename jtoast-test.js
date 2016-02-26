/* Date: 2016-02-23 */
function makeToast() {
    //return;
    jtoast.init({'timeout':3000});
    app.showIt('timeouttime', parseInt(jtoast.timeout/1000));
    jtoast.fire();
}
//
function loadToastButtons() {
    document.getElementById('alertButton').addEventListener('click', function() {
        jtoast.init({'id':'alert','timeout':5000});
        jtoast.message({
           'message':'<p>This is another messge.<p>This works the with HTML inside it.<p>',
           'class':'alert',
        });
        jtoast.fire();
    });
    //
    document.getElementById('customButton').addEventListener('click', function() {
        jtoast.init({'id':'alert','timeout':5000});
        jtoast.message({
           'message':'This is another messge.<br><br>This works the with HTML inside it.',
           'class':'custom',
        });
        jtoast.fire();
    });
    //    
    document.getElementById('alt1').addEventListener('click', function() {
        doAlternate();
    });
    document.getElementById('alt2').addEventListener('click', function() {
        doAlternate2();
    });
}
var i = 0;
function doAlternate() {
    var msgs = ['standard','success','important','critical'];

    if (msgs.length > i) {
        jtoast.init({'id':msgs[i], 'timeout': 3000});
        jtoast.fire();
        setTimeout(doAlternate, 3005);
        i = i + 1;
    } else { i = 0; /* Rest the pointer */ }
}

var j = 0;
function doAlternate2() {
    //return;
    var msgs = ['info','tick','excl','error'];

    if (msgs.length > j) {
        //console.log('doAlt2',j,msgs[j])
        jtoast.init({'id':msgs[j], 'timeout': 3000});
        jtoast.fire();
        setTimeout(doAlternate2, 3005);
        j = j + 1;
    } else { j = 0; /* Rest the pointer */ }
}

