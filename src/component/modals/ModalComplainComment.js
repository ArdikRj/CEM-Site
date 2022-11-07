import { jsx, jsxFrag, Variable, initReload, initGo } from "@betarost/cemjs";
import { sendComplaintApi } from "@src/apiFunctions.js";

let isChecked, complaint, input, inputValue;

const changeComplaint = function (e) {
  let type = e.target.dataset.complain;
  let isCheck = e.target.checked;
  if (this.dataset.complain == "other") {
    isChecked.abusive().checked = false;
    isChecked.poison().checked = false;
    isChecked.obscene().checked = false;
    isChecked.malicious().checked = false;
    complaint = [];
  } else {
    isChecked.other().checked = false;
    isCheck
      ? complaint.push(type)
      : (complaint = complaint.filter((item) => item !== type));
  }
  initReload("modals");
  return;
};

const sendComplaint = async (data) => {
  if (
    isChecked.other() !== undefined &&
    (complaint.length > 0 || input().innerText.trim().length > 2)
  ) {
    if (complaint.length > 0) {
      await sendComplaintApi({ data, complaint });
    } else {
      complaint = [`<p>${input().innerText.trim()}</p>`];
      await sendComplaintApi({ data, complaint });
    }
    Variable.Static.answerAdditionally = "";
    Variable.DelModals("ModalComplainComment");
    initReload();

  }
};
const ModalComplainComment = function (data, reload) {
  if (!reload) {
    isChecked = {
      abusive: Variable.setRef(),
      poison: Variable.setRef(),
      obscene: Variable.setRef(),
      malicious: Variable.setRef(),
      other: Variable.setRef(),
    };
    (input = Variable.setRef()), (inputValue = "");

    complaint = [];
  }

  return (
    <div class="c-modal c-modal--open" id="ModalComplainComment">
      <section class="c-modal__dialog">
        <header class="c-modal__header">
          <div class="complain_modal">
            <h4>{Variable.lang.h.modal_complain}</h4>
            <div class="complain_error">{Variable.lang.error_div.complain}</div>
            <div class="container-checkbox">
              <div class="checkbox">
                <input
                  data-complain="abusive"
                  class="checkbox__input complain_checkbox"
                  onchange={changeComplaint}
                  type="checkbox"
                  ref={isChecked.abusive}
                />
                <label class="checkbox__label">
                  {Variable.lang.select.complainOne}
                  <span class="cont_a-link"></span>
                </label>
              </div>
            </div>
            <div class="container-checkbox">
              <div class="checkbox">
                <input
                  data-complain="poison"
                  class="checkbox__input complain_checkbox"
                  onchange={changeComplaint}
                  type="checkbox"
                  ref={isChecked.poison}
                />
                <label class="checkbox__label">
                  {Variable.lang.select.complainTwo}
                  <span class="cont_a-link"></span>
                </label>
              </div>
            </div>
            <div class="container-checkbox">
              <div class="checkbox">
                <input
                  data-complain="obscene"
                  class="checkbox__input complain_checkbox"
                  onchange={changeComplaint}
                  type="checkbox"
                  ref={isChecked.obscene}
                />
                <label class="checkbox__label">
                  {Variable.lang.select.complainThree}
                  <span class="cont_a-link"></span>
                </label>
              </div>
            </div>
            <div class="container-checkbox">
              <div class="checkbox">
                <input
                  data-complain="malicious"
                  class="checkbox__input complain_checkbox"
                  onchange={changeComplaint}
                  type="checkbox"
                  ref={isChecked.malicious}
                />
                <label class="checkbox__label">
                  {Variable.lang.select.complainFour}
                  <span class="cont_a-link"></span>
                </label>
              </div>
            </div>
            <div class="container-checkbox">
              <div class="checkbox">
                <input
                  data-complain="other"
                  class="checkbox__input complain_checkbox"
                  onchange={changeComplaint}
                  type="checkbox"
                  ref={isChecked.other}
                />
                <label data-complain_id="5" class="checkbox__label">
                  {Variable.lang.select.other}
                  <span class="cont_a-link"></span>
                </label>
              </div>
            </div>

            <div
              style={
                isChecked.other() !== undefined &&
                  isChecked.other().checked === true
                  ? "display: block"
                  : "display: none"
              }
              contenteditable="true"
              class="complain_other"
              data-keyup="complainKeyup"
              data-onpaste="editorPaste"
              oninput={() => {
                initReload("modals");
              }}
              ref={input}
            ></div>

            <div
              // class="registration-btn inactive_form_button"
              class={[
                "registration-btn",
                isChecked.other() !== undefined &&
                  (complaint.length > 0 || input().innerText.trim().length > 2)
                  ? null
                  : "inactive_form_button",
              ]}
              id="answerComplain"
              data-active="0"
              data-action="answerComplain"
            >
              <a class="btn-gr-reg" onclick={() => sendComplaint(data)}>
                <span>{Variable.lang.button.send}</span>
              </a>
            </div>
          </div>
        </header>
      </section>
    </div>
  );
};

export default ModalComplainComment;
