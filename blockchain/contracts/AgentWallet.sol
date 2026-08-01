// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/access/Ownable.sol";

contract AgentWallet is Ownable {

    address public aiAgent;

    uint256 public dailyLimit = 100;

    uint256 public spentToday;

    uint256 public lastResetDay;

    bool public frozen;

    mapping(address => bool) public allowlist;

    event WalletFrozen(address indexed owner);
    event WalletUnfrozen(address indexed owner);
    event AllowedWalletAdded(address indexed wallet);
    event AllowedWalletRemoved(address indexed wallet);
    event DailyLimitChanged(uint256 newLimit);
    event AgentChanged(address indexed newAgent);
    event TransferExecuted(address indexed to,uint256 amount);

    constructor() Ownable(msg.sender){
        lastResetDay=block.timestamp/1 days;
    }

    function changeAgent(address _agent) external onlyOwner{
        aiAgent=_agent;
        emit AgentChanged(_agent);
    }

    function changeLimit(uint256 _limit) external onlyOwner{
        dailyLimit=_limit;
        emit DailyLimitChanged(_limit);
    }

    function addAllowed(address _wallet) external onlyOwner{
        allowlist[_wallet]=true;
        emit AllowedWalletAdded(_wallet);
    }

    function removeAllowed(address _wallet) external onlyOwner{
        allowlist[_wallet]=false;
        emit AllowedWalletRemoved(_wallet);
    }

    function freeze() external onlyOwner{
        frozen=true;
        emit WalletFrozen(msg.sender);
    }

    function unfreeze() external onlyOwner{
        frozen=false;
        emit WalletUnfrozen(msg.sender);
    }

    function _resetDailyLimit() internal{
        uint256 currentDay=block.timestamp/1 days;

        if(currentDay>lastResetDay){
            spentToday=0;
            lastResetDay=currentDay;
        }
    }

    function secureTransfer(address payable _to,uint256 _amount)
        external
        onlyOwner
    {
        _resetDailyLimit();

        require(!frozen,"Wallet frozen");
        require(allowlist[_to],"Receiver not allowed");
        require(spentToday+_amount<=dailyLimit,"Daily limit exceeded");
        require(address(this).balance>=_amount,"Insufficient balance");

        spentToday+=_amount;

        _to.transfer(_amount);

        emit TransferExecuted(_to,_amount);
    }

    receive() external payable {}
}