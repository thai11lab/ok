function findInputs(){
    $(document).find();
    var test = $(document).find("input[value='Hài lòng']");
    console.log(test.length);
    // test.attr( 'checked' );
    // console.log(typeof(test));
    // console.log(typeof(test));
    // test.prop('disabled', true);
    // var arr = Object.values(test) // [24, 23, 33, 12, 31]
    // console.log(arr);
    // arr.forEach((index,element) => {
    //     console.log(index+"--"+element);
    //     element.prop('checked', true);
    // });

    for(let i=0;i<test.length;i++){
        test[i].checked=true;
    }
}   

findInputs();