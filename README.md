# Unexpected Behavior with Optional Parameters in TypeScript

This example demonstrates an uncommon error related to optional parameters in TypeScript. Optional parameters default to `undefined` if not explicitly passed, which can cause unexpected output, particularly if the function doesn't handle `undefined` or `null` gracefully.

The `bug.ts` file showcases the problem. The `bugSolution.ts` file provides a solution by using the nullish coalescing operator (`??`) to provide a default value only when the parameter is explicitly `undefined` or `null`.