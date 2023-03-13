<template>
    <div class="bg-[#010101]">
        <div
            class="relative min-h-screen max-w-5xl mx-auto grid place-content-center px-4 lg:px-8 mb-32"
        >
            <div
                class="bg-[#EC921F] w-24 h-24 blur-3xl absolute top-0 left-0"
            ></div>

            <div class="flex flex-col-reverse lg:flex-row items-center">
                <article class="prose prose-invert">
                    <h1
                        class="inline-block mb-4 bg-clip-text text-transparent leading-normal"
                        style="
                            background-image: linear-gradient(
                                112deg,
                                rgba(255, 255, 255, 1) 0%,
                                rgba(255, 255, 255, 0.1) 100%
                            );
                        "
                    >
                        Aung Htet Paing
                    </h1>
                    <p>
                        Hey, I'm a electronic major student who is interesting
                        in web development. I enjoy watching screen cast from
                        Laracasts, learning new things.
                    </p>
                    <div class="not-prose flex space-x-5">
                        <a href="https://www.twitter.com/aunghte23771311">
                            <img
                                src="/img/twitter.svg"
                                alt="twitter svg"
                                width="20"
                                height="20"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/aung-htet-paing-852380191/"
                        >
                            <img
                                src="/img/linkedin.svg"
                                alt="linkedin svg"
                                width="20"
                                height="20"
                            />
                        </a>
                        <a href="https://github.com/ahp-sooyaa">
                            <img
                                src="/img/github.svg"
                                alt="github svg"
                                width="20"
                                height="20"
                            />
                        </a>
                    </div>
                </article>
                <img
                    src="/img/river-fx-MqsqeQ54yFo-unsplash.png"
                    alt="light bulb"
                />
            </div>
            <div class="mt-10">
                <div class="text-sm text-gray-500">My tools belt</div>
                <div
                    class="relative flex space-x-5 mt-3 bg-white max-w-max py-2 px-5 rounded-2xl overflow-x-auto overflow-y-hidden"
                >
                    <img
                        src="/img/html.svg"
                        alt="html svg"
                        width="20"
                        height="20"
                    />
                    <img
                        src="/img/css.svg"
                        alt="css svg"
                        width="20"
                        height="20"
                    />
                    <img
                        src="/img/tailwind.svg"
                        alt="tailwind svg"
                        width="20"
                        height="20"
                    />
                    <img
                        src="/img/laravel-livewire.png"
                        alt="livewire png"
                        width="20"
                        height="20"
                    />
                    <img
                        src="/img/laravel.svg"
                        alt="laravel svg"
                        width="20"
                        height="20"
                    />
                    <img
                        src="/img/vuejs.svg"
                        alt="vue svg"
                        width="20"
                        height="20"
                    />
                    <img
                        src="/img/nuxt.svg"
                        alt="nuxt svg"
                        width="20"
                        height="20"
                    />
                    <img
                        src="/img/alpineJs.webp"
                        alt="alpine js webp"
                        width="20"
                        height="20"
                    />
                    <div
                        class="bg-gradient-to-r from-transparent via-[#FF6C00] to-transparent h-[3px] w-1/2 mx-auto absolute left-0 -bottom-0.5"
                    />
                </div>
            </div>
        </div>

        <section class="relative max-w-5xl mx-auto mb-32 px-4 lg:px-8">
            <div
                class="bg-[#EC921F] w-32 h-32 blur-[100px] absolute top-0 right-0"
            ></div>
            <div
                class="bg-[#FF6C00] w-20 h-20 blur-[100px] absolute top-40 right-40"
            ></div>
            <div class="prose prose-invert lg:max-w-none mx-auto">
                <h1
                    class="inline-block bg-clip-text text-transparent leading-normal"
                    style="
                        background-image: linear-gradient(
                            112deg,
                            rgba(255, 255, 255, 1) 0%,
                            rgba(255, 255, 255, 0.1) 100%
                        );
                    "
                >
                    Experience
                </h1>
                <div class="pl-5 relative">
                    <div
                        class="bg-gradient-to-b from-transparent via-[#FF6C00] to-transparent h-full w-[1px] absolute left-0"
                    />
                    <div class="not-prose text-sm text-gray-500">
                        Jan 2023 - present
                    </div>
                    <div>
                        <h2 class="mt-0 mb-3">
                            Junior Web Developer @ Myintthukanandi
                        </h2>
                        <p class="max-w-3xl">
                            Worked closely with senior and took part in
                            developing ecommerce built with laravel, livewire
                            and wordpress sites.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="max-w-5xl mx-auto px-4 lg:px-8">
            <div class="prose prose-invert lg:max-w-none mx-auto">
                <h1
                    class="inline-block bg-clip-text text-transparent leading-normal"
                    style="
                        background-image: linear-gradient(
                            112deg,
                            rgba(255, 255, 255, 1) 0%,
                            rgba(255, 255, 255, 0.1) 100%
                        );
                    "
                >
                    Projects
                </h1>
                <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                    <!-- currently all the data are hard coded -->
                    <div>
                        <a
                            href="https://github.com/ahp-sooyaa/real-time-chat-app"
                            class="block mt-0 mb-5 shadow-lg aspect-w-2 aspect-h-1 hover:scale-105 transition ease-in-out duration-300"
                        >
                            <img
                                src="/img/koob.png"
                                alt="koob"
                                class="w-full h-full m-0 rounded-lg"
                                width="1810"
                                height="905"
                            />
                        </a>
                        <div class="text-sm text-gray-500">
                            book ecommerce site
                        </div>
                        <a
                            href="https://github.com/ahp-sooyaa/real-time-chat-app"
                            class="m-0 no-underline hover:underline"
                        >
                            Koob
                        </a>
                    </div>
                    <div>
                        <div
                            class="mt-0 mb-5 shadow-lg aspect-w-2 aspect-h-1 hover:scale-105 transition ease-in-out duration-300"
                        >
                            <img
                                src="/img/chat.png"
                                alt="koob"
                                class="w-full h-full m-0 rounded-lg"
                                width="1810"
                                height="905"
                            />
                        </div>
                        <div class="text-sm text-gray-500">
                            real time chat app
                        </div>
                        <a
                            href="https://github.com/ahp-sooyaa/real-time-chat-app"
                            class="m-0 no-underline hover:underline"
                        >
                            Chat
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://ahp-sooyaa.github.io/rock-paper-scissors-game/"
                            class="block mt-0 mb-5 shadow-lg aspect-w-2 aspect-h-1 hover:scale-105 transition ease-in-out duration-300"
                        >
                            <img
                                src="/img/rock-paper-scissors.png"
                                alt="koob"
                                class="w-full h-full m-0 rounded-lg"
                                width="1810"
                                height="905"
                            />
                        </a>
                        <div class="text-sm text-gray-500">
                            frontend mentor challenge
                        </div>
                        <a
                            href="https://ahp-sooyaa.github.io/rock-paper-scissors-game/"
                            class="m-0 no-underline hover:underline"
                        >
                            rock paper scissors game
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://ahp-sooyaa.github.io/space-tourism-website/"
                            class="block mt-0 mb-5 shadow-lg aspect-w-2 aspect-h-1 hover:scale-105 transition ease-in-out duration-300"
                        >
                            <img
                                src="/img/space-tourism.png"
                                alt="koob"
                                class="w-full h-full m-0 rounded-lg"
                                width="1810"
                                height="905"
                            />
                        </a>
                        <div class="text-sm text-gray-500">
                            frontend mentor challenge
                        </div>
                        <a
                            href="https://ahp-sooyaa.github.io/space-tourism-website/"
                            class="m-0 no-underline hover:underline"
                        >
                            space tourism website
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <footer
            class="animate-marquee relative bg-[url('/img/scattered-forcefields.svg')] h-72 text-center flex items-end justify-center"
        >
            <div
                class="absolute inset-0 bg-gradient-to-b from-black to-transparent"
            />
            <p class="mb-10 text-gray-200">
                &copy; 2023 AungHtetPaing. All rights reserved.
            </p>
        </footer>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Aung Htet Paing',

    meta: [
        { name: 'description', content: 'My Portfolio Site' },
        { property: 'og:title', content: 'Aung Htet Paing' },
        { property: 'og:image', content: '/img/koob.png' },
        { property: 'og:description', content: 'My Portfolio Site' },
        { property: 'og:url', content: '//aunghtetpaing.netlify.app/' },
    ],

    link: [
        {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/favicons/apple-touch-icon.png',
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/favicons/favicon-32x32.png',
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '64x64',
            href: '/favicons/favicon-64x64.png',
        },
    ],
});
</script>
