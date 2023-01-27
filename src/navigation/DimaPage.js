import {
    jsx,
    jsxFrag,
    load,
    Variable,
    initReload
} from "@betarost/cemserver/cem.js";

import { fn } from '@src/functions/index.js';
import svg from "@assets/svg/index.js";
import images from "@assets/images/index.js";

//worldPress

const start = function (data, ID) {

    let [Static] = fn.GetParams({ data, ID })

    load({
        ID,
        fn: () => {

            // if (!Variable.auth || !Variable.myInfo || !Variable.myInfo.status || !Variable.myInfo.role){
            if (!Variable.auth || !Variable.myInfo || !Variable.myInfo.status) {
                fn.siteLink("/")
                return
            }

            return (
                <div class="c-main__body">
                    <div
                        class="button-container-preview"
                        onclick={() => {
                            fn.siteLink("/DimaPage/records-ico/")
                            // fn.siteLinkModal("/DimaPage/records-ico/", { title: "Список ICO" })
                        }}
                    >
                        <span class="btn-news-preview">
                            <span >
                                Список ICO
                            </span>
                        </span>
                    </div>


                    <div
                        class="button-container-preview"
                        onclick={() => {
                            fn.siteLink("/DimaPage/records-startaps/")
                            // fn.siteLinkModal("/DimaPage/records-ico/", { title: "Список ICO" })
                        }}
                    >
                        <span class="btn-news-preview">
                            <span >
                                Список Стартапов
                            </span>
                        </span>
                    </div>

                </div>


            )
        }
    })

}


export default start;