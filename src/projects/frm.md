---
title: FRM
repo: https://github.com/danielbeeke/frm
layout: project.hbs
poster: https://images.unsplash.com/photo-1450101499163-c8848c66ca85
description: Linked Data forms from validation rules
tech: RDF, SHACL, TypeScript
when: 2022
role: Creator
type: Open Source Project / Sub project of LightNet
index: 6
---

The LightNet product uses RDF for the data structure. To create and edit media it a form is needed. FRM creates forms from SHACL. SHACL is a data validation language. 

Steps:
- Create SHACL rules
- Load FRM with these SHACL rules
- A form is rendered that will have all the widgets for the data
- Add extra properties to make widget specific changes


FRM is very modular. You can plug in your own widgets. It is also possible to plugin in your own groupings. An example of a grouping is the address field. It contains multiple fields and you can search for an address just like Google Maps and it will autocomplete.

![FRM](/assets/frm.png)
