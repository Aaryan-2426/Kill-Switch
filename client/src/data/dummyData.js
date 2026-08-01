export const walletData = {
  address: "0xA3F9...B981",
  balance: "4.85 ETH",
  status: "Protected",
  dailyLimit: "2 ETH",
  risk: "12%",
};

export const transactions = [
  {
    id: 1,
    time: "12:30",
    amount: "0.25 ETH",
    receiver: "0x34A2...",
    status: "Success",
  },
  {
    id: 2,
    time: "12:45",
    amount: "1.00 ETH",
    receiver: "0x98BC...",
    status: "Pending",
  },
];
export const riskData = [
  { day: "Mon", risk: 12 },
  { day: "Tue", risk: 18 },
  { day: "Wed", risk: 10 },
  { day: "Thu", risk: 15 },
  { day: "Fri", risk: 22 },
  { day: "Sat", risk: 8 },
  { day: "Sun", risk: 6 },
];

export const transactionData = [
  { day: "Mon", amount: 2 },
  { day: "Tue", amount: 5 },
  { day: "Wed", amount: 3 },
  { day: "Thu", amount: 7 },
  { day: "Fri", amount: 4 },
  { day: "Sat", amount: 6 },
  { day: "Sun", amount: 5 },
];

export const policyData = [
  { name: "Allowed", value: 75 },
  { name: "Blocked", value: 25 },
];