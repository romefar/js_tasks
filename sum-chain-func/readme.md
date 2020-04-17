# A Chain adding function

You need to create a function that will add numbers together when called in succession.

```
add(1)(2); // returns 3
```

We also want to be able to continue to add numbers to our chain.

```
add(1)(2)(3); // 6
add(1)(2)(3)(4); // 10
add(1)(2)(3)(4)(5); // 15
```

A single call should return the number passed in.

```
add(1); // 1
```