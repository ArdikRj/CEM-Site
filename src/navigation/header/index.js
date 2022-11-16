import {
    jsx,
    jsxFrag,
    init,
    Variable,
    Helpers,
    initAfter
} from '@betarost/cemjs'
import { fn } from '@src/functions/index.js';
import svg from "@assets/svg/index.js"
import { Avatar } from '@component/element/index.js';

const mainHeader = async function () {

    init(
        async () => {
            if (Variable.Static.HeaderShow) {
                document.getElementById("mainHeader").classList.remove("c-header--notransform");
            }
            if (Variable.dataUrl.adress != "forum") {
                if (document.getElementById("jivo-iframe-container")) {
                    document.getElementById("jivo-iframe-container").remove()
                }
                if (document.querySelectorAll('jdiv') && document.querySelectorAll('jdiv').length) {
                    document.querySelectorAll('jdiv')[0].remove()
                }
            }

            // if (Variable.auth && Variable.myInfo && !Variable.myInfo.confirm.registrasion) {
            //     Variable.SetModals({ name: "ModalAfterRegisterForm", data: {} })

            // }
        },
        () => {
            // initAfter(() => {
            //     // console.log('=18f54f=', "fff")
            //     // if (Variable.auth && Variable.myInfo && !Variable.myInfo.confirm.registrasion) {
            //     //     Variable.SetModals({ name: "ModalAfterRegisterForm", data: {} })
            //     // }
            // })
            if (Variable.Static.HeaderShow) {
                return (
                    <div class="c-header__container c-container">
                        <div class="c-header__inner">
                            <div class="c-header__auth">
                                <div
                                    class="language"
                                    onclick={() => {
                                        fn.modals.ModalLanguageSite({})
                                        // Variable.SetModals({ name: "ModalLanguageSite", data: {}, });
                                    }}
                                >
                                    <div class="selectlink">
                                        <div class="selectlink-control"><span>{Variable.lang.lang_orig}</span></div>
                                    </div>
                                </div>
                                {
                                    () => {
                                        if (Variable.auth && Variable.myInfo) {
                                            return (
                                                <div class="c-header__wrapper" style="">
                                                    <div class="header_avatar_container">
                                                        <Avatar
                                                            author={Variable.myInfo}
                                                        />
                                                    </div>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div style="display: flex; align-items: center">
                                                    <a
                                                        class="log-in"
                                                        onclick={(e) => {
                                                            Variable.SetModals({ name: "ModalAuth", data: {} })
                                                            e.stopPropagation();
                                                        }}
                                                    >
                                                        {Variable.lang.button.login}
                                                    </a>
                                                    <button
                                                        class="c-button c-button--gradient"
                                                        type="button"
                                                        onclick={(e) => {
                                                            Variable.SetModals({ name: "ModalReg", data: {} })
                                                            e.stopPropagation();
                                                        }}
                                                    >
                                                        <span class="c-button__text">{Variable.lang.button.registration}</span>
                                                    </button>
                                                </div>
                                            )
                                        }
                                    }
                                }
                            </div>
                            <nav class="c-header__menu c-menu">
                                <a class="c-logo c-menu__link" href="/" onclick={fn.siteLink}>
                                    <img class="c-logo__image" src={svg.logo} />
                                </a>
                                <a class="c-menu__link" href="/contacts/" onclick={(e) => {
                                    fn.siteLinkModal(e, {
                                        title: Variable.lang.a.contacts, items:
                                            [
                                                {
                                                    text: Variable.lang.select.share,
                                                    type: "share",
                                                    onclick: async () => {
                                                        try {
                                                            if (navigator.share) {
                                                                await navigator.share({
                                                                    url: window.location.origin + "/contacts/",
                                                                });
                                                            }
                                                        } catch (err) {
                                                            // Вывести ошибку
                                                            console.error("Share", err)
                                                        }
                                                    }
                                                },
                                                {
                                                    text: Variable.lang.p.copy + " URL",
                                                    type: "copyurl",
                                                    onclick: async () => {
                                                        navigator.clipboard.writeText(window.location.origin + "/contacts/");
                                                        Variable.SetModals({ name: "ModalAlarm", data: { icon: "confirm_icon", text: Variable.lang.text.coppied } }, true)

                                                    }
                                                }

                                            ]
                                    })
                                }}>{Variable.lang.a.contacts}</a>
                                <a class="c-menu__link" href="/about/" onclick={(e) => {
                                    fn.siteLinkModal(e, {
                                        title: Variable.lang.a.about, items:
                                            [
                                                {
                                                    text: Variable.lang.select.share,
                                                    type: "share",
                                                    onclick: async () => {
                                                        try {
                                                            if (navigator.share) {
                                                                await navigator.share({
                                                                    url: window.location.origin + "/about/",
                                                                });
                                                            }
                                                        } catch (err) {
                                                            // Вывести ошибку
                                                            console.error("Share", err)
                                                        }
                                                    }
                                                },
                                                {
                                                    text: Variable.lang.p.copy + " URL",
                                                    type: "copyurl",
                                                    onclick: async () => {
                                                        navigator.clipboard.writeText(window.location.origin + "/about/");
                                                        Variable.SetModals({ name: "ModalAlarm", data: { icon: "confirm_icon", text: Variable.lang.text.coppied } }, true)

                                                    }
                                                }

                                            ]
                                    })
                                }}>{Variable.lang.a.about}</a>
                                <a class="c-menu__link" href="/blog/" onclick={(e) => {
                                    fn.siteLinkModal(e, {
                                        title: Variable.lang.h.blog, items:
                                            [
                                                {
                                                    text: Variable.lang.select.share,
                                                    type: "share",
                                                    onclick: async () => {
                                                        try {
                                                            if (navigator.share) {
                                                                await navigator.share({
                                                                    url: window.location.origin + "/blog/",
                                                                });
                                                            }
                                                        } catch (err) {
                                                            // Вывести ошибку
                                                            console.error("Share", err)
                                                        }
                                                    }
                                                },
                                                {
                                                    text: Variable.lang.p.copy + " URL",
                                                    type: "copyurl",
                                                    onclick: async () => {
                                                        navigator.clipboard.writeText(window.location.origin + "/blog/");
                                                        Variable.SetModals({ name: "ModalAlarm", data: { icon: "confirm_icon", text: Variable.lang.text.coppied } }, true)

                                                    }
                                                }

                                            ]
                                    })
                                }}>{Variable.lang.a.blog}</a>
                            </nav>
                        </div>
                    </div>
                )
            } else {
                return (
                    <></>
                )
            }
        }, "mainHeader")
    return
}

export { mainHeader }