const axios = require("axios");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");

const serverUrl = "http://localhost:1225";

async function main() {
  const tree = new MerkleTree(niceList);
  const name = process.argv[2];

  if (!name) {
    console.error("Please provide a name!");
    process.exit(1);
  }

  const index = niceList.indexOf(name);
  const proof = tree.getProof(index);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name,
    proof,
  });

  console.log({ gift });
}

main();
