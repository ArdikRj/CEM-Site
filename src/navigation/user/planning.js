import {
    jsx,
    jsxFrag,
    load,
    initReload,
    Variable,
    CEM
} from "@betarost/cemserver/cem.js";
// import { fn } from '@src/functions/index.js';
// import svg from '@assets/svg/index.js';

const { svg, fn } = CEM

const testUser = async function (Static) {
    // console.log('=93b4bf=', Static.dataUsers.list_records[0]._id)
    let users = []
    Static.user.map((item) => {
        users.push(item._id)
    })
    let tmpres = await fn.restApi.setUserPlanning.create({ title: Static.activePlanning.title, text: Static.activePlanning.text, users })

    if (tmpres.status === 'ok') {
        console.log('ok')
        Static.modal = false
        initReload()
    } else {
        console.log('false')
        null
    }
}


const filterUser = (Static, item) => {
    if (Static.filterText.length !== 0) {
        return (
            <div class="planning-user_item"
                onClick={() => {
                    if (!Static.user.includes(item)) {
                        Static.user.push(item)
                    }
                    Static.elInput.value = null
                    Static.filterText = null
                    initReload()
                }}
            >
                <div class="planning-user_avatar">
                    <img
                        class="planning-user_avatar-preview"
                        src={`/assets/upload/avatar/${item.avatar.name}`}
                    />
                </div>

                <span class="planning-user_name"> {item.nickname} </span>
            </div>
        )
    } else {
        null
    }
}

const addForm = function (Static) {
    if (Static.modal == true) {
        return (
            <div>
                <div class="c-modal c-modal--open">
                    <section class="c-modal__dialog">
                        <header class="c-modal__header">
                            <h2 class="c-modal__title">Заметка</h2>
                            <button
                                type="button"
                                class="c-modal__close"
                                onclick={() => {
                                    Static.activeNotes = null
                                    Static.modal = false
                                    Static.isValid = false
                                    initReload()
                                }}
                            ></button>
                        </header>
                        <div class="c-modal__body">
                            <div class="create_post_container">
                                <div
                                    class="create_post_calendar create_post_calendar-title"
                                    contenteditable="true"
                                    data-text="Название"
                                    Element={($el) => {
                                        Static.elTitle = $el
                                    }}
                                    oninput={() => {
                                        Static.activePlanning.title = Static.elTitle.textContent
                                        Static.elTitle.textContent.length > 0 ? Static.isValid = true : Static.isValid = false
                                        initReload()
                                    }}
                                >

                                </div>
                                <div
                                    class="create_post_calendar create_post_calendar-description"
                                    contenteditable="true"
                                    data-text="Текст"
                                    Element={($el) => {
                                        Static.elText = $el
                                    }}
                                    oninput={() => {
                                        Static.activePlanning.text = Static.elText.textContent
                                    }}
                                >

                                </div>
                                <div class="planning-users">
                                    <input class="planning-users-search" type="search" placeholder={Variable.lang.placeholder.findFriends}
                                        Element={($el) => {
                                            Static.elInput = $el
                                        }}
                                        oninput={() => {

                                            Static.filterText = Static.elInput.value.trim().toLowerCase()
                                            if (Static.timerChange) {
                                                clearTimeout(Static.timerChange)
                                            }
                                            Static.timerChange = setTimeout(() => {
                                                initReload()
                                            }, 500)
                                        }}
                                    />
                                    <div class={[Static.user.length === 0 ? null : "planning-user_group"]}>
                                        {Static.user.map((item, index) => {
                                            return (
                                                <div class="planning-user_group-name">
                                                    <span>
                                                        {item.nickname}
                                                    </span>
                                                    <img src={svg["close_group"]}
                                                        onClick={() => {
                                                            Static.user.splice(index, 1)
                                                            initReload()
                                                        }}
                                                    />
                                                </div>
                                            )
                                        })}
                                    </div>

                                    <div class="planning-user">
                                        {Static.dataUsers.list_records.map((user) => {
                                            if (Static.filterText !== 0 && Static.filterText !== "" && user.nickname.toLowerCase().includes(Static.filterText)) {
                                                return (
                                                    <div class="planning-user_list">
                                                        {filterUser(Static, user)}
                                                    </div>
                                                )
                                            } else {
                                                null
                                            }
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="c-modal__footer">
                            <button
                                class={[
                                    "c-button c-button--gradient2",
                                    !Static.isValid ? "c-button--inactive" : null,
                                ]}
                                type="button"
                                onClick={() => {
                                    // if (Static.isValid) {
                                    //     if (Static.activeNotes) {

                                    //         editNotes(Static)
                                    //         Static.activeNotes = null

                                    //     } else {

                                    //         addNew(Static)
                                    //         initReload()
                                    //     }
                                    //     Static.modal = false
                                    //     Static.isValid = false
                                    // } else {
                                    //     null
                                    // }
                                    testUser(Static)
                                    initReload()
                                }}
                            >
                                <span class="c-button__text">{Variable.lang.button.send}</span>
                            </button>
                        </div>
                    </section>
                </div>
                <div class="c-backdrop c-backdrop--show"></div>
            </div>
        )
    } else {
        null
    }
}

const start = function (data, ID) {

    let [Static] = fn.GetParams({ data, ID })

    Static.modal = null
    Static.elTitle = null
    Static.elText = null
    Static.elInput = null
    Static.activePlanning = {
        title: null,
        text: null
    }
    Static.timerChange = null
    Static.filterText = null
    Static.user = []

    load({
        ID,
        fnLoad: async () => {

            Static.tmp = await fn.restApi.getUserPlanning({ filter: { author: Variable.myInfo._id } })
            console.log('=695963=', Static.tmp)
            Static.tmpMy = await fn.restApi.getUserPlanning({ filter: { users: Variable.myInfo._id } })

            Static.dataUsers = await fn.restApi.getUsers({ name: Static.nameRecords, filter: Static.apiFilter, limit: 10 })

        },
        fn: () => {
            console.log(Static.tmpMy)
            return (
                <div class="blog_page_container c-main__body">
                    <div class="planning">
                        <div class="planning_container">
                            <div class="planning-mine">
                                <div class="planning-tab planning-mine-container">
                                    <h3>Мои комнаты</h3>
                                </div>
                                {Static.tmp.list_records.map((item) => {
                                    return (
                                        <div class="planning-mine_item">
                                            <h3 class="planning-mine_item-title">
                                                {item.title}
                                            </h3>
                                            <p class="planning-mine_item-text">
                                                {item.text}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                            <div class="planning-invited">
                                <div class="planning-tab planning-invited-container">
                                    <h3>Комнаты группы</h3>
                                </div>
                                {Static.tmpMy.list_records.map((item) => {

                                        return (
                                            <div class="planning-mine_item">
                                                <h3 class="planning-mine_item-title">
                                                    {item.title}
                                                </h3>
                                                <p class="planning-mine_item-text">
                                                    {item.text}
                                                </p>
                                            </div>
                                        )

                                })}
                            </div>
                            <div class="planning-create">
                                <div class="planning-tab planning-create-container"
                                    onClick={() => {
                                        Static.modal = true
                                        initReload()
                                    }}
                                >
                                    <h3>Создать</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modals-test">
                        {addForm(Static)}
                    </div>
                </div>
            )
        }
    })
}

export default start;
