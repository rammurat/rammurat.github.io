import {sum} from './module.js';

const newSum = sum(5,5);

document.getElementById('result').innerHTML = `New sum is: ${newSum}`;