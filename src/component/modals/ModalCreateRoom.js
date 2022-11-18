import { jsx, jsxFrag, Variable, initReload, initGo, init } from "@betarost/cemjs";
import { Input, CheckBox, Select, TextArea, MediaButton } from '@component/element/index.js';
import { fn } from '@src/functions/index.js';







const ModalCreateRoom = function (data, ID) {

  let [Static] = fn.GetParams({ data, ID })

  //инпут название
  Static.label = {
    value: "",
    valid: false,
    error: false,
    type: "text",
    label: "Назвние",
    placeholder: "Фускоф =)",
    errorText: "больше 5 симаволов",
    condition: async (value) => {
      if (value.length < 5) {
        return false
      }
      else {
        return true
      }

    },
    afterValid: () => {
      if (Static.label.valid) {
        initReload()
      }
      else {
        initReload()
      }
    }
  }


  //инпут описание
  Static.Title = {
    label: "Описание",
    value: ""
  }
  //инпут язык
  Static.Lang = {
    value: Variable.myInfo.country.code + ` (${Variable.myInfo.country.orig_name})`,
    label: "Выбирете язык",
    code: Variable.myInfo.country.code,
    onclick: () => {
      fn.modals.ModalChangeLanguage({
        onclick: async (langCode, langName, langOrig) => {

          Static.Lang.value = langName + ` (${langOrig})`
          Static.Lang.code = langCode

        }
      }, ID)
    },
    readonly: "readonly",

  }
  //инпут страна
  Static.Country = {
    value: Variable.myInfo.country.eng_name + ` (${Variable.myInfo.country.orig_name})`,
    label: "Выбирите страну",
    code: Variable.myInfo.country.code,

    onclick: () => {
      Variable.SetModals({
        name: "ModalSelectCountry", data: {
          onclick: (code, name) => {
            Static.Country.value = name
            Static.Country.code = code
          }
        }
      }, true);
    },
    readonly: "readonly",
  }

  //приват
  Static.Private = {
    checked: false,
  }
  //видимость
  Static.Visible = {
    checked: false,

  }
  //кодовое слово
  Static.Confirm = {
    label: "придумайте кодовое слово",
    value: "",
    valid: false,
    error: false,
    type: "text",
    placeholder: "Gfhdsk",
    errorText: "больше 1 симаволов",
    condition: async (value) => {
      if (value.length < 1) {
        return false
      }
      else {
        return true
      }
    },
    afterValid: () => {
      if (Static.Confirm.valid) {
        initReload()
      }
      else {
        initReload()
      }
    }
  }


  init(async function () {

  }, () => {

    let active
    if (Static.label.valid) {

      active = null
      if (Static.Private.checked) {
        active = "inactive_form_button"

        if (Static.Confirm.valid) {
          active = null
        }
        else {
          active = "inactive_form_button"
        }
      }
      else {
        active = null
      }
    }

    else {
      active = "inactive_form_button"
    }


    return (
      <div class="c-modal c-modal--open" id="ModalComplainComment">
        <section class="c-modal__dialog">
          <header class="c-modal__header">
            <div class="complain_modal">
              <h4>Создать комнату</h4>
              <button
                class="c-modal__close"
                onclick={() => {
                  fn.modals.close(ID)
                }}
              ></button>
              <div class="complain_error">{Variable.lang.error_div.complain}</div>
              <div class="container-input">


                <Input
                  classDiv="input-div"
                  Static={Static.label}

                />
              </div>
              <div class="c-comments__field">

                <TextArea
                  className="text1 create_post_chapter"
                  Static={Static.Title}
                />
              </div>
              <br />
              <div class="container-input">


                <Input
                  classDiv="input-div"
                  Static={Static.Lang}
                />
              </div>
              <div class="container-input">


                <Input
                  classDiv="input-div"
                  Static={Static.Country}
                />
              </div>

              <div class="container-checkbox">
                <div class="checkbox">
                  <input

                    class="checkbox__input complain_checkbox"

                    onChange={function (e) {
                      Static.Private.checked = this.checked

                      initReload()
                    }}
                    type="checkbox"

                  />
                  <label class="checkbox__label">
                    Приватная комната
                    <span class="cont_a-link"></span>
                  </label>
                </div>
              </div>
              <div
                style={

                  Static.Private.checked ?
                    "display: block"
                    : "display: none"
                }>
                <div class="container-input">


                  <Input
                    classDiv="input-div"
                    Static={Static.Confirm}
                  />
                </div>
              </div>
              <div class="container-checkbox">
                <div class="checkbox">
                  <input
                    class="checkbox__input complain_checkbox"
                    onChange={function (e) {
                      Static.Visible.checked = this.checked
                      initReload()
                    }}
                    type="checkbox"

                  />
                  <label class="checkbox__label">
                    Только для друзей
                    <span class="cont_a-link"></span>
                  </label>
                </div>
              </div>
              <MediaButton
                onclickPhoto={function () {
                  if (this.files.length == 0) {
                    return;
                  }

                  Variable.SetModals({
                    name: "ModalCropImage",
                    data: {
                      file: this.files[0],
                      typeUpload: 'answers',
                      arrMedia: formInputs.mediaInputs.value,
                      aspectSelect: formInputs.mediaInputs.selectAspect,
                      uploadCropImage: async function (cropper) {
                        await sendPhoto(cropper)
                        return;
                      }
                    },
                  }, true);
                  this.value = '';
                }}

              />


              <div class={["registration-btn", active]}>
                <a class="btn-gr-reg" onclick={
                  async () => {
                    let status = Static.Private.checked
                    let visible = Static.Visible.checked
                    let confirmuser = Static.Confirm.value
                    let title = Static.label.value
                    let description = Static.Title.value
                    let images = ""
                    let languages = Static.Lang.code
                    let country = Static.Country.code
                    // let system = false
                    let request = { status, visible, confirmuser, title, description, images, languages, country }
                    let requier = await fn.restApi.setUserRoom.create(request)

                    if (requier.status == "ok") {
                    Static.callback(requier)
                      fn.modals.close(ID)
                    }
                  }
                }
                >
                  <span>Создать</span>
                </a>
              </div>
            </div>
          </header>
        </section>
      </div>

    );
  }, ID
  )
};

export default ModalCreateRoom;
