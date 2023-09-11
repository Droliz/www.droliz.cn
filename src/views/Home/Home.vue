<template>
  <div class="body">
    <div class="about">
      Hi Im Droliz, a special human with some ability to love learning and working on teamwork.
    </div>
    <div class="info">
      <div class="head-portrait">
        <div class="bg"> <img src="@/assets/img/head1.png" alt="" /> </div>
      </div>
      <div class="brief">
        <div class="biography">Biography</div>
        <div class="context">
          Getting Buff +1 for learning, Buff +2 for documentation and more buff on managing team.
          Exicited on <span class="strong-1">React</span>,
          <span class="strong-2">UX Research</span> and <span class="strong-3">Agile</span>.</div
        >
      </div>
      <div class="link">
        <div class="title"> Lets connect </div>
        <div class="link-icon">
          <a href="http://www.droliz.cn">
            <img
              src="@/assets/icons/facebook.svg"
              alt="facebook"
              style="width: 24px; height: 24px"
            />
          </a>
          <a href="http://www.droliz.cn">
            <img src="@/assets/icons/ins.svg" alt="instarage" style="width: 24px; height: 24px" />
          </a>
          <a href="http://www.droliz.cn">
            <img src="@/assets/icons/twitter.svg" alt="twitter" style="width: 24px; height: 24px" />
          </a>
          <a href="http://www.droliz.cn">
            <img src="@/assets/icons/github.svg" alt="github" style="width: 24px; height: 24px" />
          </a>
        </div>
      </div>
    </div>
    <div class="doing">
      <div class="do">
        <div class="title">What I do</div>
        <div class="context">
          Build and maintain websites, <span class="strong-4">frontend dev</span> also have a
          mentorship called <span class="strong-1">MOFON</span>. My motto is Beauty and function in
          equal measure as priority.</div
        >
      </div>
      <div class="cards">
        <div class="card">
          <div class="title">
            <div>
              <img
                src="@/assets/icons/web_development.svg"
                alt="web_development"
                style="width: 32px; height: 32px"
              />
            </div>
          </div>
          <div class="context">
            <div class="head">Web Development</div>
            <div class="text">
              Web development is nothing but converting ideas in plain language into a logical
              structure.</div
            >
          </div>
        </div>
        <div class="card">
          <div class="title">
            <div>
              <img
                src="@/assets/icons/Research.svg"
                alt="Research"
                style="width: 32px; height: 32px"
              />
            </div>
          </div>
          <div class="context">
            <div class="head">UX Research</div>
            <div class="text">
              UX researchers systematically study target users to collect and analyze data that will
              help inform the product design process.</div
            >
          </div>
        </div>
      </div>
    </div>
    <div class="project pro">
      <div class="title"> Featured Project </div>
      <div class="pro-list">
        <pro-item
          preview="/img/project-1.png"
          con="Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision."
          name="项目名称"
          :stack="['vue', 'vite', 'ts', 'scss']"
        ></pro-item>
        <pro-item
          preview="/img/project-2.png"
          con="Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision."
          name="项目名称"
          :stack="['vue', 'vite', 'ts']"
        ></pro-item>
      </div>
      <div class="more" @click="projectPage">
        <div class="more-icon">
          <img src="@/assets/icons/more.svg" alt="more" style="width: 16px; height: 16px" />
        </div>
        <div class="more-text">See More</div>
      </div>
    </div>
    <div class="code pro">
      <div class="title"> Code Snippet </div>
      <div class="code-list">
        <code-item
          v-for="i in 4"
          name="项目名称"
          info="项目介绍"
          :lang="['vue', 'vite', 'ts']"
          :star="100"
          :key="i"
        ></code-item>
      </div>
      <div class="more" @click="codePage">
        <div class="more-icon">
          <img src="@/assets/icons/more.svg" alt="more" style="width: 16px; height: 16px" />
        </div>
        <div class="more-text">See More</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ComponentInternalInstance } from "vue"
const router = useRouter()

