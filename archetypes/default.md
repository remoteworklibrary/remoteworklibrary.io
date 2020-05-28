---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
author: ""
type: "post"
image: ""
categories: []
tags: []
draft: true
---

Post text

<!--more-->

{{< figure figcaption="caption text" >}}
  {{< img src="filename.jpg" alt="alt text" >}}
{{< /figure >}}
