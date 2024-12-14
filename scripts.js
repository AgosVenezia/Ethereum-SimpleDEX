const contractAddress = "0xC637B51Daf812BceDF573F882CE50d30c2628912";

const abi = 
[
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amountA",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amountB",
            "type": "uint256"
          }
        ],
        "name": "addLiquidity",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amountAIn",
            "type": "uint256"
          }
        ],
        "name": "swapAforB",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amountBIn",
            "type": "uint256"
          }
        ],
        "name": "swapBforA",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amountA",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amountB",
            "type": "uint256"
          }
        ],
        "name": "removeLiquidity",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_token",
            "type": "address"
          }
        ],
        "name": "getPrice",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
]

      let web3, contract, accounts;

        document.getElementById("connectWallet").addEventListener("click", async () => {
            if (window.ethereum) {
                try {
                    web3 = new Web3(window.ethereum);
                    accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
                    contract = new web3.eth.Contract(abi, contractAddress);
                    document.getElementById("walletAddress").innerText = `Connected: ${accounts[0]}`;
                } catch (error) {
                    alert("Failed to connect wallet: " + error.message);
                }
            } else {
                alert("Please install MetaMask!");
            }
        });

        document.getElementById("addLiquidityForm").addEventListener("submit", async (e) => {
            e.preventDefault();
            const amountA = document.getElementById("amountA").value;
            const amountB = document.getElementById("amountB").value;
            await contract.methods.addLiquidity(amountA, amountB).send({ from: accounts[0] });
            alert("Liquidity added successfully!");
        });

        document.getElementById("removeLiquidityForm").addEventListener("submit", async (e) => {
            e.preventDefault();
            const amountA = document.getElementById("removeA").value;
            const amountB = document.getElementById("removeB").value;
            await contract.methods.removeLiquidity(amountA, amountB).send({ from: accounts[0] });
            alert("Liquidity removed successfully!");
        });

        document.getElementById("swapForm").addEventListener("submit", async (e) => {
            e.preventDefault();
            const amount = document.getElementById("swapAmount").value;
            const direction = document.getElementById("swapDirection").value;

            if (direction === "AtoB") {
                await contract.methods.swapAforB(amount).send({ from: accounts[0] });
            } else {
                await contract.methods.swapBforA(amount).send({ from: accounts[0] });
            }

            alert("Swap successful!");
        });

        document.getElementById("getPriceForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
        const token = document.getElementById("priceToken").value;
        const tokenAddress = token === "tokenA" 
            ? "0x9351DF0CC59D07e4A57DE801cD53403b470DE885" 
            : "0xd6c98e91aC33b74C364cf4b595F1fD59eA9fcAdC";
        
        if (!contract) {
            alert("Please connect your wallet first!");
            return;
        }

        const price = await contract.methods.getPrice(tokenAddress).call();
        document.getElementById("priceOutput").innerText = `Price: ${price}`;
    } catch (error) {
        console.error("Detailed error:", error);
        alert("Failed to fetch price. Error: " + error.message);
    }
});