const { proxy } = getCurrentInstance() as ComponentInternalInstance

onMounted(() => {
  // 时间线
  const tl = proxy?.$gsap.timeline()
  tl?.from(
    ".about",
    {
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.3)",
    },
    "show",
  )
    ?.from(
      ".info",
      {
        x: -150,
        direction: 0.2, // 执行时间
      },
      "show",
    )
    ?.from(
      ".info .head-portrait",
      {
        scale: 0.4,
        direction: 0.4,
        ease: "back.out(1.7)",
      },
      "info-context",
    )
    ?.from(
      ".info .brief",
      {
        y: -10,
        opacity: 0,
        width: 100,
        direction: 0.8, // 执行时间
      },
      "info-context",
    )
    ?.from(
      ".info .link .title",
      {
        y: -10,
        opacity: 0,
        direction: 0.8,
      },
      "info-link",
    )
    ?.from(
      ".info .link .link-icon",
      {
        scale: 0.5,
        opacity: 0,
        direction: 1,
      },
      "info-link",
    )
    ?.from(
      ".doing .do",
      {
        y: -100,
        opacity: 0,
        direction: 2,
        ease: "bounce.out",
      },
      "doing-do",
    )

  // // 卡片
  // proxy?.$gsap.from(".doing .cards .card", {
  //   opacity: 0,
  //   scale: 0.2,
  //   scrollTrigger: {
  //     trigger: ".doing .cards .card",
  //     start: "top 80%",
  //     end: "bottom 80%",
  //     scrub: true,
  //     // markers: true,
  //   },
  // })
})

const projectPage = () => {
  router.push({ name: "Project" })
}

const codePage = () => {
  router.push({ name: "Code" })
}
</script>

