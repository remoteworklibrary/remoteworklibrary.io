# remoteworklibrary.io

![Remote Work Library](https://github.com/adersberger/remoteworklibrary.io/blob/master/static/logo.png "Remote Work Library")

Open Library for Remote Work Culture, Practices and Tools

![CI](https://github.com/remoteworklibrary/remoteworklibrary.io/workflows/CI/badge.svg)

![Remote Work Library (Screenshot)](https://github.com/adersberger/remoteworklibrary.io/blob/master/screenshot.png "Remote Work Library (Screenshot)")

## Write Content
[Get used to Hugo](https://gohugo.io/getting-started/quick-start) and then:
 1) `hugo new posts/<articleTitle>.md` (as file name without blanks, e.g. `hello-world.md`)
 2) edit content
 3) `hugo server -D`

### Edit page meta data

The Hugo Generator creates the content page as a markdown file. After running the generator the meta data must be extended. 

Generator example:

```
---
title: "Hello World"
date: 2020-05-11T10:43:02+02:00
draft: true
---
```

1. Add `lastmod` attribute. Use value of `date` attribute for the first version of your new page.
2. Add `author` attribute. Add a markdown link to your GitHub profile as value.
3. Add `type` attribute with value `post`. Our theme supports more content type. But for the moment we only use `post`.
4. Add `image` attribute. Put an image to the `/static/img` folder and write the link into attribute`s value. More infos about providing image files can be found in the next chapter.
5. Add `categories`: Select one or more fitting categories for your post: `focus`, `collaborate`, `learn`, `socialize & serendipity`, and `rejuvenate`.
6. Add `tags`: Select one or more fitting tags for your post: `tool`, `practice`, `culture`

Final example:

```
---
title: "Hello World"
date: 2020-05-11T10:43:02+02:00
lastmod: 2020-05-11T10:43:02+02:00
author: "[Josef Fuchshuber](https://github.com/fuchshuber)"
type: "post"
image: "img/hello-world.jpg"
categories: ["practice"]
tags: ["collaborate", "learn", "socialize"]
draft: true
---
```

### Add images

Please search and download your images by [gettyimages](https://www.gettyimages.de/). Store title and content images for your post in folder `/static/img` and refer them in markdown:

```
![mypic](/img/mypic.jpg)
```

Title image rules:

* Please provide images (JPG, PNG) in 16:9 aspect ratio.
* Best images size for the current page layout is 730 x 410 px.

For further information and storage of source files we have an own GitHub project [remoteworklibrary-assets](https://github.com/remoteworklibrary/remoteworklibrary-assets).

## Deploy Site
 * Site is automatically deployed by a github action to a github page
