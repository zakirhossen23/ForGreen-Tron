// Just a standard hardhat-deploy deployment definition file!
const func = async (hre) => {
	const { deployments, getNamedAccounts } = hre;
	const { deploy } = deployments;
	const { deployer } = await getNamedAccounts();

	const name = 'BTT';
	const symbol = 'BTT';

	await deploy('BTTCERC721', {
		from: deployer,
		args: [name, symbol],
		log: true,
	});
};

func.tags = ['BTT'];
module.exports = func;
