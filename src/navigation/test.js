import {
    jsx,
    jsxFrag,
    load,
    CEM
} from "@betarost/cemserver/cem.js";

import Elements from '@src/elements/export.js';
// import { fn } from '@src/functions/index.js';
import { BlockTextEditor } from '@elements/blocks/index.js';

const start = function (data, ID) {
    let [Static] = CEM.fn.GetParams({ data, ID })
    load({
        ID,
        fnLoad: async () => {

        },
        fn: () => {
            return (
                <Elements.page.MainContainer>
                    <div class="c-container pt--70">
                        <BlockTextEditor Static={Static} />
                    </div>
                </Elements.page.MainContainer>
            )
        }
    })
    return
}

export default start;