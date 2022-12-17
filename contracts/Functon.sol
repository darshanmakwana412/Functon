// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

contract Functon {
    string public name = "Functon";
    string public symbol = "Func";
    string public standard = "Func v1.0";
    uint256 public totalTokens;

    event Transfer(
        address indexed _from,
        address indexed _to,
        uint _value
    );

    mapping(address => uint256) public balanceOf;

    // Constructor
    constructor(uint256 _initialTokens) {
        balanceOf[msg.sender] = _initialTokens;
        totalTokens = _initialTokens;
    }

    // ERC-721 Implementation
    function totalSupply() public view returns (uint256) {
        return totalTokens;
    }

    // Transfers _value amount of tokens to _to
    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value);
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

}