import { jsx, jsxFrag, Variable, initReload, initOne, sendApi, Helpers } from "@betarost/cemjs";
import images from "@assets/images/index.js";
import svg from "@assets/svg/index.js";
import { getDateFormat, uploadMedia } from "@src/functions.js";
import { If } from "@component/helpers/All.js";

let visibleSettings, formInputs;
let inputAvatar = Variable.setRef();
let inputBg = Variable.setRef();

const sendPhoto = async function (crooper, path) {
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
    // const formData = new FormData();
    // if(path == 'avatar') {
    //   formData.append('media', blob);
    // } else if(path == 'bg') {
    //   let uniqueID = Date.now();
    //   formData.append('media', blob, 'galary.jpg');
    //   formData.append('media_id', uniqueID);
    // }
    uploadMedia(
      blob,
      path,
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
        //update data User
        let data;
        if (path == 'avatar') {
          data = {
            value: {
              "avatar.name": response.name,
            },
          };
        } else if (path == 'bg') {
          data = {
            value: {
              "background.name": response.name,
            },
          };
        }

        let res = await sendApi.create("setUsers", data);
        res ? console.log("Update user data") : console.log('...')
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
    visibleSettings = false;
    Variable.DelModals("ModalCropImage");
  });
  return
}

const Avatar = function ({ author, parent = null, nickName = false, speciality = false, dateShow = false, settings = false }) {

  // console.log('=132e7f=',author)
  initOne(() => {
    visibleSettings = false;

    formInputs = {
      mediaInputs: {
        value: [],
        show: false,
      },
    };
  });

  if (!author || !author.nickname) {
    return (
      <></>
    )
  }
  return (
    <a
      href={`${parent != "big_user_avatar" ? `/user/${author.nickname}` : ""}`}
      class={`${parent == "big_user_avatar" ? "" : parent == "c-userpanel__icon--avatar" ? "c-userpanel__icon c-userpanel__icon--avatar" : parent == "c-comments__avacomment" ? "c-comments__avacomment" : parent == "lenta" ? "lenta_avatar" : "comment_avatar"}`}
      // onclick={Helpers.siteLink}
      onclick={(e) => {
        if (Variable.myInfo && Variable.myInfo.nickname == author.nickname) {
          Helpers.siteLink(e)
        } else {
          Helpers.siteLinkModal(e, { title: author.nickname, style: 'background: #1D2029;' })
        }
      }
      }
    >
      <div
        class={`c-avataricon ${parent == "big_user_avatar"
          ? ""
          : "c-avataricon--micro"
          }`}
      >
        <img
          class="c-avataricon__photo"
          // style="position: absolute; top: 50%;left: 50%;z-index: 1; height: 78%; width: 78%; border-radius: 50%; transform: translateX(-50%) translateY(-50%);"
          src={
            typeof author.avatar != "undefined" && author.avatar.name
              ? `/assets/upload/avatar/${author.avatar.name}`
              : images["profile/avatar/default"]
          }
        />
        <img
          class="c-avataricon__frame"
          // style="position: absolute; top: 0;left: 50%;transform: translateX(-50%);z-index: 2; height: 100%;width: "
          src={
            author.frame && author.frame.name
              ? images[`profile/frame/${author.frame.name.split(".")[0]}`] ||
              images[`profile/frame/${author.frame.name.split("\n.")[0]}`] ||
              svg["profile/frame/default"]
              : svg["profile/frame/default"]
          }
        />
        {() => {
          if (settings && Variable.dataUrl.adress == "" || settings && author._id === Variable.myInfo._id && parent == "big_user_avatar") {
            return (
              <div class="user_custimize_settings_container">
                <div
                  class="c-avataricon__settings"
                  onclick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    visibleSettings = !visibleSettings;
                    initReload();
                  }
                  }
                >
                  <img class="" src={svg.settings_icon} width="20" height="20" />
                  {() => {
                    if (author._id == Variable.myInfo._id) {
                      return (
                        <div style={`${visibleSettings ? '' : 'display: none;'}`} class="user_custimize_settings_list">
                          <p
                            class="user_custimize_settings_item"
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              inputAvatar().click();
                            }}
                          >{Variable.lang.text.changeAvatar}</p>
                          <p
                            class="user_custimize_settings_item"
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              inputBg().click();
                            }}
                          >{Variable.lang.text.changeBackground}</p>
                          <p class="user_custimize_settings_item">{Variable.lang.text.changeFrame}</p>
                          <p class="user_custimize_settings_item share" data-answer-id={author.nickname} data-type="user">{Variable.lang.select.share}</p>
                          <p class="user_custimize_settings_item">
                            <a onclick={Helpers.siteLink} href="/user/settings/">{Variable.lang.text.settings}</a>
                          </p>
                          <input
                            style="display: none;"
                            type="file"
                            accept=".jpg,.jpeg,.png,.gif"
                            ref={inputAvatar}
                            onClick={(e) => {
                              e.stopPropagation();
                            }
                            }
                            onChange={(e) => {
                              e.stopPropagation();

                              if (inputAvatar().files.length == 0) {
                                return;
                              }

                              Variable.SetModals({
                                name: "ModalCropImage",
                                data: {
                                  file: inputAvatar().files[0],
                                  typeUpload: 'avatar',
                                  arrMedia: formInputs.mediaInputs.value,
                                  aspectSelect: 1,
                                  uploadCropImage: async function (cropper) {
                                    await sendPhoto(cropper, 'avatar')
                                    return;
                                  }
                                },
                              }, true);
                            }
                            }
                          />
                          <input
                            style="display: none;"
                            type="file"
                            accept=".jpg,.jpeg,.png,.gif"
                            ref={inputBg}
                            onClick={(e) => {
                              e.stopPropagation();
                            }
                            }
                            onChange={(e) => {
                              e.stopPropagation();

                              if (inputBg().files.length == 0) {
                                return;
                              }

                              Variable.SetModals({
                                name: "ModalCropImage",
                                data: {
                                  file: inputBg().files[0],
                                  typeUpload: 'bg',
                                  arrMedia: formInputs.mediaInputs.value,
                                  aspectSelect: 4,
                                  uploadCropImage: async function (cropper) {
                                    await sendPhoto(cropper, 'background')
                                    return;
                                  }
                                },
                              }, true);
                            }
                            }
                          />
                        </div>
                      )
                    } else {
                      return (
                        <div style={`${visibleSettings ? '' : 'display: none;'}`} class="user_custimize_settings_list">
                          <p class="user_custimize_settings_item share" data-answer-id={author.nickname} data-type="user">{Variable.lang.select.share}</p>
                          <p class="user_custimize_settings_item complain" data-answer-id={author._id} data-type="user">{Variable.lang.select.complainUser}</p>
                          <p class="user_custimize_settings_item block" data-answer-id={author._id} data-type="user">{Variable.lang.select.blackList}</p>
                          {
                            author.status.role ?
                              <p style="color: #32DE80;" class="user_custimize_settings_item ban" data-answer-id={author._id} data-type="user">Забанить</p>
                              :
                              <></>
                          }
                        </div>
                      )
                    }
                  }}
                </div>
              </div>
            )
          } else {
            if (author.status && author.status.team) {
              return (
                <img class="c-avataricon__team" src={svg.mini_logo} width="25" height="25" />
              )
            } else {
              return (
                <div>
                  <div
                    class={`c-avataricon__level ${parent == "big_user_avatar" ? "dn" : "user_avatar_level"
                      }`}
                  >
                    <img src={svg.levelGray} />
                    <span>{author.statistic.level ? author.statistic.level : "0"}</span>
                  </div>
                  <div
                    style={`${author.online ? "" : "display: none;"}`}
                    class="c-avataricon__status c-avataricon__status--online avatar_user_online"
                  ></div>
                  <div
                    style={`${author.online ? "display: none;" : ""}`}
                    class="c-avataricon__status c-avataricon__status--offline avatar_user_offline"
                  ></div>
                </div>
              )
            }
          }
        }}

      </div>
      {() => {
        if (nickName || speciality || dateShow) {
          return (
            <div class="c-avataricon__name c-avataricon__name--show nickNameAndDate">
              {nickName && (<div>
                <span>{author.nickname}</span>
                <br />
              </div>
              )}
              {speciality && (
                <span class="c-avataricon__speciality">{speciality}</span>
              )}
              {dateShow && (
                <span class="text--gray">{getDateFormat(dateShow, "userComment")}</span>
              )}
            </div>
          )
        }
      }}
    </a>
  );
};

export { Avatar };
