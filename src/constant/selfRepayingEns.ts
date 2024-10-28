const selfRepayingEnsABI = [
  {
    stateMutability: "payable",
    type: "constructor",
    inputs: [
      {
        name: "_controller",
        internalType: "contract ETHRegistrarController",
        type: "address",
      },
      {
        name: "_registrar",
        internalType: "contract BaseRegistrarImplementation",
        type: "address",
      },
      { name: "_gelatoOps", internalType: "contract Ops", type: "address" },
      {
        name: "_alchemist",
        internalType: "contract IAlchemistV2",
        type: "address",
      },
      {
        name: "_alETHPool",
        internalType: "contract ICurvePool",
        type: "address",
      },
      {
        name: "_curveCalc",
        internalType: "contract ICurveCalc",
        type: "address",
      },
    ],
  },
  { type: "error", inputs: [], name: "FailedTransfer" },
  { type: "error", inputs: [], name: "IllegalArgument" },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "alETHAmount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "ethAmount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Borrow",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "subscriber",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "indexedName",
        internalType: "string",
        type: "string",
        indexed: true,
      },
      { name: "name", internalType: "string", type: "string", indexed: false },
    ],
    name: "Subscribe",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "subscriber",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "indexedName",
        internalType: "string",
        type: "string",
        indexed: true,
      },
      { name: "name", internalType: "string", type: "string", indexed: false },
    ],
    name: "Unsubscribe",
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "subscriber", internalType: "address", type: "address" }],
    name: "checker",
    outputs: [
      { name: "canExec", internalType: "bool", type: "bool" },
      { name: "execPayload", internalType: "bytes", type: "bytes" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "subscriber", internalType: "address", type: "address" }],
    name: "getTaskId",
    outputs: [{ name: "taskId", internalType: "bytes32", type: "bytes32" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "name", internalType: "string", type: "string" }],
    name: "getVariableMaxGasPrice",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "data", internalType: "bytes[]", type: "bytes[]" }],
    name: "multicall",
    outputs: [{ name: "results", internalType: "bytes[]", type: "bytes[]" }],
  },
  {
    stateMutability: "payable",
    type: "function",
    inputs: [
      { name: "name", internalType: "string", type: "string" },
      { name: "subscriber", internalType: "address", type: "address" },
    ],
    name: "renew",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "name", internalType: "string", type: "string" }],
    name: "subscribe",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "subscriber", internalType: "address", type: "address" }],
    name: "subscribedNames",
    outputs: [{ name: "names", internalType: "string[]", type: "string[]" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "name", internalType: "string", type: "string" }],
    name: "unsubscribe",
    outputs: [],
  },
  { stateMutability: "payable", type: "receive" },
] as const

export const selfRepayingEnsAddress = "0xF5fD2b9B29D0d8Fd7d11A0602581438C621ACB1a" as const

export const selfRepayingEnsConfig = {
  address: selfRepayingEnsAddress,
  abi: selfRepayingEnsABI,
} as const
