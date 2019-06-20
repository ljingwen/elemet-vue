<template>
  <div>
    <div class="home-filter">
      <aside data-v-a5cc4024 class="filter" style="top: 0px;">
        <div data-v-a5cc4024 class="filter-header">
          <a
            data-v-a5cc4024
            href="javascript:"
            class="filter-nav"
            data-spm-anchor-id="a2ogi.12117543.0.0"
            @click="showMenu(index);showFourPart(index)"
            v-for="(item,index) in orderFourPart"
            :class="{'active': index == orderFourPartNum }"
          >
            <span data-v-a5cc4024 data-spm-anchor-id="a2ogi.12117543.0.i0" v-text="item"></span>
            <svg data-v-a5cc4024 viewBox="0 0 72 32" class="dropdown-icon">
              <path data-v-a5cc4024 d="M36 32l36-32h-72z"></path>
            </svg>
          </a>
          <!-- <a
            data-v-a5cc4024
            href="javascript:"
            ubt-click="104723"
            ubt-data-type="1"
            ubt-data-is_svip="true"
            class="filter-nav"
            data-spm-anchor-id="a2ogi.12117543.0.0"
          >
            <span data-v-a5cc4024 data-spm-anchor-id="a2ogi.12117543.0.i2">距离最近</span>
          </a>-->
          <!-- <a
            data-v-a5cc4024
            href="javascript:"
            ubt-click="104723"
            ubt-data-type="3"
            class="filter-nav active"
            data-spm-anchor-id="a2ogi.12117543.0.0"
          >
            <span data-v-a5cc4024 data-spm-anchor-id="a2ogi.12117543.0.i3">品质联盟</span>
          </a>-->
          <!---->
          <!-- <a
            data-v-a5cc4024
            ubt-click="104725"
            href="javascript:"
            class="filter-nav-more"
            data-spm-anchor-id="a2ogi.12117543.0.0"
          >
            <span data-v-a5cc4024>筛选</span>
            <svg data-v-a5cc4024 class="filter-nav-more__icon">
              <use data-v-a5cc4024 xlink:href="#more-filter"></use>
            </svg>
          </a>-->
        </div>
        <section
          data-v-52820b2e
          data-v-a5cc4024
          class="filter-extend filter-sort"
          :class="{'open': isOpenMu}"
        >
          <ul data-v-52820b2e>
            <li
              data-v-52820b2e
              :class="{'active': index == orderNum}"
              v-for="(item,index) in orderList"
              @click="orderFunction(index)"
            >
              <span data-v-52820b2e v-text="item">综合排序</span>
              <img
                data-v-52820b2e
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII="
                alt="综合排序"
                class="selected"
              >
            </li>
          </ul>
        </section>
        <section data-v-a5cc4024 class="filter-extend" :class="{'open': openSelect}">
          <!---->
          <div class="morefilter-3-5h6_0">
            <dl>
              <dt>商家服务 (可多选)</dt>
              <dd>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <img
                      class="morefilter-2JyrM_0"
                      src="https://fuss10.elemecdn.com/b/9b/45d2f6ff0dbeef3a78ef0e4e90abapng.png?imageMogr/format/webp/thumbnail/!24x24r/gravity/Center/crop/24x24/"
                    >
                    <span>蜂鸟专送</span>
                  </div>
                </div>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <img
                      class="morefilter-2JyrM_0"
                      src="https://fuss10.elemecdn.com/6/7c/417ba499b9ef8240b8014a453bf30png.png?imageMogr/format/webp/thumbnail/!24x24r/gravity/Center/crop/24x24/"
                    >
                    <span>品牌商家</span>
                  </div>
                </div>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <img
                      class="morefilter-2JyrM_0"
                      src="https://fuss10.elemecdn.com/c/93/ded991df780906f7471128a226104png.png?imageMogr/format/webp/thumbnail/!24x24r/gravity/Center/crop/24x24/"
                    >
                    <span>新店</span>
                  </div>
                </div>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <img
                      class="morefilter-2JyrM_0"
                      src="https://fuss10.elemecdn.com/2/cd/444d002a94325c5dff004fb3b9505png.png?imageMogr/format/webp/thumbnail/!24x24r/gravity/Center/crop/24x24/"
                    >
                    <span>食安保</span>
                  </div>
                </div>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <img
                      class="morefilter-2JyrM_0"
                      src="https://fuss10.elemecdn.com/3/d4/5668ffc03151826f95b75249bea31png.png?imageMogr/format/webp/thumbnail/!24x24r/gravity/Center/crop/24x24/"
                    >
                    <span>开发票</span>
                  </div>
                </div>
              </dd>
            </dl>
            <dl>
              <dt>优惠活动 (单选)</dt>
              <dd>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <!---->
                    <span>首单立减</span>
                  </div>
                </div>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <!---->
                    <span>门店新客立减</span>
                  </div>
                </div>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <!---->
                    <span>满减优惠</span>
                  </div>
                </div>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <!---->
                    <span>下单返红包</span>
                  </div>
                </div>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <!---->
                    <span>进店领红包</span>
                  </div>
                </div>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <!---->
                    <span>赠品优惠</span>
                  </div>
                </div>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <!---->
                    <span>特价商品</span>
                  </div>
                </div>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <!---->
                    <span>品质联盟红包</span>
                  </div>
                </div>
              </dd>
            </dl>
            <dl>
              <dt>人均消费</dt>
              <dd>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <!---->
                    <span>¥20以下</span>
                  </div>
                </div>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <!---->
                    <span>¥20 - ¥40</span>
                  </div>
                </div>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <!---->
                    <span>¥40 - ¥60</span>
                  </div>
                </div>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <!---->
                    <span>¥60 - ¥80</span>
                  </div>
                </div>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <!---->
                    <span>¥80 - ¥100</span>
                  </div>
                </div>
                <div class="morefilter-3GXUR_0">
                  <div class="morefilter-l3S4A_0">
                    <!---->
                    <span>¥100以上</span>
                  </div>
                </div>
              </dd>
            </dl>
          </div>
          <div class="morefilter-2DLty_0">
            <span class="morefilter-39NFb_0">清空</span>
            <span class="morefilter-16ilq_0 morefilter-2Dfps_0">确定</span>
          </div>
        </section>
      </aside>
    </div>
    <!-- <div class="dibu clearfloat">
      gfzdfsz
      <br>dsf
    </div>-->
    <!-- 列表页渲染 -->
    <div class="gundong">
      <section class="index-container_10L_lQb shop-0" v-for="(item,index) in shoppingList">
        <div class="index-shopInfo_1RRTZ0d">
          <div class="logo-container_XoH2Vit_0">
            <div class="logo-main_21aInWJ_0">
              <img
                alt="姜太公烤鱼饭"
                class="logo-logo_3S1eSkn_0"
                :src="'https://fuss10.elemecdn.com/'+ item.restaurant.image_path.slice(0,1)
                + '/'+ item.restaurant.image_path.slice(1,3) +'/'
                + item.restaurant.image_path.slice(3)
                + '.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/'
                 "
              >
              <!---->
              <!---->
            </div>
            <div class="logo-newShop_PI2TWde_0">
              <span>新店</span>
            </div>
          </div>
          <div class="index-main_N3FfcSz">
            <section class="index-line_2-iYR1A">
              <h3 class="index-shopname_39Y7e3U">
                <!---->
                <span v-text="item.restaurant.name"></span>
              </h3>
              <ul class="index-supportWrap_2lTcxr2">
                <!---->
                <span class="index-omit_1q3Tw0_">···</span>
              </ul>
            </section>
            <section class="index-line_2-iYR1A">
              <div class="index-rateWrap_39dWx_g">
                <div class="Rating-wrapper_TYbDrku_0 index-stars_vPkk9Vv">
                  <div class="Rating-gray_1kpffd5_0">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"
                    >
                  </div>
                  <div class="Rating-actived_GBtiHkB_0" style="width: 92%;">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="
                    >
                  </div>
                </div>
                <span class="index-rate_WsK58g8" v-text="item.restaurant.rating"></span>
                <span v-text="item.restaurant.business_info.recent_order_num_display"></span>
              </div>
              <!--月售1634单-->
            </section>
            <section class="index-line_2-iYR1A">
              <div class="index-moneylimit_2fCq9W5">
                <span v-text="'月售'+item.restaurant.recent_order_num">¥10起送</span>
                <span v-text="item.restaurant.piecewise_agent_fee.description"></span>
                <!---->
              </div>
              <div class="index-timedistanceWrap_2Dp_kzY">
                <span class="index-distanceWrap_1EPAlti">1.58km</span>
                <span v-text="item.restaurant.order_lead_time+'分钟'"></span>
              </div>
            </section>
          </div>
        </div>
        <div class="index-activityWrap_3mo1GyG">
          <!---->
          <section class="index-tagLine_1rJw_lq">
            <!---->
            <span class="mini-tag-tag_3Tm_6bw_0 index-tag_3oprLi5">
              烤鱼
              <span
                class="index-tagGhost_1KCu_KY mini-tag-ghost_3DwLU8E_0"
                style="color: rgb(102, 102, 102); border-color: rgb(221, 221, 221);"
              >烤鱼</span>
            </span>
            <span class="mini-tag-tag_3Tm_6bw_0 index-tag_3oprLi5">
              品质联盟
              <span
                class="index-tagGhost_1KCu_KY mini-tag-ghost_3DwLU8E_0"
                style="color: rgb(51, 51, 51); border-color: rgb(221, 221, 221);"
              >品质联盟</span>
            </span>
            <!---->
          </section>
          <!-- <span>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjI1TDI4MCAwIiBzdHJva2U9IiNDQ0MiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1kYXNoYXJyYXk9IjEiLz48L3N2Zz4="
              class="index-dashedline_7B79b3W"
            >
          </span>-->
          <section class="index-activities_25AUDsx">
            <div class="index-activityList_1wvwwUY">
              <div class="index-actRow_2f_uNNA">
                <span class="index-iconWrap_1xJuKaY">
                  <span class="index-icon_1fBCxBk" style="background-color: rgb(240, 115, 115);">减</span>
                </span>
                <span
                  class="index-desc_JLha7Vr"
                  v-text="item.restaurant.activities[0].description"
                >满20减1，满30减2</span>
              </div>
              <div class="index-actRow_2f_uNNA">
                <span class="index-iconWrap_1xJuKaY">
                  <span class="index-icon_1fBCxBk" style="background-color: rgb(240, 115, 115);">折</span>
                </span>
                <span class="index-desc_JLha7Vr" v-text="item.restaurant.activities[1].tips"></span>
              </div>
              <div class="index-actRow_2f_uNNA" v-show="isopen">
                <span class="index-iconWrap_1xJuKaY">
                  <span class="index-icon_1fBCxBk" style="background-color: rgb(112, 188, 70);">首</span>
                </span>
                <span class="index-desc_JLha7Vr">新用户下单立减10元</span>
              </div>
              <div class="index-actRow_2f_uNNA" v-show="isopen">
                <span class="index-iconWrap_1xJuKaY">
                  <span class="index-icon_1fBCxBk" style="background-color: rgb(153, 153, 153);">保</span>
                </span>
                <span class="index-desc_JLha7Vr">该商户食品安全已由国泰产险承担，食品安全有保障</span>
              </div>
            </div>
            <div
              class="index-activityBtn_tMk-e1C"
              @click="openlength(index)"
              :num="index"
              :num2="isOpenNum"
            >
              <span>4个活动</span>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"
                class
              >
            </div>
          </section>
        </div>
        <!---->
      </section>
      <div class="waitLoading" v-text="'loading>0' ? '加载更多...':'正在加载' " @click="getList(url[0].restauntant2)"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      scrollNum: 0,
      scrollNumEnd: 100,
      isopen: false,
      isOpenMu: false,
      isOpenNum: 0,
      shoppingList: [],
      orderList: [
        "综合排序",
        "好评优先",
        "销量最高",
        "起送价最低",
        "配送最快",
        "配送费最低",
        "人均从低到高",
        "通用排序"
      ],
      orderNum: 0,
      orderFourPart: ["综合排序", "距离最近", "品质联盟", "筛选"],
      orderFourPartNum: 0,
      openSelect: false,
      url: [
        {restauntant: 'https://www.easy-mock.com/mock/5cf8d7ab460a680b250b8d7d/example/restauant',
        restauntant2: 'https://www.easy-mock.com/mock/5cf8d7ab460a680b250b8d7d/example/restaunant2'
        }
      ]
    };
  },
  created() {
    this.getList(this.url[0].restauntant);
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      window.onscroll = () => {
        let scrollNum = window.scrollY;
        // let searchFourPart = document.getElementsByClassName('home-filter')[0].offsetTop;
        if (scrollNum > 566) {
          this.$store.state.istrueScrollTop = true;
        } else {
          this.$store.state.istrueScrollTop = false;
        }
        // console.log(this.$store.state.loading);
        if (scrollNum > this.scrollNumEnd) {
          // this.isOpenMu = !this.isOpenMu
        }
      };
    },
    async getList(url) {
      const data = await this.$axios(url);
      this.shoppingList = [...this.shoppingList, ...data.data.items];
      console.log(this.shoppingList);
      // console.log(this.shoppingList[0].restaurant.activities[0].description)
      // console.log(this.shoppingList[0].restaurant.business_info)
    },
    //点击隐藏掉一个地方
    openlength(index) {
      if (this.isOpenNum == index) {
        this.isopen = !this.isopen;
      }
    },
    showMenu(index) {
      if (index == 0) {
        this.isOpenMu = !this.isOpenMu;
        if(this.openSelect == true){
          this.openSelect = !this.openSelect;
        }else return
      } else if (index == 3) {
          this.openSelect = !this.openSelect;
          if(this.isOpenMu == true){
            this.isOpenMu = !this.isOpenMu;
          }else return
        } 
        else return
      
    },
    //点击切换显示蓝色字体和打上勾
    orderFunction(index) {
      this.orderNum = index;
      this.isOpenMu = false;
    },
    //点击黑色字体变黑色
    showFourPart(index) {
      this.orderFourPartNum = index;
      
    }
  }
};
</script>


<style scoped>
.clearfloat:after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}
.clearfloat {
  zoom: 1;
}
.dibu {
  width: 100%;
  height: 500px;
  z-index: 2;
}
.gundong {
  width: 100%;
}
.waitLoading {
  margin-bottom: 60px;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  color: rgb(110, 110, 106);
}
</style>


