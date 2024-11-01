import React from 'react'
import Link from 'next/link';
export default function Blogs() {

  return (
    <div className='flex flex-col items-center justify-start gap-2 pt-2 md:px-20 px-8 pb-20 min-h-screen relative'>
        {/* <div className='absolute inset-0 bg-[#0a0a0a] opacity-80'></div> */}
        {/* <div className="flex flex-col items-center justify-center my-12 relative z-10">
            <div className="w-6 h-10 border-2 border-[#6df2db] rounded-full shadow-lg flex items-start justify-center cursor-pointer">
            <div className='w-[1vw] h-[1vw] md:w-[0.5vw] md:h-[0.5vw] mt-2 rounded-full bg-[#6df2db]'></div>
            </div>
            <div className="w-px h-10 border-l-2 border-dashed border-white-400 mt-2"></div>
            <div className='w-[1vw] h-[1vw] md:w-[0.5vw] md:h-[0.5vw] mt-2 rounded-full bg-white'></div>
        </div> */}
        <div className='flex flex-col items-center justify-start gap-2 text-center relative z-10 w-full mt-14'>
            <div className="relative inline-block">
              <p className='text-[34px] md:text-[46px] font-medium text-[#6df2db]'>Blogs</p>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6df2db] rounded-full">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-1 h-1 bg-[#6df2db] rounded-full"></div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-1 h-1 bg-[#6df2db] rounded-full"></div>
              </div>
            </div>
            <p className='text-[16px] text-[#a9acae]'>Here are some of the articles I have written over the years.</p>
            <div className='flex flex-col md:flex-row items-start justify-start gap-10 border-y-2 border-[#696E71] py-10 mt-10'>
                <div>
                    <img src="/erc20pic.jpg" alt="" className='min-w-[20vw] md:w-[25vw] md:h-[35vh] w-full h-full rounded-md' />
                </div>
                <div className='text-left'>
                    <h3 className='text-[34px] text-[#6df2db]'>Unpacking ERC-20 Tokens: Understanding Their Functions and Their Uses.</h3>
                    <p className='text-base text-[#8b9093] mb-8'>ERC-20 (Ethereum Request for Comments-20) is the name used in the Ethereum community to refer to a standard (set of rules and functions) that guides the creation of fungible tokens on the Ethereum blockchain. Fungible tokens are tokens that are identical and can be exchanged on a one-for-one basis. In this article, I will go through the different functions contained in an ERc20 token standard and how they are used...</p>
                    <div className='flex items-center justify-start cursor-pointer'>
                        <Link href="https://rhorheeymarh.hashnode.dev/unpacking-erc-20-tokens-understanding-their-functions-and-their-uses"><p className='text-medium text-[#6AECD9] border-b-2 border-[#696E71]'>Read More</p></Link>
                        <img src="/readmore.svg" alt="" className='w-6 h-4' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-start justify-start gap-10 border-b-2 border-[#696E71] pb-10 mt-10'>
                <div>
                    <img src="/sendtrsfcall.jpg" alt="" className='min-w-[20vw] md:w-[25vw] md:h-[35vh] w-full h-full rounded-md' />
                </div>
                <div className='text-left'>
                    <h3 className='text-[34px] text-[#6df2db]'>Navigating Ether Transfers in Solidity: Send, Transfer, and Call Explained.</h3>
                    <p className='text-base text-[#8b9093] mb-8'>The birth of the Ethereum blockchain saw a significant change in the way we see and interact with blockchain technology. Ethereum extended to a large extent the capabilities of the first blockchain (Bitcoin), which was primarily created to facilitate peer-to-peer transactions of digital currencies.</p>
                    <div className='flex items-center justify-start cursor-pointer'>
                        <Link href="https://rhorheeymarh.hashnode.dev/navigating-ether-transfers-in-solidity-send-transfer-and-call-explained"><p className='text-medium text-[#6AECD9] border-b-2 border-[#696E71]'>Read More</p></Link>
                        <img src="/readmore.svg" alt="" className='w-6 h-4' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-start justify-start gap-10 border-b-2 border-[#696E71] pb-10 mt-10'>
                <div>
                    <img src="/merkleimg.avif" alt="" className='min-w-[20vw] md:w-[25vw] md:h-[35vh] w-full h-full rounded-md' />
                </div>
                <div className='text-left'>
                    <h3 className='text-[34px] text-[#6df2db]'>Efficient Data Management and Verification With Merkle Trees.</h3>
                    <p className='text-base text-[#8b9093] mb-8'>A merkle tree, also known as a hash tree, is a kind of data structure used to store data more efficiently and securely. It was named after Ralph Merkle, a computer scientist known for his pioneering work in the field of cryptography.</p>
                    <div className='flex items-center justify-start cursor-pointer'>
                        <Link href="https://rhorheeymarh.hashnode.dev/efficient-data-management-and-verification-with-merkle-trees"><p className='text-medium text-[#6AECD9] border-b-2 border-[#696E71]'>Read More</p></Link>
                        <img src="/readmore.svg" alt="" className='w-6 h-4' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-start justify-start gap-10 border-b-2 border-[#696E71] pb-10 mt-10'>
                <div>
                    <img src="/insideEVM.jpg" alt="" className='min-w-[20vw] md:w-[25vw] md:h-[35vh] w-full h-full rounded-md' />
                </div>
                <div className='text-left'>
                    <h3 className='text-[34px] text-[#6df2db]'>Inside the Ethereum Virtual Machine: How Solidity Data Structures Are Stored in the EVM</h3>
                    <p className='text-base text-[#8b9093] mb-8'>In this article, I examined how arrays, structs and mappings are stored on the EVM, but before we dive into this, lets talk about what storage looks like in the EVM. Understanding how EVM storage works is crucial for efficient smart contract development.</p>
                    <div className='flex items-center justify-start cursor-pointer'>
                        <Link href="https://rhorheeymarh.hashnode.dev/inside-the-ethereum-virtual-machine-how-solidity-data-structures-are-stored-in-the-evm"><p className='text-medium text-[#6AECD9] border-b-2 border-[#696E71]'>Read More</p></Link>
                        <img src="/readmore.svg" alt="" className='w-6 h-4' />
                    </div>
                </div>
            </div>
            {/* <Link href="https://rhorheeymarh.hashnode.dev/">
                <button className='flex items-center justify-between gap-4 bg-[#6ff6d7] py-4 px-8 text-[#000] rounded-full font-medium mt-14'>
                    <p>View all on Hashnode</p>
                    <img src="/view.svg" alt="" width={24} height={24} />
                </button>
            </Link> */}
            <div className='flex flex-col md:flex-row items-start justify-start gap-10 border-b-2 border-[#696E71] pb-10 mt-10'>
                <div>
                    <img src="/nftimage.webp" alt="" className='min-w-[20vw] md:w-[25vw] md:h-[35vh] w-full h-full rounded-md' />
                </div>
                <div className='text-left'>
                    <h3 className='text-[34px] text-[#6df2db]'>ERC-721 and the NFT Revolution: A Deep Dive into the Standard Powering Non-Fungible Tokens</h3>
                    <p className='text-base text-[#8b9093] mb-8'>NFTs (Non-Fungible Tokens) are one of the amazing innovations of the blockchain, and its applications has continued to expand into many industries like real estate, ticketing, music, art, decentralized identity, gaming, etc. The birth of NFTs came through the ERC-721 standard, which was inspired by the popular ERC-20 standard, a standard for fungible tokens widely used in the crypto world.</p>
                    <div className='flex items-center justify-start cursor-pointer'>
                        <Link href="https://medium.com/@roheemahabo/erc-721-and-the-nft-revolution-a-deep-dive-into-the-standard-powering-non-fungible-tokens-3bf8a512143c"><p className='text-medium text-[#6AECD9] border-b-2 border-[#696E71]'>Read More</p></Link>
                        <img src="/readmore.svg" alt="" className='w-6 h-4' />
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
