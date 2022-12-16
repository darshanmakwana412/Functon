// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

contract Functon {
    string public name = "Functon";
    string public symbol = "Func";
    string public standard = "Func v1.0";
    uint256 public totalTokens;
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

}