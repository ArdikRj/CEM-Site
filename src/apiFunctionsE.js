import { jsx, jsxFrag, getStorage, sendApi, Variable, initGo } from "@betarost/cemjs";
import { checkAnswerApi } from "@src/functions.js";

const mainTrades = async () => {
  let data = {
    sort: {
      score: -1,
    },
    limit: 6,
  };

  let response = checkAnswerApi(
    await sendApi.create("getTrade", data)
  ).list_records;
  return response;
};

const sendInBlackList = async (info) => {
  let data = {
    value: {
      blackList: info.id,
    },
  };
  let response = checkAnswerApi(await sendApi.create("setUsers", data));
}

const delCom = async (info) => {
  console.log("=info=", info);
  let data = {
    value: {
      comments: {},
    },
    _id: Variable.Static.showNewsId,
  };

  info.mainCom
    ? (data.value.comments = {
        active: false,
        _id: info.id,
      })
    : (data.value.comments = {
        comments: {
          active: false,
          _id: info.id,
        },
      });

      let response = checkAnswerApi(await sendApi.create("setNews", data));
};

const sendComplaintApi = async (info) =>{
  console.log('=info=',info)
  let data = {
    value: {
      comments: {
        complain:info.complaint,
        _id:info.data.id
      },
    },
    _id: Variable.Static.showNewsId,
  };
  console.log('=data=',data)
  let response = checkAnswerApi(await sendApi.create("setNews", data));
}

export {
  delCom,
  mainTrades,
  sendInBlackList,
  sendComplaintApi
};
