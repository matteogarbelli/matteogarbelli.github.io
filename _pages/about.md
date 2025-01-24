---
layout: single
title: "About"
permalink: /about/
---




My name is Matteo Garbelli and I am a Postdoc Researcher in the College of Mathematics of the Department of Informatics at the University of Verona. 

I am working in the Stochastic Analysis group of Luca Di Persio. My research interests lie in the areas of Stochastic Processes, Machine Learning and Mean Field Games. In particular, my current research focuses on:

- Mean Field Games with (and without) common noise;
- Adapted Wasserstein Distance;
- BSDEs with memory features;
- McKean Vlasov S(P)DES.



I obtained my PhD in 2023 from the University of Trento under the supervision of Luca Di Persio. Here is [my thesis](https://iris.unitn.it/handle/11572/398234?mode=simple), titled "Stochastic Differential Equations and Mean Field Games towards Machine Learning applications".

---

## Publications

{% for publication in site.publications %}
- **{{ publication.title }}**  
  Published in: {{ publication.venue }}  
  Citation: {{ publication.citation }}  
  [Read the Paper]({{ publication.paperurl }})  
{% endfor %}

---

## Teaching

{% for teaching in site.teaching %}
- **{{ teaching.title }}**  
  Semester: {{ teaching.semester }}  
  Description: {{ teaching.description }}  
{% endfor %}

---

Feel free to contact me at [email](mailto:matteo.garbelli@univr.it) or visit my [Google Scholar](https://scholar.google.com/citations?user=XuqRLqUAAAAJ&hl=it&oi=ao).

======

Contact Details


E-mail address:

matteo[dot]garbelli[at]univr[dot]it

Office:

Room 2.22, Department of Informatics, University of Verona, Strada Le Grazie 15

