import { ethers } from 'ethers';
const sleep = (milliseconds) => {
	return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export default async function WaitUntilTransactions(
	hashid
	) {
		const provider = new ethers.providers.JsonRpcProvider("https://rpc.api.moonbase.moonbeam.network")
		let transactionReceipt = null
		while (transactionReceipt == null) {
			transactionReceipt = await provider.waitForTransaction(hashid);
			await sleep(1000)
		}
		
	}