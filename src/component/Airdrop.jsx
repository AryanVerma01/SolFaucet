import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react"

export default function Airdrop(){

    const [amt,setAmt] = useState(0);

    async function sendAirdrop(){
        const wallet = useWallet();
        const { connection } = useConnection();
        const amount = parseInt(amt);

        if(!wallet.publicKey){
            throw new Error("Invalid Signature");
        }

        await connection.requestAirdrop(wallet.publicKey,amount*1000000000);

        const balance = await connection.getBalance(wallet.publicKey);

        alert(`Airdroped ${amount}SOL to ${wallet.publicKey},now Current Balance is ${balance}`)

    }

    return <>
        <div>
            <div class='my-6'>
                <input type="text" placeholder="Amount" onChange={(e)=>{ setAmt(e.target.value)}}
                class="w-90 h-10 rounded-lg text-center text-sm placeholder:text-gray-500 border-1 border-black-200 "></input>
            </div>
            <div>
                <button class="w-90 h-10 rounded-lg bg-white text-black text-sm font-semibold hover:bg-slate-200"
                onClick={sendAirdrop()}> Airdrop </button>
            </div>
            <div class="flex justify-center">
                <div><button class="w-24 h-8 bg-blue-500 m-4 rounded font-semibold hover:bg-blue-700">Devnet</button></div>
                <div><button class="w-24 h-8 bg-green-500 m-4 rounded font-semibold hover:bg-green-700">Testnet</button></div>
            </div>
        </div>
    </>
}