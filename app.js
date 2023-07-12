const myDate = new Date();
let hour = myDate.getHours();
console.log(hour); // 11pm

let minute = myDate.getMinutes();
console.log(minute);

let prepend = hour >= 12 ? "PM" : "AM";
console.log(prepend);

let user = "Smokey";

if (hour >= 12 && hour <= 17) {
  // afternoon = 12pm to 5pm (17)

  console.log(`Good afternoon${user}`);
  //evening = 5pm to 8pm
} else if (hour >= 17 && hour <= 20) {
  //evening = 5pm to 8pm
  console.log(`Good evening${user}`);
} else if (hour >= 20 || hour <= 6) {
  //8pm to 6am
  console.log(`Good night ${user}`);
} else {
  console.log(`Good Morning${user}`);
}
