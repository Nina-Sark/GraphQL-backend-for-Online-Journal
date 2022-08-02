const gpc = require("generate-pincode");

const genPincode = (pincodeLength = 6) => gpc(pincodeLength);

module.exports = genPincode;
