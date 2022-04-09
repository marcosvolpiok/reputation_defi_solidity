pragma solidity ^0.8.0;

import "./ownable.sol";

contract Califications is Ownable {
  struct Calification {
    uint256 id_shop;
    uint8 status;
    string description;
    uint256 created_at;
  }

  struct Shop {
    uint256 id;
    string name;
    string description;
    string social;
    string phone;
  }

  Calification[] public califications;
  Shop[] public shops;

  function getCalifications() public view returns(Calification[] memory){
    return califications;
  }

  function getShops() public view returns(Shop[] memory){
    return shops;
  }

  function createCalification(uint256 _id_shop, uint8 _status, string memory _description) external onlyOwner {
    califications.push(Calification(_id_shop, _status, _description, block.timestamp));
  }

  function createShop(uint256 _id, string memory _name, string memory _description, string memory _social, string memory _phone) external onlyOwner {
    shops.push(Shop(_id, _name, _description, _social, _phone));
  }

  

  function getCalificationsByShop(uint256 _id) public view returns(Calification[] memory) {
    Calification[] memory result = new Calification[](califications.length);
    uint counter = 0;
    for (uint i = 0; i < califications.length; i++) {
      if (_id == califications[i].id_shop) {
        result[counter] = califications[i];
        counter++;
      }
    }

    return result;
  }

  
}