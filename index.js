const users = [
    {
        name: 'Huseyn',
        password: '123abc',
    },
    {
        name: 'Arzu',
        password: '123456',
    },
    {
        name: 'Sevinc',
        password: 'qwerty',
    },
    {
        name: 'Aslan',
        password: 'aslan',
    },
    {
        name: 'Emin',
        password: '13071999',
    },
    {
        name: 'Elza',
        password: 'password',
    },
]

// for ( let i = 0; i < users.length; i++) {
//     console.log(`${users[i].name}: ${users[i].password}`)
// }


let userLog = prompt('Username:');

// for (let user of users) {
//    if(userLog === user.name) {
//    
//     }
//    } else {
    
//     console.log('false');
    
//    }
// }


let count = 0;
for (let user of users) {
  if(userLog != user.name) {
    continue;
  } else {
    passwordPrompt(user);
    count >= 3 ? console.log('You are blocked') : passwordPrompt(user)
  }
}


function passwordPrompt(user) {
    let passwordPrompt = prompt('Password:')
     if (passwordPrompt === user.password) {
         console.log('Completed!')
  } else {
    count++;
  }   
}


