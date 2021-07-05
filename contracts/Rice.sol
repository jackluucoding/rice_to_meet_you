pragma solidity 0.8.6;

import "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol";

contract Rice is ERC20PresetFixedSupply {
    constructor() ERC20PresetFixedSupply("Ricetomeetyou", "Rice", 1000000 * 10 ** 18, msg.sender) {
    }
}