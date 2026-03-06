function printId(id: string | number) {
    if(typeof id === "string") {
        console.log("Your ID is: " + id.toLocaleUpperCase());
    } else {
        console.log("Your ID is: " + id);
    }
}

printId("abcd123")
printId(42384323)