<style scope lang="scss">
@mixin context-color($text-color) {
  color: $text-color;
  & .strong-1 {
    color: $text-color-s-1;
  }
  & .strong-2 {
    color: $text-color-s-2;
  }
  & .strong-3 {
    color: $text-color-s-3;
  }
  & .strong-4 {
    color: $text-color-s-4;
  }
}
.body {
  display: flex;
  flex-direction: column;
  gap: 70px;
  .about {
    $font-size-large: 56px;

    width: 80%;
    margin-top: 60px;
    font-size: $font-size-large;
    line-height: 72px;
    background-image: gradient-color($direction: right, $n: 25%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .info {
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 100%;
    height: auto;

    // height: $height-head-portrait;
    .head-portrait {
      display: flex;
      align-items: center;
      justify-content: center;
      width: $height-head-portrait;
      height: $height-head-portrait;
      background: gradient-color($direction: right top, $n: 70%);
      border-radius: 50%;
      .bg {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 95%;
        height: 95%;
        background-color: $bg-head-color;
        border-radius: 50%;
        img {
          width: 85%;
          height: 85%;
          border-radius: 50%;
        }
      }
    }
    .brief {
      display: flex;
      flex-direction: column;
      width: 50%;
      height: 100%;
      .biography {
        font-size: $font-size-large;
        font-weight: 600;
        line-height: 60px;
        color: $text-color-title;
      }
      .context {
        @include context-color(#d6d6d6);
      }
    }
    .link {
      .title {
        font-size: $font-size-large;
        font-weight: 600;
        line-height: 60px;
        color: $text-color-title;
      }
      .link-icon {
        display: flex;
        flex-direction: row;
        gap: 5px;
      }
    }
  }
  .doing {
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 100%;
    height: auto;
    .do {
      width: 50%;
      height: 100%;
      .context {
        @include context-color(#edcece);
      }
    }
    .cards {
      display: flex;
      flex-direction: row;
      gap: 30px;
      .card {
        position: relative;
        width: 300px;
        height: 100%;
        min-height: 200px;
        cursor: pointer;
        background-color: $bg-card-color;
        border-radius: 10px;
        transition: transform 0.3s ease-in-out;
        will-change: transform;
        .title {
          position: absolute;
          top: 0;
          left: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 72px;
          height: 72px;
          background: gradient-color($direction: right top, $n: 70%);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          div {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 95%;
            height: 95%;
            background-color: $bg-card-color;
            border-radius: 50%;
          }
        }
        .context {
          padding: 10px;
          margin-top: 45px;
          .head {
            font-size: $font-size-default;
            color: $text-color-2;
            text-align: center;
          }
          .text {
            margin: 10px;
            font-size: $font-size-small;
            color: $text-color-1;
          }
        }
        &:hover {
          // 放大一点
          // transform: scale(1.1);
          // 抖动
          animation: df-shake 0.5s;
        }
      }
    }
  }
  .project {
    height: auto;
    .pro-list {
      display: flex;
      flex-direction: column;
      gap: 50px;
    }
  }
  .code {
    height: auto;
    .code-list {
      // 两列排列，间距 50px
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
      .code-item {
        display: flex;
        flex-direction: column;
        height: 280px;
        padding: 20px 40px;
        cursor: pointer;
        background-color: $bg-card-color;
        border-radius: 20px;
        will-change: transform;
        transition: transform 0.3s ease-in-out;
        .name {
          font-size: $font-size-large;
          font-weight: 600;
          line-height: 48px;
          color: $text-color-title;
        }
        .info {
          flex-grow: 1;
          font-size: $font-size-default;
          color: $text-color-2;
        }
        .code-footer {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
      }
      .code-item:hover {
        transform: scale(1.02);
      }
    }
  }
  .more {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: center;
    width: 150px;
    font-size: $font-size-small;
    line-height: 3.5;
    cursor: pointer;
    background-color: $bg-card-color;
    border-radius: 10px;
    .more-icon {
      // img 居中
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        fill: $text-color-3;
      }
    }
    .more-text {
      color: $text-color-3;
    }
    &:hover {
      // 抖动动画
      animation: rotate-shake 0.5s;
    }
  }
  .title {
    font-size: $font-size-large;
    font-weight: 600;
    line-height: 60px;
    color: $text-color-title;
  }
  .pro {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
  }
}

// 移动端
@media screen and (width < 768px) {
  .body {
    gap: 50px;
    padding-bottom: 20px;

    // flex子元素的顺序： info -> about -> doing -> project -> code
    .info {
      flex-direction: column;
      align-items: center;
      order: 1;
      width: 100%;
      .head-portrait {
        order: 1;
      }
      .link {
        order: 2;
        .title {
          display: none;
        }
        .link-icon {
          gap: 20px;
        }
      }
      .brief {
        order: 3;
        width: 100%;
      }
    }
    .about {
      order: 2;
      width: 100%;
      margin-top: 0;
      font-size: $font-size-large;
      font-weight: 800;
      line-height: $font-size-large + 10px;
    }
    .doing {
      flex-direction: column;
      gap: 70px;
      order: 3;
      .do {
        width: 100%;
      }
      .cards {
        width: 100%;
        .card {
          height: 350px;
          .context {
            .text {
              height: 220px;
              overflow: hidden;

              // 文字末尾显示省略号
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
    .project {
      order: 4;
      .title {
        font-size: $font-size-large;
      }
      .pro-list {
        gap: 80px;
      }
    }
    .code {
      order: 5;
      .title {
        font-size: $font-size-large;
      }
      .code-list {
        grid-template-columns: repeat(1, 1fr);
        .code-item {
          height: 200px;
          padding: 20px;
          .name {
            order: 1;
            font-size: $font-size-default;
            line-height: 30px;
          }
          .info {
            order: 2;
            font-size: $font-size-small;
          }
          .code-footer {
            order: 3;
          }
        }

        // 只显示两个
        .code-item:nth-child(n + 3) {
          display: none;
        }
      }
    }
  }
}

// tablet端
@media screen and (width >= 768px) and (width < 1200px) {
  .body {
    .about {
      width: 95%;
      font-size: 32px;
    }
  }
}
</style>
