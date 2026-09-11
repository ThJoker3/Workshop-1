import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Välkommen till parkeringshuset! Vänligen välj fordonstyp (1. Small, 2. Medium, 3. Large): ', (answer) => {
  switch(answer) {
    case '1':
      console.log('Du har valt Small fordon.')
      break;
    case '2':
      console.log('Du har valt Medium fordon.')
      break;
    case '3':
      console.log('Du har valt Large fordon.')
      break;
    default:
      console.log('Ogiltigt val. Vänligen välj 1, 2 eller 3.')
  }
    
      rl.close()
    })

