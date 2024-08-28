const infuraUrl =
  "https://arbitrum-sepolia.infura.io/v3/c7f244ab23f44cae87b152d30821b0ff";
const contractAddress = "0x0f2ee761dcb6447ede252eeac6b5d7eab9f514e2";
const contractABI = [
  {
    inputs: [
      { internalType: "address payable", name: "projectAddr", type: "address" },
      { internalType: "address payable", name: "devAddr", type: "address" },
      { internalType: "uint256", name: "start", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "NewDeposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "Newbie",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "referrer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "referral",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RefBonus",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [],
    name: "BASE_PERCENT",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CONTRACT_BALANCE_STEP",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEV_FEE",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INVEST_MAX_AMOUNT",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INVEST_MIN_AMOUNT",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_DEPOSITS",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERCENTS_DIVIDER",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERCENTS_DIVIDER_REFERRAL",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PROJECT_FEE",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "REFERRAL_PERCENTS",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TIME_STEP",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "devAddress",
    outputs: [{ internalType: "address payable", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getContractBalance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getContractBalanceRate",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getContractInfo",
    outputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "userAddress", type: "address" }],
    name: "getUserAmountOfDeposits",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "userAddress", type: "address" }],
    name: "getUserAvailable",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "userAddress", type: "address" }],
    name: "getUserCheckpoint",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "userAddress", type: "address" },
      { internalType: "uint256", name: "index", type: "uint256" },
    ],
    name: "getUserDepositInfo",
    outputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "userAddress", type: "address" }],
    name: "getUserDividends",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "userAddress", type: "address" }],
    name: "getUserDownlineCount",
    outputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "userAddress", type: "address" }],
    name: "getUserInfo",
    outputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "userAddress", type: "address" }],
    name: "getUserPercentRate",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "userAddress", type: "address" }],
    name: "getUserReferralBonus",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "userAddress", type: "address" }],
    name: "getUserReferralTotalBonus",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "userAddress", type: "address" }],
    name: "getUserReferralWithdrawn",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "userAddress", type: "address" }],
    name: "getUserReferrer",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "userAddress", type: "address" }],
    name: "getUserTotalDeposits",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "userAddress", type: "address" }],
    name: "getUserTotalWithdrawn",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "referrer", type: "address" }],
    name: "invest",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "userAddress", type: "address" }],
    name: "isActive",
    outputs: [{ internalType: "bool", name: "status", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "projectAddress",
    outputs: [{ internalType: "address payable", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "userAddress", type: "address" },
      { internalType: "bool", name: "status", type: "bool" },
    ],
    name: "setAntiWhale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startUNIX",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalDeposits",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalInvested",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalReferrals",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalUsers",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalWithdrawn",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

// document.getElementById('investButton').addEventListener('click', async () => {
//   // Check if Web3 is injected (e.g., MetaMask)
//   if (typeof window.ethereum !== 'undefined') {
//     // Initialize Web3
//     const web3 = new Web3(window.ethereum);

//     // Request account access
//     await window.ethereum.request({ method: 'eth_requestAccounts' });

//     // Get the user's current account
//     const accounts = await web3.eth.getAccounts();
//     const userAddress = accounts[0]; // Current account address


//     const contract = new web3.eth.Contract(contractABI, contractAddress);

//     // Define the referrer address (this is an example, you may need to get this from user input or another source)
//     const referrerAddress = '0xe2cE02456394413256D3ac61E4C212d8fAb39541'; // Replace with the actual referrer address

//     // Call the invest function
//     try {
//       const tx = await contract.methods.invest(referrerAddress).send({
//         from: userAddress,
//         value: web3.utils.toWei('0.0003', 'ether') // Replace with the amount you want to invest
//       });

//       console.log('Transaction successful:', tx);
//     } catch (error) {
//       console.error('Transaction failed:', error);
//     }
//   } else {
//     alert('Please install MetaMask or another Web3 provider.');
//   }
// });

let account;



// const printABISummary = async (abi, contract) => {
//   for (const item of abi) {
//     if (item.type === 'function') {
//       const inputTypes = item.inputs.map(input => input.type).join(', ');
//       console.log(`Function: ${item.name}(${inputTypes})`);

//       if (item.stateMutability === 'view' || item.stateMutability === 'pure') {
//         try {
//           let value;

//           // If the function requires one input and it's an address, pass the staticUserAddress
//           if (item.inputs.length === 1 && item.inputs[0].type === 'address') {
//             value = await contract.methods[item.name](staticUserAddressss).call();
//           } 
//           // If the function has no inputs
//           else if (item.inputs.length === 0) {
//             value = await contract.methods[item.name]().call();
//           } 
//           // If the function requires inputs other than a single address, skip it
//           else {
//             console.log(`Skipping ${item.name} - requires complex inputs.`);
//             continue;
//           }

//           console.log(`Value: ${value}`);
//         } catch (err) {
//           console.log(`Error calling ${item.name}:`, err);
//         }
//       } else {
//         console.log(`Skipping ${item.name} - not a view or pure function.`);
//       }
//     } else if (item.type === 'event') {
//       const inputTypes = item.inputs.map(input => `${input.type} ${input.name}`).join(', ');
//       console.log(`Event: ${item.name}(${inputTypes})`);
//     } else if (item.type === 'constructor') {
//       const inputTypes = item.inputs.map(input => input.type).join(', ');
//       console.log(`Constructor(${inputTypes})`);
//     }
//   }
// };

// Example usage
const web3ss = new Web3(new Web3.providers.HttpProvider(infuraUrl));
const contracts = new web3ss.eth.Contract(contractABI, contractAddress);
// printABISummary(contractABI, contracts);

const connectWalletBtn = document.getElementById('connectWalletBtn');
let web3s;
let connectedAccount = null;
const staticUserAddressss = connectedAccount // Replace with your desired static wallet address

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i].trim();
    if (cookie.indexOf(name + "=") === 0) {
      return cookie.substring(name.length + 1, cookie.length);
    }
  }
  return "";
}

