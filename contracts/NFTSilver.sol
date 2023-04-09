// // SPDX-License-Identifier: UNLICENSED

// pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// contract LinkNFT is ERC721 {
//     mapping(uint256 => string) private _tokenLinks;

//     constructor(string memory name, string memory symbol) ERC721(name, symbol) {
//     }

//     function mintNFT(uint256 tokenId, string memory link) external {
//         require(!_exists(tokenId), "Token ID already exists");

//         _mint(msg.sender, tokenId);
//         _setTokenLink(tokenId, link);
//     }

//     function setTokenLink(uint256 tokenId, string memory link) external {
//         require(_isApprovedOrOwner(msg.sender, tokenId), "Caller is not owner");
//         _setTokenLink(tokenId, link);
//     }

    
//     function getTokenLink(uint256 tokenId) external view returns (string memory) {
//         require(_exists(tokenId), "Token ID does not exist");
//         return _tokenLinks[tokenId];
//     }

//     function _setTokenLink(uint256 tokenId, string memory link) internal {
//         _tokenLinks[tokenId] = link;
//     }
// }