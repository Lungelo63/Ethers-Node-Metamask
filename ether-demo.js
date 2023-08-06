import { ethers } from "ethers";

const API_KEY = "4643e291ba3f4e4eb030c5547e222786";

const network = "homestead";

const provider = new ethers.providers.InfuraProvider(network, API_KEY);

const blocknumber = await provider.getBlockNumber();
console.log(blocknumber);
