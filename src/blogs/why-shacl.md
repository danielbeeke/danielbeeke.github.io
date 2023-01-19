---
title: Why SHACL?
date: 2023-01-19
layout: blog.hbs
---

First: what is SHACl? The following paraphrased definition comes from the official [SHACL specification](https://www.w3.org/TR/shacl/).

> SHACL Shapes Constraint Language is a language for validating RDF graphs against a set of conditions.

At the moment I am developing various SHACL based libaries, a form system, a SHACL to TypeScript types library and a SHACL to SPARQL library but why and what are these exactly?

## What is SHACL really?

### Schemaless

When you are working with RDF data there are no database constraints in the database (which is often called a triple store). The database itself is basically one big table with three columns. These three columns are subject, predicate and object (Do you want to know more about the RDF structure itself? I wrote [previously about it](/blogs/rdf-data-and-schema-in-one/)). It might be that that the database creates index tables under the hood. I don't know much specifics about that. But the general basic idea is, getting something out of the database is mostly joins and it does not involve constraints that are configured in a schema that lives in the database.

### SHACL as a schema that lives in your application

A SHACL shape could be described as a set of rules that describe how a piece of data may look; which parts are required and how relationships may behave. Because the database is schemaless we must use these SHACL shapes in our application. A SHACL shape has a target class, meaning it applies to a certain type. So imagine, you have a form to create a person in an addressbook that is RDF based, the application can use a SHACL shape that applies to `schema:Person` to check if you have filled the required fields and also that if you reference something that it makes sense. An example of a reference could be that you entered a link to a company in the work field. If that website would be de-referenceable (meaning it has RDF data under the hood) SHACL (and your application) could check if the company also says it is of the type `schema:Company`.

### What makes SHACL great?

#### Flexible validations

SHACL is great because it has a deep integration to the data. For example, you could specify that you have a `schema:Product`, the product always has an English name and it may be translated into any other language. You can also specify that a `schema:colleague` may be a string or it must be a reference to a link that is de-referenceable and has the type `schema:Person`.

#### Loose coupling

##### Backend data consistency and validation

The other thing that I love, is that SHACL makes it possible to split applications into seperate components. SHACL can be used as an interface to program against. Example: The SHACL file could live in the backend and whenever something is inserted the backend checks if it has a SHACL shape for the piece of content. If it has, it validates against it, if not it will reject. 

##### Structure introspection and validation for frontend forms

That same SHACL shape can be used to show a form in the administrative interface to add pieces of contents. The SHACL rules are read and widgets are shown for each field. When the user changes anything the data is validated and errors are shown and when everything validates, then it is send to the backend, and as explained before, the backend does its own validation with the same SHACL shape.

##### Server driven UI tooling

You can also use the SHACL shape to create a configuration screen for server driven UI. Meaning when you known which fields a piece of content has you can show ways of configuring these, how the look and where they are placed when they are displayed in a website or application.

#### So I gave three examples: 

- Backend data consistency and validation
- Structure introspection and validation for frontend forms
- Server driven UI tooling

The really cool thing is that you can have these three applications separated into components that do not touch eachother.

### Comparision to SQL based application such as Drupal

How does this compare to a SQL based application? Drupal has some similarities, they created their own form API. The Drupal form api has understanding of the Drupal entity API which defines the fields on content types. The difference, SHACL is a W3 based standard, with well tested libraries available. Drupal had to make all these form and entity definition systems themselves. Which are quite wonderful, don't get me wrong. But it is not standardized.

The other thing in Drupal is that the entity schema is tight coupled to the database, there is migration code to keep the SQL schema in sync with the entity definitions. 

Most importantly, data that lives in a SQL database of Drupal application is not easily interoperatable. It is purely meant for that one Drupal application and more specifically the database schema. 

#### RDF data migrations

Of course with RDF you still need something to migrate data. If you have a person with `ex:firstName` and you want to change that to `schema:givenName` you can do a migration where you duplicate data. You adjust your application to allow for `schema:givenName`. When all functions as expected you check the data for changes and when all looks good you can delete the old `ex:firstName`.

### Summary

I hope you found it interesting to read about SHACL and how it can help you create seperated applications that use SHACL as an interface to comunicate about the data structures that flow through further unrelated the applications.