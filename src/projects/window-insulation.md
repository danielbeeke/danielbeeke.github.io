---
title: Window insulation
layout: project.hbs
poster: https://danielbeeke.nl/images/showcase-background-big/kozijnisolatie.jpg
description: Calculation tool for carpentry shops
type: With Fonkel and Graphius
tech: JavaScript, Google Sheets, Redux, uHTML, RemoteStorage
role: Developer
index: 8
---

The dutch branch organization for carpentry factories, NBvT has a lot of members that need to do a lot of difficult calculations to show how much warmth gets lost in their wooden constructions. They need to tell their customers how much warmth their wooden doors, frames and windows let through.

This tool helps them by supplying a user interface in which they can build the whole frame digitally and set all the right parameters. With that input the tool calculates how much warmth the customer will lose.

The tool needs to know a few basic settings, like the wood type that will be used and the sizes of the frame. This screen we built together with the technical product owner, he explained a lot of things that we needed to learn about windows and doors.

<video src="/assets/kozijnisolatie.webm" autoplay controls></video>

Some technical information: this whole tool runs inside the browser of the user. It is super fast because of that. The tools saves the data in the NBvT’s website. It does that in a fully decoupled way. A project is exported to a text definition in JSON format and that is saved in the user’s account.

![Kozijnisolatie](/assets/kozijnisolatie-1.png)

One of the difficult things in this project was building things that we have never build before. You need to have a model that matches the reality or at least a simplification that works for the use case.

Creating the grid and the validation for it was interesting. Inserting rows after initiating the grid, removing columns, checking for incomplete squares, all things that needed small algorithms.

![Kozijnisolatie](/assets/kozijnisolatie-2.png)

The next step involves changes the different lines of the grid so it has the right dimensions. After that we can continue to fill it up with doors, windows and wood panels.

All those lines where the sizes are shown are calculated and drawn with code.

![Kozijnisolatie](/assets/kozijnisolatie-3.png)

All the images of doors and windows are drawn with code. Each part that is used in the calculation, like a metal strip or a piece of wood has dimensions and is drawable. For example, a window inside a door is a piece with dimensions.
A lot of things are adjustable, how thick the wood needs to be, the wood type, the aluminium type and a lot more!

Every piece of the wooden frame has a settings form. In that form you can tell how thick the wood or glass is. You have project defaults as shown right in the image above that you can override. The drawing is on scale. It is a SVG with the real sizes, but in points.

The last step shows the results. It does that with expandable details. The user can download a PDF to give to the customer.

In the last step it is also possible to check what would be different when you would use a different kind of wood.