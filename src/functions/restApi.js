import { Variable, sendApi } from "@betarost/cemjs";

const checkAnswer = function (response, name) {
    let objResponse = { totalFound: 0, list_records: [] }
    if (response) {
        if (typeof response.totalFound == "undefined") {
            response.totalFound = 0
        }
        if (!response.list_records) {
            response.list_records = []
        }
        objResponse = response
    }
    if (name) {
        Variable[name] = objResponse
    }
    return objResponse
}

const checkSetAnswer = function (response, noAlert) {
    let objResponse = { totalFound: 0, list_records: [], status: "no" }
    if (response) {
        objResponse.status = response.status

        if (response.result && response.result.totalFound) {
            objResponse.totalFound = response.result.totalFound
        }
        if (response.result && response.result.list_records) {
            objResponse.list_records = response.result.list_records
        }
        if (!noAlert) {
            if (response.status != "ok" && response.error) {
                Variable.SetModals({ name: "ModalAlarm", data: { icon: "alarm_icon", text: Variable.lang.error_div[response.error] } }, true)
            }
        }
    }

    return objResponse
}

const restApi = {}

restApi.getCategories = async function ({ cache, name, limit = 6, offset = 0, filter, select, sort }) {

    let defaultFilter = {}
    defaultFilter["count." + (Variable.lang.code != "ru" ? "en" : "ru")] = { $gt: 0 }

    let data = {
        action: "getCategories",
        short: true,
        cache,
        name,
        limit,
        offset,
        filter: Object.assign(defaultFilter, filter),
        select,
        sort
    }

    let response = await sendApi.send(data);
    return checkAnswer(response, name)
}

restApi.getNews = async function ({ cache, name, limit = 6, offset = 0, filter, select, sort = { showDate: -1 } }) {

    let defaultFilter = {
        type: "news",
        "languages.code": Variable.lang.code != "ru" ? "en" : "ru"
    }

    let defaultSelect = {
        title: 1,
        preview: 1,
        image: 1,
        showDate: 1,
        source: 1,
        "statistic.view": 1,
        "statistic.comments": 1,
        text: 1
    }


    let data = {
        action: "getNews",
        short: true,
        cache,
        name,
        limit,
        offset,
        filter: Object.assign(defaultFilter, filter),
        select: Object.assign(defaultSelect, select),
        sort
    }

    let response = await sendApi.send(data);
    return checkAnswer(response, name)
}

// SET
restApi.supportMessage = async function ({ name, email, text, noAlert = false }) {
    let data = {
        value: { name, email, text }
    }
    const response = await sendApi.create("supportMessage", data);
    return checkSetAnswer(response, noAlert)
}
export { restApi };