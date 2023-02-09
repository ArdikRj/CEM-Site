import {
  jsx,
  jsxFrag,
  init
} from "@betarost/cemserver/cem.js";
import { fn } from '@src/functions/index.js';
import { BlockExchange } from '@component/blocks/index.js';

const start = function (data, ID) {
  let [Static] = fn.GetParams({ data, ID })
  init(
    () => {
      Static.nameRecords = "PageExchange"
      Static.apiFilter = {}
      Static.filterCoins = []
    },
    () => {
      return (
        <div class="crypto_exchanges_full_page c-main__body" id="crypto_exchange">
          <BlockExchange Static={Static} limit={12} />
        </div>
      );
    }, ID
  );
};
export default start;
// OK