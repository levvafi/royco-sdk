import { defineMarket } from "@/sdk/constants";

export default defineMarket({
  id: `1_0_0xb9f307d83c78d09a134aac7713821aab8e1da2404b895db66f0975135dd5006e`,
  name: `Beraborrow WETH Boyco`,
  description: `Single sided Liquid Stability Pool:
Deposit WETH into Boyco. WETH is bridged &amp; deposited into Beraborrow. WETH is then used to mint NECT at 300% collateral ratio, and then NECT is supplied into the Liquid Stability Pool.
This is part of the Berachain Boyco pre-deposit campaign.`,
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
  ],

  native_yield: [
    {
      token_id: "1-0xaf5191b0de278c7286d6c7cc6ab6bb8a73ba2cd6",
      label: "Stargate Incentives",
      annual_change_ratio: async ({ roycoClient, chainClient }) => {
        const STG_REWARD_AMOUNT = 499750;
        const LOCK_PERIOD_DAYS = 90;
        let annual_change_ratio = 0;

        try {
          const market_req = await roycoClient.rpc("get_enriched_markets", {
            chain_id: 1,
            market_type: 0,
            market_id:
              "0xb9f307d83c78d09a134aac7713821aab8e1da2404b895db66f0975135dd5006e",
            page_index: 0,
            page_size: 1,
          });

          const market = market_req.data?.data?.[0];

          const tokenQuotes = await roycoClient.rpc("get_token_quotes", {
            token_ids: ["1-0xaf5191b0de278c7286d6c7cc6ab6bb8a73ba2cd6"],
          });

          const stgPrice = tokenQuotes.data?.[0]?.price ?? 0;

          // Calculate annual STG rewards value
          const annualRewardValueUSD =
            STG_REWARD_AMOUNT * stgPrice * (365 / LOCK_PERIOD_DAYS);

          // Calculate APY based on TVL
          if (market?.total_value_locked && market.total_value_locked > 0) {
            annual_change_ratio =
              annualRewardValueUSD / market.total_value_locked;
          }
        } catch (error) {
          console.error("Error fetching STG price:", error);
        }

        return annual_change_ratio;
      },
    },
  ],
});
