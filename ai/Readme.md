# all AI codes are here

### Chatgpt 3.5 + claude ai Prompt used to generate sample data for grievances
```
i want to train a classifier that classifies the complaints or grivances filed by citizens into different departments so that I can forward the grivances to respective offices. i want you to act as dataset generator. please give me a list without title. just paragraphs. i want you to generate 100 grievances written in first person. 

i want you to write a csv file containing 100 grievances that a ward officeof nepal get. these are the powers and responsibilities of ward office.
```
---
Authorities included in this MVP iteration
* Health
* educatiion,
* foreign ministry 
* nagarikta haru 
* police
* woda karyala, 
    - khane pani
    - fohor uthaune
* license banaune

---
- STORE the average embeddings in a vector db
- Knn for top 5 sim recommendations
- Ml classifier for classifying the complaint to respective authority


---
### References
* https://lawcommission.gov.np/en/?p=20326
* https://thehimalayantimes.com/kathmandu/functions-duties-powers-chiefs-local-levels-determined
* https://daodadeldhura.moha.gov.np/en/page/office-introduction-20#:~:text=District%20Administration%20office%20in%20each,under%20ministry%20of%20Home%20Affairs.&text=To%20maintain%20peace%2C%20order%20and,Government%2C%20Municipalities%2C%20Rural%20Municipalities.
* claude ai by anthropic
* chatpgt by openai