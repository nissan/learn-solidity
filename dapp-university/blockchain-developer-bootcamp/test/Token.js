const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Token", async () => {
  let token, accounts, deployer, receiver;

  beforeEach(async () => {
    // Code goes here that runs before each example

    //Customise - set my own deploy account
    accounts = await ethers.getSigners();
    deployer = accounts[0];
    receiver = accounts[1];

    //Fetch token from blockchain
    const Token = await ethers.getContractFactory("Token", deployer);
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

    it("assigns the total supply to the deployer", async () => {
      //Check that the total supply is correct
      expect(await token.balanceOf(deployer.address)).to.equal(
        ethers.utils.parseEther(totalSupply.toString())
      );
    });

    it("checks that the signer is the specified deployer account for the token", async () => {
      expect(await token.signer.address).to.equal(deployer.address);
    });
  });

  describe("Sending tokens", async () => {
    let amount, transaction, result;
    beforeEach(async () => {
      //Transfer 100 tokens from deployer to another account

      amount = ethers.utils.parseEther("100");
      transaction = await token
        .connect(deployer)
        .transfer(receiver.address, amount);
      result = await transaction.wait();
    });
    it("transfers tokens between accounts", async () => {
      //Ensure that tokens were transfered (balance changed)
      expect(await token.balanceOf(deployer.address)).to.equal(
        ethers.utils.parseEther("999900")
      );
      expect(await token.balanceOf(receiver.address)).to.equal(amount);
    });
    it("emits a Transfer event", async () => {
      //Ensure that the Transfer event was emitted
      expect(result).to.emit(token, "Transfer");
     
      const event = result.events[0];
      expect(event.event).to.equal("Transfer");
      expect(event.args.from).to.equal(deployer.address);
      expect(event.args.to).to.equal(receiver.address);
      expect(event.args.value).to.equal(amount);
    });
  });
});
