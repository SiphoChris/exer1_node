import fs from "fs";

const content = 'Some additional content that I wrote using Node.js, fs module\n';
try {
  fs.writeFileSync('./data.txt', content);
} catch (err) {
  console.error(err);
}

// second insertion into the file

const content2 = 'second additional content that I wrote using Node.js, fs module\n';
try {
  fs.writeFileSync('./data.txt', content2);
} catch (err) {
  console.error(err);
}

// answer: the second insertion overrode the firstly inserted data in the file

// appending to the file

const content3 = 'third additional content that I appended into the file using Node.js, fs module';
try {
  fs.writeFileSync('./data.txt', content3, { flag: 'a' });
} catch (err) {
  console.error(err);
}

