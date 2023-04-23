const {ethers} = require('hardhat');
const {expect} = require('chai');

describe("Token", async () => {
    let token;

    beforeEach(async () => {
        // Code goes here that runs before each example
        
        //Fetch token from blockchain
        const Token = await ethers.getContractFactory("Token");
        token = await Token.deploy();
    });

    //Tests go inside here...
    it("has the correct name", async () => {
        //Check that the name is correct
        expect(await token.name()).to.equal("Dapp University");
    });

    it("has the correct symbol", async () => {
        //Check that the symbol is correct
        expect(await token.symbol()).to.equal("DAPP");
    });

    it("has the correct decimals", async () => {
        //Check that the decimals is correct
        expect(await token.decimals()).to.equal(18);
    });

    it("has the correct total supply", async () => {
        //Check that the total supply is correct
        expect(await token.totalSupply()).to.equal(ethers.utils.parseEther("1000000"));
    });

});