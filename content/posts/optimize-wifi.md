---
title: "Optimize your WiFi"
date: 2020-05-19
lastmod: 2020-05-19
author: "[Florian Utzt](https://www.xing.com/profile/Florian_Utzt/cv)"
type: "post"
image: "img/bad-wifi.jpg"
categories: ["tool"]
tags: ["collaborate"]
draft: true
---

Bad WiFi can seriously drag down your working performance. There are some things you can fix by yourself. 

<!--more-->

## What is it and why fix it?

WiFi is a so-called shared medium, which means: There's a limited amount of bandwidth, and in crowded areas, there's not enough room for everyone's WiFi. 
Your Wi-Fi performance is affected not only by the quality of your own equipment, but also by the general frequency congestion, especially if you live in a multi tenant house. 

## How to do it?

Before you start optimizing WiFi, check if you can just get rid of it. [No Internet with Bad WiFi]({{< ref "/posts/no-internet-with-bad-wifi.md" >}})
If you are still not able to run the cable, then it’s time to check your router's WiFi settings. 

WiFi operates on two common frequency bands:

* 2.4 GHz: long range, good transmission through walls and ceilings, widely used, very often congested. Also the only suitable option for REALLY old devices
* 5 GHz: shorter range, more blockage by walls/ceilings, seldom congested

If you are on 2.4 GHz and having problems, test what happens if you switch to 5GHz. Not only does it provide more bandwidth, it is usually not as congested as 2.4GHz. In a large apartment building, it has become almost impossible to run a 2.4 GHz WiFi with acceptable performance. 

If you are capable of a router that can run 2.4 and 5.0 GHz in parallel, avoid using the same SSID (SSID = Name of the WiFi network) on both frequency bands. Client devices will happily switch between 2.4/5.0 GHz and you won't get stable test results. 
In that case, is better to create a separate SSID (i.e. "MyWifi-50") and manually switch your client devices to that network, maybe even deleting the credentials for the old one. 

## Deeper dive

Tools like MetaGeek InSSIDer can measure the network congestion and list the rogue WiFis at your place. Some routers offer the same functionality. 
Maybe you can convice your neighbor to crank down his super-high intensity WiFi? Higher signal strength makes no-ones WiFi faster, just more annoying for the neighbors. 

Oh, and while you’re at it, please do your part as well. Test what WiFi output strength you need at your router to reach all locations within your home. The power savings are marginal, but at least you’re not contributing to someone else’s WiFi congestion problems.

## A word about extenders

There are several WiFi extenders or repeaters on the market. It's important to understand how these devices work. A repeater is designed to be put in the middle between your router and your PC. 
It logs into your router's WiFi as a client, then it serves the same WiFi to your PC. By doing that, the overall range of your WiFi is extended, but the network traffic must now be sent twice - to the repeater, then to the router. 
As a result, the overall throughput between your PC and router is effectively cut in half! 

Repeaters do have their advantages in long-range, low-congestion situations, but this is most likely not what you're currently dealing with. 

### Related items

* [Video Conferencing]({{< ref "/posts/video-conferencing.md" >}})
* [Optimizing WiFi]({{< ref "/posts/optimizing-wifi.md" >}})
