import { jsx, jsxFrag, Variable } from "@betarost/cemjs";
import images from "@assets/images/index.js";
import svg from "@assets/svg/index.js";
import { getDateFormat, siteLink } from "@src/functions.js";
import { If } from "@component/helpers/All.js";

const Avatar = function ({ author, parent = null, nickNameAndDate = false }) {

  if (!author.nickname) {
    return (
      <></>
    )
  }
  return (
    <a
      href={`${parent != "big_user_avatar" ? `/user/${author.nickname}` : ""}`}
      class={`${parent == "big_user_avatar" ? "" : parent == "c-userpanel__icon--avatar" ? "c-userpanel__icon c-userpanel__icon--avatar" : parent == "c-comments__avacomment" ? "c-comments__avacomment" : "comment_avatar"}`}
      onclick={siteLink}
    >
      <div
        class={`c-avataricon ${parent == "big_user_avatar"
          ? ""
          : "c-avataricon--micro micro_user_avatar"
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
        <If
          data={author.status && author.status.team}
          dataIf={<img src={svg.mini_logo} width="25" height="25" style="position: absolute; bottom: 7px; right: 7px; z-index: 2; background: #ffffff; border-radius: 50%; padding: 3px" />}
          dataElse={<div>
            <div
              class={`c-avataricon__level ${parent == "big_user_avatar" ? "dn" : "user_avatar_level"
                }`}
            >
              <img src={svg.levelGray} />
              <span>{author.statistic.level}</span>
            </div>
            <div
              style={`${author.online ? "" : "display: none;"}`}
              class="c-avataricon__status c-avataricon__status--online avatar_user_online"
            ></div>
            <div
              style={`${author.online ? "display: none;" : ""}`}
              class="c-avataricon__status c-avataricon__status--offline avatar_user_offline"
            ></div>
          </div>}
        />
      </div>
      {nickNameAndDate && (
        <div class="comment_name nickNameAndDate">
          <span>{author.nickname}</span>
          <br />
          <span>{getDateFormat(nickNameAndDate, "userComment")}</span>
        </div>
      )}
    </a>
  );
};

export { Avatar };
