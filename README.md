# TypeScript Type Error Example

This repository demonstrates a common type error in TypeScript where a function expecting a number receives a string. This error is caught at compile time thanks to TypeScript's type system, preventing runtime issues. The solution showcases how to properly handle type checking and potential type mismatches.

## Bug Description
The `add` function is defined to accept two numbers and return their sum. However, in the example usage, a string is passed as the second argument. This results in a compile-time type error because TypeScript's type checker correctly identifies the type mismatch.