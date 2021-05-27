import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import IndividualItem from './components/IndividualItem';
import Web3 from "web3";
import { useEffect, useState } from 'react';
import Browse from './components/Browse';


function App() {
  const [contract, setContract] = useState();
  const [account, setAccount] = useState();

  useEffect(() => {
    setInterval(() => {
      load();
      loadContract();

    }, 5000)

  }, [])

  useEffect(() => {
    getBuyerInfo();
    getItems();
  }, [contract, account])

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
      let account = await window.web3.eth.getAccounts();
      setAccount(account[0]);
      console.log("account", account);
    }
  }

  const load = async () => {
    await loadWeb3();
    updateStatus('Ready!');
  }

  const updateStatus = (status) => {
    const statusEl = document.getElementById('status');

    console.log(status);
  }

  const getItems = async () => {
    if (contract) {
      let totalItems = await contract.methods.totalItems().call();
      let items = [];
      for (let i = 1; i <= totalItems; i++) {
        let item = await contract.methods.products(i).call();
        items.push(item);
      }
      console.log("items", items);
    }
  }

  const getBuyerInfo = async () => {
    if (contract && account) {
      let userInfo = await contract.methods.buyers(account).call();
      console.log("userInfo", userInfo)

    }
  }

  const loadContract = async () => {
    let ABI = [
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "_price",
            "type": "uint256"
          }
        ],
        "name": "AddItem",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_buyer",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_seller",
            "type": "address"
          }
        ],
        "name": "DecreaseSellerRating",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_itemId",
            "type": "uint256"
          }
        ],
        "name": "DeleteItem",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_itemId",
            "type": "uint256"
          }
        ],
        "name": "PurchaseItem",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_itemId",
            "type": "uint256"
          }
        ],
        "name": "RaiseDispute",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "RegisterAsBuyer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_identityNumber",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_identityType",
            "type": "uint256"
          }
        ],
        "name": "RegisterAsSeller",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_itemId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_price",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "_name",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "UpdateItem",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "WithdrawAmountBySeller",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "WithdrawGovernanceAmount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "WithdrawJudgeFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "balances",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "buyers",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "bid",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "isExist",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "buyersPurchases",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "products",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "pid",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "prevOwner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "isExist",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "isPurchased",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "paymentRecieved",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "sellers",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "sid",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "identityNumber",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "identityType",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalItemsSelled",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "rating",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "isExist",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "amountWithdrawn",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalBuyers",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalItems",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalSellers",
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
    ];
    const contract = await new window.web3.eth.Contract(ABI, "0x346Bcd05F55Cb054F69fbA6955fE80c4F2f73b00");
    setContract(contract);
    console.log("contract", contract);

  }

  const RegisterAsBuyer = async () => {
    if (contract && account) {
      contract.methods.RegisterAsBuyer().send({ from: account, value: 0 }).then(() => {
        alert("Registered Successfully")
        console.log("Registered");
      })
    }
  }


  return (
    <div className="app">
      <Route path="/" exact>
        <Home />
      </Route>
      <Route exact path="/signin">
        <SignIn RegisterAsBuyer={RegisterAsBuyer} />
      </Route>
      <Route exact path="/item">
        <IndividualItem />
      </Route>
      <Route exact path="/browse">
           <Browse />
      </Route>
    </div>

  );


}

export default App;
