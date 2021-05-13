# nodejs-array-different
get diff-arrays (just_in_a, just_in_b, inside_ab) from 2 Arrays

## How to install ...
```
npm install nodejs-array-different
```

## How to use
```
const {get_differences_from_arrays} = require('nodejs-array-different');
let a = [0,1,2,3];
let b = [0,1,2,4];
let {just_in_a, just_in_b, inside_ab} = get_differences_from_arrays(a,b);
console.table({
    a,
    b,
    just_in_a,
    just_in_b,
    inside_ab,
});

// ┌───────────┬───┬───┬───┬───┐
// │  (index)  │ 0 │ 1 │ 2 │ 3 │
// ├───────────┼───┼───┼───┼───┤
// │     a     │ 0 │ 1 │ 2 │ 3 │
// │     b     │ 0 │ 1 │ 2 │ 4 │
// │ just_in_a │ 3 │   │   │   │
// │ just_in_b │ 4 │   │   │   │
// │ inside_ab │ 0 │ 1 │ 2 │   │
// └───────────┴───┴───┴───┴───┘
```

### with compare function

```
const {get_differences_from_arrays} = require('nodejs-array-different');
function compare_values(a, b) {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
}
let a = [0,1,2,3];
let b = [0,1,2,4];
let {just_in_a, just_in_b, inside_ab} = get_differences_from_arrays(a,b,compare_values);
console.table({
    a,
    b,
    just_in_a,
    just_in_b,
    inside_ab,
});

// ┌───────────┬───┬───┬───┬───┐
// │  (index)  │ 0 │ 1 │ 2 │ 3 │
// ├───────────┼───┼───┼───┼───┤
// │     a     │ 0 │ 1 │ 2 │ 3 │
// │     b     │ 0 │ 1 │ 2 │ 4 │
// │ just_in_a │ 3 │   │   │   │
// │ just_in_b │ 4 │   │   │   │
// │ inside_ab │ 0 │ 1 │ 2 │   │
// └───────────┴───┴───┴───┴───┘
```

### test
```
npm run test
```

```
┌────────────────────────┬───────────────┐
│        (index)         │    Values     │
├────────────────────────┼───────────────┤
│         start          │    'test'     │
│       starttime        │ 1620894016795 │
│ 2 Arrays with x items: │    2000000    │
└────────────────────────┴───────────────┘
┌──────────────────────────┬────────┐
│         (index)          │ Values │
├──────────────────────────┼────────┤
│ Arrays generatet in (ms) │  415   │
└──────────────────────────┴────────┘
┌─────────────┬─────────┐
│   (index)   │ Values  │
├─────────────┼─────────┤
│    Done!    │  true   │
│ comparetime │   621   │
│  testtime   │  1039   │
│  just_in_a  │ 1047648 │
│  just_in_b  │ 1047648 │
│  inside_ab  │ 952352  │
└─────────────┴─────────┘
```
