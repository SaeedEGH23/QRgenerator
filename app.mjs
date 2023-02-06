import generator from "./src/generate.mjs";
import fetchFile from "./src/readfile.mjs";

const filePath = "./links.txt";

async function start() {
  let data = await fetchFile(filePath);
  generator(data);
}

start();
