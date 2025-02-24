function printName(name?: string): void {
  console.log(name ?? "No name provided");
}

printName(); // This will print 'No name provided'
printName(null); // This will print 'null'
printName(undefined); // This will print 'No name provided'
printName("John"); // This will print 'John' 