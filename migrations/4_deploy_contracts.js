const Califications = artifacts.require('Califications')

module.exports = async function(deployer, network, accounts) {
  await deployer.deploy(Califications)
  const califications = await Califications.deployed()

}
