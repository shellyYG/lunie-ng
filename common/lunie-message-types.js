const lunieMessageTypes = {
  SEND: `SendTx`,
  STAKE: `StakeTx`,
  RESTAKE: `RestakeTx`,
  UNSTAKE: `UnstakeTx`,
  VOTE: `VoteTx`,
  DEPOSIT: `DepositTx`,
  CLAIM_REWARDS: `ClaimRewardsTx`,
  SUBMIT_PROPOSAL: `SubmitProposalTx`,
  ISCN: `SendISCNTx`,
  UNKNOWN: `UnknownTx`,
}

module.exports = { lunieMessageTypes }
