import { ethers } from 'ethers'
import DataVaultABI from '../consts/DataVaultABI.json'
import { dataVaultContractAddr } from '../consts/NetworkDetails';

export function getDataVaultContract(provider) {
    const contract = new ethers.Contract(dataVaultContractAddr, DataVaultABI, provider);
    return contract;
}