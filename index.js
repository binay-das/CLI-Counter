const { Command } = require('commander');
const program = new Command();

program
    .name('counter')
    .description('CLI to perform file based tasks')
    .version('0.8.0');

program.command('countLines')
    .description('Count the number of lines in a file')
    .argument('<file>', 'file to count')
    .action((file) => {
        const fs = require('fs');

        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                console.error(`Error reading file: ${err.message}`);
                return;
            } else {
                const lines = data.split('\n');
                console.log(`There are ${lines.length} lines in ${file}`);
            }
        })
    })
    
program.command('countWords')
    .description('Count the number of words in a file')
    .argument('<file>', 'file to count words in')
    .action((file) => {
        const fs = require('fs');

        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                console.error(`Error reading file: ${err.message}`);
                return;
            } else {
                const words = data.split(/\s+/).filter(Boolean);
                console.log(`There are ${words.length} words in ${file}`);
            }
        });
    })

program.command('countLetters')
    .description('Count the number of letters in a file')
    .argument('<file>', 'file to count letters in')
    .action((file) => {
        const fs = require('fs');

        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                console.error(`Error reading file: ${err.message}`);
                return;
            }

            // Use regex to match only alphabetic letters
            const letters = data.match(/[a-zA-Z]/g);

            const letterCount = letters ? letters.length : 0; // Handle case where there are no letters
            console.log(`There are ${letterCount} letters in ${file}`);
        });
    });



program.parse();