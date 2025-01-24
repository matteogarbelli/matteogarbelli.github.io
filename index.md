---
layout: single
title: "Matteo Garbelli"
---

## About Me

My name is Matteo Garbelli, and I am a Postdoc Researcher in the College of Mathematics at the Department of Informatics, University of Verona.

I work in the Stochastic Analysis group led by Luca Di Persio. My research interests lie in the areas of Stochastic Processes, Machine Learning, and Mean Field Games. In particular, my current research focuses on:

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
  Course: {{ teaching.type }}  
  University: {{ teaching.venue }}  
  Period: {{ teaching.date }}  
{% endfor %}

---

## Contact

- **Email**: [matteo.garbelli@univr.it](mailto:matteo.garbelli@univr.it)  
- **Office**: Room 2.22, Department of Informatics, University of Verona, Strada Le Grazie 15  
- **Google Scholar**: [Profile](https://scholar.google.com/citations?user=XuqRLqUAAAAJ&hl=it&oi=ao)  
- **ResearchGate**: [Profile](https://www.researchgate.net/profile/Matteo-Garbelli)  
