process.stdout.write('hello from spinner2.js... \rheyyy\n');

  let startTime = 100;
  let increment = 400;
  let input = ['\r|', '\r/', '\r-', '\r\\', '\r|', '\r/','\r-', '\r\\'];
  for (let i = [0]; i < input.length; i++) {
  setTimeout(() => {
  process.stdout.write(input[i]);
  }, startTime += increment);
};
 

    