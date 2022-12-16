var Functon = artifacts.require("./Functon.sol")

contract("Functon", function(accounts) {
    var tokenInstance;

    it('initializes the contract with the correct values', function() {
        return Functon.deployed().then(function(instance) {
            tokenInstance = instance;
            return tokenInstance.name();
        }).then(function(name) {
            assert.equal(name, 'Functon', 'It has the correct name');
            return tokenInstance.symbol();
        }).then(function(symbol) {
            assert.equal(symbol, 'Func', 'It has the correct symbol');
            return tokenInstance.standard();
        }).then(function(standard) {
            assert.equal(standard, 'Func v1.0', 'It has the correct standard')
        })
    })

    it('allocates the total supply upon deployment', function() {
        return Functon.deployed().then(function(instance) {
            tokenInstance = instance;
            return tokenInstance.totalSupply();
        }).then(function(totalSupply) {
            assert.equal(totalSupply.toNumber(), 1000000, 'sets total supply to 1000000');
            return tokenInstance.balanceOf(accounts[0]);
        }).then(function(adminBalance) {
            assert.equal(adminBalance.toNumber(), 1000000, 'it allocates the initial tokens to the admin account')
        })
    });
});