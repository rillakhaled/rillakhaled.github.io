---
title: "(300, 300)"
date: 2022-04-10T19:58:00-04:00
tags: ["css", "scary story"]
draft: false
resources:
  - src: style.css
---

<div id="ghost">
  <img id="prince" src="prince.jpg">
</div>

A well-known urban legend amongst front-end developers is the ghost div who haunts (300, 300).

They say that that div was put on the front page of [www.geocities.com](http://www.geocities.com) in 1999, at x: 300px; y: 300px;

It always rendered as fast as it could, positioned itself exactly where it was asked to, but because it had (accidentally?) been assigned a z-index of -999, none of the millions of people who frequented GeoCities back then ever noticed it or appreciated it.

10 years went by. GeoCities' popularity waned rapidly; fewer and fewer people visited GeoCities at all.

In 2009, Yahoo decided to shut down GeoCities and deleted all of it. Along with all of the other GeoCities materials, that div officially ceased to exist.

But ever since then, that div now just turns up *anywhere*, especially when devs have assigned z-indexes haphazardly.

Always in (300, 300). *But with a z-index of 999.*
