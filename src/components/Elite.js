/** @format */
import { ethers } from 'ethers';
import { CheckIcon } from '@heroicons/react/20/solid';
import ettarra from '../assets/ettarra.png';
import Web3Modal from 'web3modal';
import gold from '../assets/Screenshot 2023-04-09 090611.png';
import silver from '../assets/silver.png';
import { useEffect, useState } from 'react';
import bronze from '../assets/Bronze.png';
// import bronze from '../assets/bronze.png'

// import LinkNFT from '.../artifacts/contracts/NFTElite.sol/LinkNFT.json';

const LinkNFT = [
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'approved',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'ApprovalForAll',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'getApproved',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'getTokenLink',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'link',
        type: 'string',
      },
    ],
    name: 'mintNFT',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'ownerOf',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'link',
        type: 'string',
      },
    ],
    name: 'setTokenLink',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'tokenURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const includedFeatures = [
  'Free Pass to Try New Products at Ettarra events',
  'Get any Cold Coffee (450ml) for free(worth upto ₹450/-)',
  'Flat 30% off for All the Products',
  'Official member t-shirt',
];

const includedFeaturess = [
  '50% off on the Entry Passess at Ettarra events',
  'Get any Hot Coffee (350ml) for free (worth upto ₹300/-)',
  'Flat 20% off for All the Products',
  'Official member t-shirt',
];

const includedFeaturesss = [
  '20% off on Ettarra events passess to try our new Products ',
  'Get any Hot Coffee (250ml) for free (worth upto ₹300/-)',
  'Flat 10% off for All the Products',
];

