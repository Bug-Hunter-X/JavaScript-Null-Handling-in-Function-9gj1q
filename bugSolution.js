function foo(a, b) {
  a = a ?? 0; // Use nullish coalescing operator
  b = b ?? 0; // Use nullish coalescing operator
  // Or use a more descriptive approach
  // if (a === null) a = 0;
  // if (b === null) b = 0;
  // ...
}