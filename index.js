const sort_array = require('./src/sort_array');
const std_compare_function = require('./src/comparefunction');

function get_differences_from_arrays(a, b, compare_function = std_compare_function){
  // first thinks first ... we have to sort them ...
  a = sort_array(a, compare_function);
  b = sort_array(b, compare_function);

  // there are 3 returnable arrays:
  let just_in_a = [];
  let just_in_b = [];
  const inside_ab = [];

  // we will take a loop to compare the values --> index
  let index_a = 0;
  let index_b = 0;

  // as long as, we have to values to compare, we have to do it ...
  while(index_a < a.length && index_b < b.length){
    // compare!
    const compare = compare_function(a[index_a], b[index_b]);
    if(compare == 0){
      // a[index_a] == b[index_b]
      // ... the value ist i both arrays
      inside_ab.push(a[index_a]);
      index_a++;
      index_b++;
      continue;
    }
    if(compare < 0){
      // a[index_a] < b[index_b]
        // means, a[index_a] is not in b
        just_in_a.push(a[index_a]);
        index_a++;
      continue;
    }
    if(compare > 0){
      // a[index_a] > b[index_b]
      // means, b[index_b] is not in a
      just_in_b.push(b[index_b]);
      index_b++;
      continue;
    }
  }

  // now, a or b is finish ... all of a or b can push into just_in_-arrays
  // slice and concat would be better ... later ... copy-paste ^^
  if(index_a < a.length){
    just_in_a = just_in_a.concat(a.slice(index_a, a.length));
  }
  if(index_b < b.length){
    just_in_b = just_in_b.concat(b.slice(index_b, b.length));
  }
  return {
    just_in_a,
    just_in_b,
    inside_ab
  }
}

module.exports = get_differences_from_arrays;