export default function Elite() {
  const [hen, setHen] = useState(false);
  async function mintNFT() {
    let a = 15;

    // const url = await uploadToIPFS()
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    setHen((hen) => !hen);
    /* next, create the item */
    // const price = ethers.utils.parseUnits(formInput.price, 'ether');
    let contract = new ethers.Contract(
      '0xf2e8ec6bbbeb116d953878820f7f93370ea2ac08',
      LinkNFT,
      signer
    );
    a++;
    // let listingPrice = await contract.getListingPrice()
    // listingPrice = listingPrice.toString()
    let transaction = await contract.mintNFT(
      a,
      'https://ipfs.io/ipfs/QmSNpW4P5e81fcD9usAtyiZ7C26dbM8mzDj8uQBZ3Bd5CR?filename=gold_member.json '
    );

    await transaction.wait();
  }
  useEffect(() => {
    console.log(hen);
  }, [hen]);

  return (
    //     <div style={{ backgroundColor: 'FFFFFF' }}></div>
    //    <header className="absolute inset-x-0 top-0 z-50">
    //     <nav
    //       className="flex items-center justify-between p-6 lg:px-8"
    //       aria-label="Global">
    //       <div className="flex lg:flex-1">
    //         <a
    //           href="#"
    //           className="-m-1.5 p-1.5">
    //           <span className="sr-only">Your Company</span>
    //           <img
    //             className="h-8 w-auto"
    //             src={ettarra}
    //             alt=""
    //           />
    //         </a>
    //       </div>
    //       <div className="flex lg:hidden">
    //         <button
    //           type="button"
    //           className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
    //           onClick={() => setMobileMenuOpen(true)}>
    //           <span className="sr-only">Open main menu</span>
    //           <Bars3Icon
    //             className="h-6 w-6"
    //             aria-hidden="true"
    //           />
    //         </button>
    //       </div>
    //       <div className="hidden lg:flex lg:gap-x-12">
    //         {navigation.map((item) => (
    //           <a
    //             key={item.name}
    //             href={item.href}
    //             className="text-sm font-semibold leading-6 text-gray-900">
    //             {item.name}
    //           </a>
    //         ))}
    //       </div>
    //       <div className="hidden lg:flex lg:flex-1 lg:justify-end">
    //         <Connect/>
    //       </div>
    //     </nav>
    //             <Dialog
    //       as="div"
    //       className="lg:hidden"
    //       open={mobileMenuOpen}
    //       onClose={setMobileMenuOpen}>
    //       <div className="fixed inset-0 z-50" />
    //       <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
    //         <div className="flex items-center justify-between">
    //           <a
    //             href="#"
    //             className="-m-1.5 p-1.5">
    //             <span className="sr-only">Your Company</span>
    //             <img
    //               className="h-8 w-auto"
    //               src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
    //               alt=""
    //             />
    //           </a>
    //           <button
    //             type="button"
    //             className="-m-2.5 rounded-md p-2.5 text-gray-700"
    //             onClick={() => setMobileMenuOpen(false)}>
    //             <span className="sr-only">Close menu</span>
    //             <XMarkIcon
    //               className="h-6 w-6"
    //               aria-hidden="true"
    //             />
    //           </button>
    //         </div>
    //         <div className="mt-6 flow-root">
    //           <div className="-my-6 divide-y divide-gray-500/10">
    //             <div className="space-y-2 py-6">
    //               {navigation.map((item) => (
    //                 <a
    //                   key={item.name}
    //                   href={item.href}
    //                   className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
    //                   {item.name}
    //                 </a>
    //               ))}
    //             </div>
    //             <div className="py-6">
    //               <a
    //                 href="#"
    //                 className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
    //                 Log in
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </Dialog.Panel>
    //     </Dialog>
    //   </header>
    <div
      className=" py-24 sm:py-32"
      style={{ marginBottom: '50px', marginTop: '-150px' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <img src={ettarra} /> Exclusive NFTs
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-900">
            Be an Ettarra Member by buying/claiming Ettarra Exclusive
            Memberships
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-900 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Ettarra Gold membership
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-900">
              Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque
              amet indis perferendis blanditiis repellendus etur quidem
              assumenda.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-900" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-900 sm:grid-cols-2 sm:gap-6">
              {includedFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div>
              <img
                style={{ height: '350px', borderRadius: '20px' }}
                src={gold}
              />{' '}
              {/* <p className="text-base font-semibold text-gray-900">
                  Pay once, own it forever
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    $349
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-900">
                    USD
                  </span>
                </p> */}
              <button
                disabled={hen}
                onClick={mintNFT}
                className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Get access
              </button>
              {/* <p className="mt-6 text-xs leading-5 text-gray-900">
                  Invoices and receipts available for easy company reimbursement
                </p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-900 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
        <div className="p-8 sm:p-10 lg:flex-auto">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">
            Silver membership
          </h3>
          <p className="mt-6 text-base leading-7 text-gray-900">
            Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque
            amet indis perferendis blanditiis repellendus etur quidem assumenda.
          </p>
          <div className="mt-10 flex items-center gap-x-4">
            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
              What’s included
            </h4>
            <div className="h-px flex-auto bg-gray-900" />
          </div>
          <ul
            role="list"
            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-900 sm:grid-cols-2 sm:gap-6">
            {includedFeaturess.map((feature) => (
              <li
                key={feature}
                className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
          <div>
            <img
              style={{ height: '350px', borderRadius: '20px' }}
              src={silver}
            />{' '}
            {/* <p className="text-base font-semibold text-gray-900">
                  Pay once, own it forever
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    $349
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-900">
                    USD
                  </span>
                </p> */}
            <button
              onClick={mintNFT}
              className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Get access
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-900 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
        <div className="p-8 sm:p-10 lg:flex-auto">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">
            Bronze membership
          </h3>
          <p className="mt-6 text-base leading-7 text-gray-900">
            Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque
            amet indis perferendis blanditiis repellendus etur quidem assumenda.
          </p>
          <div className="mt-10 flex items-center gap-x-4">
            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
              What’s included
            </h4>
            <div className="h-px flex-auto bg-gray-900" />
          </div>
          <ul
            role="list"
            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-900 sm:grid-cols-2 sm:gap-6">
            {includedFeaturesss.map((feature) => (
              <li
                key={feature}
                className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
          <div>
            <img
              style={{ height: '350px', borderRadius: '20px' }}
              src={bronze}
            />{' '}
            {/* <p className="text-base font-semibold text-gray-900">
                  Pay once, own it forever
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    $349
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-900">
                    USD
                  </span>
                </p> */}
            <button
              onClick={mintNFT}
              className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Get access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
