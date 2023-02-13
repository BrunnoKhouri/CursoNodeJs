import minimist from "minimist";
import sum from "./module_int.mjs";

const args = minimist(process.argv.slice(2));

const a = parseInt(args['a']);
const b = parseInt(args['b']);

sum(a, b);