# remoteworklibrary.io

![Remote Work Library](https://github.com/adersberger/remoteworklibrary.io/blob/master/static/logo.png "Remote Work Library")

Open Library for Remote Work Culture, Practices and Tools

![CI](https://github.com/remoteworklibrary/remoteworklibrary.io/workflows/CI/badge.svg)

![Remote Work Library (Screenshot)](doc/screenshot.png "Remote Work Library (Screenshot)")

## Content creation process

![Content marketing workflow diagram](doc/content-marketing-workflow.png)

Content production involves many different people working together and can quickly become tangled and confusing. We organize and streamline our process for everyone involved with the help of this content workflow diagram. Our process shows four roles:

* Stakeholder / Requester: A person or company unit that has an idea for a topic and an interest in publishing it. In this project it will often be the case that the stakeholder is also the (main) writer of the post.
* Content Manager: A person from the QAware marketing team. Only members of this role can merge content in this repository to the master branch and publish content.
* Writer: The author of the content.
* Subject Matter Expert: A technical expert who helps the author as a sparring or review partner.

As already described in the first point, it can be possible that one person has several roles (e.g. stakeholder & writer) in this process. The following description takes the view of a writer and describes the technical process.

## Write Content

### Precondition

To become a writer at Remote Work Library, you need a github account. If you do not have an account yet, you can create one [here](https://github.com/join). If you already have an account, please send an email with your github name to info@remoteworklibrary.io and ask for membership in the `writer` group.

### Fork our Github Repository

Writers work on a fork of the repository. A fork can be created either via the [web interface](https://github.com/remoteworklibrary/remoteworklibrary.io) or with the [GitHub command line tool](https://cli.github.com/).

GitHub CLI example

```bash
gh repo fork remoteworklibrary/remoteworklibrary.io
```

After this step, a fork is created for the current GitHub user of the Writer: `https://github.com/<GITHUB_USER>/remoteworklibrary.io`. To work with it locally on a computer, this fork must first be cloned. If the fork is created with the CLI tool, a clone can at once. When creating the fork via the Web UI, this step must be performed as an extra step.

```bash
git clone https://github.com/<GITHUB_USER>/remoteworklibrary.io.git
```

### Start with our project  

[Get used to Hugo](https://gohugo.io/getting-started/quick-start) and then:

1) `hugo new posts/<articleTitle>/index.md` (as file name without blanks, e.g. `hello-world/index.md`)
2) edit content
3) `hugo server -D --minify`

### Edit page meta data

The Hugo Generator creates the content page as a markdown file. After running the generator the meta data must be extended.

Generator example:

```md
---
title: "Hello World"
date: 2020-05-11T10:43:02+02:00
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
```

1. Add `lastmod` attribute. Use value of `date` attribute for the first version of your new page.
2. Add `author` attribute. Add a markdown link to your GitHub profile as value.
3. Add `type` attribute with value `post`. Our theme supports more content type. But for the moment we only use `post`.
4. Add `image` attribute. Put an image to the `/static/img` folder and write the link into attribute`s value. More infos about providing image files can be found in the next chapter.
5. Add `categories`: Select one or more fitting categories for your post: `focus`, `collaborate`, `learn`, `socialize & serendipity`, and `rejuvenate`.
6. Add `tags`: Select one or more fitting tags for your post: `tool`, `practice`, `culture`

Final example:

```md
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

Please search and download your images by [gettyimages](https://www.gettyimages.de/). Store title and content images for your post in the same folder as the post's markdown file and refer them in markdown:

```md
{{< img src="mypic.jpg" alt="mypic" >}}
```

or as a figure with caption:

```md
{{< figure figcaption="caption text" >}}
  {{< img src="mypic.jpg" alt="mypic" >}}
{{< /figure >}}
```

Title image rules:

* Please provide images (JPG, PNG) in 16:9 aspect ratio.
* Best images size for the current page layout is 730 x 410 px.

For further information and storage of source files we have an own GitHub project [remoteworklibrary-assets](https://github.com/remoteworklibrary/remoteworklibrary-assets).

### Create pull request

It is the best to work only on one post at a time and after the work on this post is finished for the time, create a pull request with the changes for the upstream respository.

1. Commit & push all changes to your fork
2. Create pull request

```bash
gh pr create

Creating pull request for master into master in remoteworklibrary/remoteworklibrary.io

? Title Describes pull request creation
? What's next? Submit
https://github.com/remoteworklibrary/remoteworklibrary.io/pull/20
```

### Update your fork

Fetch branches and commits from the upstream repo (`remoteworklibrary/remoteworklibrary.io`). You’ll be storing the commits to master in a local branch upstream/master:

```bash
git fetch upstream
```

Checkout your fork’s local master, then merge changes from upstream/master into it.

```bash
git checkout master
git merge upstream/master
```

Push changes to update your fork on Github.

```bash
git push
```

## Docker Build & Run

### Build image with current content

```bash
docker build -t europe-west3-docker.pkg.dev/remote-work-library/remote-work-library-docker/remote-work-library:latest .
```

### Run Docker container from image

```bash
docker run -p 1313:80 --rm europe-west3-docker.pkg.dev/remote-work-library/remote-work-library-docker/remote-work-library:latest
```

Start your browser and open <http://localhost:1313/.>

## Deploy Site

* Site is automatically deployed by a github action to a github page
  * GitHub project: https://github.com/remoteworklibrary/remoteworklibrary.github.io
  * Site: https://www.remoteworklibrary.io
* Test environment with draft posts is automatically deployed by a github action to a Google Cloud Run service
  * Site: https://remote-work-library-j62hawuk6q-ey.a.run.app
