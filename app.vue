<script setup>
const query = groq`
    {
        'projects': *[_type == 'project'] | order(_createdAt asc), 
        'experiences': *[_type == 'experience'], 
        'hero': *[_type == 'hero_section'][0]
    }
`;
const { data } = useSanityQuery(query);
</script>

<template>
    <div class="bg-[#010101]">
        <div
            class="relative min-h-screen max-w-5xl mx-auto grid place-content-center px-4 lg:px-8 mb-32 md:mb-0"
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
                        {{ data.hero.heading }}
                    </h1>
                    <p>
                        {{ data.hero.body }}
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
                <SanityImage
                    :asset-id="data.hero.hero_image.asset._ref"
                    auto="format"
                    fm="webp"
                >
                    <template #default="{ src }">
                        <img
                            :src="src"
                            alt="light bulb"
                        />
                    </template>
                </SanityImage>
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
                <div
                    v-for="experience in data.experiences"
                    class="pl-5 relative"
                >
                    <div
                        class="bg-gradient-to-b from-transparent via-[#FF6C00] to-transparent h-full w-[1px] absolute left-0"
                    />
                    <div class="not-prose text-sm text-gray-500">
                        {{ experience.start_date }} - {{ experience.end_date }}
                    </div>
                    <div>
                        <h2 class="mt-0 mb-3">
                            {{ experience.position }} @ {{ experience.company }}
                        </h2>
                        <p class="max-w-3xl">
                            {{ experience.description }}
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
                    <div v-for="project in data.projects">
                        <a
                            :href="project.link"
                            class="block mt-0 mb-5 shadow-lg aspect-w-2 aspect-h-1 hover:scale-105 transition ease-in-out duration-300"
                        >
                            <SanityImage
                                :asset-id="project.featured_image.asset._ref"
                                auto="format"
                                fm="webp"
                            >
                                <template #default="{ src }">
                                    <img
                                        :src="src"
                                        :alt="
                                            'image of ' +
                                            project.name +
                                            'project'
                                        "
                                        class="w-full h-full m-0 rounded-lg"
                                        width="1810"
                                        height="905"
                                    />
                                </template>
                            </SanityImage>
                        </a>
                        <div class="text-sm text-gray-500">
                            {{ project.description }}
                        </div>
                        <a
                            :href="project.link"
                            class="m-0 no-underline hover:underline"
                        >
                            {{ project.name }}
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <footer
            class="animate-marquee relative bg-[url('/img/scattered-forcefields.svg')] h-52 lg:h-72 text-center flex items-end justify-center"
        >
            <p class="mb-10 text-gray-200">
                &copy; 2023 AungHtetPaing. All rights reserved.
            </p>
        </footer>
    </div>
</template>
