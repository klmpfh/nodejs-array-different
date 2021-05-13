var Quicksort = require('optimized-quicksort');

function generate_random_array_with_length(length = 1000){
    return [...Array(length)].map(() => Math.floor(Math.random() * length));
}

function compare_values(a, b) {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
}

function sort_array(array, compare_function = compare_values){
    return Quicksort.sort(array, compare_function);
}

function get_differents_from_arrays(a, b, compare_function = compare_values){
    // first thinks first ... we have to sort them ...
    a = sort_array(a, compare_function);
    b = sort_array(b, compare_function);

    // there are 3 returnable arrays:
    let just_in_a = [];
    let just_in_b = [];
    let inside_ab = [];

    // we will take a loop to compare the values --> index
    let index_a = 0;
    let index_b = 0;

    // as long as, we have to values to compare, we have to do it ...
    while(index_a < a.length && index_b < b.length){
        // compare!
        switch(compare_function(a[index_a], b[index_b])){
            case  1:
                // a[index_a] > b[index_b]
                // means, b[index_b] is not in a
                just_in_b.push(b[index_b]);
                index_b++;
            break;
            case -1:
                // a[index_a] < b[index_b]
                // means, a[index_a] is not in b
                just_in_a.push(a[index_a]);
                index_a++;
            break;
            case  0:
                // a[index_a] == b[index_b]
                // ...
                inside_ab.push(a[index_a]);
                index_a++;
                index_b++;
            break;
        }
    }

    // now, a or b is finish ... all of a or b can push into just_in_-arrays
    // slice and concat would be better ... later ... copy-paste ^^
    while(index_a < a.length){
        just_in_a.push(a[index_a]);
        index_a++;
    }
    while(index_b < b.length){
        just_in_b.push(b[index_b]);
        index_b++;
    }
    return {
        just_in_a,
        just_in_b,
        inside_ab
    }
}

function test(length = 2000000){
    let starttime = Date.now();
    function get_ms_since(from){return Date.now() - from;}
    console.table({
        "start" :  "test",
        starttime,
        "2 Arrays with x items:" : length});
    // lets do this this long arrays ...
    let a = generate_random_array_with_length(length);
    let b = generate_random_array_with_length(length);

    console.table({
        "Arrays generarted in (ms)" : get_ms_since(starttime) });
    let start_diff_time = Date.now();

    let {just_in_a, just_in_b, inside_ab} = get_differents_from_arrays(a,b);

    console.table({
        "Done!":true,
        comparetime : get_ms_since(start_diff_time),
        testtime : get_ms_since(starttime),
        just_in_a : just_in_a.length,
        just_in_b : just_in_b.length,
        inside_ab : inside_ab.length,
    });
}

function simple_test(){
    let a = [0,1,2,3];
    let b = [0,1,2,4];
    let {just_in_a, just_in_b, inside_ab} = get_differents_from_arrays(a,b);
    console.table({
        a,
        b,
        just_in_a,
        just_in_b,
        inside_ab,
    });
}

module.exports = {
    get_differents_from_arrays,
    test,
    simple_test
};