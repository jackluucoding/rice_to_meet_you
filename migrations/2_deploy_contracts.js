const Rice = artifacts.require("Rice");

module.exports = function (deployer) {
  deployer.deploy(Rice, 1000000);
};
