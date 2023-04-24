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

    // Track balances
    mapping(address => uint256) public balanceOf;
    event Transfer(address indexed from, address indexed to, uint256 value);

    // Send tokens
    function transfer(
        address _to,
        uint256 _value
    ) public returns (bool success) {
        // Require that the sender has enough tokens to spend
        require(balanceOf[msg.sender] >= _value, "Not enough tokens");
        require(_to != address(0), "Cannot send to zero address");
        // Deduct tokens from sender
        balanceOf[msg.sender] -= _value;

        // Credit tokens to receiver
        balanceOf[_to] += _value;

        // Emit transfer event
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    constructor(
        string memory _name,
        string memory _symbol,
        uint256 _totalSupply
    ) {
        name = _name;
        symbol = _symbol;
        totalSupply = _totalSupply * (10 ** decimals);
        balanceOf[msg.sender] = totalSupply;
    }
}
