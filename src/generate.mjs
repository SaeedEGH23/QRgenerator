import QRCode from "qrcode";

let qr;
let stringdata = [];
let namePath = "hamed-ham-9-";

const generator = async function generate(data) {
  console.log(data);
  qr = data.split("\n");
  if (qr[qr.length - 1] == "") {
    qr.pop();
  }
  let number = 0;
  for (let i = 0; i < qr.length; i++) {
    number++;
    stringdata.push(JSON.stringify(qr[i]));
    QRCode.toFile(namePath + `${number}.png`, [{ data: qr[i] }]);
  }
};

export default generator;
