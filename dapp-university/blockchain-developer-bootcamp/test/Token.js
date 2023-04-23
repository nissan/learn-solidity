const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Token", async () => {
  let token;

  beforeEach(async () => {
    // Code goes here that runs before each example

    //Fetch token from blockchain
    const Token = await ethers.getContractFactory("Token");
    token = await Token.deploy("Dapp University", "DAPP", 1000000);
  });
  describe("Deployment", async () => {
    const name = "Dapp University";
    const symbol = "DAPP";
    const decimals = 18;
    const totalSupply = 1000000;
    it("has the correct name", async () => {
      //Check that the name is correct
      expect(await token.name()).to.equal(name);
    });

    it("has the correct symbol", async () => {
      //Check that the symbol is correct
      expect(await token.symbol()).to.equal(symbol);
    });

    it("has the correct decimals", async () => {
      //Check that the decimals is correct
      expect(await token.decimals()).to.equal(decimals);
    });

    it("has the correct total supply", async () => {
      //Check that the total supply is correct
      expect(await token.totalSupply()).to.equal(
        ethers.utils.parseEther(totalSupply.toString())
      );
    });
  });
});
