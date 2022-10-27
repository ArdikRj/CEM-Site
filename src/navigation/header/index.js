import {
    jsx,
    jsxFrag,
    init,
    Variable,
    parsingUrl,
    initReload,
    Helpers
} from '@betarost/cemjs'
import svg from "@assets/svg/index.js"

import { If } from '@component/helpers/All.js'
import { siteLink } from '@src/functions.js'
import { Avatar } from '@component/element/Avatar.js';
import { NotifyItem } from '@component/element/NotifyItem.js';

const findUnread = function (arr) {
    let unread = false
    if (arr == undefined) {
        return
    }
    arr.forEach(element => {
        if (!element.read) {
            unread = true
        }
    })
    return unread
};

let formInputs;

const mainHeader = async function () {

    let elem = Variable.setRef()
    let notify, currentNotify

    const changeCategory = async function () {
        if (currentNotify[this.dataset.type]) {
            return
        }
        switch (this.dataset.type) {
            case 'question':
                currentNotify = {
                    question: true,
                    awards: false,
                    system: false
                }
                notify = Variable.myInfo.notifyQuestions
                break;
            case 'awards':
                currentNotify = {
                    question: false,
                    awards: true,
                    system: false
                }
                notify = Variable.myInfo.notifyAwards
                break;
            case 'system':
                currentNotify = {
                    question: false,
                    awards: false,
                    system: true
                }
                notify = Variable.myInfo.notifySystem
                break;
        }
        initReload()
    }

    const toggleVisibleNotify = function () {
        Variable.notifyWindowShow = !Variable.notifyWindowShow;
    }

    init(
        async () => {

            formInputs = {
                lang: {
                    // code: Variable.myInfo.mainLanguage.code,
                    // name: Variable.myInfo.mainLanguage.orig_name
                    code: Variable.lang.code,
                    name: Variable.lang.orig_name
                },
            };

            notify = Variable.myInfo.notifyQuestions
            //notify = Variable.myInfo.notifyAwards
            //notify = Variable.myInfo.notifySystem
            currentNotify = {
                question: true,
                awards: false,
                system: false
            }
            Variable.langListShow = false;
            Variable.notifyWindowShow = false;
            if (Variable.HeaderShow) {
                Variable.showUserMenu = false
                document.getElementById("mainHeader").classList.remove("c-header--notransform");
            }
            if (Variable.showUserMenu) {
                document.getElementById("mainHeader").classList.add("c-header--notransform");
            }

            if (Variable.dataUrl.adress != "forum") {

                if (document.getElementById("jivo-iframe-container")) {
                    document.getElementById("jivo-iframe-container").remove()
                }
                if (document.querySelectorAll('jdiv') && document.querySelectorAll('jdiv').length) {
                    document.querySelectorAll('jdiv')[0].remove()
                }

            }
        },
        () => {

            if (Variable.Static.HeaderShow) {
                return (
                    <div class="c-header__container c-container">
                        <div class="c-header__inner">
                            <div class="c-header__auth">
                                <div
                                    class="language"
                                    // onclick={(e) => {
                                    //     elem().hidden = !elem().hidden
                                    //     if (!elem().hidden) {
                                    //         Variable.OutHideWindows.push([elem, elem])
                                    //     }
                                    //     e.stopPropagation();
                                    // }}
                                    onclick={() => {
                                        Variable.SetModals({
                                            name: "ModalChangeLanguage",
                                            data: {
                                                onclick: async (langCode, langName, langOrig) => {
                                                    formInputs.lang.name = langOrig;
                                                    formInputs.lang.code = langCode;
                                                    initReload()
                                                },
                                            },
                                        });
                                    }}
                                >
                                    <div class="selectlink">
                                        <div class="selectlink-control"><span>{formInputs.lang.name}</span></div>
                                    </div>
                                </div>
                                <div
                                    class="c-changelanguage"
                                    ref={elem}
                                    hidden={true}
                                >
                                    <div class="c-changelanguage__header">
                                        <h4 class="c-changelanguage__title">{Variable.lang.h.modal_listLanguage}</h4>
                                    </div>
                                    <ul class="c-changelanguage__list" >
                                        {Object.keys(Variable.languages).map(function (key) {
                                            return (
                                                <li class="c-changelanguage__item">
                                                    <a
                                                        class="c-changelanguage__link"
                                                        href={"/" + key + "/" + Variable.dataUrl.adress}
                                                        onclick={function (e) {
                                                            e.preventDefault();
                                                            elem().hidden = true
                                                            history.pushState(null, null, this.href);
                                                            parsingUrl()
                                                        }}
                                                    >
                                                        <span class="c-changelanguage__text">{Variable.languages[key].lang_orig}</span></a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <If
                                    data={Variable.auth}
                                    dataIf={
                                        <div class="c-header__wrapper" style="">
                                            <div class="header_avatar_container">
                                                <Avatar author={Variable.myInfo} settings={true} />
                                            </div>
                                            {/* <div class="auth_user_header">
                                                <div class={`c-header__notifications c-notification ${(findUnread(Variable.notifyQuestions) || findUnread(Variable.notifyAwards) || findUnread(Variable.notifySystem)) ? "c-notification--active" : ""}`}>
                                                    <a class="c-notification__link" onClick={toggleVisibleNotify}></a>
                                                    <div class="c-notification__new"></div>
                                                </div>
                                                <div class="c-header__messages c-messages">
                                                    <a href="/user/chats/" class="c-messages__link" onclick={siteLink}>
                                                        <i class="c-messages__icon"></i>
                                                        <div style="display: none;" class="c-messages__counter"></div>
                                                    </a>
                                                    <div class="c-messages__new"></div>
                                                </div>
                                                <i
                                                    class="c-header__burger c-header__burger--noauth"
                                                    onclick={() => {
                                                        Variable.SetModals({ name: "ModalMobileMainSettings", data: {} })
                                                    }}
                                                ></i>
                                            </div> */}
                                            {Variable.auth ?
                                                <div style={`${Variable.notifyWindowShow ? "" : "display: none;"}`} class="user_notifications_block auth_notifications" id="notifications_block">
                                                    <img class="notify_close" src={svg.close} onClick={toggleVisibleNotify} />
                                                    <div class="notifications_title">
                                                        <div class="notifications_titles_line">
                                                            {Variable.lang.text.yourNotification}
                                                            <a data-action="link" href="/user/notify/">{Variable.lang.button.show_all}</a>
                                                        </div>
                                                        <div class="notifications_toggle_block">
                                                            <div data-type='question' onclick={changeCategory} class={currentNotify.question ? 'notifications_toggle_item notifications_toggle_item_active' : 'notifications_toggle_item'}>
                                                                {Variable.lang.text.questions}
                                                            </div>
                                                            <div data-type='awards' onclick={changeCategory} class={currentNotify.awards ? 'notifications_toggle_item notifications_toggle_item_active' : 'notifications_toggle_item'}>
                                                                {Variable.lang.text.awards}
                                                            </div>
                                                            <div data-type='system' onclick={changeCategory} class={currentNotify.system ? 'notifications_toggle_item notifications_toggle_item_active' : 'notifications_toggle_item'}>
                                                                {Variable.lang.text.system}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="notifications_list">
                                                        <div class="notifications_list_inner">
                                                            <div class="notifications_list_part part_questions">
                                                                {/* <NotifyItem
                                                                    data={notify}
                                                                /> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                <div></div>
                                            }

                                        </div>
                                    }
                                    dataElse={
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
                                            {/* <i
                                                class="c-header__burger c-header__burger--noauth"
                                                onclick={() => {
                                                    Variable.SetModals({ name: "ModalMobileMainSettings", data: {} })
                                                }}
                                            ></i> */}
                                        </div>
                                    }
                                />
                            </div>
                            <nav class="c-header__menu c-menu">
                                <a class="c-logo c-menu__link" href="/" onclick={Helpers.siteLink}>
                                    <img class="c-logo__image" src={svg.logo} />
                                </a>
                                <a class="c-menu__link" href="/contacts/" onclick={Helpers.siteLink}>{Variable.lang.a.contacts}</a>
                                {/* <a class="c-menu__link" href="/about/" onclick={Helpers.siteLinkModal}>{Variable.lang.a.about}</a> */}
                                <a class="c-menu__link" href="/about/" onclick={Helpers.siteLink}>{Variable.lang.a.about}</a>
                                <a class="c-menu__link" href="/blog/" onclick={Helpers.siteLink}>{Variable.lang.a.blog}</a>
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