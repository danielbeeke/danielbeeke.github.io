---
title: BCP47 Picker
description: A flexible language picker
layout: project.hbs
link: https://bcp47.danielbeeke.nl
repo: https://github.com/danielbeeke/bcp47-picker
poster: https://images.unsplash.com/photo-1473755504818-b72b6dfdc226
role: Creator
type: Open Source Project
tech: TypeScript, TRIE, BCP47, Microbundle
when: 2022
index: 7
---

There is a great standard that helps with specifing the language of anything. It is called [BCP47](https://en.wikipedia.org/wiki/IETF_language_tag). Maybe you have seen `en-US` or `de-AT` somewhere. These are BCP47 tags. The great thing is that `nl` is also a valid tag, but also something like: `drt-x-his9414`. The last one is a dutch dialect called North Drents, which extends the language `drt`. 

I personally did not know that Drents itself was seen as a language, and it might be not totally valid. It might be better to use: `nl-x-his9414` Anyway these language tags are very useful for tagging media. You can get all media that is Dutch (`nl`) but also fetch the narrowed down media: `x-his9414`.

What is this `x-`? This a part that is called private use. And the `his1234` part is made up by the folks of [HIS](https://hisregistries.org/rolv/). HIS is a Christian organization that tries to identify all the languages and language variaties in the world. A language variety might be a dialect, or a language that not yet has been identified as a full language.

To help tagging media I created [bcp47-picker](https://github.com/danielbeeke/bcp47-picker). It is also available to use with your own software. It is also possible to plug in your own language codes or standards.

<video src="/assets/bcp47.webm" autoplay controls></video>

