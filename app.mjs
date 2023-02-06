import generator from "./generate.mjs";
import fetchFile from "./readfile.mjs";

const filePath = "./links.txt";

async function start() {
  let data = await fetchFile(filePath);
  generator(data);
}

start();
