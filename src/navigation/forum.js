import {
    jsx,
    jsxFrag,
    sendApi,
    Variable,
    init,
    initReload,
    Helpers
} from "@betarost/cemjs";

import { BlockInfoPartners } from '@component/blocks/BlockInfoPartners.js';

import svg from "@assets/svg/index.js";
import images from "@assets/images/index.js";
import { If, Map } from '@component/helpers/All.js';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { Jivo } from '@component/element/index.js';


const start = function () {



    Variable.HeaderShow = true
    Variable.FooterShow = true


    const swiperGo = function (numIndex) {
        // if (!swiperitem) {
        let swiperitem1 = new Swiper(".swiper-post_media", {
            effect: "cube",
            grabCursor: true,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
            loop: true,
            autoplay: {
                delay: 3000,
            },
            pagination: {
                el: '.swiper-pagination-post_media',
            },
            scrollbar: {
                el: '.swiper-scrollbar-post_media',
            },
            slidesPerView: 1,
            spaceBetween: 20
        });
        // }
    }

    const swiperTwo = function (numIndex) {
        // if (!swiperitem) {
        let swiperitem2 = new Swiper(".swiper-two", {
            effect: "creative",
            grabCursor: true,
            creativeEffect: {
                prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                },
                next: {
                    translate: ["100%", 0, 0],
                },
            },
            loop: true,
            autoplay: {
                delay: 3000,
            },
            pagination: {
                el: '.swiper-pagination-two',
            },
            scrollbar: {
                el: '.swiper-scrollbar-two',
            },
            slidesPerView: 1,
            spaceBetween: 20
        });
        // }
    }

    init(
        async () => {

        },
        () => {
            return (
                <div class={[Variable.HeaderShow ? 'c-main__body' : 'c-main__body--noheader']}>
                    <div class="page-content page-content--full">
                        <div style="max-width: 1280px; margin: 0 auto; padding: 0 20px; margin-top: 30px">
                            <div class="swiper-container">
                                <div class="swiper swiper-post_media" After={() => swiperGo()}>
                                    <div class="swiper-wrapper">
                                        <a class="swiper-slide">
                                            <div class="swiper-post_media_image_container">
                                                <img style="height: 400px; border-radius: 4px" src={images['forum/forum_1']} />
                                            </div>
                                        </a>
                                        <a class="swiper-slide">
                                            <div class="swiper-post_media_image_container">
                                                <img style="height: 400px; border-radius: 4px" src={images['forum/forum_2']} />
                                            </div>
                                        </a>
                                        <a class="swiper-slide">
                                            <div class="swiper-post_media_image_container">
                                                <img style="height: 400px; border-radius: 4px" src={images['forum/forum_3']} />
                                            </div>
                                        </a>
                                        <a class="swiper-slide">
                                            <div class="swiper-post_media_image_container">
                                                <img style="height: 400px; border-radius: 4px" src={images['forum/forum_4']} />
                                            </div>
                                        </a>
                                        <a class="swiper-slide">
                                            <div class="swiper-post_media_image_container">
                                                <img style="height: 400px; border-radius: 4px" src={images['forum/forum_5']} />
                                            </div>
                                        </a>
                                        <a class="swiper-slide">
                                            <div class="swiper-post_media_image_container">
                                                <img style="height: 400px; border-radius: 4px" src={images['forum/forum_6']} />
                                            </div>
                                        </a>
                                        <a class="swiper-slide">
                                            <div class="swiper-post_media_image_container">
                                                <img style="height: 400px; border-radius: 4px" src={images['forum/forum_7']} />
                                            </div>
                                        </a>
                                        <a class="swiper-slide">
                                            <div class="swiper-post_media_image_container">
                                                <img style="height: 400px; border-radius: 4px" src={images['forum/forum_8']} />
                                            </div>
                                        </a>
                                        <a class="swiper-slide">
                                            <div class="swiper-post_media_image_container">
                                                <img style="height: 400px; border-radius: 4px" src={images['forum/forum_9']} />
                                            </div>
                                        </a>
                                        <a class="swiper-slide">
                                            <div class="swiper-post_media_image_container">
                                                <img style="height: 400px; border-radius: 4px" src={images['forum/forum_10']} />
                                            </div>
                                        </a>
                                        <a class="swiper-slide">
                                            <div class="swiper-post_media_image_container">
                                                <img style="height: 400px; border-radius: 4px" src={images['forum/forum_11']} />
                                            </div>
                                        </a>
                                        <a class="swiper-slide">
                                            <div class="swiper-post_media_image_container">
                                                <img style="height: 400px; border-radius: 4px" src={images['forum/forum_12']} />
                                            </div>
                                        </a>
                                        <a class="swiper-slide">
                                            <div class="swiper-post_media_image_container">
                                                <img style="height: 400px; border-radius: 4px" src={images['forum/forum_13']} />
                                            </div>
                                        </a>
                                        <a class="swiper-slide">
                                            <div class="swiper-post_media_image_container">
                                                <img style="height: 400px; border-radius: 4px" src={images['forum/forum_14']} />
                                            </div>
                                        </a>
                                        <a class="swiper-slide">
                                            <div class="swiper-post_media_image_container">
                                                <img style="height: 400px; border-radius: 4px" src={images['forum/forum_15']} />
                                            </div>
                                        </a>
                                        <a class="swiper-slide">
                                            <div class="swiper-post_media_image_container">
                                                <img style="height: 400px; border-radius: 4px" src={images['forum/forum_16']} />
                                            </div>
                                        </a>
                                        <a class="swiper-slide">
                                            <div class="swiper-post_media_image_container">
                                                <img style="height: 400px; border-radius: 4px" src={images['forum/forum_17']} />
                                            </div>
                                        </a>
                                        <a class="swiper-slide">
                                            <div class="swiper-post_media_image_container">
                                                <img style="height: 400px; border-radius: 4px" src={images['forum/forum_18']} />
                                            </div>
                                        </a>
                                        <a class="swiper-slide">
                                            <div class="swiper-post_media_image_container">
                                                <img style="height: 400px; border-radius: 4px" src={images['forum/forum_19']} />
                                            </div>
                                        </a>
                                        <a class="swiper-slide">
                                            <div class="swiper-post_media_image_container">
                                                <img style="height: 400px; border-radius: 4px" src={images['forum/forum_20']} />
                                            </div>
                                        </a>
                                        <a class="swiper-slide">
                                            <div class="swiper-post_media_image_container">
                                                <img style="height: 400px; border-radius: 4px" src={images['forum/forum_21']} />
                                            </div>
                                        </a>
                                        <a class="swiper-slide">
                                            <div class="swiper-post_media_image_container">
                                                <img style="height: 400px; border-radius: 4px" src={images['forum/forum_22']} />
                                            </div>
                                        </a>
                                        <a class="swiper-slide">
                                            <div class="swiper-post_media_image_container">
                                                <img style="height: 400px; border-radius: 4px" src={images['forum/forum_23']} />
                                            </div>
                                        </a>
                                        <a class="swiper-slide">
                                            <div class="swiper-post_media_image_container">
                                                <img style="height: 400px; border-radius: 4px" src={images['forum/forum_24']} />
                                            </div>
                                        </a>
                                        <a class="swiper-slide">
                                            <div class="swiper-post_media_image_container">
                                                <img style="height: 400px; border-radius: 4px" src={images['forum/forum_25']} />
                                            </div>
                                        </a>
                                    </div>
                                    <div class="swiper-pagination swiper-pagination-post_media"></div>
                                    <div class="swiper-scrollbar-post_media"></div>
                                </div>
                            </div>
                            <div>
                                <h1 style="text-align: center; font-size: 50px">Форум «CRYPTO ЮГ 2022»</h1>
                                <h3 style="text-align: center">16 - 17 декабря 2022г</h3>
                                <h4 style="text-align: center">Краснодарский край г. Новороссийск ул. Адмирала Серебрякова 27а ТЦ «Черноморский»</h4>
                                <h4 style="text-align: center; margin-bottom: 50px">Организатор – CRYPTO EMERGENCY</h4>
                                <p style="font-size: 18px;">
                                    Первый ежегодный криптовалютный форум пройдет в центре Новороссийска прямо на берегу прекрасного черного моря.
                                </p>
                                <div style="display: flex; justify-content: space-between;">
                                    <div style="font-size: 18px;">
                                        <p style="align-items: center;">
                                            Будут подняты такие темы как:
                                        </p>
                                        <p style="display: flex; align-items: center;">
                                            <span style="height: 8px; width: 8px; border-radius: 50%; background: linear-gradient(115.23deg, rgba(193, 38, 206, 0.7) 15.28%, rgba(40, 76, 203, 0.7) 97.16%); display: inline-block; margin-right: 10px"></span> Новички в крипто индустрии
                                        </p>
                                        <p style="display: flex; align-items: center;">
                                            <span style="height: 8px; width: 8px; border-radius: 50%; background: linear-gradient(115.23deg, rgba(193, 38, 206, 0.7) 15.28%, rgba(40, 76, 203, 0.7) 97.16%); display: inline-block; margin-right: 10px"></span> Достоверность информации
                                        </p>
                                        <p style="display: flex; align-items: center;">
                                            <span style="height: 8px; width: 8px; border-radius: 50%; background: linear-gradient(115.23deg, rgba(193, 38, 206, 0.7) 15.28%, rgba(40, 76, 203, 0.7) 97.16%); display: inline-block; margin-right: 10px"></span> Блокчейн
                                        </p>
                                        <p style="display: flex; align-items: center;">
                                            <span style="height: 8px; width: 8px; border-radius: 50%; background: linear-gradient(115.23deg, rgba(193, 38, 206, 0.7) 15.28%, rgba(40, 76, 203, 0.7) 97.16%); display: inline-block; margin-right: 10px"></span> Будущее крипто валюты в России?
                                        </p>
                                        <p style="display: flex; align-items: center;">
                                            <span style="height: 8px; width: 8px; border-radius: 50%; background: linear-gradient(115.23deg, rgba(193, 38, 206, 0.7) 15.28%, rgba(40, 76, 203, 0.7) 97.16%); display: inline-block; margin-right: 10px"></span> Майнинг
                                        </p>
                                        <p style="display: flex; align-items: center;">
                                            <span style="height: 8px; width: 8px; border-radius: 50%; background: linear-gradient(115.23deg, rgba(193, 38, 206, 0.7) 15.28%, rgba(40, 76, 203, 0.7) 97.16%); display: inline-block; margin-right: 10px"></span> Как пережить криптозиму?
                                        </p>
                                        <p style="display: flex; align-items: center;">
                                            <span style="height: 8px; width: 8px; border-radius: 50%; background: linear-gradient(115.23deg, rgba(193, 38, 206, 0.7) 15.28%, rgba(40, 76, 203, 0.7) 97.16%); display: inline-block; margin-right: 10px"></span> Какие тренды на рынке криптовалют?
                                        </p>
                                    </div>
                                    <div style="font-size: 18px;">
                                        <p>
                                            На форуме будет представлено:
                                        </p>
                                        <p style="display: flex; align-items: center;">
                                            <span style="height: 8px; width: 8px; border-radius: 50%; background: linear-gradient(115.23deg, rgba(193, 38, 206, 0.7) 15.28%, rgba(40, 76, 203, 0.7) 97.16%); display: inline-block; margin-right: 10px"></span> 25+ проектов
                                        </p>
                                        <p style="display: flex; align-items: center;">
                                            <span style="height: 8px; width: 8px; border-radius: 50%; background: linear-gradient(115.23deg, rgba(193, 38, 206, 0.7) 15.28%, rgba(40, 76, 203, 0.7) 97.16%); display: inline-block; margin-right: 10px"></span> 500+ участников
                                        </p>
                                        <p style="display: flex; align-items: center;">
                                            <span style="height: 8px; width: 8px; border-radius: 50%; background: linear-gradient(115.23deg, rgba(193, 38, 206, 0.7) 15.28%, rgba(40, 76, 203, 0.7) 97.16%); display: inline-block; margin-right: 10px"></span> 15+ спикеров
                                        </p>
                                        <p style="display: flex; align-items: center;">
                                            <span style="height: 8px; width: 8px; border-radius: 50%; background: linear-gradient(115.23deg, rgba(193, 38, 206, 0.7) 15.28%, rgba(40, 76, 203, 0.7) 97.16%); display: inline-block; margin-right: 10px"></span> Большое количество конкурсов с ценными призами
                                        </p>
                                        <p style="display: flex; align-items: center;">
                                            <span style="height: 8px; width: 8px; border-radius: 50%; background: linear-gradient(115.23deg, rgba(193, 38, 206, 0.7) 15.28%, rgba(40, 76, 203, 0.7) 97.16%); display: inline-block; margin-right: 10px"></span> Крупные сми
                                        </p>
                                        <p style="display: flex; align-items: center;">
                                            <span style="height: 8px; width: 8px; border-radius: 50%; background: linear-gradient(115.23deg, rgba(193, 38, 206, 0.7) 15.28%, rgba(40, 76, 203, 0.7) 97.16%); display: inline-block; margin-right: 10px"></span> Фотозона
                                        </p>
                                        <p style="display: flex; align-items: center;">
                                            <span style="height: 8px; width: 8px; border-radius: 50%; background: linear-gradient(115.23deg, rgba(193, 38, 206, 0.7) 15.28%, rgba(40, 76, 203, 0.7) 97.16%); display: inline-block; margin-right: 10px"></span> Буфет, шампанское и многое другое.
                                        </p>
                                    </div>
                                </div>
                                <div style="margin: 35px 0" class="swiper-container">
                                    <div class="swiper swiper-two" After={() => swiperTwo()}>
                                        <div class="swiper-wrapper">
                                            <a class="swiper-slide">
                                                <div class="swiper-post_media_image_container">
                                                    <img style="height: 400px; border-radius: 4px" src={images['forum/forum_holl_1']} />
                                                </div>
                                            </a>
                                            <a class="swiper-slide">
                                                <div class="swiper-post_media_image_container">
                                                    <img style="height: 400px; border-radius: 4px" src={images['forum/forum_holl_2']} />
                                                </div>
                                            </a>
                                            <a class="swiper-slide">
                                                <div class="swiper-post_media_image_container">
                                                    <img style="height: 400px; border-radius: 4px" src={images['forum/forum_holl_3']} />
                                                </div>
                                            </a>
                                            <a class="swiper-slide">
                                                <div class="swiper-post_media_image_container">
                                                    <img style="height: 400px; border-radius: 4px" src={images['forum/forum_holl_4']} />
                                                </div>
                                            </a>
                                            <a class="swiper-slide">
                                                <div class="swiper-post_media_image_container">
                                                    <img style="height: 400px; border-radius: 4px" src={images['forum/forum_holl_5']} />
                                                </div>
                                            </a>
                                            <a class="swiper-slide">
                                                <div class="swiper-post_media_image_container">
                                                    <img style="height: 400px; border-radius: 4px" src={images['forum/forum_holl_6']} />
                                                </div>
                                            </a>
                                            <a class="swiper-slide">
                                                <div class="swiper-post_media_image_container">
                                                    <img style="height: 400px; border-radius: 4px" src={images['forum/forum_holl_7']} />
                                                </div>
                                            </a>
                                            <a class="swiper-slide">
                                                <div class="swiper-post_media_image_container">
                                                    <img style="height: 400px; border-radius: 4px" src={images['forum/forum_holl_8']} />
                                                </div>
                                            </a>
                                            <a class="swiper-slide">
                                                <div class="swiper-post_media_image_container">
                                                    <img style="height: 400px; border-radius: 4px" src={images['forum/forum_holl_9']} />
                                                </div>
                                            </a>
                                        </div>
                                        <div class="swiper-pagination swiper-pagination-two"></div>
                                        <div class="swiper-scrollbar-two"></div>
                                    </div>
                                </div>
                                <div style="font-size: 18px; margin-top: 10px">
                                    <p>
                                        Отличная локация в центре города:
                                    </p>
                                    <p style="display: flex; align-items: center;">
                                        <span style="min-height: 8px; min-width: 8px; height: 8px; width: 8px; border-radius: 50%; background: linear-gradient(115.23deg, rgba(193, 38, 206, 0.7) 15.28%, rgba(40, 76, 203, 0.7) 97.16%); display: inline-block; margin-right: 10px"></span> 800кв метров;
                                    </p>
                                    <p style="display: flex; align-items: center;">
                                        <span style="min-height: 8px; min-width: 8px; height: 8px; width: 8px; border-radius: 50%; background: linear-gradient(115.23deg, rgba(193, 38, 206, 0.7) 15.28%, rgba(40, 76, 203, 0.7) 97.16%); display: inline-block; margin-right: 10px"></span> в двух шагах до черного моря и прекрасный парк;
                                    </p>
                                    <p style="display: flex; align-items: center;">
                                        <span style="min-height: 8px; min-width: 8px; height: 8px; width: 8px; border-radius: 50%; background: linear-gradient(115.23deg, rgba(193, 38, 206, 0.7) 15.28%, rgba(40, 76, 203, 0.7) 97.16%); display: inline-block; margin-right: 10px"></span> Новая современная набережная с большим количеством кафе, ресторанов и отелей;
                                    </p>
                                    <p style="display: flex; align-items: center;">
                                        <span style="min-height: 8px; min-width: 8px; height: 8px; width: 8px; border-radius: 50%; background: linear-gradient(115.23deg, rgba(193, 38, 206, 0.7) 15.28%, rgba(40, 76, 203, 0.7) 97.16%); display: inline-block; margin-right: 10px"></span> Билет для посетителей включает не только пропуск на форум, но и большой список привилегий в лучших ресторанах и отелях г. Новороссийск.
                                    </p>
                                </div>
                                <a style="margin: 40px auto" class="с-preview__part">
                                    <span>Купить билет</span>
                                </a>
                            </div>
                            <div>
                                <h4 style="text-align: center; margin: 25px 0;">Стенды</h4>
                                <p>
                                    Форум "Crypto ЮГ 2022" -  это отличное место для презентации своей компании и демонстрации своего проекта на берегу черного моря в отличной локации.
                                </p>
                                <p>
                                    Воспользуйтесь данной возможностью, привлеките будущих клиентов и партнеров к своему проекту.
                                </p>
                                <p>
                                    Как это сделать? Напишите нам и мы вам поможем!
                                </p>

                                <img class="forum_plan" src={images['forum/forum_plan']} />
                                <a
                                    style="margin: 50px auto"
                                    class="с-preview__part"
                                    onclick={(e) => {
                                        Variable.SetModals({ name: "ModalForumMessage", data: {} })
                                        e.stopPropagation();
                                    }}
                                >
                                    <span>Стенд</span>
                                </a>
                            </div>
                            <div>
                                <h4 style="text-align: center; margin-bottom: 40px">Спикеры форума</h4>
                                <div class="speakers_block">
                                    <div class="speaker_item" style="text-align: center">
                                        <div style="background: linear-gradient(45deg, #3bade3 0%, #576fe6 45%, #9844b7 57%, #ff357f 70%);border-radius: 50%;padding: 4px; display: flex; width: 158px; margin: 0 auto">
                                            <img style="height: 150px; width: 150px;border-radius: 50%" src={images['forum/forum_speaker_1']} />
                                        </div>
                                        <div>
                                            <p style="margin-top: 10px; margin-bottom: 5px">Ян Кривоносов</p>
                                            <p>CEO проекта Crypto Emergency</p>
                                        </div>
                                    </div>
                                    <div class="speaker_item" style="text-align: center">
                                        <div style="background: linear-gradient(45deg, #3bade3 0%, #576fe6 45%, #9844b7 57%, #ff357f 70%);border-radius: 50%;padding: 4px; display: flex; width: 158px; margin: 0 auto">
                                            <img style="height: 150px; width: 150px;border-radius: 50%" src={images['forum/forum_speaker_2']} />
                                        </div>
                                        <div>
                                            <p style="margin-top: 10px; margin-bottom: 5px">Дмитрий Белов</p>
                                            <p>Управляющий директор  проекта Crypto Emergency</p>
                                        </div>
                                    </div>
                                    <div class="speaker_item" style="text-align: center">
                                        <div style="background: linear-gradient(45deg, #3bade3 0%, #576fe6 45%, #9844b7 57%, #ff357f 70%);border-radius: 50%;padding: 4px; display: flex; width: 158px; margin: 0 auto">
                                            <img style="height: 150px; width: 150px;border-radius: 50%" src={images['forum/forum_speaker_7']} />
                                        </div>
                                        <div>
                                            <p style="margin-top: 10px; margin-bottom: 5px">Алексей Зюзин</p>
                                            <p>CEO Crypto Holding, IT-эксперт, инвестор</p>
                                        </div>
                                    </div>
                                    <div class="speaker_item" style="text-align: center">
                                        <div style="background: linear-gradient(45deg, #3bade3 0%, #576fe6 45%, #9844b7 57%, #ff357f 70%);border-radius: 50%;padding: 4px; display: flex; width: 158px; margin: 0 auto">
                                            <img style="height: 150px; width: 150px;border-radius: 50%" src={images['forum/forum_speaker_5']} />
                                        </div>
                                        <div>
                                            <p style="margin-top: 10px; margin-bottom: 5px">Руслан Захаркин</p>
                                            <p>крипто блогер</p>
                                        </div>
                                    </div>
                                    <div class="speaker_item" style="text-align: center">
                                        <div style="background: linear-gradient(45deg, #3bade3 0%, #576fe6 45%, #9844b7 57%, #ff357f 70%);border-radius: 50%;padding: 4px; display: flex; width: 158px; margin: 0 auto">
                                            <img style="height: 150px; width: 150px;border-radius: 50%" src={images['forum/forum_speaker_3']} />
                                        </div>
                                        <div>
                                            <p style="margin-top: 10px; margin-bottom: 5px">Валерий Осипов</p>
                                            <p>Основатель ArtEmotioChain (Проект learn2earn в сфере NFT)</p>
                                        </div>
                                    </div>
                                    <div class="speaker_item" style="text-align: center">
                                        <div style="background: linear-gradient(45deg, #3bade3 0%, #576fe6 45%, #9844b7 57%, #ff357f 70%);border-radius: 50%;padding: 4px; display: flex; width: 158px; margin: 0 auto">
                                            <img style="height: 150px; width: 150px;border-radius: 50%" src={images['forum/forum_speaker_4']} />
                                        </div>
                                        <div>
                                            <p style="margin-top: 10px; margin-bottom: 5px">Ренат Калинченко</p>
                                            <p>Криптоэнтузиаст, руководитель компании TUROV •INVEST</p>
                                        </div>
                                    </div>
                                    <div class="speaker_item" style="text-align: center">
                                        <div style="background: linear-gradient(45deg, #3bade3 0%, #576fe6 45%, #9844b7 57%, #ff357f 70%);border-radius: 50%;padding: 4px; display: flex; width: 158px; margin: 0 auto">
                                            <img style="height: 150px; width: 150px;border-radius: 50%" src={images['forum/forum_speaker_6']} />
                                        </div>
                                        <div>
                                            <p style="margin-top: 10px; margin-bottom: 5px">Лев Пониманский</p>
                                            <p>Профессионал в области криптовалюты и майнинга</p>
                                        </div>
                                    </div>
                                    <div class="speaker_item" style="text-align: center">
                                        <div style="background: linear-gradient(45deg, #3bade3 0%, #576fe6 45%, #9844b7 57%, #ff357f 70%);border-radius: 50%;padding: 4px; display: flex; width: 158px; margin: 0 auto">
                                            <img style="height: 150px; width: 150px;border-radius: 50%" src={images['forum/forum_speaker_8']} />
                                        </div>
                                        <div>
                                            <p style="margin-top: 10px; margin-bottom: 5px">Mr. Sailer</p>
                                            <p>Автор канала Мистер Сайлер</p>
                                        </div>
                                    </div>
                                    <div class="speaker_item" style="text-align: center">
                                        <div style="background: linear-gradient(45deg, #3bade3 0%, #576fe6 45%, #9844b7 57%, #ff357f 70%);border-radius: 50%;padding: 4px; display: flex; width: 158px; margin: 0 auto">
                                            <img style="height: 150px; width: 150px;border-radius: 50%" src={images['forum/forum_speaker_soon']} />
                                        </div>
                                    </div>
                                    <div class="speaker_item" style="text-align: center">
                                        <div style="background: linear-gradient(45deg, #3bade3 0%, #576fe6 45%, #9844b7 57%, #ff357f 70%);border-radius: 50%;padding: 4px; display: flex; width: 158px; margin: 0 auto">
                                            <img style="height: 150px; width: 150px;border-radius: 50%" src={images['forum/forum_speaker_soon']} />
                                        </div>
                                    </div>
                                </div>
                                <a
                                    style="margin: 40px auto"
                                    class="с-preview__part"
                                    onclick={(e) => {
                                        Variable.SetModals({ name: "ModalForumMessage", data: {} })
                                        e.stopPropagation();
                                    }}
                                >
                                    <span>Стать спикером</span>
                                </a>
                            </div>
                            <div>
                                <h4 style="text-align: center; margin-bottom: 40px">Партнеры</h4>
                                <div data-mainpage="true" class="c-infopartners__list partners_container">
                                    <a
                                        target="_blank"
                                        rel="nofollow nooopener"
                                        href="https://cryptoholding.ru"
                                        class="c-infopartners__item"
                                    >
                                        <img src={images["forum/partner_1"]} />
                                    </a>
                                    <a
                                        target="_blank"
                                        rel="nofollow nooopener"
                                        href="https://www.instagram.com/abrau1870/"
                                        class="c-infopartners__item"
                                    >
                                        <img src={images["forum/partner_2"]} />
                                    </a>
                                    <a
                                        target="_blank"
                                        rel="nofollow nooopener"
                                        href="https://www.instagram.com/barycoffee.nvr/"
                                        class="c-infopartners__item"
                                    >
                                        <img src={images["forum/partner_3"]} />
                                    </a>
                                    <a
                                        target="_blank"
                                        rel="nofollow nooopener"
                                        href="http://hotel-capital.ru"
                                        class="c-infopartners__item"
                                    >
                                        <img src={images["forum/partner_4"]} />
                                    </a>
                                    <a style="display: block!important"
                                        target="_blank"
                                        rel="nofollow nooopener"
                                        href="https://seeyour.info/vizhu.more.rest"
                                        class="c-infopartners__item"
                                    >
                                        <img src={images["forum/partner_5"]} />
                                    </a>
                                    <a style="display: block!important"
                                        target="_blank"
                                        rel="nofollow nooopener"
                                        href="https://hginov.ru"
                                        class="c-infopartners__item"
                                    >
                                        <img src={images["forum/partner_6"]} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <script
                        src="https://code.jquery.com/jquery-3.6.1.min.js"
                        integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ="
                        crossorigin="anonymous"></script>
                    <script src="https://widget.tiwo.ru/loader/loader.js.php"></script>
                    <Jivo />
                </div>
            )
        }
    )
}

export default start;
