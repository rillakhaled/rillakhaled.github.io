---
title: "Only Two"
date: 2022-04-05T12:32:46-04:00
draft: false
tags: ["css", "hugo", "learning", "code sketch"]
resources:
  - src: toggles.css
  - src: script.js
---
<div class="main">
<p>
Fast, cheap, good. This much is true.
</p>

<p>
<label class="switch">
<input type="checkbox" id="s" value="yes" onchange="checkStates()">
<span class="slider" id="speed">
</span>
</label>

<label class="switch">
<input type="checkbox" id="c" value="yes" onchange="checkStates()">
<span class="slider" id="cost">
</span>
</label>
<label class="switch">
<input type="checkbox" id="q" value="yes" onchange="checkStates()">
<span class="slider" id="quality">
</span>
</label>
</p>
<p>
You can't have three, but you can have two.
</p>
<p class="unpopular-opinion">
Other (common) cases no one bothers to mention: one | none.
</p>
