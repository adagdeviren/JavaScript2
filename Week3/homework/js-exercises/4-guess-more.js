{
    "use strict";

    // Snippet
    const x = 9;
    function f1(val) {
        val = val + 1;
        return val;
    }
    f1(x);
    console.log(x);

    /*  output is "9",
    because code is passed by value. it makes a copy of
    the variable and passes into function.change is not reflected outside.
    */

    const y = { x: 9 };
    function f2(val) {
        val.x = val.x + 1;
        return val;
    }
    f2(y);
    console.log(y);

    /* 
        output is { x: 10},
        code is passed by reference. It passes a
        variable into the function,javascript takes and hold the
        address of the variable in memory than changes the value of key "x". this time, change is
        reflected outside of the function.
    */

}
