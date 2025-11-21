import { users } from './data.js'
let count = 0;
let userVar = ''
function logPrompt() {
let userLog = prompt('Username:');
let found = false;
for (let i = 0; i < users.length; i++) {
  if (userLog === users[i].name){
    userVar = users[i];
    found = true;
    passwordPrompt()
    break;
  } 
}
if (!found) {
  alert('User not found.')
}
}

function passwordPrompt() {
  let userPass = prompt('Password:');
  let found = false;
  for (let i = 0; i < users.length; i++) {
  if (userPass === userVar.password){
    found = true;
    alert('You are signed in!');
    break;
  } 
}
if (!found) {
  count++;
  if (count >= 3) {
    alert('You are blocked!')
  } else {
    let remainingCount = 3 - count;
    alert(`Wrong Password! Try Again! Remaining tries: ${remainingCount}`)
    passwordPrompt()
  }
}}
logPrompt()


