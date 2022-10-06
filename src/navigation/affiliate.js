import {
  jsx,
  jsxFrag,
  getStorage,
  init,
  Variable,
  initGo,
  initReload,
  initOne,
} from "@betarost/cemjs";
import svg from "@assets/svg/index.js";
import images from "@assets/images/index.js";
import { BlockAffiliateBanners } from "@src/component/blocks/BlockAffiliateBanners.js";

const start = function () {

  Variable.HeaderShow = true;
  Variable.FooterShow = true;

  let activeBanner, userLang,
    banner, userAuth, bannersLang, isAuth, bannerCode

  // let successImg = Variable.setRef()
  // let successCode = Variable.setRef()

  // let banners = {
  //   en: [
  //     {
  //       url: images["affiliate_banners/200x100"],
  //       type: "200x100",
  //     },
  //     {
  //       url: images["affiliate_banners/200x200"],
  //       type: "200x200",
  //     },
  //     {
  //       url: images["affiliate_banners/120x600"],
  //       type: "120x600",
  //     },
  //     {
  //       url: images["affiliate_banners/300x600"],
  //       type: "300x600",
  //     },
  //   ],
  //   ru: [
  //     {
  //       url: images["affiliate_banners/120x600ru"],
  //       type: "120x600",
  //     },
  //     {
  //       url: images["affiliate_banners/140x600ru"],
  //       type: "140x600",
  //     },
  //     {
  //       url: images["affiliate_banners/160x600ru"],
  //       type: "160x600",
  //     },
  //     {
  //       url: images["affiliate_banners/200x200ru"],
  //       type: "200x200",
  //     },
  //     {
  //       url: images["affiliate_banners/200x250ru"],
  //       type: "200x250",
  //     },
  //     {
  //       url: images["affiliate_banners/240x400ru"],
  //       type: "240x400",
  //     },
  //     {
  //       url: images["affiliate_banners/240x600ru"],
  //       type: "240x600",
  //     },
  //     {
  //       url: images["affiliate_banners/300x600ru"],
  //       type: "300x600",
  //     },
  //     {
  //       url: images["affiliate_banners/120x800ru"],
  //       type: "120x800",
  //     },
  //     {
  //       url: images["affiliate_banners/250x250ru"],
  //       type: "250x250",
  //     },
  //     {
  //       url: images["affiliate_banners/100x100ru"],
  //       type: "100x100",
  //     },
  //   ],
  // };

  // const copyLink = (e, code) => {
  //   navigator.clipboard.writeText(code);
  //   let element = e.target;


  //   // successImg().style.visibility= "visible"
  //   // successImg().style.opacity= "1"

  //   // successCode().style.visibility= "visible"
  //   // successCode().style.opacity= "1"
  //   if (element.className !== "affiliate_banner_copy") {
  //     element = element.parentElement
  //   }
  //   element.childNodes[3].style.visibility = "visible";
  //   element.childNodes[3].style.opacity = "1";
  //   setTimeout(() => {
  //     element.childNodes[3].style.visibility = "hidden";
  //     element.childNodes[3].style.opacity = "0";
  //   }, 1000)

  // };


  init(
    () => {
      // userLang = Variable.lang.code === "ru" ? "ru" : "en";
      // activeBanner = banners[userLang][0].type;
      //isAuth = getStorage("auth");
    },
    () => {
      // banner = banners[userLang].filter((item) => item.type === activeBanner);
      // let bannerCode = `<a href="https://crypto-emergency.com"><img src=${banner[0].url}></a>`;

      console.log('=da4e8f=', svg)
      return (
        <div
          class={`${Variable.HeaderShow ? "c-main__body" : "c-main__body--noheader"
            } c-aboutus about_us_container`}
        >
          <img
            class="affiliate_program_blur"
            style="position: absolute; right: 0;"
            src={svg["affiliate_blur-1"]}
          />
          <img
            class="affiliate_program_blur"
            style="position: absolute; left: 0;"
            src={svg["affiliate_blur-4"]}
          />
          <div class="affiliate_program_block">
            <div class="affiliate_program_preview">
              <h3>{Variable.lang.h.affiliate}</h3>
              <p>{Variable.lang.p.dontHaveFriends}</p>
            </div>
            <div class="affiliate_program_conditions_container">
              <div class="affiliate_program_conditions">
                <div class="affiliate_program_condition">
                  <div class="affiliate_program_condition_icon">
                    <img src={svg["icon/affiliate_conditions_icon-1"]} />
                  </div>
                  <p>{Variable.lang.p.affiliateCondition1}</p>
                  <p>{Variable.lang.p.affiliateConditionDescription1}</p>
                </div>
                <div class="affiliate_program_condition">
                  <div class="affiliate_program_condition_icon">
                    <img src={svg["icon/affiliate_conditions_icon-2"]} />
                  </div>
                  <p>{Variable.lang.p.affiliateCondition2}</p>
                  <p>{Variable.lang.p.affiliateConditionDescription2}</p>
                </div>
                <div class="affiliate_program_condition">
                  <div class="affiliate_program_condition_icon">
                    <img src={svg["icon/affiliate_conditions_icon-3"]} />
                  </div>
                  <p>{Variable.lang.p.affiliateCondition3}</p>
                  <p>{Variable.lang.p.affiliateConditionDescription3}</p>
                </div>
                <div class="affiliate_program_condition">
                  <div class="affiliate_program_condition_icon">
                    <img src={svg["icon/affiliate_conditions_icon-4"]} />
                  </div>
                  <p>{Variable.lang.p.affiliateCondition4}</p>
                  <p>{Variable.lang.p.affiliateConditionDescription4}</p>
                </div>
              </div>
            </div>
            {/* <div class="affiliate_banners">
              <div class="affiliate_banners_size">
                <div>
                  <h4>{Variable.lang.h.bannerSize}</h4>
                  <div>
                    <div
                      onclick={() => {
                        userLang = "en";
                        activeBanner = banners[userLang][0].type;
                        initReload()
                      }}
                      class={`tag_button ${userLang == "en" && "tag_button_active"
                        }`}
                    >
                      <span>English</span>
                    </div>
                    <div
                      onclick={() => {
                        userLang = "ru";
                        activeBanner = banners[userLang][0].type;
                        initReload()
                      }}
                      class={`tag_button ${userLang == "ru" && "tag_button_active"
                        }`}
                    >
                      <span>Русский</span>
                    </div>
                  </div>
                  <div class="affiliate_banners_size_list">
                    {banners[userLang].map((item) => {
                      return (
                        <div
                          onclick={() => {
                            console.log("change bannders", item.type);
                            activeBanner = item.type;
                            initReload()
                          }}
                          data-action="changeAffiliateBanner"
                          class={`affiliate_banners_size_item ${activeBanner == item.type &&
                            "affiliate_banners_size_item_active"
                            }`}
                        >
                          <div class="affiliate_banners_size_item_inner">
                            {item.type}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div class="affiliate_banner">
                <div style="display: block;">
                  <h4>{Variable.lang.h.addMaterials}</h4>
                  <div class="affiliate_banner_link">
                    <div class="affiliate_banner_link_block">
                      {banner[0].url}
                    </div>
                    <div
                      data-action="affiliateBannerCopy"
                      class="affiliate_banner_copy"
                      onclick={(e) => copyLink(e, banner[0].url)}
                    >
                      <img src={svg["icon/copy"]} />{" "}
                      <span>{Variable.lang.p.copy}</span>
                      <div
                        class="success_copy"
                        ref={successImg}
                      >
                        {Variable.lang.text.coppied}
                      </div>
                    </div>
                  </div>
                </div>
                <div style="display: block;">
                  <h4>{Variable.lang.h.codeToPlace}</h4>
                  <div class="affiliate_banner_code">
                    <div class="affiliate_banner_code_block">{bannerCode}</div>
                    <div
                      data-action="affiliateBannerCopy"
                      class="affiliate_banner_copy"
                      onclick={(e) => copyLink(e, bannerCode)}
                    >
                      <img src={svg["icon/copy"]} />{" "}
                      <span>{Variable.lang.p.copy}</span>
                      <div
                        class="success_copy"
                        ref={successCode}
                      >
                        {Variable.lang.text.coppied}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="affiliate_banner_preview">
                  <img src={banner[0].url} />
                </div>
              </div>
            </div> */}
            <BlockAffiliateBanners />
          </div>
        </div>
      );
    }
  );
};

export default start;
