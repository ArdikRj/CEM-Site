import { jsx, jsxFrag, getStorage, setValue, getValue, getAction, getVariable, sendApi, delDOM, timersClear, parsingUrl } from '@betarost/cemjs'
import { checkAnswerApi } from '@src/functions.js';

const getUserInfoProfile = async function (nickname) {

    const userInfo = checkAnswerApi(await sendApi.create("getUsers", {
        "filter": {
            "nickname": nickname
        },
        "select": {
            "_id": 1,
            "subscribe": 1,
            "fullname": 1,
            "nickname": 1,
            "information": 1,
            "avatar.name": 1,
            "frame.name": 1,
            "background.name": 1,
            "statistic": 1,
            "online": 1,
            "awards": 1,
            "email": 1,
            "country": 1,
            "rank": 1,
            "status": 1,
            "startDelete": 1
        },
        "limit": 1
    }))

    if (userInfo && userInfo.list_records && userInfo.list_records[0]) {
        return userInfo.list_records[0]
    } else {
        return {}
    }
}


const getExchangeList = async (count) => {
    let data = {};
    if (!count) {
        data = {
            limit: 10,
            sort: {
                score: -1,
            },
        };
    } else {
        data = {
            limit: 10, //limit12
            offset: 10 + 10 * (count - 1),
            sort: {
                score: -1,
            },
        };
    }
    let response = checkAnswerApi(await sendApi.create("getExchange", data));
    return response
};


const getWorldPress = async (count, sortBy='score', sortType='-1') => {
    let data = {
        limit: 10,
        sort: {
        }
    };
    if (count) {
        data.offset = 10 * count
    }
    data.sort[sortBy] = Number(sortType)
    let response = checkAnswerApi(await sendApi.create("getPress", data));
    return response
};


const mainQuestions = async () => {
    let data = {
        "filter": {
            "languages.code": getStorage("lang")
        },
        "select": {
            "title": 1,
            "showDate": 1,
            "statistic": 1,
            "languages": 1,
            "close": 1,
            "bestId": 1,
            "media": 1,
            "author": 1
        },
        "sort": {
            "showDate": -1
        },
        "limit": 6
    }

    let response = checkAnswerApi(await sendApi.create("getQuestions", data)).list_records;
    return response
};


const getUserAboutProfile = async function (nickname) {

    const userInfo = checkAnswerApi(await sendApi.create("getUsers", {
        "filter": {
            "nickname": nickname
        },
        "select": {
            "information": 1,
            "work": 1,
            "interest": 1,
            "country": 1,
            "fullname": 1
        }
    }))

    if (userInfo && userInfo.list_records && userInfo.list_records[0]) {
        return userInfo.list_records[0]
    } else {
        return {}
    }
}

export { getUserInfoProfile, getUserAboutProfile, getExchangeList, mainQuestions, getWorldPress}