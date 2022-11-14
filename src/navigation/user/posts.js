import {
  jsx,
  jsxFrag,
  init,
  initReload,
  Variable,
  sendApi,
  Helpers,
  initGo,
} from "@betarost/cemjs";
import { fn } from '@src/functions/index.js';
import svg from "@assets/svg/index.js";
import images from '@assets/images/index.js';

import { uploadMedia, wrapTextWithATag } from "@src/functions.js";
import {
  MediaButton,
  Avatar,
  MediaPreview
} from "@component/element/index.js";

import { If, Map } from "@component/helpers/All.js";

let formInputs, selectAspect;

const changeTextPost = (e) => {
  // let text = wrapTextWithATag(e.target.innerText.trim());
  let text = e.target.innerText.trim();
  formInputs.textInputs.value = wrapTextWithATag(text);
  if (text || formInputs.mediaInputs.length > 0) {
    formInputs.isValid = true;
  } else {
    formInputs.isValid = false;
  }
  initReload();
};

const sendPost = async (e) => {
  e.preventDefault();
  if (!formInputs.isValid) {
    return false;
  }

  let data = {
    value: {
      forFriends: formInputs.forFriends,
      languages: formInputs.lang.code,
      media: [...formInputs.mediaInputs.value, ...formInputs.audioInputs.value],
      text: formInputs.textInputs.value,
    },
  };

  let tmpRes = await sendApi.create("setPost", data);


  if (tmpRes.status === "ok") {
    initGo();
  } else {
    Variable.SetModals(
      {
        name: "ModalAlarm",
        data: {
          icon: "alarm_icon",
          text: Variable.lang.error_div[tmpRes.error],
        },
      },
      true
    );
  }
  return;
};

const deleteMediaFile = function (index) {
  formInputs.mediaInputs.value.splice(index, 1);
  if (formInputs.mediaInputs.value.length == 0) {
    selectAspect = null;
  }
};

