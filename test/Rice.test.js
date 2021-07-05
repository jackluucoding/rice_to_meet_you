const Rice = artifacts.require("Rice")


contract("Rice", (accounts) => {
    //console.log(accounts)

    before(async () => {

        rice = await Rice.deployed()

    })
    it ("gives the owner of the token 1M tokens", async () => {
        let balance = await rice.balanceOf(accounts[0])
        balance = web3.utils.fromWei(balance,"ether")
        assert.equal(balance, '1000000', "Balance should be 1mil tokens for contracty recreator")
    })


    it("can transfer tokens between accounts", async () => {

        let amount = web3.utils.toWei("1000","ether")
        await rice.transfer(accounts[1], amount, {from: accounts[0]})

        let balance = await rice.balanceOf(accounts[1])
        balance = web3.utils.fromWei(balance, "ether")
        assert.equal(balance, '1000',"balance should be 1K tokens for contract creator")

    })
        
    


    })
    