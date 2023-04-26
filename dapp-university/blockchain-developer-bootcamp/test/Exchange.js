const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Exchange", async () => {
  let deployer, accounts, feeAccount, exchange;
  const feePercent = 10;
  beforeEach(async () => {
    // Code goes here that runs before each example

    //Customise - set my own deploy account
    accounts = await ethers.getSigners();
    deployer = accounts[0];
    feeAccount = accounts[1];


    //Fetch exchange from blockchain
    
    const Exchange = await ethers.getContractFactory("Exchange", deployer);
    exchange = await Exchange.deploy(feeAccount.address, feePercent);
  });
  describe("Deployment", async () => {
    
    it("tracks the fee account", async () => {
      //Check that the fee account is correct
      expect(await exchange.feeAccount()).to.equal(feeAccount.address);
    });

    it("tracks the fee percent", async () => {
        //Check that the fee percent is correct
        expect(await exchange.feePercent()).to.equal(feePercent);
      });

    it("checks that the signer is the specified deployer account for the token", async () => {
      expect(await exchange.signer.address).to.equal(deployer.address);
    });
  });
});
