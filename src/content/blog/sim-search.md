---
title: "Six Degrees of Similarity Search"
date: "July 23, 2025"
excerpt: "6 layers of graph-based similarity search."
---

Imagine you have a large collection of numeric data. Each data point is represented by a multi-dimensional vector of numbers. For example, maybe you're collecting physical statistics of a large group of people. Or, maybe you're doing something more abstract, like storing semantic representations of a large corpus of text. You'd like to **query** this database with a target vector and find matching data points. Perhaps it is unlikely that you find an exact match, but you want to at least find the *closest* matches in your dataset, under some notion of numeric distance.

This is the core task of **similarity search**, a paradigm that covers everything from recommendation systems to retrieval-augmented generation (RAG) capabilities of LLMs. Given a dataset consisting of many (i.e. millions or billions) of high-dimensional (i.e. hundreds or thousands) vectors, **preprocess** into a data structure, such that upon a target **query** vector, one can efficiently find similar data points. Similarity search algorithms are as old as computer science, but in this post, we'll cover a modern class of **graph-based** algorithms which are predominantly used in practice. The explanation will proceed in six stages, or ``degrees'', of increasing depth. We'll start with a perspective from sociology, and we'll slowly (but surely) build up to research from the past couple years.


## Degree 1: A Perspective from Sociology

You've probably heard for the ``six degrees of separation'' phenomenon: randomly choose two people in the world, and on average, they are linked by a sequence of at most six social connections. Apart from a theory in pop culture, this phenomenon was actually the subject of an experiment by the social psychologist Stanley Milgram, who aimed to show experimentally verify the theory.

Milgram's experiment

## Degree 2: Kleinberg's Model of Navigability

## Degree 3: Wireless Routing and Greedy Embeddings

## Degree 4: Nearest Neighbor Search and HNSW

## Degree 5: DiskANN and $\alpha > 1$

## Degree 6: Doubling Dimension and Indyk-Xu