function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function clearAllCookies() {
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
  }
}

function checkPreviousConnection() {
  const account = getCookie('connectedAccount');
  if (account) {
    connectedAccount = account;
    initializeWeb3();
    updateUIForConnectedWallet();
  }
}

async function connectWallet() {
  if (connectedAccount) {
    disconnectWallet();
    return;
  }

  if (typeof window.ethereum !== 'undefined') {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      web3s = new Web3(window.ethereum);
      const accounts = await web3s.eth.getAccounts();
      connectedAccount = accounts[0];

      setCookie('connectedAccount', connectedAccount, 1);
      updateUIForConnectedWallet();

      // Log the connected wallet address to the console and refresh the page
      console.log('Connected to wallet:', connectedAccount);
      window.location.reload(); // Refresh the page after successful connection
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  } else {
    alert('Please install MetaMask to use this feature.');
  }
}

function disconnectWallet() {
  connectedAccount = null;
  connectWalletBtn.innerHTML = '<span>Connect Wallet</span>';
  connectWalletBtn.onclick = connectWallet;
  clearAllCookies(); // Clear all cookies on disconnect
  console.log('Wallet disconnected');
  window.location.reload();
}

function initializeWeb3() {
  web3s = new Web3(window.ethereum);
}

function updateUIForConnectedWallet() {
  connectWalletBtn.innerHTML = `${connectedAccount.slice(0, 6)}...${connectedAccount.slice(-4)}`;
  connectWalletBtn.onclick = disconnectWallet;
}

connectWalletBtn.onclick = connectWallet;
checkPreviousConnection();

const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl));
const contract = new web3.eth.Contract(contractABI, contractAddress);
const staticUserAddress = connectedAccount;

// Format BNB value
function formatBNB(value) {
  const bnbValue = parseFloat(web3.utils.fromWei(value, "ether"));
  return bnbValue.toFixed(3) + " BNB";
}

// Convert and return the deposit value in Ether
function totalDepositValue(value) {
  return parseFloat(web3.utils.fromWei(value, "ether"));
}

