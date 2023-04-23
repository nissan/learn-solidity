// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract Token {
    //manually coding out to ERC-20 standard at https://ethereum.org/en/developers/docs/standards/tokens/erc-20/
    string public name = "Dapp University";
    string public symbol = "DAPP";
    uint256 public decimals = 18;
    uint256 public totalSupply = 1000000 * (10**decimals);
}