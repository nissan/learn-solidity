// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract Token {
    // manually coding out to ERC-20 standard at 
    // https://ethereum.org/en/developers/docs/standards/tokens/erc-20/
    string public name;
    string public symbol;
    uint256 public decimals = 18;
    uint256 public totalSupply;
    
    constructor(string memory _name, 
                string memory _symbol, 
                uint256 _totalSupply) {
        name = _name;
        symbol = _symbol;
        totalSupply = _totalSupply * (10**decimals);

    }
}