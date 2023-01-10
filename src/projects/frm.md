---
title: FRM
repo: https://github.com/danielbeeke/frm
layout: project.hbs
poster: https://images.unsplash.com/photo-1450101499163-c8848c66ca85
description: Linked Data forms from validation rules
tech: RDF, SHACL, TypeScript
when: 2022
role: Creator
type: Open Source Project
index: 6
---

What if a system existed where you could use whatever piece of data and it would generate a form that could be used to edit that piece of data, or create a variant of it. With FRM that will be possible in the future. 

Think of FRM as a form system, an advanced one. It can have address search fields for example. It can also group together fields when needed. What makes FRM different from other form systems that it is completely detached from backend systems. It uses [SHACL](https://www.w3.org/TR/shacl/) to define forms. You can think of SHACL as a set of validation rules for a piece of data. FRM derives the form widgets from these validations rules. You can also add specific rules that only FRM understand, such a specific widget or widget setting.

![FRM](/assets/frm.png)
