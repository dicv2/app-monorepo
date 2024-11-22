import type { ExecuteTransactionRequestType } from '@benfen/bfc.js/client';

export type IEncodedTxBenfen = {
  rawTx: string;
  // TODO IFeeInfoUnit
  requestType?: ExecuteTransactionRequestType;
  sender: string;
};
