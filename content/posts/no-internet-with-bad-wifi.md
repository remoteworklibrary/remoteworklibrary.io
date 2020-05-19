---
title: "No Internet With Bad WiFi"
date: 2020-05-19
lastmod: 2020-05-19
author: "[Florian Utzt](https://www.xing.com/profile/Florian_Utzt/cv)"
type: "post"
image: "img/bad-wifi.jpg"
categories: ["tool"]
tags: ["collaborate"]
draft: true
---

No video call without internet. Right. But what is the problem if your internet provider serves enough bandwidth to your home or office and but anyway your internet connection at your notebook is slow as in the 90ies?

<!--more-->

## What is it and why fix it?

A remote worker often needs nothing more than his notebook and a good internet connection. But what if that's exactly the problem: Too slow, too unstable, too overloaded. Sure, if your internet connection to your provider is too slow or unstable, only your provider can fix this problem, or you can consider a change of provider or a relocation to an address with fast fiber. According to our analysis, most of the problems are not caused by the internet provider, but by bad WiFi conditions. This article provides tips and alternatives for tackling slow and unstable WiFi connections.

## How to do it?

There’s several components between your laptop and the internet. Their overall performance can be no greater than what the weakest link in the whole chain can perform, and surprisingly often, you can optimize throughput without contacting your internet provider.

### WiFi is good, cable is better.

No exceptions! Whenever you are able to connect your PC to your router via an ethernet cable, just do it! Even a typical 2010-ish 54 MBit WiFi setup would be easily able to handle a video stream in a perfect environment. After all, even a compressed FullHD stream can stay well below 3 Mbit. But reality usually kicks in and adds latency, congestion and several concrete walls to your WiFi. Just run a cable in the first place and save yourself A LOT of trouble.

### Get creative

Yes. Running a cable across your house is a lot of work. It might still be worth the effort, considering the current circumstances. This is not the occasional work from home day. Odds are this will be your office for the next months or a year. Do it early, get the maximum out of it. There are some workarounds for more complex situations. Powerline adapters make use of the electricity lines in your house to transmit data “on top”. The throughput is surprisingly high and will easily handle multiple video conferences in parallel.

Vertical distance is often a bigger problem than horizontal distance. What if your router is in the basement but your workplace on the 2nd floor? Consider just running the cable on the outside wall. There are super-flat ethernet cables that will fit within window frames and doors. You might need a RJ45 coupler to connect them. Don’t worry, even indoor LAN cables withstand the weather pretty well for a year or longer. Just use some tape on the connection ends and you’ll be fine. Warning: Never do the same with power supply lines (high voltage electricity)! If you still can’t reach your workplace, would you be able to cover at least part of the distance, to place an additional WiFi access point at a location that is in better reach of your workplace?

### Optimize your WiFi

If you are still not able to run the cable, then it’s time to check your WiFi settings. WiFi operates on two common frequency bands:

* 2.4 GHz: long range, good transmission through walls and ceilings, widely used, easily
congested. Also the only suitable option for REALLY old devices
* 5 GHz: shorter range, more blockage by walls/ceilings, not congested

If you are on 2.4 GHz and having problems, test what happens if you switch to 5GHz. Not only does it provide more bandwidth, it is usually not as congested as 2.4GHz. In a large apartment building, it has become almost impossible to run a 2.4 GHz WiFi with acceptable performance. Oh, and while you’re at it, please test what the minimum output strength of your WiFi is to reach all locations within your home. The power savings are marginal, but at least you’re not contributing to someone else’s WiFi congestion problems.

### Related items

* [Video Conferencing]({{< ref "/posts/video-conferencing.md" >}})