// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

contract Functon {
    uint256 public totalTokens;

    // Constructor
    constructor() {
        totalTokens = 1000000;
    }

    // ERC-721 Implementation
    function totalSupply() public view returns (uint256) {
        return totalTokens;
    }

}