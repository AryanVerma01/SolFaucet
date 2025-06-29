import "./App.css";
import { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import Airdrop from "./component/Airdrop";

import "@solana/wallet-adapter-react-ui/styles.css";

export default function App(){

  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div class="w-screen">
          <div class="flex justify-center items-center text-5xl font-semibold mb-10 text-yellow-300">
              <div>SOL Faucet</div>
          </div>
          <div class="flex justify-center items-center text-2xl font-semibold mb-10 text-blue-400">
            The premium faucet for Solana Devnet and Testnet.
          </div>
            <div class="flex justify-center items-center mb-10 text-xl font-semibold text-red-600">
              <div>This tool does *NOT* give real $SOL or Solana tokens.</div>
            </div>
            <div class="flex justify-center items-center">
              <div class="mr-6  ">
                <WalletMultiButton />          {/* Connect Button */}
              </div>
              <div>
                <WalletDisconnectButton />     {/* Disconnect Button */}
              </div>
            </div>
            <div class="w-screen flex justify-center items-center">
              <Airdrop/>
            </div>
            <div class="flex justify-center items-center text-sm mt-10">
              <div>Made by <a href="https://github.com/AryanVerma01">@AryanVerma.</a></div>
            </div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
