---
title: Twin Topos
summary: A website for comparing the size of cities
date: "2021-12-30"
draft: false
external_link: ""
image:
  focal_point: Smart
  preview_only: False
---
Twin Topos is a website I designed to help get an intuitive idea of the size of cities around the world. It works by showing two map views side by side. They are linked such that equivalent scale is maintained between them. The user can then set one view to a place they are familiar with, and the other to a place they would like to learn about. With the map scales maintained, it is easy to understand equivalent discances in the familiar and unfamiliar places.

The most important technical aspect of the site is to ensure that the map scales match in terms of meters per pixel, which requires different zoom levels at different latitudes. This is accomplished using an event listener to recalculate zoom levels whenever either map is moved or zoomed.

The website is written in Javascript, and makes use of the Google Maps API. View the live site at: https://www.twintopos.com