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
        //Check that name is correct


        //Read token name
        const name = await token.name();
        //Check that the name is correct
        expect(name).to.equal("Dapp University");
    });

    it("has the correct symbol", async () => {
        //Check that symbol is correct

        //Read token symbol
        const symbol = await token.symbol();
        //Check that the symbol is correct
        expect(symbol).to.equal("DAPP");
    });

});