import {
    jsx,
    jsxFrag,
    init,
    Variable,
    initReload
} from "@betarost/cemjs";
// poydet data-action

import { fn } from '@src/functions/index.js';
import svg from "@assets/svg/index.js";
let tmp = 0
const start = function (data, ID) {

    Variable.Static.tpm = 5
    init(
        async () => {
            let tmp = await fn.restApi.setUserRoom.create({ visible: true,system: true, title: "Chat for communication EN", description: "Chat with other users on various topics", images: "111", languages: "en"})
            console.log(tmp)
        },
        () => {
            return (
                <div class="c-main__body">
                    {/* <div class={[Variable.HeaderShow ? 'c-main__body' : 'c-main__body--noheader']}> */}
                    Version page {Variable.Static.tpm}

                    <div>={tmp}=</div>
                    <img src={svg['load']} />
                </div>
            )
        }, ID)
};
//init (function,function,ID)
export default start;