const get_differences_from_arrays = require('../index.js');


function generate_random_array_with_length(length = 1000){
  return [...Array(length)].map(() => Math.floor(Math.random() * length));
}

function test(length = 2000000){
  const starttime = Date.now();
  function get_ms_since(from){return Date.now() - from;}
  console.table({
    "start" :  "test",
    starttime,
    "2 Arrays with x items:" : length});
  // lets do this this long arrays ...
  const a = generate_random_array_with_length(length);
  const b = generate_random_array_with_length(length);

  console.table({
    "Arrays generarted in (ms)" : get_ms_since(starttime) });

  const start_diff_time = Date.now();

  const {just_in_a, just_in_b, inside_ab} = get_differences_from_arrays(a,b);
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

  const a = [0,1,2,3];
  const b = [0,1,2,4];
  const {just_in_a, just_in_b, inside_ab} = get_differences_from_arrays(a,b);

  console.table({
    a,
    b,
    just_in_a,
    just_in_b,
    inside_ab,
  });
}

module.exports = {
  test,
  simple_test
}