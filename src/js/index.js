App = {
    web3Provider: null,
    contracts: {},
    account: '0X0',

    init: function() {
        console.log("Welcome to Functon");
        return App.initWeb3();
    },

    initWeb3: function() {
        if(typeof web3 === 'undefined') {
            App.web3Provider = web3.currentProvider;
            web3 = new Web3(web3.currentProvider);
        } else {
            App.web3Provider = new Web3.providers.HttpProvider("http://localhost:7545");
            web3 = new Web3(App.web3Provider)
        }
        return App.initContracts();
    },

    initContracts: function() {
        $.getJSON("Functon.json", function(Functon) {
            App.contracts.Functon = TruffleContract(Functon);
            App.contracts.Functon.setProvider(App.web3Provider);
            App.contracts.Functon.deployed().then(function(functon) {
                console.log("Functon Address", functon.address)
            });
        });
        return App.render();
    },

    render: function() {
        web3.eth.getCoinbase(function(err, account) {
            if(err===null) {
                App.account = account;
                $('#accountAddress').html(account);
            }
        });
    },
}

$(function() {
    $(window).load(function() {
        App.init();
    });
});