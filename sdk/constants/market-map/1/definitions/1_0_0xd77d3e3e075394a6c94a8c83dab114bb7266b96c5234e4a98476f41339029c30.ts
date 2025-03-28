import { defineMarket } from "@/sdk/constants";

export default defineMarket({
  id: `1_0_0xd77d3e3e075394a6c94a8c83dab114bb7266b96c5234e4a98476f41339029c30`,
  name: `Beraborrow beraETH Boyco`,
  description: `Single sided Liquid Stability Pool: 
Deposit beraETH into Boyco. beraETH is bridged &amp; deposited into Beraborrow. beraETH is then used to mint NECT at 300% collateral ratio, and then NECT is supplied into the Liquid Stability Pool.
This is part of Berachain Boyco pre-deposit campaign.`,
  is_verified: true,
  category: `boyco`,
  incentive_ids: ["1-0xfbca1de031ac44e83850634c098f22137e4647e5"],
  external_incentives: [
    {
      token_id: "1-0xfbca1de031ac44e83850634c098f22137e4647e5",
      label: "LSP Yield",

      value: async ({ roycoClient, chainClient }) => {
        const value = "Variable Rate";
        return value;
      },
    },
    {
      token_id: "1-0x77d17183055303a15208c809b716dc02261129b7",
      label: "Infrared Yield",

      value: async ({ roycoClient, chainClient }) => {
        const value = "Variable Rate";
        return value;
      },
    },
    {
      token_id: "1-0x09d9420332bff75522a45fcff4855f82a0a3ff50",
      label: "Dinero Points",

      value: async ({ roycoClient, chainClient }) => {
        const value = "10,000/week";
        return value;
      },
    },
  ],
});
