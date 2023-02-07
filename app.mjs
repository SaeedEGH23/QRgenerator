import dotenv from "dotenv";
dotenv.config();
import generator from "./src/generate.mjs";
import fetchFile from "./src/readfile.mjs";

const namePath = process.env.LINKS_FILE_PATH;
const filePath = process.env.LINKS_FILE_PATH;

async function start() {
  let data = await fetchFile(filePath);
  generator(data, namePath);
}

start();
