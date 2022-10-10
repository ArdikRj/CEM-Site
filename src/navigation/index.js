import {
    jsx,
    jsxFrag,
    timersStart,
    sendApi,
    getStorage,
    setStorage,
    init,
    initReload,
    Variable,
    Helpers
} from '@betarost/cemjs';

import { BlockUsers } from '@component/blocks/index.js';

import { BlockPreview } from '@component/blocks/BlockPreview.js';
import { BlockProjects } from '@component/blocks/BlockProjects.js';
import { BlockQuestions } from '@component/blocks/BlockQuestions.js';
import { BlockBanners } from '@component/blocks/BlockBanners.js';
import { BlockTrade } from '@component/blocks/BlockTrade.js';
import { BlockExchange } from '@component/blocks/BlockExchange.js';

import { BlockMainNews } from '@component/blocks/BlockMainNews.js';
import { BlockInfoPartners } from '@component/blocks/BlockInfoPartners.js';

const start = function () {
    let filters
    let type = "all"
    Variable.HeaderShow = true
    Variable.FooterShow = true
    Variable.visibleFilterUser = false

    init(
        async () => {
            filters = {
                lang: {
                    code: "",
                    name: "all"
                },
                country: {
                    code: "",
                    name: "all"
                },
                group: {
                    common: true,
                    content: true,
                    expert: true
                },
                online: false
            }
            Variable.Course = await sendApi.send({ action: "getCourse", short: true, cache: true, name: "Course" });
            Variable.MainQuestions = await sendApi.send({ action: "getQuestions", short: true, cache: true, name: "MainQuestions" });
            Variable.MainTrades = await sendApi.send({ action: "getTrade", short: true, cache: true, name: "MainTrades" });
            Variable.MainExchanges = await sendApi.send({ action: "getExchange", short: true, cache: true, name: "MainExchanges" });
            Variable.MainUsers = await sendApi.send({ action: "getUsers", short: true, cache: true, name: "MainUsers", filter: Helpers.getFilterUsers(filters, type) });
            Variable.MainNews = await sendApi.send({ action: "getNews", short: true, cache: true, name: "MainNews" });
            timersStart("Course", async () => { Variable.Course = await sendApi.send({ action: "getCourse", short: true }) }, 10000)
        },
        () => {

            return (
                <div class={[Variable.HeaderShow ? 'c-main__body' : 'c-main__body--noheader']}>
                    <BlockPreview />
                    <BlockProjects />
                    <div class="c-main__wrapperbg">
                        <BlockQuestions
                            button={
                                <div class="c-questions__footer">
                                    <a
                                        class="c-button c-button--gray"
                                        href="/question/"
                                        onclick={Helpers.siteLink}
                                    >
                                        <span class="c-button__wrapper">{Variable.lang.button.showMore}</span>
                                    </a>
                                </div>
                            }
                            callBack={
                                async function (active, nameOptions) {
                                    let filters = getStorage("filters")
                                    filters.MainQuestions[nameOptions] = active
                                    setStorage("filters", filters)
                                    Variable.MainQuestions = await sendApi.send({ action: "getQuestions", short: true, name: "MainQuestions" });
                                    initReload();
                                }
                            }
                            items={Variable.MainQuestions}
                        />
                        <div class="c-main__wrapperbg2">
                            <BlockBanners />
                            <BlockTrade
                                items={Variable.MainTrades}
                                button={
                                    <div class="crypto_exchanges_footer">
                                        <a class="c-button c-button--gray" href="/list-trade/" onclick={Helpers.siteLink}>
                                            <span class="c-button__wrapper">{Variable.lang.button.show_all}</span>
                                        </a>
                                    </div>
                                }
                            />
                            <div class="top_professionals_container">
                                <BlockExchange
                                    items={Variable.MainExchanges}
                                    button={
                                        <div class="crypto_exchanges_footer">
                                            <a class="c-button c-button--gray" href="/list-exchange/" onclick={Helpers.siteLink}>
                                                <span class="c-button__wrapper">{Variable.lang.button.show_all}</span>
                                            </a>
                                        </div>
                                    }
                                />
                                <BlockUsers
                                    title={Variable.lang.h.top_users}
                                    filters={filters}
                                    items={Variable.MainUsers}
                                    type={type}
                                    name={"MainUsers"}
                                />
                                <BlockMainNews />
                                <BlockInfoPartners
                                    limit={4}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
};

export default start;