---
title: "Prototyping ChaBoT"
date: 2022-03-31T11:28:45-04:00
draft: false
tags: ["GPT-3", "Speculative Play"]
---


<!-- {{ $image := resources.Get "/images/chatbot.png" }}
<img src="{{ $image.RelPermalink }}" width="{{ $image.Width }}" height="{{ $image.Height }}"> -->

For the last year or so, I've sporadically wondered about whether there would be any benefit to be gained by conducting a CBT-ish (structured? informed?) conversation with a non-human agent. CBT is highly structured and its activities frequently serve as *therapy homework*, i.e. you can do them on your own.

Talking to an agent obviously wouldn't have the same effect as talking to a human therapist, on the other hand, what *would* the effect be? In the arena of mental healthcare, would there be a place (and a time) for conversational CBT with a chatbot?

[OpenAI](https://openai.com/) recently opened up access to its API, and I've started working on a GPT-3 powered CBT "assistant".

The current prototype is pretty rough.
