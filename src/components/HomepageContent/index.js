import React from 'react';
import Link from '@docusaurus/Link';

import './wp-styles.scss';

export default function HomepageContent() {
return (
<div class="homepage-container content-wrap w-full overflow-x-hidden">

  <section class="bg-gradient-to-b from-transparent via-transparent to-white">

    <div class="container">

      <div class="flex gap-0 items-start flex-col md:gap-4 md:flex-row md:items-center">
        <h2 class="m-0"><strong>400+</strong></h2>
        <p class="m-0 has-medium-font-size">
          Winden users enjoying<br></br>
          Tailwind CSS inside page builder
        </p>
      </div>
      <div class="hr mb-medium"></div>

      <h1 class="mt-small">The #1 utility CSS Framework<br></br><strong>for WordPress.</strong></h1>

      <div class="mt-small mb-8 grid lg:flex gap-2 lg:gap-8 ">

        <div class="flex justify-start items-center gap-2 text-violet-600">
          <div class="w-medium">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor"
                d="M22.016,8.84c-0.002-0.013-0.005-0.025-0.007-0.037c-0.005-0.025-0.008-0.048-0.015-0.072 c-0.003-0.015-0.01-0.028-0.013-0.042c-0.008-0.02-0.015-0.04-0.023-0.062c-0.007-0.015-0.013-0.028-0.02-0.042 c-0.008-0.02-0.018-0.037-0.03-0.057c-0.007-0.013-0.017-0.027-0.025-0.038c-0.012-0.018-0.023-0.035-0.035-0.052 c-0.01-0.013-0.02-0.025-0.03-0.037c-0.015-0.017-0.028-0.032-0.043-0.045c-0.01-0.012-0.022-0.023-0.035-0.035 c-0.015-0.015-0.032-0.028-0.048-0.04c-0.012-0.01-0.025-0.02-0.037-0.03c-0.005-0.003-0.01-0.008-0.015-0.012l-9.161-6.096 c-0.289-0.192-0.666-0.192-0.955,0L2.359,8.237C2.354,8.24,2.349,8.245,2.344,8.249L2.306,8.277 c-0.017,0.013-0.033,0.027-0.048,0.04C2.246,8.331,2.234,8.342,2.222,8.352c-0.015,0.015-0.028,0.03-0.042,0.047 c-0.012,0.013-0.022,0.023-0.03,0.037C2.139,8.453,2.125,8.471,2.115,8.488C2.107,8.501,2.099,8.514,2.09,8.526 C2.079,8.548,2.069,8.565,2.06,8.585C2.054,8.6,2.047,8.613,2.04,8.626C2.032,8.648,2.025,8.67,2.019,8.69 c-0.005,0.013-0.01,0.027-0.013,0.042C1.999,8.755,1.995,8.778,1.99,8.803C1.989,8.817,1.985,8.828,1.984,8.84 C1.978,8.879,1.975,8.915,1.975,8.954v6.093c0,0.037,0.003,0.075,0.008,0.112c0.002,0.012,0.005,0.025,0.007,0.038 c0.005,0.023,0.008,0.047,0.015,0.072c0.003,0.015,0.008,0.028,0.013,0.04c0.007,0.022,0.013,0.042,0.022,0.063 c0.007,0.015,0.013,0.028,0.02,0.04c0.008,0.02,0.018,0.038,0.03,0.058c0.007,0.013,0.015,0.027,0.025,0.038 c0.012,0.018,0.023,0.035,0.035,0.052c0.01,0.013,0.02,0.025,0.03,0.037c0.013,0.015,0.028,0.032,0.042,0.045 c0.012,0.012,0.023,0.023,0.035,0.035c0.015,0.013,0.032,0.028,0.048,0.04l0.038,0.03c0.005,0.003,0.01,0.007,0.013,0.01 l9.163,6.095C11.668,21.953,11.833,22,12,22c0.167,0,0.332-0.047,0.478-0.144l9.163-6.095l0.015-0.01 c0.013-0.01,0.027-0.02,0.037-0.03c0.018-0.013,0.035-0.028,0.048-0.04c0.013-0.012,0.025-0.023,0.035-0.035 c0.017-0.015,0.03-0.032,0.043-0.045c0.01-0.013,0.02-0.025,0.03-0.037c0.013-0.018,0.025-0.035,0.035-0.052 c0.008-0.013,0.018-0.027,0.025-0.038c0.012-0.02,0.022-0.038,0.03-0.058c0.007-0.013,0.013-0.027,0.02-0.04 c0.008-0.022,0.015-0.042,0.023-0.063c0.003-0.013,0.01-0.027,0.013-0.04c0.007-0.025,0.01-0.048,0.015-0.072 c0.002-0.013,0.005-0.027,0.007-0.037c0.003-0.042,0.007-0.079,0.007-0.117V8.954C22.025,8.915,22.022,8.879,22.016,8.84z M12.862,4.464l6.751,4.49l-3.016,2.013l-3.735-2.492V4.464z M11.138,4.464v4.009l-3.735,2.494L4.389,8.954L11.138,4.464z M3.699,10.562L5.853,12l-2.155,1.438V10.562z M11.138,19.536l-6.749-4.491l3.015-2.011l3.735,2.492V19.536z M12,14.035L8.953,12 L12,9.966L15.047,12L12,14.035z M12.862,19.536v-4.009l3.735-2.492l3.016,2.011L12.862,19.536z M20.303,13.438L18.147,12 l2.156-1.438L20.303,13.438z">
              </path>
            </svg>
          </div>
          <p><strong>Rapid prototyping</strong><br></br>Build your website in no time</p>
        </div>

        <div class="flex justify-start items-center gap-2 !m-0 text-violet-600">
          <div class="w-medium">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor"
                d="M4 6v12c0 1.1.9 2 2 2h3v-1.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h3V4H6c-1.1 0-2 .9-2 2zm7.2 16h1.5V2h-1.5v20zM15 5.5h1.5V4H15v1.5zm3.5.5H20c0-1.1-.9-2-2-2v1.5c.3 0 .5.2.5.5zm0 10.5H20v-2h-1.5v2zm0-3.5H20v-2h-1.5v2zm-.5 5.5V20c1.1 0 2-.9 2-2h-1.5c0 .3-.2.5-.5.5zM15 20h1.5v-1.5H15V20zm3.5-10.5H20v-2h-1.5v2z">
              </path>
            </svg>
          </div>
          <p><strong>Tiny Final CSS</strong><br></br>
            Single CSS file for the entire website with less than 10KB
          </p>
        </div>
        <div class="flex justify-start items-center gap-2 text-violet-600">
          <div class="w-medium">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M17 10h-1.2V7c0-2.1-1.7-3.8-3.8-3.8-2.1 0-3.8 1.7-3.8 3.8h1.5c0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2v3H7c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h10c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1z"></path>
            </svg>
          </div>
          <p><strong>Do not lock yourself</strong><br></br>Winden can be used with any favorite builder of yours.</p>
        </div>

      </div>

      <p>Make production-ready website with no performance impact.<br></br>The latest Tailwind CSS version (3.x) is always available without need to update plugin.</p>


      <div class="flex gap-8 flex-wrap mt-small">
        <a href="https://dplugins.com/products/winden/#product-price" target="_blank" class="btn">Starts from $79</a>
        <a href="/docs" class="btn-outline">Read Documentation</a>
      </div>


      <iframe id="promo-video" class="w-full aspect-video rounded-2xl overflow-hidden mt-outer"
        src="https://www.youtube.com/embed/Y4_LBUxsadk" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>


    </div>


  </section>

  <div>
    <section
      class="py-24 m-0 bg-no-repeat pb-24 bg-[#f3f7f6] bg-[url('/img/homepage-hero-bg.jpg')] bg-[length:auto_100%] md:bg-[length:80%_auto] bg-center md:bg-right-top bg-fixed">
      <div class="container mx-auto">


        <div class="rounded-lg p-3 md:p-16 md:mt-24">
          <h2 class="text-center ">
            <strong>Focus on Design</strong>
          </h2>
          <p class="text-center text-lg">
            You aren’t wasting energy inventing class names. No more adding silly class names like
            <code>sidebar-inner-wrapper</code> just to be able to style something, and no more agonizing over the
            perfect abstract name for something that’s really just a flex container. With utilities, everything is
            reusable so you rarely need to write new CSS.
          </p>
        </div>
        <div class="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          <div class="border-indigo-200 border-solid border-2 bg-white p-8 rounded-lg">
            <div class="text-center">
              <img class="h-24 w-24" src="/img/microsoft/fluentui-emoji/handshake_3d.png" />
            </div>
            <h4 class="mt-0">
              <strong>
                <span class="text-base uppercase font-normal text-slate-500 tracking-widest">
                  Agnostic Integration
                </span>
                <br />
                Friend of your favorite page builders.
              </strong>
            </h4>
            <p class="text-justify">
              Works across the entire WordPress ecosystem and allows you to use Tailwind CSS inside your favorite page
              builders like Gutenberg, Elementor, Bricks Builder, Oxygen Builder, Zion Builder, etc.
            </p>
          </div>
          <div class="border-indigo-200 border-solid border-2 bg-white p-8 rounded-lg">

            <div class="text-center">
              <img class="h-24 w-24" src="/img/microsoft/fluentui-emoji/rocket_3d.png" />
            </div>
            <h4 class="mt-0">
              <strong>
                <span class="text-base uppercase font-normal text-slate-500 tracking-widest">
                  Performance in mind
                </span>
                <br />
                Lightning-fast and Lightweight website
              </strong>
            </h4>
            <p class="text-justify">
              A single cached CSS file for the entire website with less than 10KB. Get higher scores on Google PageSpeed
              Insights and rank higher on Google Search.
            </p>
          </div>
          <div class="border-indigo-200 border-solid border-2 bg-white p-8 rounded-lg">

            <div class="text-center">
              <img class="h-24 w-24" src="/img/microsoft/fluentui-emoji/beach_with_umbrella_3d.png" />
            </div>
            <h4 class="mt-0">
              <strong>
                <span class="text-base uppercase font-normal text-slate-500 tracking-widest">
                  Developer Experience.
                </span>
                <br />
                Productivity boost. Hello Holiday!
              </strong>
            </h4>
            <p class="text-justify">
              Rapidly build modern websites in no time with utility CSS framework. No more writing CSS. No more
              debugging CSS. No more wasting time on CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="py-24 m-0 ">
      <div class="container mx-auto">
        <h2 class="font-light text-center mb-12"><span class="hidden md:inline-block">Page</span> Builders Compatibility
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
          <div>
            <img src="/img/builder-friends/gutenberg.jpg" class="w-full rounded-lg shadow-3xl" alt="" />
            <h3 class="mt-4 text-[1.75rem] font-light">
              Gutenberg
            </h3>
          </div>
          <div>
            <img src="/img/builder-friends/oxygen.jpg" class="w-full rounded-lg shadow-3xl" alt="" />
            <h3 class="mt-4 text-[1.75rem] font-light">
              Oxygen Builder
            </h3>
          </div>
          <div>
            <img src="/img/builder-friends/bricks.jpg" class="w-full rounded-lg shadow-3xl" alt="" />
            <h3 class="mt-4 text-[1.75rem] font-light">
              Bricks Builder
            </h3>
          </div>
          <div>
            <img src="/img/builder-friends/zion.jpg" class="w-full rounded-lg shadow-3xl" alt="" />
            <h3 class="mt-4 text-[1.75rem] font-light">
              Zion Builder
            </h3>
          </div>
          <div>
            <img src="/img/builder-friends/cwicly.jpg" class="w-full rounded-lg shadow-3xl" alt="" />
            <h3 class="mt-4 text-[1.75rem] font-light">
              Cwicly
            </h3>
          </div>
        </div>
      </div>
    </section>
  </div>


</div>
);
}