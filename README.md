# range.js

Small javascript lib for generating arrays.

### Includes

Before your closing ```<body>``` tag add:

```html
<script type="text/javascript" src="./lib/range.min.js"></script>
```

### Usage

```html
<script>
    range.generate(start, end, step);
    // For simple array generation use first param `range.generate(start)`
    // For range from - to use `range.generate(start, end)`
    // For range from - to with specific step use `range.generate(start, end, step)`
</script>
```

More details about usage and examples below.

### Example
```html
<script>
    range.generate(5);
    // => [0, 1, 2, 3, 4]
    
    range.generate(-5);
    // => [-5, -4, -3, -2, -1]
    
    range.generate(-1, 5);
    // => [-1, 0, 1, 2, 3, 4]
    
    range.generate(5, 10);
    // => [5, 6, 7, 8, 9]
    
    range.generate(-10, -5);
    // => [-10, -9, -8, -7, -6]
    
    range.generate(4, 12, 2);
    // => [4, 6, 8, 10]
    
    range.generate(10, 1, -2);
    // => [10, 8, 6, 4, 2]
    
    range.generate(-2, -14, -6);
    // => [-2, -8]
</script>
```

#### License

Licensed under the MIT license.

Made with :heart: by Vuk Samardžić.