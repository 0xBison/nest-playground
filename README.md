this branch was to review 3 approaches to config in nest:
1. base nest code
2. my private package code
3. `nest-typed-config` module

results:
1. nest base code isnt typed. can add validations on top but without have to type cast explicitly and can be incorrect as shown
2. my code is typed on top of base config from nest, can add validations, but clunkier than other package
3. `nest-config-typed` cleaner, typed and auto validates without having to explicitly register. only drawback is not being able to reuse types which is not huge issue

should favour the `nest-config-typed`