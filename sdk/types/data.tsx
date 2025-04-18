export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      api_requests: {
        Row: {
          requests: number
          user: string
        }
        Insert: {
          requests?: number
          user: string
        }
        Update: {
          requests?: number
          user?: string
        }
        Relationships: []
      }
      boyco_market_data: {
        Row: {
          id: string
          lockup_time: number | null
        }
        Insert: {
          id: string
          lockup_time?: number | null
        }
        Update: {
          id?: string
          lockup_time?: number | null
        }
        Relationships: []
      }
      boyco_positions: {
        Row: {
          account_address: string
          amount_deposited: number
          bridge_transaction_hash: string
          ccdm_nonce: number
          deposit_leaf: string
          deposit_transaction_hash: string
          destination_chain_id: number
          dust_token_amounts: number[] | null
          dust_token_ids: string[] | null
          execute_transaction_hash: string
          id: string
          market_id: string
          merkle_deposit_nonce: number
          merkle_proof: string[]
          process_transaction_hash: string
          raw_market_ref_id: string
          raw_offer_ref_id: string
          raw_weiroll_wallet_withdrawn_destination_ref_id: string
          receipt_token_amount: number
          receipt_token_id: string
          reward_style: string
          source_chain_id: number
          token_0_amount: number
          token_0_id: string
          token_1_amounts: number[]
          token_1_ids: string[]
          total_amount_bridged: number
          unlock_timestamp: number
          weiroll_wallet: string
        }
        Insert: {
          account_address: string
          amount_deposited: number
          bridge_transaction_hash: string
          ccdm_nonce: number
          deposit_leaf: string
          deposit_transaction_hash: string
          destination_chain_id: number
          dust_token_amounts?: number[] | null
          dust_token_ids?: string[] | null
          execute_transaction_hash: string
          id: string
          market_id: string
          merkle_deposit_nonce: number
          merkle_proof: string[]
          process_transaction_hash: string
          raw_market_ref_id: string
          raw_offer_ref_id: string
          raw_weiroll_wallet_withdrawn_destination_ref_id: string
          receipt_token_amount: number
          receipt_token_id: string
          reward_style: string
          source_chain_id: number
          token_0_amount: number
          token_0_id: string
          token_1_amounts: number[]
          token_1_ids: string[]
          total_amount_bridged: number
          unlock_timestamp: number
          weiroll_wallet: string
        }
        Update: {
          account_address?: string
          amount_deposited?: number
          bridge_transaction_hash?: string
          ccdm_nonce?: number
          deposit_leaf?: string
          deposit_transaction_hash?: string
          destination_chain_id?: number
          dust_token_amounts?: number[] | null
          dust_token_ids?: string[] | null
          execute_transaction_hash?: string
          id?: string
          market_id?: string
          merkle_deposit_nonce?: number
          merkle_proof?: string[]
          process_transaction_hash?: string
          raw_market_ref_id?: string
          raw_offer_ref_id?: string
          raw_weiroll_wallet_withdrawn_destination_ref_id?: string
          receipt_token_amount?: number
          receipt_token_id?: string
          reward_style?: string
          source_chain_id?: number
          token_0_amount?: number
          token_0_id?: string
          token_1_amounts?: number[]
          token_1_ids?: string[]
          total_amount_bridged?: number
          unlock_timestamp?: number
          weiroll_wallet?: string
        }
        Relationships: []
      }
      boyco_static: {
        Row: {
          id: string
          locked_quantity: number
          locked_quantity_usd: number
        }
        Insert: {
          id: string
          locked_quantity: number
          locked_quantity_usd: number
        }
        Update: {
          id?: string
          locked_quantity?: number
          locked_quantity_usd?: number
        }
        Relationships: []
      }
      chains: {
        Row: {
          chain_id: number
          id: string
          image: string
          is_supported: boolean
          name: string
          native_token_id: string | null
          symbol: string
          type: string | null
        }
        Insert: {
          chain_id: number
          id: string
          image: string
          is_supported?: boolean
          name: string
          native_token_id?: string | null
          symbol?: string
          type?: string | null
        }
        Update: {
          chain_id?: number
          id?: string
          image?: string
          is_supported?: boolean
          name?: string
          native_token_id?: string | null
          symbol?: string
          type?: string | null
        }
        Relationships: []
      }
      contracts: {
        Row: {
          abi: Json | null
          address: string
          chain_id: number
          contract_name: string | null
          id: string
          image: string | null
          implementation_id: string | null
          is_whitelisted: boolean
          label: string | null
          proxy_type: string | null
          source: string
          type: string | null
          updated_at: string
        }
        Insert: {
          abi?: Json | null
          address: string
          chain_id: number
          contract_name?: string | null
          id: string
          image?: string | null
          implementation_id?: string | null
          is_whitelisted?: boolean
          label?: string | null
          proxy_type?: string | null
          source?: string
          type?: string | null
          updated_at?: string
        }
        Update: {
          abi?: Json | null
          address?: string
          chain_id?: number
          contract_name?: string | null
          id?: string
          image?: string | null
          implementation_id?: string | null
          is_whitelisted?: boolean
          label?: string | null
          proxy_type?: string | null
          source?: string
          type?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      custom_token_quotes: {
        Row: {
          decimals: number
          fdv: number
          last_updated: string
          price: number
          token_id: string
          total_supply: number
        }
        Insert: {
          decimals: number
          fdv: number
          last_updated?: string
          price: number
          token_id: string
          total_supply: number
        }
        Update: {
          decimals?: number
          fdv?: number
          last_updated?: string
          price?: number
          token_id?: string
          total_supply?: number
        }
        Relationships: []
      }
      market_userdata: {
        Row: {
          category: string | null
          description: string | null
          id: string
          is_verified: boolean
          last_updated: string
          name: string | null
        }
        Insert: {
          category?: string | null
          description?: string | null
          id: string
          is_verified?: boolean
          last_updated?: string
          name?: string | null
        }
        Update: {
          category?: string | null
          description?: string | null
          id?: string
          is_verified?: boolean
          last_updated?: string
          name?: string | null
        }
        Relationships: []
      }
      raw_account_balances_recipe: {
        Row: {
          _gs_chain: string
          _gs_gid: string
          account_address: string
          block_range: string
          chain_id: number
          frontend_fee_amounts: number[]
          id: string
          incentives_given_amount: number[]
          incentives_given_ids: string[]
          incentives_received_amount: number[]
          incentives_received_ids: string[]
          input_token_id: string
          market_id: string
          market_type: number
          protocol_fee_amounts: number[]
          quantity_given_amount: number
          quantity_received_amount: number
          vid: number
        }
        Insert: {
          _gs_chain: string
          _gs_gid: string
          account_address: string
          block_range: string
          chain_id: number
          frontend_fee_amounts: number[]
          id: string
          incentives_given_amount: number[]
          incentives_given_ids: string[]
          incentives_received_amount: number[]
          incentives_received_ids: string[]
          input_token_id: string
          market_id: string
          market_type: number
          protocol_fee_amounts: number[]
          quantity_given_amount: number
          quantity_received_amount: number
          vid: number
        }
        Update: {
          _gs_chain?: string
          _gs_gid?: string
          account_address?: string
          block_range?: string
          chain_id?: number
          frontend_fee_amounts?: number[]
          id?: string
          incentives_given_amount?: number[]
          incentives_given_ids?: string[]
          incentives_received_amount?: number[]
          incentives_received_ids?: string[]
          input_token_id?: string
          market_id?: string
          market_type?: number
          protocol_fee_amounts?: number[]
          quantity_given_amount?: number
          quantity_received_amount?: number
          vid?: number
        }
        Relationships: []
      }
      raw_account_balances_vault: {
        Row: {
          _gs_chain: string
          _gs_gid: string
          account_address: string
          block_range: string
          chain_id: number
          id: string
          incentives_given_amount: number[]
          incentives_given_ids: string[]
          input_token_id: string
          market_id: string
          market_type: number
          quantity_given_amount: number
          quantity_received_amount: number
          vid: number
        }
        Insert: {
          _gs_chain: string
          _gs_gid: string
          account_address: string
          block_range: string
          chain_id: number
          id: string
          incentives_given_amount: number[]
          incentives_given_ids: string[]
          input_token_id: string
          market_id: string
          market_type: number
          quantity_given_amount: number
          quantity_received_amount: number
          vid: number
        }
        Update: {
          _gs_chain?: string
          _gs_gid?: string
          account_address?: string
          block_range?: string
          chain_id?: number
          id?: string
          incentives_given_amount?: number[]
          incentives_given_ids?: string[]
          input_token_id?: string
          market_id?: string
          market_type?: number
          quantity_given_amount?: number
          quantity_received_amount?: number
          vid?: number
        }
        Relationships: []
      }
      raw_activities: {
        Row: {
          _gs_chain: string
          _gs_gid: string
          account_address: string
          activity_type: string
          block_number: number
          block_range: string
          block_timestamp: number
          chain_id: number
          id: string
          log_index: number
          market_id: string
          market_type: number
          tokens_given_amount: number[]
          tokens_given_ids: string[]
          tokens_received_amount: number[]
          tokens_received_ids: string[]
          transaction_hash: string
          vid: number
        }
        Insert: {
          _gs_chain: string
          _gs_gid: string
          account_address: string
          activity_type: string
          block_number: number
          block_range: string
          block_timestamp: number
          chain_id: number
          id: string
          log_index: number
          market_id: string
          market_type: number
          tokens_given_amount: number[]
          tokens_given_ids: string[]
          tokens_received_amount: number[]
          tokens_received_ids: string[]
          transaction_hash: string
          vid: number
        }
        Update: {
          _gs_chain?: string
          _gs_gid?: string
          account_address?: string
          activity_type?: string
          block_number?: number
          block_range?: string
          block_timestamp?: number
          chain_id?: number
          id?: string
          log_index?: number
          market_id?: string
          market_type?: number
          tokens_given_amount?: number[]
          tokens_given_ids?: string[]
          tokens_received_amount?: number[]
          tokens_received_ids?: string[]
          transaction_hash?: string
          vid?: number
        }
        Relationships: []
      }
      raw_authorized_point_issuers: {
        Row: {
          _gs_chain: string
          _gs_gid: string
          account_address: string
          block_range: string
          chain_id: number
          contract_address: string
          id: string
          vid: number
        }
        Insert: {
          _gs_chain: string
          _gs_gid: string
          account_address: string
          block_range: string
          chain_id: number
          contract_address: string
          id: string
          vid: number
        }
        Update: {
          _gs_chain?: string
          _gs_gid?: string
          account_address?: string
          block_range?: string
          chain_id?: number
          contract_address?: string
          id?: string
          vid?: number
        }
        Relationships: []
      }
      raw_awards: {
        Row: {
          _gs_chain: string
          _gs_gid: string
          amount: number
          block_number: number
          block_range: string
          block_timestamp: number
          chain_id: number
          contract_address: string
          from: string
          id: string
          log_index: number
          to: string
          transaction_hash: string
          vid: number
        }
        Insert: {
          _gs_chain: string
          _gs_gid: string
          amount: number
          block_number: number
          block_range: string
          block_timestamp: number
          chain_id: number
          contract_address: string
          from: string
          id: string
          log_index: number
          to: string
          transaction_hash: string
          vid: number
        }
        Update: {
          _gs_chain?: string
          _gs_gid?: string
          amount?: number
          block_number?: number
          block_range?: string
          block_timestamp?: number
          chain_id?: number
          contract_address?: string
          from?: string
          id?: string
          log_index?: number
          to?: string
          transaction_hash?: string
          vid?: number
        }
        Relationships: []
      }
      raw_bridge_ref_destination_duplicate: {
        Row: {
          _gs_chain: string
          _gs_gid: string
          block_range: string
          ccdm_nonce: number
          chain_id: number
          deposit_leaf: string
          id: string
          vid: number
          withdraw_transaction_hash: string
        }
        Insert: {
          _gs_chain: string
          _gs_gid: string
          block_range: string
          ccdm_nonce: number
          chain_id: number
          deposit_leaf: string
          id: string
          vid: number
          withdraw_transaction_hash: string
        }
        Update: {
          _gs_chain?: string
          _gs_gid?: string
          block_range?: string
          ccdm_nonce?: number
          chain_id?: number
          deposit_leaf?: string
          id?: string
          vid?: number
          withdraw_transaction_hash?: string
        }
        Relationships: []
      }
      raw_bridge_ref_source_duplicate: {
        Row: {
          _gs_chain: string
          _gs_gid: string
          block_range: string
          bridge_transaction_hash: string
          ccdm_nonce: number
          chain_id: number
          deposit_leaf: string
          id: string
          total_amount_bridged: number
          vid: number
        }
        Insert: {
          _gs_chain: string
          _gs_gid: string
          block_range: string
          bridge_transaction_hash: string
          ccdm_nonce: number
          chain_id: number
          deposit_leaf: string
          id: string
          total_amount_bridged: number
          vid: number
        }
        Update: {
          _gs_chain?: string
          _gs_gid?: string
          block_range?: string
          bridge_transaction_hash?: string
          ccdm_nonce?: number
          chain_id?: number
          deposit_leaf?: string
          id?: string
          total_amount_bridged?: number
          vid?: number
        }
        Relationships: []
      }
      raw_external_incentives: {
        Row: {
          chain_id: number
          id: string
          market_id: string
          market_type: number
          token_ids: string[] | null
          updated_at: string
          values: string[] | null
        }
        Insert: {
          chain_id: number
          id: string
          market_id: string
          market_type: number
          token_ids?: string[] | null
          updated_at: string
          values?: string[] | null
        }
        Update: {
          chain_id?: number
          id?: string
          market_id?: string
          market_type?: number
          token_ids?: string[] | null
          updated_at?: string
          values?: string[] | null
        }
        Relationships: []
      }
      raw_market_destination_duplicate: {
        Row: {
          _gs_chain: string
          _gs_gid: string
          block_range: string
          chain_id: number
          id: string
          input_token_ids: string[] | null
          market_id: string
          market_type: number
          receipt_token_id: string | null
          unlock_timestamp: number | null
          vid: number
        }
        Insert: {
          _gs_chain: string
          _gs_gid: string
          block_range: string
          chain_id: number
          id: string
          input_token_ids?: string[] | null
          market_id: string
          market_type: number
          receipt_token_id?: string | null
          unlock_timestamp?: number | null
          vid: number
        }
        Update: {
          _gs_chain?: string
          _gs_gid?: string
          block_range?: string
          chain_id?: number
          id?: string
          input_token_ids?: string[] | null
          market_id?: string
          market_type?: number
          receipt_token_id?: string | null
          unlock_timestamp?: number | null
          vid?: number
        }
        Relationships: []
      }
      raw_market_recipe_destination: {
        Row: {
          _gs_chain: string
          _gs_gid: string
          block_range: string
          destination_chain_id: number
          id: string
          input_token_ids: string[] | null
          market_id: string
          market_type: number
          receipt_token_id: string | null
          source_chain_id: number
          unlock_timestamp: number | null
          vid: number
        }
        Insert: {
          _gs_chain: string
          _gs_gid: string
          block_range: string
          destination_chain_id: number
          id: string
          input_token_ids?: string[] | null
          market_id: string
          market_type: number
          receipt_token_id?: string | null
          source_chain_id: number
          unlock_timestamp?: number | null
          vid: number
        }
        Update: {
          _gs_chain?: string
          _gs_gid?: string
          block_range?: string
          destination_chain_id?: number
          id?: string
          input_token_ids?: string[] | null
          market_id?: string
          market_type?: number
          receipt_token_id?: string | null
          source_chain_id?: number
          unlock_timestamp?: number | null
          vid?: number
        }
        Relationships: []
      }
      raw_market_token_balance_recipe: {
        Row: {
          _gs_chain: string
          _gs_gid: string
          block_range: string
          chain_id: number
          id: string
          market_id: string
          market_type: number
          raw_market_ref_id: string
          token_amount: number
          token_class: number
          token_id: string
          vid: number
        }
        Insert: {
          _gs_chain: string
          _gs_gid: string
          block_range: string
          chain_id: number
          id: string
          market_id: string
          market_type: number
          raw_market_ref_id: string
          token_amount: number
          token_class: number
          token_id: string
          vid: number
        }
        Update: {
          _gs_chain?: string
          _gs_gid?: string
          block_range?: string
          chain_id?: number
          id?: string
          market_id?: string
          market_type?: number
          raw_market_ref_id?: string
          token_amount?: number
          token_class?: number
          token_id?: string
          vid?: number
        }
        Relationships: []
      }
      raw_markets: {
        Row: {
          _gs_chain: string
          _gs_gid: string
          block_number: number
          block_range: string
          block_timestamp: number
          chain_id: number
          end_timestamps: number[]
          frontend_fee: number
          id: string
          incentives_asked_amount: number[]
          incentives_asked_ids: string[]
          incentives_offered_amount: number[]
          incentives_offered_ids: string[]
          incentives_rates: number[]
          input_token_id: string
          lockup_time: number
          log_index: number
          market_id: string
          market_type: number
          owner: string
          quantity_asked: number
          quantity_asked_filled: number
          quantity_offered: number
          quantity_offered_filled: number
          reward_style: number
          start_timestamps: number[]
          transaction_hash: string
          underlying_vault_address: string
          vid: number
          volume_amounts: number[]
          volume_token_ids: string[]
        }
        Insert: {
          _gs_chain: string
          _gs_gid: string
          block_number: number
          block_range: string
          block_timestamp: number
          chain_id: number
          end_timestamps: number[]
          frontend_fee: number
          id: string
          incentives_asked_amount: number[]
          incentives_asked_ids: string[]
          incentives_offered_amount: number[]
          incentives_offered_ids: string[]
          incentives_rates: number[]
          input_token_id: string
          lockup_time: number
          log_index: number
          market_id: string
          market_type: number
          owner: string
          quantity_asked: number
          quantity_asked_filled: number
          quantity_offered: number
          quantity_offered_filled: number
          reward_style: number
          start_timestamps: number[]
          transaction_hash: string
          underlying_vault_address: string
          vid: number
          volume_amounts: number[]
          volume_token_ids: string[]
        }
        Update: {
          _gs_chain?: string
          _gs_gid?: string
          block_number?: number
          block_range?: string
          block_timestamp?: number
          chain_id?: number
          end_timestamps?: number[]
          frontend_fee?: number
          id?: string
          incentives_asked_amount?: number[]
          incentives_asked_ids?: string[]
          incentives_offered_amount?: number[]
          incentives_offered_ids?: string[]
          incentives_rates?: number[]
          input_token_id?: string
          lockup_time?: number
          log_index?: number
          market_id?: string
          market_type?: number
          owner?: string
          quantity_asked?: number
          quantity_asked_filled?: number
          quantity_offered?: number
          quantity_offered_filled?: number
          reward_style?: number
          start_timestamps?: number[]
          transaction_hash?: string
          underlying_vault_address?: string
          vid?: number
          volume_amounts?: number[]
          volume_token_ids?: string[]
        }
        Relationships: []
      }
      raw_merkle_deposit_made_duplicate: {
        Row: {
          _gs_chain: string
          _gs_gid: string
          amount_deposited: number
          block: number
          block_number: number
          block_timestamp: number
          chain_id: number
          deposit_leaf: string
          deposit_leaf_index: number
          depositor: string
          id: string
          last_ccdm_nonce_bridged: number
          market_hash: string
          merkle_deposit_nonce: number
          merkle_proof: string[] | null
          transaction_hash: string
          updated_merkle_root: string
          vid: number
          weiroll_wallet: string
        }
        Insert: {
          _gs_chain: string
          _gs_gid: string
          amount_deposited: number
          block: number
          block_number: number
          block_timestamp: number
          chain_id: number
          deposit_leaf: string
          deposit_leaf_index: number
          depositor: string
          id: string
          last_ccdm_nonce_bridged: number
          market_hash: string
          merkle_deposit_nonce: number
          merkle_proof?: string[] | null
          transaction_hash: string
          updated_merkle_root: string
          vid: number
          weiroll_wallet: string
        }
        Update: {
          _gs_chain?: string
          _gs_gid?: string
          amount_deposited?: number
          block?: number
          block_number?: number
          block_timestamp?: number
          chain_id?: number
          deposit_leaf?: string
          deposit_leaf_index?: number
          depositor?: string
          id?: string
          last_ccdm_nonce_bridged?: number
          market_hash?: string
          merkle_deposit_nonce?: number
          merkle_proof?: string[] | null
          transaction_hash?: string
          updated_merkle_root?: string
          vid?: number
          weiroll_wallet?: string
        }
        Relationships: []
      }
      raw_native_yields: {
        Row: {
          annual_change_ratio: number | null
          annual_change_ratios: number[] | null
          chain_id: number
          id: string
          market_id: string
          market_type: number
          token_ids: string[] | null
          updated_at: string
        }
        Insert: {
          annual_change_ratio?: number | null
          annual_change_ratios?: number[] | null
          chain_id: number
          id: string
          market_id: string
          market_type: number
          token_ids?: string[] | null
          updated_at: string
        }
        Update: {
          annual_change_ratio?: number | null
          annual_change_ratios?: number[] | null
          chain_id?: number
          id?: string
          market_id?: string
          market_type?: number
          token_ids?: string[] | null
          updated_at?: string
        }
        Relationships: []
      }
      raw_offers: {
        Row: {
          _gs_chain: string
          _gs_gid: string
          block_number: number
          block_range: string
          block_timestamp: number
          chain_id: number
          creator: string
          expiry: number
          frontend_fee_amounts: number[]
          funding_vault: string
          id: string
          input_token_id: string
          is_cancelled: boolean
          is_valid: boolean | null
          log_index: number
          market_id: string
          market_type: number
          offer_id: string
          offer_side: number
          protocol_fee_amounts: number[]
          quantity: number
          quantity_remaining: number
          token_amounts: number[]
          token_ids: string[]
          transaction_hash: string
          vid: number
        }
        Insert: {
          _gs_chain: string
          _gs_gid: string
          block_number: number
          block_range: string
          block_timestamp: number
          chain_id: number
          creator: string
          expiry: number
          frontend_fee_amounts: number[]
          funding_vault: string
          id: string
          input_token_id: string
          is_cancelled: boolean
          is_valid?: boolean | null
          log_index: number
          market_id: string
          market_type: number
          offer_id: string
          offer_side: number
          protocol_fee_amounts: number[]
          quantity: number
          quantity_remaining: number
          token_amounts: number[]
          token_ids: string[]
          transaction_hash: string
          vid: number
        }
        Update: {
          _gs_chain?: string
          _gs_gid?: string
          block_number?: number
          block_range?: string
          block_timestamp?: number
          chain_id?: number
          creator?: string
          expiry?: number
          frontend_fee_amounts?: number[]
          funding_vault?: string
          id?: string
          input_token_id?: string
          is_cancelled?: boolean
          is_valid?: boolean | null
          log_index?: number
          market_id?: string
          market_type?: number
          offer_id?: string
          offer_side?: number
          protocol_fee_amounts?: number[]
          quantity?: number
          quantity_remaining?: number
          token_amounts?: number[]
          token_ids?: string[]
          transaction_hash?: string
          vid?: number
        }
        Relationships: []
      }
      raw_point_balances: {
        Row: {
          _gs_chain: string
          _gs_gid: string
          account_address: string
          amount: number
          block_range: string
          chain_id: number
          contract_address: string
          id: string
          vid: number
        }
        Insert: {
          _gs_chain: string
          _gs_gid: string
          account_address: string
          amount: number
          block_range: string
          chain_id: number
          contract_address: string
          id: string
          vid: number
        }
        Update: {
          _gs_chain?: string
          _gs_gid?: string
          account_address?: string
          amount?: number
          block_range?: string
          chain_id?: number
          contract_address?: string
          id?: string
          vid?: number
        }
        Relationships: []
      }
      raw_points: {
        Row: {
          _gs_chain: string
          _gs_gid: string
          block_number: number
          block_range: string
          block_timestamp: number
          chain_id: number
          contract_address: string
          decimals: number
          id: string
          log_index: number
          name: string
          owner: string
          symbol: string
          total_supply: number
          transaction_hash: string
          vid: number
        }
        Insert: {
          _gs_chain: string
          _gs_gid: string
          block_number: number
          block_range: string
          block_timestamp: number
          chain_id: number
          contract_address: string
          decimals: number
          id: string
          log_index: number
          name: string
          owner: string
          symbol: string
          total_supply: number
          transaction_hash: string
          vid: number
        }
        Update: {
          _gs_chain?: string
          _gs_gid?: string
          block_number?: number
          block_range?: string
          block_timestamp?: number
          chain_id?: number
          contract_address?: string
          decimals?: number
          id?: string
          log_index?: number
          name?: string
          owner?: string
          symbol?: string
          total_supply?: number
          transaction_hash?: string
          vid?: number
        }
        Relationships: []
      }
      raw_positions_recipe: {
        Row: {
          _gs_chain: string
          _gs_gid: string
          account_address: string
          ap: string
          block_number: number
          block_range: string
          block_timestamp: number
          chain_id: number
          frontend_fee_amounts: number[]
          id: string
          input_token_id: string
          ip: string
          is_claimed: boolean[]
          is_forfeited: boolean
          is_withdrawn: boolean
          log_index: number
          market_id: string
          offer_side: number
          protocol_fee_amounts: number[]
          quantity: number
          raw_offer_id: string
          raw_offer_side: number
          reward_style: number
          token_amounts: number[]
          token_ids: string[]
          transaction_hash: string
          unlock_timestamp: number
          vid: number
          weiroll_wallet: string
        }
        Insert: {
          _gs_chain: string
          _gs_gid: string
          account_address: string
          ap: string
          block_number: number
          block_range: string
          block_timestamp: number
          chain_id: number
          frontend_fee_amounts: number[]
          id: string
          input_token_id: string
          ip: string
          is_claimed: boolean[]
          is_forfeited: boolean
          is_withdrawn: boolean
          log_index: number
          market_id: string
          offer_side: number
          protocol_fee_amounts: number[]
          quantity: number
          raw_offer_id: string
          raw_offer_side: number
          reward_style: number
          token_amounts: number[]
          token_ids: string[]
          transaction_hash: string
          unlock_timestamp: number
          vid: number
          weiroll_wallet: string
        }
        Update: {
          _gs_chain?: string
          _gs_gid?: string
          account_address?: string
          ap?: string
          block_number?: number
          block_range?: string
          block_timestamp?: number
          chain_id?: number
          frontend_fee_amounts?: number[]
          id?: string
          input_token_id?: string
          ip?: string
          is_claimed?: boolean[]
          is_forfeited?: boolean
          is_withdrawn?: boolean
          log_index?: number
          market_id?: string
          offer_side?: number
          protocol_fee_amounts?: number[]
          quantity?: number
          raw_offer_id?: string
          raw_offer_side?: number
          reward_style?: number
          token_amounts?: number[]
          token_ids?: string[]
          transaction_hash?: string
          unlock_timestamp?: number
          vid?: number
          weiroll_wallet?: string
        }
        Relationships: []
      }
      raw_token_quotes: {
        Row: {
          fdv: number
          id: string
          last_updated: string
          price: number
          search_id: string
          source: string
          total_supply: number
        }
        Insert: {
          fdv: number
          id: string
          last_updated?: string
          price: number
          search_id: string
          source: string
          total_supply: number
        }
        Update: {
          fdv?: number
          id?: string
          last_updated?: string
          price?: number
          search_id?: string
          source?: string
          total_supply?: number
        }
        Relationships: []
      }
      raw_token_quotes_archive: {
        Row: {
          fdv: number
          id: string
          last_updated: string
          price: number
          search_id: string
          source: string
          total_supply: number
        }
        Insert: {
          fdv: number
          id: string
          last_updated: string
          price: number
          search_id: string
          source: string
          total_supply: number
        }
        Update: {
          fdv?: number
          id?: string
          last_updated?: string
          price?: number
          search_id?: string
          source?: string
          total_supply?: number
        }
        Relationships: []
      }
      raw_underlying_vaults: {
        Row: {
          chain_id: number
          curr_block_timestamp: string | null
          curr_total_assets: string | null
          curr_total_supply: string | null
          last_updated: string | null
          native_annual_change_ratio: number | null
          prev_block_timestamp: string | null
          prev_total_assets: string | null
          prev_total_supply: string | null
          retries: number
          underlying_vault_address: string
        }
        Insert: {
          chain_id: number
          curr_block_timestamp?: string | null
          curr_total_assets?: string | null
          curr_total_supply?: string | null
          last_updated?: string | null
          native_annual_change_ratio?: number | null
          prev_block_timestamp?: string | null
          prev_total_assets?: string | null
          prev_total_supply?: string | null
          retries?: number
          underlying_vault_address: string
        }
        Update: {
          chain_id?: number
          curr_block_timestamp?: string | null
          curr_total_assets?: string | null
          curr_total_supply?: string | null
          last_updated?: string | null
          native_annual_change_ratio?: number | null
          prev_block_timestamp?: string | null
          prev_total_assets?: string | null
          prev_total_supply?: string | null
          retries?: number
          underlying_vault_address?: string
        }
        Relationships: []
      }
      raw_underlying_yields: {
        Row: {
          annual_change_ratio: number | null
          chain_id: number
          id: string
          market_id: string
          market_type: number
          updated_at: string
        }
        Insert: {
          annual_change_ratio?: number | null
          chain_id: number
          id: string
          market_id: string
          market_type: number
          updated_at: string
        }
        Update: {
          annual_change_ratio?: number | null
          chain_id?: number
          id?: string
          market_id?: string
          market_type?: number
          updated_at?: string
        }
        Relationships: []
      }
      raw_weiroll_wallet_destination: {
        Row: {
          _gs_chain: string
          _gs_gid: string
          block_range: string
          ccdm_nonce: number
          destination_chain_id: number
          execute_transaction_hash: string | null
          id: string
          market_id: string
          process_transaction_hash: string
          raw_market_recipe_destination_ref_id: string
          receipt_token_amount: number | null
          source_chain_id: number
          vid: number
          weiroll_wallet: string
        }
        Insert: {
          _gs_chain: string
          _gs_gid: string
          block_range: string
          ccdm_nonce: number
          destination_chain_id: number
          execute_transaction_hash?: string | null
          id: string
          market_id: string
          process_transaction_hash: string
          raw_market_recipe_destination_ref_id: string
          receipt_token_amount?: number | null
          source_chain_id: number
          vid: number
          weiroll_wallet: string
        }
        Update: {
          _gs_chain?: string
          _gs_gid?: string
          block_range?: string
          ccdm_nonce?: number
          destination_chain_id?: number
          execute_transaction_hash?: string | null
          id?: string
          market_id?: string
          process_transaction_hash?: string
          raw_market_recipe_destination_ref_id?: string
          receipt_token_amount?: number | null
          source_chain_id?: number
          vid?: number
          weiroll_wallet?: string
        }
        Relationships: []
      }
      raw_weiroll_wallet_destination_duplicate: {
        Row: {
          _gs_chain: string
          _gs_gid: string
          block_range: string
          ccdm_nonce: number
          chain_id: number
          execute_transaction_hash: string | null
          id: string
          market_id: string
          process_transaction_hash: string
          receipt_token_amount: number | null
          vid: number
          weiroll_wallet: string
        }
        Insert: {
          _gs_chain: string
          _gs_gid: string
          block_range: string
          ccdm_nonce: number
          chain_id: number
          execute_transaction_hash?: string | null
          id: string
          market_id: string
          process_transaction_hash: string
          receipt_token_amount?: number | null
          vid: number
          weiroll_wallet: string
        }
        Update: {
          _gs_chain?: string
          _gs_gid?: string
          block_range?: string
          ccdm_nonce?: number
          chain_id?: number
          execute_transaction_hash?: string | null
          id?: string
          market_id?: string
          process_transaction_hash?: string
          receipt_token_amount?: number | null
          vid?: number
          weiroll_wallet?: string
        }
        Relationships: []
      }
      raw_weiroll_wallet_source: {
        Row: {
          _gs_chain: string
          _gs_gid: string
          amount_deposited: number
          block_range: string
          bridge_transaction_hash: string | null
          ccdm_nonce: number | null
          deposit_leaf: string
          deposit_transaction_hash: string
          destination_chain_id: number
          forfeit_transaction_hash: string | null
          id: string
          market_id: string
          merkle_deposit_nonce: number
          raw_market_recipe_destination_ref_id: string
          raw_market_ref_id: string
          raw_weiroll_wallet_destination_ref_id: string | null
          raw_weiroll_wallet_withdrawn_destination_ref_id: string | null
          source_chain_id: number
          total_amount_bridged: number | null
          vid: number
          weiroll_wallet: string
        }
        Insert: {
          _gs_chain: string
          _gs_gid: string
          amount_deposited: number
          block_range: string
          bridge_transaction_hash?: string | null
          ccdm_nonce?: number | null
          deposit_leaf: string
          deposit_transaction_hash: string
          destination_chain_id: number
          forfeit_transaction_hash?: string | null
          id: string
          market_id: string
          merkle_deposit_nonce: number
          raw_market_recipe_destination_ref_id: string
          raw_market_ref_id: string
          raw_weiroll_wallet_destination_ref_id?: string | null
          raw_weiroll_wallet_withdrawn_destination_ref_id?: string | null
          source_chain_id: number
          total_amount_bridged?: number | null
          vid: number
          weiroll_wallet: string
        }
        Update: {
          _gs_chain?: string
          _gs_gid?: string
          amount_deposited?: number
          block_range?: string
          bridge_transaction_hash?: string | null
          ccdm_nonce?: number | null
          deposit_leaf?: string
          deposit_transaction_hash?: string
          destination_chain_id?: number
          forfeit_transaction_hash?: string | null
          id?: string
          market_id?: string
          merkle_deposit_nonce?: number
          raw_market_recipe_destination_ref_id?: string
          raw_market_ref_id?: string
          raw_weiroll_wallet_destination_ref_id?: string | null
          raw_weiroll_wallet_withdrawn_destination_ref_id?: string | null
          source_chain_id?: number
          total_amount_bridged?: number | null
          vid?: number
          weiroll_wallet?: string
        }
        Relationships: []
      }
      raw_weiroll_wallet_source_duplicate: {
        Row: {
          _gs_chain: string
          _gs_gid: string
          amount_deposited: number
          block_range: string
          ccdm_nonce: number | null
          chain_id: number
          deposit_leaf: string
          deposit_transaction_hash: string
          id: string
          market_id: string
          vid: number
          weiroll_wallet: string
          withdraw_transaction_hash: string | null
        }
        Insert: {
          _gs_chain: string
          _gs_gid: string
          amount_deposited: number
          block_range: string
          ccdm_nonce?: number | null
          chain_id: number
          deposit_leaf: string
          deposit_transaction_hash: string
          id: string
          market_id: string
          vid: number
          weiroll_wallet: string
          withdraw_transaction_hash?: string | null
        }
        Update: {
          _gs_chain?: string
          _gs_gid?: string
          amount_deposited?: number
          block_range?: string
          ccdm_nonce?: number | null
          chain_id?: number
          deposit_leaf?: string
          deposit_transaction_hash?: string
          id?: string
          market_id?: string
          vid?: number
          weiroll_wallet?: string
          withdraw_transaction_hash?: string | null
        }
        Relationships: []
      }
      raw_weiroll_wallet_withdrawn_destination: {
        Row: {
          _gs_chain: string
          _gs_gid: string
          block_range: string
          id: string
          is_withdrawn: boolean
          vid: number
          withdraw_transaction_hash: string
        }
        Insert: {
          _gs_chain: string
          _gs_gid: string
          block_range: string
          id: string
          is_withdrawn: boolean
          vid: number
          withdraw_transaction_hash: string
        }
        Update: {
          _gs_chain?: string
          _gs_gid?: string
          block_range?: string
          id?: string
          is_withdrawn?: boolean
          vid?: number
          withdraw_transaction_hash?: string
        }
        Relationships: []
      }
      request_log: {
        Row: {
          id: number
          ip: unknown
          timestamp: string | null
        }
        Insert: {
          id?: number
          ip: unknown
          timestamp?: string | null
        }
        Update: {
          id?: number
          ip?: unknown
          timestamp?: string | null
        }
        Relationships: []
      }
      search_ids: {
        Row: {
          string_agg: string | null
        }
        Insert: {
          string_agg?: string | null
        }
        Update: {
          string_agg?: string | null
        }
        Relationships: []
      }
      telegrams: {
        Row: {
          auth_date: number
          first_name: string | null
          hash: string
          last_name: string | null
          photo_url: string | null
          telegram_id: number
          username: string
        }
        Insert: {
          auth_date: number
          first_name?: string | null
          hash: string
          last_name?: string | null
          photo_url?: string | null
          telegram_id: number
          username: string
        }
        Update: {
          auth_date?: number
          first_name?: string | null
          hash?: string
          last_name?: string | null
          photo_url?: string | null
          telegram_id?: number
          username?: string
        }
        Relationships: []
      }
      token_index: {
        Row: {
          chain_id: number
          contract_address: string
          decimals: number
          is_active: boolean
          last_updated: string
          name: string
          search_id: string
          source: string
          symbol: string
          token_id: string
        }
        Insert: {
          chain_id: number
          contract_address: string
          decimals?: number
          is_active?: boolean
          last_updated?: string
          name: string
          search_id: string
          source: string
          symbol: string
          token_id: string
        }
        Update: {
          chain_id?: number
          contract_address?: string
          decimals?: number
          is_active?: boolean
          last_updated?: string
          name?: string
          search_id?: string
          source?: string
          symbol?: string
          token_id?: string
        }
        Relationships: []
      }
      token_quotes_archive: {
        Row: {
          fully_diluted_market_cap: number
          last_updated: string
          market_cap: number
          price: number
          search_id: string
          source: string
          total_supply: number
          volume_24h: number
        }
        Insert: {
          fully_diluted_market_cap: number
          last_updated: string
          market_cap: number
          price: number
          search_id: string
          source: string
          total_supply: number
          volume_24h: number
        }
        Update: {
          fully_diluted_market_cap?: number
          last_updated?: string
          market_cap?: number
          price?: number
          search_id?: string
          source?: string
          total_supply?: number
          volume_24h?: number
        }
        Relationships: []
      }
      token_quotes_historical: {
        Row: {
          fully_diluted_market_cap: number
          last_updated: string
          market_cap: number
          price: number
          search_id: string
          source: string
          total_supply: number
          track_id: string
          volume_24h: number
        }
        Insert: {
          fully_diluted_market_cap: number
          last_updated: string
          market_cap: number
          price: number
          search_id: string
          source: string
          total_supply: number
          track_id?: string
          volume_24h: number
        }
        Update: {
          fully_diluted_market_cap?: number
          last_updated?: string
          market_cap?: number
          price?: number
          search_id?: string
          source?: string
          total_supply?: number
          track_id?: string
          volume_24h?: number
        }
        Relationships: []
      }
      user_hash_map: {
        Row: {
          created_at: string
          hash: string
          is_used: boolean
        }
        Insert: {
          created_at?: string
          hash: string
          is_used?: boolean
        }
        Update: {
          created_at?: string
          hash?: string
          is_used?: boolean
        }
        Relationships: []
      }
      user_telegram_map: {
        Row: {
          telegram_id: number
          username: string
        }
        Insert: {
          telegram_id: number
          username: string
        }
        Update: {
          telegram_id?: number
          username?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string
          email: string
          username: string
        }
        Insert: {
          created_at?: string
          email: string
          username: string
        }
        Update: {
          created_at?: string
          email?: string
          username?: string
        }
        Relationships: []
      }
      vaults: {
        Row: {
          accepted_asset: string | null
          active: boolean
          apy: number | null
          base_asset: string
          capacity: number | null
          chain_id: string
          created_at: string | null
          fee_structure: Json | null
          id: string
          name: string
          owner: string
          partner: string | null
          reward_assets: string[]
          tvl: number | null
          underlying_contract: string | null
          updated_at: string | null
        }
        Insert: {
          accepted_asset?: string | null
          active: boolean
          apy?: number | null
          base_asset: string
          capacity?: number | null
          chain_id: string
          created_at?: string | null
          fee_structure?: Json | null
          id: string
          name: string
          owner: string
          partner?: string | null
          reward_assets: string[]
          tvl?: number | null
          underlying_contract?: string | null
          updated_at?: string | null
        }
        Update: {
          accepted_asset?: string | null
          active?: boolean
          apy?: number | null
          base_asset?: string
          capacity?: number | null
          chain_id?: string
          created_at?: string | null
          fee_structure?: Json | null
          id?: string
          name?: string
          owner?: string
          partner?: string | null
          reward_assets?: string[]
          tvl?: number | null
          underlying_contract?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      wallet_breakdown: {
        Row: {
          account_address: string
          community_id: number
          id: string
          logo_url: string | null
          name: string | null
          native_token_id: string | null
          updated_at: string
          usd_value: number
          wrapped_token_id: string | null
        }
        Insert: {
          account_address: string
          community_id: number
          id: string
          logo_url?: string | null
          name?: string | null
          native_token_id?: string | null
          updated_at?: string
          usd_value: number
          wrapped_token_id?: string | null
        }
        Update: {
          account_address?: string
          community_id?: number
          id?: string
          logo_url?: string | null
          name?: string | null
          native_token_id?: string | null
          updated_at?: string
          usd_value?: number
          wrapped_token_id?: string | null
        }
        Relationships: []
      }
      wallet_user_map: {
        Row: {
          account_address: string
          username: string
        }
        Insert: {
          account_address: string
          username: string
        }
        Update: {
          account_address?: string
          username?: string
        }
        Relationships: []
      }
      wallets: {
        Row: {
          account_address: string
          balance: number
          updated_at: string
        }
        Insert: {
          account_address: string
          balance: number
          updated_at?: string
        }
        Update: {
          account_address?: string
          balance?: number
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      contract_search_index: {
        Row: {
          id: string | null
          search_id: string | null
        }
        Relationships: []
      }
      distinct_assets: {
        Row: {
          ids: string[] | null
          symbol: string | null
        }
        Relationships: []
      }
      distinct_incentives: {
        Row: {
          ids: string[] | null
          symbol: string | null
        }
        Relationships: []
      }
      enriched_markets: {
        Row: {
          annual_change_ratio: number | null
          annual_change_ratios: number[] | null
          base_end_timestamps: string[] | null
          base_incentive_amounts: number[] | null
          base_incentive_ids: string[] | null
          base_incentive_rates: string[] | null
          base_start_timestamps: string[] | null
          block_number: number | null
          block_timestamp: number | null
          category: string | null
          chain_id: number | null
          description: string | null
          external_incentive_ids: string[] | null
          external_incentive_values: string[] | null
          frontend_fee: string | null
          id: string | null
          incentive_amounts: string[] | null
          incentive_amounts_usd: number[] | null
          incentive_ids: string[] | null
          incentive_rates: string[] | null
          incentive_rates_usd: number[] | null
          incentive_token_fdv_values: number[] | null
          incentive_token_price_values: number[] | null
          incentive_token_total_supply_values: number[] | null
          input_token_fdv: number | null
          input_token_id: string | null
          input_token_price: number | null
          input_token_total_supply: number | null
          is_verified: boolean | null
          locked_quantity: string | null
          locked_quantity_usd: number | null
          lockup_time: string | null
          log_index: number | null
          market_id: string | null
          market_type: number | null
          name: string | null
          native_annual_change_ratio: number | null
          native_annual_change_ratios: number[] | null
          native_incentive_ids: string[] | null
          owner: string | null
          quantity_ap: string | null
          quantity_ap_usd: number | null
          quantity_ip: string | null
          quantity_ip_usd: number | null
          reward_style: number | null
          total_incentive_amounts_usd: number | null
          total_value_locked: number | null
          transaction_hash: string | null
          underlying_annual_change_ratio: number | null
          underlying_vault_address: string | null
        }
        Relationships: []
      }
      enriched_markets_stats: {
        Row: {
          description: string | null
          id: string | null
          incentive_amounts: number[] | null
          incentive_ids: string[] | null
          incentive_rates: number[] | null
          locked_quantity: number | null
          name: string | null
          quantity_ap: number | null
          quantity_ip: number | null
        }
        Relationships: []
      }
      enriched_royco_stats: {
        Row: {
          chain_id: number | null
          total_incentives: number | null
          total_tvl: number | null
          total_volume: number | null
        }
        Relationships: []
      }
      leaderboard: {
        Row: {
          balance: number | null
          created_at: string | null
          rank: number | null
          username: string | null
          wallets: string[] | null
        }
        Relationships: []
      }
      market_search_index: {
        Row: {
          id: string | null
          search_id: string | null
        }
        Relationships: []
      }
      search_index_contracts: {
        Row: {
          id: string | null
          search_id: string | null
        }
        Insert: {
          id?: string | null
          search_id?: never
        }
        Update: {
          id?: string | null
          search_id?: never
        }
        Relationships: []
      }
      token_quotes_latest: {
        Row: {
          decimals: number | null
          fdv: number | null
          price: number | null
          token_id: string | null
          total_supply: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      add_tokens: {
        Args: {
          token: string
        }
        Returns: undefined
      }
      check_request: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      clean_up_token_quotes_archive: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      clean_up_token_quotes_historical: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      cleanup_token_quotes_archive_batch: {
        Args: {
          batch_size?: number
        }
        Returns: undefined
      }
      delete_user_record: {
        Args: {
          in_username: string
        }
        Returns: undefined
      }
      get_account_balances_test: {
        Args: Record<PropertyKey, never>
        Returns: {
          market_id: string
        }[]
      }
      get_contracts: {
        Args: {
          chain_ids: number[]
          contract_addresses: string[]
        }
        Returns: {
          contract_id: string
          chain_id: number
          address: string
          source: string
          contract_name: string
          label: string
          type: string
          image: string
          updated_at: string
          abi: Json
          implementation_id: string
          proxy_type: string
        }[]
      }
      get_enriched_account_balances_recipe_in_market: {
        Args: {
          in_chain_id: number
          in_market_id: string
          in_account_address: string
          custom_token_data?: Json
        }
        Returns: {
          input_token_id: string
          input_token_price: number
          input_token_fdv: number
          input_token_total_supply: number
          quantity_ap: string
          quantity_ip: string
          incentives_ids_ap: string[]
          incentives_price_values_ap: number[]
          incentives_fdv_values_ap: number[]
          incentives_total_supply_values_ap: number[]
          incentives_amount_ap: string[]
          incentives_ids_ip: string[]
          incentives_price_values_ip: number[]
          incentives_fdv_values_ip: number[]
          incentives_total_supply_values_ip: number[]
          incentives_amount_ip: string[]
          protocol_fee_amounts: string[]
          frontend_fee_amounts: string[]
        }[]
      }
      get_enriched_account_balances_vault_in_market: {
        Args: {
          in_chain_id: number
          in_market_id: string
          in_account_address: string
          custom_token_data?: Json
        }
        Returns: {
          input_token_id: string
          input_token_price: number
          input_token_fdv: number
          input_token_total_supply: number
          quantity_ap: string
          quantity_ip: string
          incentives_ids_ap: string[]
          incentives_price_values_ap: number[]
          incentives_fdv_values_ap: number[]
          incentives_total_supply_values_ap: number[]
          incentives_amount_ap: string[]
          incentives_ids_ip: string[]
          incentives_price_values_ip: number[]
          incentives_fdv_values_ip: number[]
          incentives_total_supply_values_ip: number[]
          incentives_amount_ip: string[]
        }[]
      }
      get_enriched_markets: {
        Args: {
          chain_id?: number
          market_type?: number
          market_id?: string
          custom_token_data?: Json
          page_index?: number
          page_size?: number
          filters?: string
          sorting?: string
          search_key?: string
          is_verified?: boolean
          category?: string
        }
        Returns: Database["public"]["CompositeTypes"]["enriched_markets_return_type"]
      }
      get_enriched_markets_refactor: {
        Args: {
          chain_id?: number
          market_type?: number
          market_id?: string
          custom_token_data?: Json
          page_index?: number
          page_size?: number
          filters?: string
          sorting?: string
          search_key?: string
          is_verified?: boolean
          category?: string
        }
        Returns: Database["public"]["CompositeTypes"]["enriched_markets_return_type_refactor"]
      }
      get_enriched_markets_test: {
        Args: {
          chain_id?: number
          market_type?: number
          market_id?: string
          custom_token_data?: Database["public"]["CompositeTypes"]["token_data_type"][]
          page_index?: number
          page_size?: number
          filters?: string
          sorting?: string
          search_key?: string
          is_verified?: boolean
          category?: string
        }
        Returns: Database["public"]["CompositeTypes"]["enriched_markets_return_type_test"]
      }
      get_enriched_markets_view: {
        Args: {
          chain_id?: number
          market_type?: number
          market_id?: string
          custom_token_data?: Json
          page_index?: number
          page_size?: number
          filters?: string
          sorting?: string
          search_key?: string
          is_verified?: boolean
          category?: string
        }
        Returns: Database["public"]["CompositeTypes"]["enriched_markets_return_type"]
      }
      get_enriched_offers: {
        Args: {
          chain_id?: number
          market_type?: number
          market_id?: string
          creator?: string
          can_be_filled?: boolean
          custom_token_data?: Json
          page_index?: number
          page_size?: number
          filters?: string
          sorting?: string
        }
        Returns: Database["public"]["CompositeTypes"]["enriched_offers_return_type"]
      }
      get_enriched_positions_boyco: {
        Args: {
          account_address: string
          market_id?: string
          page_index?: number
          page_size?: number
          filters?: string
          sorting?: string
        }
        Returns: Database["public"]["CompositeTypes"]["enriched_positions_boyco_return_type"]
      }
      get_enriched_positions_recipe: {
        Args: {
          account_address: string
          chain_id?: number
          market_id?: string
          custom_token_data?: Json
          page_index?: number
          page_size?: number
          filters?: string
          sorting?: string
        }
        Returns: Database["public"]["CompositeTypes"]["enriched_positions_recipe_return_type"]
      }
      get_enriched_positions_vault: {
        Args: {
          account_address: string
          chain_id?: number
          market_id?: string
          custom_token_data?: Json
          page_index?: number
          page_size?: number
          filters?: string
          sorting?: string
        }
        Returns: Database["public"]["CompositeTypes"]["enriched_positions_vault_return_type"]
      }
      get_enriched_royco_stats: {
        Args: {
          custom_token_data?: Json
        }
        Returns: Database["public"]["CompositeTypes"]["enriched_royco_stats_data_type"][]
      }
      get_highest_offers_recipe: {
        Args: {
          in_chain_id: number
          in_market_id: string
        }
        Returns: {
          offer_id: string
          offer_side: number
          token_amounts: number[]
          token_ids: string[]
          quantity: number
          quantity_remaining: number
          is_valid: boolean
          block_timestamp: number
          incentive_value_usd: number
          quantity_value_usd: number
          change_ratio: number
          rank: number
        }[]
      }
      get_market_offers: {
        Args: {
          in_chain_id: number
          in_market_type: number
          in_market_id: string
          in_offer_side: number
          in_quantity: string
          custom_token_data?: Json
          in_incentive_ids?: string[]
          in_incentive_amounts?: string[]
        }
        Returns: {
          id: string
          market_id: string
          offer_id: string
          offer_side: number
          expiry: string
          funding_vault: string
          creator: string
          input_token_id: string
          quantity: string
          quantity_remaining: string
          token_ids: string[]
          token_amounts: string[]
          protocol_fee_amounts: string[]
          frontend_fee_amounts: string[]
          is_valid: boolean
          block_timestamp: number
          incentive_value_usd: number
          quantity_value_usd: number
          change_percent: number
          rank: number
          fill_quantity: string
        }[]
      }
      get_market_offers2: {
        Args: {
          in_chain_id: number
          in_market_type: number
          in_market_id: string
          in_offer_side: number
          in_quantity: string
          custom_token_data?: Json
          in_incentive_ids?: string[]
          in_incentive_amounts?: string[]
        }
        Returns: {
          id: string
          market_id: string
          offer_id: string
          offer_side: number
          expiry: string
          funding_vault: string
          creator: string
          input_token_id: string
          quantity: string
          quantity_remaining: string
          token_ids: string[]
          token_amounts: string[]
          protocol_fee_amounts: string[]
          frontend_fee_amounts: string[]
          is_valid: boolean
          block_timestamp: number
          incentive_value_usd: number
          quantity_value_usd: number
          change_percent: number
          rank: number
          fill_quantity: string
        }[]
      }
      get_token_quotes: {
        Args: {
          token_ids: string[]
          custom_token_data?: Json
        }
        Returns: {
          token_id: string
          decimals: number
          price: number
          total_supply: number
          fdv: number
        }[]
      }
      get_token_quotes_test: {
        Args: {
          token_ids: string[]
          custom_token_data?: Json
        }
        Returns: {
          token_id: string
          decimals: number
          price: number
          total_supply: number
          fdv: number
        }[]
      }
      get_top_offers_recipe: {
        Args: {
          in_chain_id: number
          in_market_id: string
        }
        Returns: {
          offer_id: string
          offer_type: number
          tokens_amount: number[]
          tokens_ids: string[]
          quantity: number
          quantity_remaining: number
          is_valid: boolean
          block_timestamp: number
          incentive_value_usd: number
          quantity_value_usd: number
          change_percent: number
          rank: number
        }[]
      }
      get_user_info: {
        Args: {
          in_account_address: string
        }
        Returns: {
          username: string
          email: string
          wallets: string[]
          created_at: string
        }[]
      }
      get_validation_offers: {
        Args: {
          offer_ids: string[]
        }
        Returns: {
          id: string
          chain_id: number
          market_type: number
          market_id: string
          offer_side: number
          creator: string
          funding_vault: string
          input_token_id: string
          quantity_remaining: string
        }[]
      }
      insert_underlying_vaults: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      process_update_queue: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      refresh_token_quotes: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      refresh_wallet_data: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      search_contracts: {
        Args: {
          search_key: string
          sorting: string
          filters: string
          page_index: number
          page_size: number
        }
        Returns: Database["public"]["CompositeTypes"]["search_contracts_return"]
      }
      sync_market_userdata: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      sync_raw_native_yields: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      sync_token_index: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      sync_token_userdata: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      update_raw_markets_by_recipe_key: {
        Args: {
          recipe_key: string
          market_key: string
        }
        Returns: undefined
      }
      update_raw_markets_token_data:
        | {
            Args: {
              recipe_key: string
            }
            Returns: undefined
          }
        | {
            Args: {
              recipe_key: string
              is_cancelled: boolean
            }
            Returns: undefined
          }
        | {
            Args: {
              recipe_key: string
              market_key: string
            }
            Returns: undefined
          }
        | {
            Args: {
              recipe_key: string
              market_key: string
              order_type: number
            }
            Returns: undefined
          }
      update_token_price: {
        Args: Record<PropertyKey, never>
        Returns: {
          token_id: string
          current_price: number
          last_updated: string
        }[]
      }
      update_token_quotes_historical_coingecko: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      update_token_quotes_historical_coinmarketcap: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      custom_royco_pools_return: {
        data: Json | null
        count: number | null
      }
      enriched_market_data_type: {
        id: string | null
        chain_id: number | null
        market_type: number | null
        market_id: string | null
        creator: string | null
        input_token_id: string | null
        lockup_time: string | null
        frontend_fee: string | null
        reward_style: number | null
        transaction_hash: string | null
        block_number: number | null
        block_timestamp: number | null
        log_index: number | null
        underlying_vault_address: string | null
        base_incentive_ids: string[] | null
        base_incentive_amounts: string[] | null
        start_timestamps: string[] | null
        end_timestamps: string[] | null
        name: string | null
        description: string | null
        quantity: string | null
        locked_quantity: string | null
        incentive_ids: string[] | null
        incentive_amounts: string[] | null
        incentive_rates: string[] | null
        input_token_price: number | null
        input_token_fdv: number | null
        input_token_total_supply: number | null
        incentive_token_price_values: number[] | null
        incentive_token_total_supply_values: number[] | null
        incentive_token_fdv_values: number[] | null
        incentive_amounts_usd: number[] | null
        incentive_rates_usd: number[] | null
        quantity_usd: number | null
        locked_quantity_usd: number | null
        total_incentive_amounts_usd: number | null
        annual_change_ratios: number[] | null
        annual_change_ratio: number | null
      }
      enriched_markets_data_type: {
        id: string | null
        chain_id: number | null
        market_type: number | null
        market_id: string | null
        owner: string | null
        input_token_id: string | null
        lockup_time: string | null
        frontend_fee: string | null
        reward_style: number | null
        transaction_hash: string | null
        block_number: number | null
        block_timestamp: number | null
        log_index: number | null
        underlying_vault_address: string | null
        base_incentive_ids: string[] | null
        base_incentive_amounts: string[] | null
        base_start_timestamps: string[] | null
        base_end_timestamps: string[] | null
        base_incentive_rates: string[] | null
        name: string | null
        description: string | null
        is_verified: boolean | null
        category: string | null
        quantity_ap: string | null
        quantity_ip: string | null
        locked_quantity: string | null
        incentive_ids: string[] | null
        incentive_amounts: string[] | null
        incentive_rates: string[] | null
        input_token_price: number | null
        input_token_fdv: number | null
        input_token_total_supply: number | null
        incentive_token_price_values: number[] | null
        incentive_token_total_supply_values: number[] | null
        incentive_token_fdv_values: number[] | null
        incentive_amounts_usd: number[] | null
        incentive_rates_usd: number[] | null
        quantity_ap_usd: number | null
        quantity_ip_usd: number | null
        locked_quantity_usd: number | null
        total_incentive_amounts_usd: number | null
        total_value_locked: number | null
        native_incentive_ids: string[] | null
        native_annual_change_ratios: number[] | null
        native_annual_change_ratio: number | null
        external_incentive_ids: string[] | null
        external_incentive_values: string[] | null
        underlying_annual_change_ratio: number | null
        annual_change_ratios: number[] | null
        annual_change_ratio: number | null
      }
      enriched_markets_data_type_refactor: {
        id: string | null
        chain_id: number | null
        market_type: number | null
        market_id: string | null
        owner: string | null
        input_token_id: string | null
        lockup_time: string | null
        frontend_fee: string | null
        reward_style: number | null
        transaction_hash: string | null
        block_number: number | null
        block_timestamp: number | null
        log_index: number | null
        underlying_vault_address: string | null
        base_incentive_ids: string[] | null
        base_incentive_amounts: string[] | null
        base_start_timestamps: string[] | null
        base_end_timestamps: string[] | null
        base_incentive_rates: string[] | null
        name: string | null
        description: string | null
        is_verified: boolean | null
        category: string | null
        quantity_ap: string | null
        quantity_ip: string | null
        locked_quantity: string | null
        incentive_ids: string[] | null
        incentive_amounts: string[] | null
        incentive_rates: string[] | null
        input_token_price: number | null
        input_token_fdv: number | null
        input_token_total_supply: number | null
        incentive_token_price_values: number[] | null
        incentive_token_total_supply_values: number[] | null
        incentive_token_fdv_values: number[] | null
        incentive_amounts_usd: number[] | null
        incentive_rates_usd: number[] | null
        quantity_ap_usd: number | null
        quantity_ip_usd: number | null
        locked_quantity_usd: number | null
        total_incentive_amounts_usd: number | null
        total_value_locked: number | null
        native_incentive_ids: string[] | null
        native_annual_change_ratios: number[] | null
        native_annual_change_ratio: number | null
        external_incentive_ids: string[] | null
        external_incentive_values: string[] | null
        underlying_annual_change_ratio: number | null
        annual_change_ratios: number[] | null
        annual_change_ratio: number | null
      }
      enriched_markets_data_type_test: {
        id: string | null
        chain_id: number | null
        market_type: number | null
        market_id: string | null
        owner: string | null
        input_token_id: string | null
        lockup_time: string | null
        frontend_fee: string | null
        reward_style: number | null
        transaction_hash: string | null
        block_number: number | null
        block_timestamp: number | null
        log_index: number | null
        underlying_vault_address: string | null
        base_incentive_ids: string[] | null
        base_incentive_amounts: string[] | null
        base_start_timestamps: string[] | null
        base_end_timestamps: string[] | null
        base_incentive_rates: string[] | null
        name: string | null
        description: string | null
        is_verified: boolean | null
        category: string | null
        quantity_ap: string | null
        quantity_ip: string | null
        locked_quantity: string | null
        incentive_ids: string[] | null
        incentive_amounts: string[] | null
        incentive_rates: string[] | null
        input_token_price: number | null
        input_token_fdv: number | null
        input_token_total_supply: number | null
        incentive_token_price_values: number[] | null
        incentive_token_total_supply_values: number[] | null
        incentive_token_fdv_values: number[] | null
        incentive_amounts_usd: number[] | null
        incentive_rates_usd: number[] | null
        quantity_ap_usd: number | null
        quantity_ip_usd: number | null
        locked_quantity_usd: number | null
        total_incentive_amounts_usd: number | null
        total_value_locked: number | null
        native_incentive_ids: string[] | null
        native_annual_change_ratios: number[] | null
        native_annual_change_ratio: number | null
        external_incentive_ids: string[] | null
        external_incentive_values: string[] | null
        underlying_annual_change_ratio: number | null
        annual_change_ratios: number[] | null
        annual_change_ratio: number | null
      }
      enriched_markets_return_type: {
        count: number | null
        data:
          | Database["public"]["CompositeTypes"]["enriched_markets_data_type"][]
          | null
      }
      enriched_markets_return_type_refactor: {
        count: number | null
        data:
          | Database["public"]["CompositeTypes"]["enriched_markets_data_type_refactor"][]
          | null
      }
      enriched_markets_return_type_test: {
        count: number | null
        data:
          | Database["public"]["CompositeTypes"]["enriched_markets_data_type_test"][]
          | null
      }
      enriched_offer_data_type: {
        id: string | null
        chain_id: number | null
        market_type: number | null
        offer_side: number | null
        offer_id: string | null
        market_id: string | null
        creator: string | null
        funding_vault: string | null
        input_token_id: string | null
        quantity: string | null
        quantity_remaining: string | null
        expiry: string | null
        token_ids: string[] | null
        token_amounts: string[] | null
        protocol_fee_amounts: string[] | null
        frontend_fee_amounts: string[] | null
        is_cancelled: boolean | null
        transaction_hash: string | null
        block_timestamp: number | null
        can_be_filled: boolean | null
        input_token_price: number | null
        input_token_fdv: number | null
        input_token_total_supply: number | null
        token_price_values: number[] | null
        token_fdv_values: number[] | null
        token_total_supply_values: number[] | null
        quantity_value_usd: number | null
        incentive_value_usd: number | null
        name: string | null
        lockup_time: string | null
        reward_style: number | null
        is_valid: boolean | null
        annual_change_ratios: number[] | null
        annual_change_ratio: number | null
      }
      enriched_offers_return_type: {
        count: number | null
        data:
          | Database["public"]["CompositeTypes"]["enriched_offer_data_type"][]
          | null
      }
      enriched_position_recipe_data_type: {
        id: string | null
        chain_id: number | null
        weiroll_wallet: string | null
        offer_side: number | null
        market_id: string | null
        reward_style: number | null
        raw_offer_side: number | null
        raw_offer_id: number | null
        account_address: string | null
        ap: string | null
        ip: string | null
        input_token_id: string | null
        quantity: number | null
        token_ids: string[] | null
        token_amounts: number[] | null
        protocol_fee_amounts: number[] | null
        frontend_fee_amounts: number[] | null
        is_claimed: boolean[] | null
        is_forfeited: boolean | null
        is_withdrawn: boolean | null
        unlock_timestamp: number | null
        block_number: number | null
        transaction_hash: string | null
        block_timestamp: number | null
        input_token_price: number | null
        input_token_fdv: number | null
        input_token_total_supply: number | null
        token_price_values: number[] | null
        token_fdv_values: number[] | null
        token_total_supply_values: number[] | null
        can_withdraw: boolean | null
        can_claim: boolean | null
        name: string | null
        lockup_time: number | null
      }
      enriched_positions_boyco_data_type: {
        id: string | null
        account_address: string | null
        market_id: string | null
        name: string | null
        weiroll_wallet: string | null
        token_0_id: string | null
        token_0_amount: string | null
        token_0_decimals: number | null
        token_0_price: number | null
        token_1_ids: string[] | null
        token_1_amounts: string[] | null
        dust_token_ids: string[] | null
        dust_token_amounts: string[] | null
        dust_token_decimals: number[] | null
        dust_token_prices: number[] | null
        receipt_token_id: string | null
        receipt_token_amount: string | null
        receipt_token_decimals: number | null
        receipt_token_price: number | null
        unlock_timestamp: string | null
        ccdm_nonce: string | null
        deposit_leaf: string | null
        merkle_deposit_nonce: string | null
        amount_deposited: string | null
        total_amount_bridged: string | null
        deposit_transaction_hash: string | null
        bridge_transaction_hash: string | null
        process_transaction_hash: string | null
        execute_transaction_hash: string | null
        withdraw_transaction_hash: string | null
        merkle_proof: string[] | null
        is_withdrawn: boolean | null
      }
      enriched_positions_boyco_return_type: {
        count: number | null
        data:
          | Database["public"]["CompositeTypes"]["enriched_positions_boyco_data_type"][]
          | null
      }
      enriched_positions_recipe_data_type: {
        id: string | null
        chain_id: number | null
        weiroll_wallet: string | null
        offer_side: number | null
        market_id: string | null
        reward_style: number | null
        raw_offer_side: number | null
        raw_offer_id: string | null
        account_address: string | null
        ap: string | null
        ip: string | null
        input_token_id: string | null
        quantity: string | null
        token_ids: string[] | null
        token_amounts: string[] | null
        protocol_fee_amounts: string[] | null
        frontend_fee_amounts: string[] | null
        is_claimed: boolean[] | null
        is_forfeited: boolean | null
        is_withdrawn: boolean | null
        unlock_timestamp: string | null
        block_number: number | null
        transaction_hash: string | null
        block_timestamp: number | null
        input_token_price: number | null
        input_token_fdv: number | null
        input_token_total_supply: number | null
        token_price_values: number[] | null
        token_fdv_values: number[] | null
        token_total_supply_values: number[] | null
        can_withdraw: boolean | null
        can_claim: boolean | null
        name: string | null
        lockup_time: number | null
        destination_chain_id: number | null
        status: string | null
        weiroll_wallet_destination: string | null
        merkle_deposit_nonce: number | null
        deposit_transaction_hash: string | null
        forfeit_transaction_hash: string | null
        bridge_transaction_hash: string | null
        process_transaction_hash: string | null
        execute_transaction_hash: string | null
        withdraw_transaction_hash: string | null
      }
      enriched_positions_recipe_return_type: {
        count: number | null
        data:
          | Database["public"]["CompositeTypes"]["enriched_positions_recipe_data_type"][]
          | null
      }
      enriched_positions_vault_data_type: {
        id: string | null
        chain_id: number | null
        offer_side: number | null
        market_id: string | null
        annual_change_ratio: number | null
        account_address: string | null
        input_token_id: string | null
        quantity: string | null
        token_ids: string[] | null
        token_amounts: string[] | null
        input_token_price: number | null
        input_token_fdv: number | null
        input_token_total_supply: number | null
        token_price_values: number[] | null
        token_fdv_values: number[] | null
        token_total_supply_values: number[] | null
        can_withdraw: boolean | null
        name: string | null
        underlying_vault_address: string | null
      }
      enriched_positions_vault_return_type: {
        count: number | null
        data:
          | Database["public"]["CompositeTypes"]["enriched_positions_vault_data_type"][]
          | null
      }
      enriched_royco_stats_data_type: {
        chain_id: number | null
        total_tvl: number | null
        total_incentives: number | null
        total_volume: number | null
      }
      search_contracts_return: {
        data: Json | null
        count: number | null
      }
      token_data_type: {
        token_id: string | null
        price: string | null
        fdv: string | null
        total_supply: string | null
      }
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
