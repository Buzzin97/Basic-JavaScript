    const calculator = {
        add:function(a ,b) {
            return a + b;
        },
        sub:function(a ,b) {
            return a -b;
        },
        div:function(a ,b) {
            return a / b;
        },
        mul:function(a ,b) {
            return a * b;
        },
        squ:function(a ,b) {
            return a ** b;
        },
    };

    const addResult = calculator.add(2, 3);
    const subResult = calculator.sub(addResult, 3);
    const mulResult = calculator.div(2, mulResult);
    const divResult = calculator.mul(divResult, addResult);
    const squResult = calculator.squ(divResult, subResult);