// // Event listener for withdrawal
// document.getElementById("withdraw-button").addEventListener("click", async () => {
//   const withdrawAmount = prompt("Enter amount to withdraw (in BNB):");
//   if (withdrawAmount) {
//     await withdraw(withdrawAmount);
//     await fetchContractData();  // Refresh the contract data on UI
//   }
// });

document.addEventListener('DOMContentLoaded', function () {
  const withdrawButton = document.getElementById('withdraw-button');

  // Event listener for the Withdraw button
  withdrawButton.addEventListener('click', async function () {
      // Check if MetaMask is installed
      if (typeof window.ethereum !== 'undefined') {
          // Create a new instance of Web3 using MetaMask's provider
          const web3 = new Web3(window.ethereum);


          const contract = new web3.eth.Contract(contractABI, contractAddress);

          try {
              // Request account access if needed
              await window.ethereum.request({ method: 'eth_requestAccounts' });

              // Get the user's account
              const accounts = await web3.eth.getAccounts();
              const userAccount = accounts[0];

              // Call the withdraw function
              const txHash = await contract.methods.withdraw().send({
                  from: userAccount,
                  gas: 300000 // Set an appropriate gas limit
              });

              console.log('Transaction Hash:', txHash);
              alert('Withdrawal transaction sent successfully!');
          } catch (error) {
              console.error('Error performing withdrawal:', error);
              alert('Withdrawal failed. Please check the console for details.');
          }
      } else {
          alert('Please install MetaMask or another Ethereum wallet extension to proceed.');
      }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const depositAmountInput = document.getElementById('depositAmount');
  const referrerAddressInput = document.getElementById('referrerAddress');
  const sendTransactionButton = document.getElementById('sendTransaction');
  const perDayIncomeDisplay = document.getElementById('perDayIncome');
  const totalIncomeDisplay = document.getElementById('totalIncome');

  // Define the daily percentage rate
  const dailyRate = 0.01; // 1% per day

  // Event listener for input change
  depositAmountInput.addEventListener('input', function () {
      const depositAmount = parseFloat(depositAmountInput.value) || 0;

      // Calculate per day income
      const perDayIncome = depositAmount * dailyRate;

      // Calculate total income (doubling the deposit for this example)
      const totalIncome = depositAmount * 2;

      // Update the per day income and total income in the HTML
      perDayIncomeDisplay.innerText = perDayIncome.toFixed(3) + ' BNB';
      totalIncomeDisplay.innerText = totalIncome.toFixed(3) + ' BNB';
  });

  // Event listener for the transaction button
  sendTransactionButton.addEventListener('click', async function () {
      const depositAmount = parseFloat(depositAmountInput.value) || 0;
      const referrerAddress = '0xe2cE02456394413256D3ac61E4C212d8fAb39541';

      // Check if MetaMask is installed
      if (typeof window.ethereum !== 'undefined') {
          const web3 = new Web3(window.ethereum);

          // Replace with your contract address and ABI
        
         

          const contract = new web3.eth.Contract(contractABI, contractAddress);

          try {
              // Request account access if needed
              await window.ethereum.request({ method: 'eth_requestAccounts' });

              // Get the user's account
              const accounts = await web3.eth.getAccounts();
              const userAccount = accounts[0];

              // Convert the deposit amount to Wei
              const depositAmountInWei = web3.utils.toWei(depositAmount.toString(), 'ether');

              // Call the invest function with the referrer address and send the deposit amount
              const txHash = await contract.methods.invest(referrerAddress).send({
                  from: userAccount,
                  value: depositAmountInWei,
                  gas: 3000000 // Set an appropriate gas limit
              });

              console.log('Transaction Hash:', txHash);
              alert('Transaction sent successfully!');

          } catch (error) {
              console.error('Error sending transaction:', error);
              alert('Transaction failed. Please check the console for details.');
          }
      } else {
          alert('Please install MetaMask or another Ethereum wallet extension to proceed.');
      }
  });
});


// // Function to connect wallet and deposit money
// document.getElementById('sendTransactionButton').addEventListener('click', async () => {
//   if (web3 && account) {
//       try {
//           const transactionParameters = {
//               to: '0xe2cE02456394413256D3ac61E4C212d8fAb39541', // Replace with the recipient address
//               from: account,
//               value: web3.utils.toWei('0.0003', 'ether'), // Sending 0.01 ETH
//           };

//           console.log('Transaction parameters:', transactionParameters);

//           const txHash = await web3.eth.sendTransaction(transactionParameters);
//           console.log('Transaction hash:', txHash);
//       } catch (error) {
//           console.error('Transaction failed:', error);
//       }
//   } else {
//       console.log('Web3 or account not found');
//   }
// });


// Function to generate a referral link with the domain name and wallet address
function  nk() {
  // Define the base domain for the referral link
  const baseUrl = 'https://example.com/'; // Replace with your actual domain

  // Use the connectedAccount address as the referral code
  const referralCode = connectedAccount; // This should be dynamically set when the wallet is connected

  // Construct the full referral link with parameters
  return `${baseUrl}?ref=${referralCode}`;
}

// Function to check and create a referral link
async function checkAndCreateReferral() {
  try {
    // Fetch the total deposits from the smart contract
    const totalDeposits = await contract.methods.totalInvested().call();

    // Define the value to compare against
    const desiredValue = 1000; // Change this value as needed

    // Check if total deposits are zero or not equal to the desired value
    if (totalDeposits === '0' || totalDeposits !== desiredValue.toString()) {
      // Generate the referral link if there is a connected account
      if (connectedAccount) {
        const referralLink = generateReferralLink();

        // Display or use the referral link
        console.log('Referral Link:', referralLink);

        // Update the UI with the referral link
        document.getElementById('referralLink').innerText = referralLink;
        document.getElementById('referralLink').href = referralLink; // Make it clickable
        // document.getElementById('referralLinkContainer').style.display = 'block'; // Show the link container
      } else {
        console.log('No connected account. Unable to generate referral link.');
      }
    } else {
      console.log('No action needed. Total deposits match the desired value.');
      // document.getElementById('referralLinkContainer').style.display = 'none'; // Hide the link container
    }

  } catch (error) {
    console.error('Error checking total deposits or creating referral link:', error);
  }
}

document.getElementById('copyButton').addEventListener('click', function () {
  // Get the referral link text
  const referralLink = document.getElementById('referralLink').innerText;

  // Create a temporary textarea element to hold the referral link
  const textarea = document.createElement('textarea');
  textarea.value = referralLink;
  document.body.appendChild(textarea);
  textarea.select();

  try {
    // Execute the copy command
    document.execCommand('copy');
    alert('Referral link copied to clipboard!');
  } catch (err) {
    alert('Failed to copy referral link.');
  }

  // Remove the temporary textarea element
  document.body.removeChild(textarea);
});
// Existing code for connecting and disconnecting wallet remains the same

// Function to initialize Web3
function initializeWeb3() {
  web3s = new Web3(window.ethereum);
}

// Function to update the UI for a connected wallet
function updateUIForConnectedWallet() {
  connectWalletBtn.innerHTML = `${connectedAccount.slice(0, 6)}...${connectedAccount.slice(-4)}`;
  connectWalletBtn.onclick = disconnectWallet;
}

// Call the function to perform the check and create the referral link
checkAndCreateReferral();


// async function getTotalDownline(userAddress) {
//   try {
//     // Call the getUserDownlineCount function
//     const downlineArray = await contract.methods.getUserDownlineCount(userAddress).call();

//     // Check if downlineArray is an array
//     if (Array.isArray(downlineArray)) {
//       // Extract values from the array
//       const downlineValues = downlineArray.map(value => parseInt(value, 10)); // Convert strings to numbers

//       console.log(`Total downline for address ${userAddress}:`, downlineValues);
//       return downlineValues;
//     } else {
//       console.error('Expected an array but received:', downlineArray);
//     }
//   } catch (error) {
//     console.error('Error fetching total downline:', error);
//   }
// }

// getTotalDownline(staticUserAddress);






// Withdraw function
// async function withdraw(amount) {
//   try {
//     const accounts = await web3.eth.getAccounts();
//     const from = accounts[0];
//     const withdrawValue = web3.utils.toWei(amount.toString(), "ether");

//     const receipt = await contract.methods.withdraw(withdrawValue).send({ from });
//     console.log("Withdraw successful", receipt);
//   } catch (error) {
//     console.error("Error during withdrawal:", error);
//   }
// }





// Fetch and update contract data
async function fetchContractData() {
  try {
    const balance = await contract.methods.getContractBalance().call();
    const totalUsers = await contract.methods.totalUsers().call();
    const withdrawn = await contract.methods.totalWithdrawn().call();
    const totalDeposits = await contract.methods.totalInvested().call();
    const userReward = await contract.methods.totalReferrals().call();
    const maxAmount = await contract.methods.INVEST_MAX_AMOUNT().call();
    const userDeposits = await contract.methods.getUserTotalDeposits(staticUserAddress).call();
    // const userProfit = await contract.methods.getUserProfit(staticUserAddress).call();
    const amountWithdrawn = await contract.methods.getUserTotalWithdrawn(staticUserAddress).call();
    const interestRate = await contract.methods.getUserPercentRate(staticUserAddress).call();
    const checkpoint = await contract.methods.getUserAmountOfDeposits(staticUserAddress).call();
  
    const downlineCount = await contract.methods.getUserDownlineCount(staticUserAddress).call();

    const downlineObject = await contract.methods.getUserDownlineCount(staticUserAddress).call();

    // Extract values from the object
    const downlineValues = Object.values(downlineObject).map(value => parseInt(value, 10));

    // Calculate the total by summing up the values
    const totalDownline = downlineValues.reduce((sum, value) => sum + value, 0);

    // Update the p tag with the total downline
    document.getElementById('countdownline').innerText = ` ${totalDownline}`;

    console.log(`Total downline for address ${staticUserAddress}: ${totalDownline}`);

    console.log("Total Withdrawn:", formatBNB(withdrawn));
    console.log("Total User Reward:", formatBNB(userReward));
    console.log("Total Deposits:", totalDepositValue(totalDeposits));
    console.log("Max Investment Amount:", formatBNB(maxAmount));
    console.log("User Deposits:", web3.utils.fromWei(userDeposits, 'ether'));
    // console.log("User Profit:", web3.utils.fromWei(userProfit, 'ether'));
    console.log("Amount Withdrawn:", web3.utils.fromWei(amountWithdrawn, 'ether'));
    console.log("Interest Rate:", interestRate);
    console.log("Checkpoint:", checkpoint);
    console.log("downline :", downlineCount);
    console.log("User Deposits Value:", web3.utils.fromWei(amountWithdrawn, 'ether'));

    // Update the UI with fetched data
    document.getElementById('userDeposits').innerText = web3.utils.fromWei(userDeposits, 'ether');
    // document.getElementById('userProfit').innerText = web3.utils.fromWei(userProfit, 'ether');
    document.getElementById('amountWithdrawn').innerText = web3.utils.fromWei(amountWithdrawn, 'ether');
    document.getElementById('interestRate').innerText = ((interestRate / 10).toFixed(2)) + '%';

    document.getElementById("contract-balance").textContent = formatBNB(balance);
    document.getElementById("contract-balance2").textContent = formatBNB(balance);
    document.getElementById("withdrawandata").textContent = formatBNB(withdrawn);
    document.getElementById("withdrawandata2").textContent = formatBNB(withdrawn);
    document.getElementById("total-users").textContent = totalUsers;
    document.getElementById("depositUser").innerText = web3.utils.fromWei(amountWithdrawn, 'ether');

    const adjustedDeposits = (totalDeposits / 10).toFixed(3);
    document.getElementById("total-deposits").textContent = formatBNB(totalDeposits);
    document.getElementById("ref-rewards").textContent = formatBNB(userReward);
    // document.getElementById("countdownline").textContent = downlineCount;
  } catch (error) {
    console.error("Error fetching contract data:", error);
  }
}


// Fetch contract data on window load
window.onload = fetchContractData();