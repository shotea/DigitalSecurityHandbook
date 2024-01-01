const paramMissingError = "One or more of the required parameters was missing.";

const algoList = {
  blowfish: {
    keyLength: 32,
    ivLength: 8,
  },
  "aes-256-ctr": {
    keyLength: 32,
    ivLength: 16,
  },
  des: {
    keyLength: 8,
    ivLength: 8,
  },
};

module.exports = { paramMissingError, algoList };
