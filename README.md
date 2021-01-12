# ZK MiMC Hash Verifier

## Setup and Run
Use Node v14
```
npm install
```

Run the local server
```
npm run server
```


## Add a circuit
Make a new directory in `/circuits/` with the name of the circuit.

Copy the `pot15_final.ptau` file from `/circuits/hash` into the new directory.

In the new directory, create `circuit.circom` and `input.json` with the test inputs.

Run `npm run compile CIRCUIT_NAME`.
If the circuit and input produce a valid proof you should see `OK`.

The compiled `circuit.wasm` file will be in `/circuits/circuits-compiled/CIRCUIT_NAME`.
The proof key `circuit_final.zkey` and the verification key `verification_key.json` will be found in `/circuits/keys/CIRCUIT_NAME`.

An example of creating and verifying a new proof in Node can be found in `/client/prover.js`.
