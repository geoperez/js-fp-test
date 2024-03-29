# js-fp-test

JS Functional Programming test

## Instructions

Create a `Transformer` object with a `transform` function with the following specifications:

* `transform` will receive an object and output another object.
* All the functions inside `Transformer` MUST be pure functions.
* Functions MUST have less of two arguments.
* All data structures MUST be immutable. (You SHOULD NOT use [mutator methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Mutator_methods)).
* Cannot use the `Set` object.
* Reuse code.
* The statements `if-else`, `for`, `for-in`, `while` and `do-while` are forbidden.

The `Transformer` should be exported as the default value in the index file of the src folder.

The `Transformer` will be validated using npm test. Don't change anything outside the src folder.