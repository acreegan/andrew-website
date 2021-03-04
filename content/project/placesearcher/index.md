---
title: Placesearcher
summary: A data science project
tags:
date: "2021-02-01"

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  placement: 1
  caption: 
  focal_point: Smart

links:
url_code: ""
url_pdf: ""
url_slides: ""
url_video: ""

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: example
---

Place Searcher is a data science project currently in development. The goal is to gain city level insights and rankings on categories of places by leveraging Google’s places API. The main data gathering process involves making calls to the places API in a grid fashion, then saving those, timestamped, in a database. The purpose of this is to circumvent the limitations google sets on its places API. Once stored in a database, the data can be analysed freely. The data gathering side of the project is currently active, making use of Google’s cloud computing services to schedule the running of a python script which makes calls to the places API. The responses (in the form of JSON data) are then stored in a cloud hosted MongoDB database. The user facing side of this project is yet to be developed

