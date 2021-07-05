pragma solidity 0.8.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Rice is ERC20 {

constructor(uint256 _supply) ERC20("Ricetomeetyou", "RICE") public {
    _mint(msg.sender, _supply * (10 ** decimals()));
    }
   
    

}