const start = function () {
  Variable.HeaderShow = true
  Variable.FooterShow = true
  Variable.showUserMenu = false

  let authorPosts;



  const sendPhoto = async function (crooper) {
    if (!crooper) {
      return
    }
    let canvas;
    formInputs.mediaInputs.selectAspect = crooper.options.aspectRatio;
    canvas = crooper.getCroppedCanvas({
      // width: 166,
      // height: 166,
    });
    let previewObj = {
      src: canvas.toDataURL(),
      type: "image",
      upload: 0,
      size: 0
    };
    formInputs.mediaInputs.show = true;
    formInputs.mediaInputs.value.push(previewObj);
    let numItem = formInputs.mediaInputs.value.length - 1
    initReload();
    await canvas.toBlob(function (blob) {
      uploadMedia(
        blob,
        "posts",
        async function () {
          formInputs.mediaInputs.show = true;
          if (!this.response) {
            return
          }
          let response = JSON.parse(this.response);
          formInputs.mediaInputs.value[numItem] = {
            aspect: formInputs.mediaInputs.selectAspect,
            type: response.mimetype.split("/")[0],
            name: response.name
          }
          formInputs.isValid = true;
          initReload();
        },
        async function (e) {
          let contentLength;
          if (e.lengthComputable) {
            contentLength = e.total;
          } else {
            contentLength = parseInt(
              e.target.getResponseHeader(
                "x-decompressed-content-length"
              ),
              10
            );
          }

          if (formInputs.mediaInputs.value[numItem].upload === formInputs.mediaInputs.value[numItem].size && formInputs.mediaInputs.value[numItem].upload !== 0) {
            formInputs.mediaInputs.value.splice(numItem, 1);
            initReload()
            return
          }
          formInputs.mediaInputs.value[numItem].upload = e.loaded
          formInputs.mediaInputs.value[numItem].size = contentLength;
          // console.log("=3c5fa7= ", "Загружено", e.loaded, "из", contentLength);
          initReload();
        }
      );
      initReload();
      Variable.DelModals("ModalCropImage");
    });
    return
  }


  const sendVideo = async function (files) {
    let blob = new Blob([files], { type: 'video/mp4' });
    let previewObj = {
      src: URL.createObjectURL(blob),
      type: "video",
      upload: 0,
      size: 0
    }
    formInputs.mediaInputs.show = true;
    formInputs.mediaInputs.value.push(previewObj);
    let numItem = formInputs.mediaInputs.value.length - 1
    initReload();

    uploadMedia(
      files[0],
      "posts",
      async function () {
        formInputs.mediaInputs.show = true;


        // formInputs.mediaInputs.value.push(obj);
        let response = JSON.parse(this.response);
        formInputs.mediaInputs.value[numItem] = {
          aspect: undefined,
          type: response.mimetype.split("/")[0],
          name: response.name
        }

        formInputs.isValid = true;
        initReload();
      },
      async function (e) {
        let contentLength;
        if (e.lengthComputable) {
          contentLength = e.total;
        } else {
          contentLength = parseInt(
            e.target.getResponseHeader(
              "x-decompressed-content-length"
            ),
            10
          );
        }
        formInputs.mediaInputs.value[numItem].upload = e.loaded
        formInputs.mediaInputs.value[numItem].size = contentLength;
        // console.log(
        //   "=3c5fa7= ",
        //   "Загружено",
        //   e.loaded,
        //   "из",
        //   contentLength
        // );
        initReload()
      }
    );
    return
  }
  //Добавил SendAudio
  const sendAudio = async function (files) {
    let blob = new Blob([files], { type: 'audio/ogg' });
    let previewObj = {
      src: URL.createObjectURL(blob),
      type: "audio",
      upload: 0,
      size: 0
    }
    formInputs.audioInputs.show = true;
    formInputs.audioInputs.value.push(previewObj);
    let numItem = formInputs.audioInputs.value.length - 1

    initReload();

    uploadMedia(
      files[0],
      "posts",
      async function () {
        formInputs.mediaInputs.show = true;


        // formInputs.mediaInputs.value.push(obj);
        let response = JSON.parse(this.response);
        formInputs.audioInputs.value[numItem] = {
          aspect: undefined,
          type: response.mimetype.split("/")[0],
          name: response.name
        }
        formInputs.isValid = true;
        initReload();
      },
      async function (e) {
        let contentLength;
        if (e.lengthComputable) {
          contentLength = e.total;
        } else {
          contentLength = parseInt(
            e.target.getResponseHeader(
              "x-decompressed-content-length"
            ),
            10
          );
        }
        formInputs.audioInputs.value[numItem].upload = e.loaded
        formInputs.audioInputs.value[numItem].size = contentLength;
        // console.log(
        //   "=3c5fa7= ",
        //   "Загружено",
        //   e.loaded,
        //   "из",
        //   contentLength
        // );
        initReload()
      }
    );
    return
  }

  const toggleAdditionalyMenu = function (e) {
    if (e.currentTarget.children[1].style.display == "none") {
      e.currentTarget.children[1].style = "display: block";
      showAdditionalyMenu = true;
    } else {
      e.currentTarget.children[1].style = "display: none";
      showAdditionalyMenu = false;
    }
  };

  const sendAuthorization = async function (e) {
    e.preventDefault();
    if (!formInputs.isValid) {
      return false;
    }
  };

  const arrayLengthOne = function (arr) {
    let count = 0;
    arr.forEach((element) => {
      if (element.type != "audio") {
        count++;
      }
    });
    if (count > 1) {
      return true;
    } else {
      return false;
    }
  };

  const audioCountCheck = function (array) {
    let audioCount = 0;
    let otherMediaCount = 0;
    array.forEach((element) => {
      if (element.type == "audio") {
        audioCount++;
      } else {
        otherMediaCount++;
      }
    });
    if (audioCount <= 2 && audioCount != 0 && otherMediaCount == 0) {
      return true;
    } else {
      return false;
    }
  };

  const textLengthCheck = function (str) {
    let pCount = (str.match(new RegExp("<p>", "g")) || []).length;
    if (str.length < 150 + pCount * 8 && pCount <= 5) {
      return true;
    } else {
      return false;
    }
  };

  let el = [];
  init(
    async () => {
      formInputs = {
        textInputs: {
          value: "",
          show: false,
        },
        mediaInputs: {
          value: [],
          show: false,
        },
        audioInputs: {
          value: [],
          show: false,
        },
        lang: {
          code: Variable.myInfo.mainLanguage.code,
          name: Variable.myInfo.mainLanguage.orig_name
        },
        forFriends: false,
        isValid: false,
      };


      selectAspect = null;

      authorPosts = await sendApi.send({
        action: "getPost",
        short: true,
        cache: true,
        name: "MainPosts",
        filter: {
          //Helpers.getFilterQuestions(filtersQuestions),
          author: Variable.myInfo._id,
        },
        sort: {
          //Helpers.getSortQuestions(filtersQuestions)
          showDate: -1,
        },
      });

    },

    () => {

      return (
        <div class={[
          "c-userpostcreate",
          Variable.HeaderShow ? "c-main__body" : "c-main__body--noheader",
        ]}>
          <h3 class="c-userpostcreate__title">{Variable.lang.h.createPost}</h3>
          <form id="userPostCreate" class="c-userpostcreate__form" onsubmit={sendAuthorization}>
            <input class="c-userpostcreate__submit" hidden type="submit" />
            <div class="c-userpostcreate__lang">
              <label for="">{Variable.lang.label.lang}:</label>
              <div
                class="blog_filter_language"
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
              >{formInputs.lang.name}</div>
            </div>
            <div data-type="posts" class="c-userpostcreate__container create_post_container">
              <If
                data={formInputs.textInputs.show}
                dataIf={
                  <div
                    class="create_post_chapter create_post_main_text"
                    contenteditable="true"
                    oninput={changeTextPost}
                  ></div>
                }
              />
              <If
                data={formInputs.mediaInputs.show && formInputs.mediaInputs.value.length}
                dataIf={
                  <div class="create_post_chapter createPostImage">
                    {
                      formInputs.mediaInputs.value.map((item, index) => {
                        if (item.type != "audio") {
                          return (
                            <MediaPreview
                              item={item}
                              index={index}
                              type="posts"
                              formInputs={formInputs}

                            />
                          );
                        }
                      })
                    }
                  </div>
                }
              />
              {/* Добавил еще один иф для айдио */}
              <If
                data={formInputs.audioInputs.show && formInputs.audioInputs.value.length}
                dataIf={
                  <div class="create_post_chapter createPostAudio">
                    {
                      formInputs.audioInputs.value.map((item, index) => {

                        return (
                          <MediaPreview
                            item={item}
                            index={index}
                            type="posts"
                            formInputs={formInputs}
                            el={el}
                          />
                        );
                      })
                    }
                  </div>
                }
              />
            </div>

            <MediaButton

              onclickText={function () {
                if (formInputs.textInputs.show === true) {
                  return;
                } else {
                  formInputs.textInputs.show = true;
                  initReload();
                }
              }}

              onclickPhoto={function () {
                if (this.files.length == 0) {
                  return;
                }

                fn.modals.ModalCropImage({
                  file: this.files[0],
                  typeUpload: 'posts',
                  arrMedia: formInputs.mediaInputs.value,
                  aspectSelect: formInputs.mediaInputs.selectAspect,
                  uploadCropImage: async function (cropper) {
                    await sendPhoto(cropper)
                    return;
                  }
                })
                // Variable.SetModals({
                //   name: "ModalCropImage",
                //   data: {
                //     file: this.files[0],
                //     typeUpload: 'posts',
                //     arrMedia: formInputs.mediaInputs.value,
                //     aspectSelect: formInputs.mediaInputs.selectAspect,
                //     uploadCropImage: async function (cropper) {
                //       await sendPhoto(cropper)
                //       return;
                //     }
                //   },
                // }, true);
                // formInputs.isValid = true;
                this.value = '';
              }}

              onclickVideo={function () {
                if (this.files.length == 0) {
                  return;
                }
                sendVideo(this.files)
                this.value = '';
                return;
              }}
              // Добавил функ для Аудио
              onclickAudio={function () {
                if (this.files.length == 0) {
                  return;
                }
                sendAudio(this.files)
                this.value = '';
                return;
              }}
            />



            <div class="c-userpostcreate__forfriends">
              <div class="checkbox">
                <input
                  id="forfrends"
                  data-complain="abusive"
                  class="checkbox__input complain_checkbox"
                  onchange={(e) => {
                    formInputs.forFriends = e.target.checked;
                  }}
                  type="checkbox"
                />
                <label class="checkbox__label" for="forfrends">
                  {Variable.lang.span.forFriends}
                  <span class="cont_a-link"></span>
                </label>
              </div>
            </div>
            <div style={"display:flex; width: 100%; max-width: 500px; margin: 20px auto"}>
              {/* <button
                class={[
                  "c-button c-button--gradient2",
                  !formInputs.isValid ? "c-button--inactive" : "",
                ]}
                style="margin-right: 30px"
                type="button"
              //   onClick={sendQuestion}
              >
                <span class="c-button__text">
                  {Variable.lang.button.pre_view}
                </span>
              </button> */}
              <button
                class={[
                  "c-button c-button--gradient2",
                  !formInputs.isValid ? "c-button--inactive" : "",
                ]}
                type="button"
                onClick={sendPost}
              >
                <span class="c-button__text">
                  {Variable.lang.button.create}
                </span>
              </button>
            </div>

            <div class="c-userpostcreate__myposts my_posts">
              {Variable.lang.h.posts_my}
              <div class="user_news_block">
                {/* {{> userPost}} */}

              </div>
            </div>
          </form>
        </div>
      );
    }
  );
};

export default start;
