import { Overwrite } from 'utility-types';

import { Asset, ExtendedContact, ITxReceipt, NetworkId, TxType } from '@types';

export interface ITxHistoryEntry
  extends Overwrite<ITxReceipt, { txType: TxType; timestamp: number }> {
  networkId: NetworkId;
  toAddressBookEntry?: ExtendedContact;
  fromAddressBookEntry?: ExtendedContact;
  displayAsset: Asset | undefined;
}
