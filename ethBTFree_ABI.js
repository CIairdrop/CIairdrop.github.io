// this script uses the web3 v.0.20 version!
const CONTRACT_ABI = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "myAddresses",
                "type": "address[]"
            }
        ],
        "name": "distribute",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalEther",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    }
]