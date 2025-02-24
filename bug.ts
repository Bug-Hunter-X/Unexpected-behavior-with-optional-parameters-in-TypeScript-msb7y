function printName(name?: string): void {
  console.log(name);
}

printName(); // This will print 'undefined'
printName(null); // This will print 'null'
printName(undefined); // This will print 'undefined'