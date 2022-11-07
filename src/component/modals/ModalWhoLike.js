import { jsx, jsxFrag, Variable, initReload } from "@betarost/cemjs";
import svg from "@assets/svg/index.js";
import { Avatar } from "@component/element/Avatar.js";

//"alarm_icon" : "confirm_icon"
const ModalWhoLike = function ({ whoLike }, reload) {
  console.log('=497fe3=', whoLike)
  return (
    <div class="c-modal c-modal--open" id="ModalWhoLike">
      <section class="c-modal__dialog">
        <header class="c-modal__header">
          <button
            type="button"
            class="c-modal__close"
            onclick={() => {
              Variable.Modals.pop();
              initReload("modals")
            }}
          ></button>
        </header>
        <div class="c-modal__body">
          {whoLike && whoLike.length > 0 ? (
            whoLike.map((item) => {
              return (
                <div
                  style={"display:flex; align-items:center; "}
                >
                  <Avatar author={item.author} />
                  <p>{item.author.nickname}</p>
                </div>
              );
            })
          ) : (
            <p>{Variable.lang.text.emptyEva}</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default ModalWhoLike;
