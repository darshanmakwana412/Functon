var Functon = artifacts.require("./Functon.sol")

module.exports = function(deployer) {
    deployer.deploy(Functon, 1000000)
}