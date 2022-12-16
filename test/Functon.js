var Functon = artifacts.require("./Functon.sol")

contract("Functon", function(accounts) {
    it('sets the total supply upon deployment', function() {
        return Functon.deployed().then(function(instance) {
            tokenInstance = instance;
            return tokenInstance.totalSupply();
        }).then(function(totalSupply) {
            assert.equal(totalSupply.toNumber(), 1000000, 'sets total supply to 1000000');
        });
    });
});