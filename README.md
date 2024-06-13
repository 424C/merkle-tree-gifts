# Description

Use Santa's Merkle tree to check if individuals on the nice list this year will receive gifts. Merkle trees are a type of binary tree that can efficiently store and manage large sets of data.

# Instructions

To get started with the repository, clone it and then run `npm install` in the top-level directory to install the depedencies.

# Usage

You can run the client from the top-level directory with `node client/index`. This file is a script which will send an HTTP request to the server.

You can run the server from the top-level directory with `node server/index`. This file is an express server which will be hosted on port 1225 and respond to the client's request.

# Example

In the client, use the format:

`node index.js 'Mrs. Priscilla Parker'`

## Utils

There are a few files in utils:

- The `niceList.json` which contains all the names of the people who deserve a gift this year.
- The `example.js` script shows how we can generate a root, generate a proof and verify that some value is in the root using the proof. Try it out from the top-level folder with `node/example.js`
- The `MerkleTree.js` should look familiar from the Merkle Tree module! This one has been modified so you should not have to deal with any crypto type conversion. You can import this in your client/server
- The `verifyProof.js` should also look familiar. This was the last stage in the module. You can use this function to prove a name is in the merkle root, as show in the example.
