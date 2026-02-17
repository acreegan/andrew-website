---
title: Placesearcher
description: A data science project
tags: ["web", "software"]
date: "2021-02-01"
thumbnail:
  src: "./featured.png"
  alt: "Maps flag logo"
---

Place Searcher is a data science project currently in development. The goal is to gain city level insights and rankings on categories of places by leveraging Google’s places API. The main data gathering process involves making calls to the places API in a grid fashion, then saving those, timestamped, in a database. The purpose of this is to circumvent the limitations google sets on its places API. Once stored in a database, the data can be analysed freely. The data gathering side of the project is currently active, making use of Google’s cloud computing services to schedule the running of a python script which makes calls to the places API. The responses (in the form of JSON data) are then stored in a cloud hosted MongoDB database. The user facing side of this project is yet to be developed

