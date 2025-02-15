import {
  jsx,
  jsxFrag,
  load,
  CEM
} from "@betarost/cemserver/cem.js";

import Elements from '@src/elements/export.js';
// import { fn } from '@src/functions/index.js';
import { BlockTrade } from '@elements/blocks/index.js';

const { fn } = CEM

const start = function (data, ID) {
  let [Static] = fn.GetParams({ data, ID })
  load({
    ID,
    fnLoad: async () => {
      Static.nameRecords = "PageTrades"
      Static.apiFilter = {}
    },
    fn: () => {
      return (
        <Elements.page.MainContainer
          class="crypto_exchanges_full_page">
          <BlockTrade Static={Static} limit={55} />
        </Elements.page.MainContainer>
      );
    }
  })
  return
};

export default start;