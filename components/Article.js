// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
import data from './Data.js';
/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2> //child of article
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>

*/


function articleMaker(articleData) {
  
  const article = document.createElement('div');
  const title = document.createElement('h2');
  const date = document.createElement('p');
  const firstP = document.createElement('p');
  const secondP = document.createElement('p');
  const thirdP = document.createElement('p');
  const expandButtonSpan = document.createElement('span');
  const expandButton = document.createElement('button');

  article.classList.add('article');
  title.classList.add('title');
  date.classList.add('date');
  expandButtonSpan.classList.add('expandButton');
  
  
  title.textContent = articleData.title;
  date.textContent = articleData.date;
  firstP.textContent = articleData.firstParagraph;
  secondP.textContent = articleData.secondParagraph;
  thirdP.textContent = articleData.thirdParagraph;
  expandButton.textContent = 'Expand';
    
  article.appendChild(title);
  article.appendChild(date);  
  article.appendChild(firstP);
  article.appendChild(secondP);
  article.appendChild(thirdP);
  article.appendChild(expandButtonSpan);
  expandButtonSpan.appendChild(expandButton);

/*

  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.
*/
expandButton.addEventListener('click', () => {
  
  
    article.classList.toggle('article-open');
  
    
})
/*
  Step 3: Don't forget to return something from your function!
*/
 return article;
}
/*
  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).
*/

const grabDivArticles = document.querySelector('div.articles');

data.forEach(element => {
  console.log(element);
  console.log(articleMaker(element));
  grabDivArticles.appendChild(articleMaker(element));
  
});
/*
  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/





