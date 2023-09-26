// 
function setupCardListeners(card){
  card.addEventListener("click", function(e){
    this.classList.toggle("highlighted");
  });
  
  // This block is used to change the card color using an if statement.
  const colorToggleBtn = card.querySelector('.color-toggle-button');
  colorToggleBtn.addEventListener('click', function(){
    const cardContent = document.querySelector('.card-content');
    if(cardContent.classList.contains('hotpink-bg')){
      cardContent.classList.remove('hotpink-bg');
    }else{
      cardContent.classList.add('hotpink-bg');
    }
  });
  
  // This block is used to change the title to something else
  const changeTitleBtn = card.querySelector('.change-title-button');
  changeTitleBtn.addEventListener('click', function(e){
    e.stopPropagation();
    const title = this.closest('.card-content').querySelector('.card-title');
    if (title.textContent === "Lightning McQueen"){
      title.textContent = "something Else";
    }else{
      title.textContent = "Lightning McQueen";
    }
  });
  
  // Creates the details button that hides or shows the details of the card 
  const detailsLink = card.querySelector('.details-button');
  detailsLink.addEventListener('click', function(e){
    e.preventDefault();
    const description = this.closest('.card-content').querySelector('.card-description');
    description.classList.toggle('hidden');
  });
}

// This block of text clones the entirety of the card
document.getElementById('btn').addEventListener('click', function(){
     const wrapper = document.getElementById('wrapper');
     const cardClone = wrapper.querySelector('.card').cloneNode(true);
wrapper.appendChild(cardClone);
setupCardListeners(cardClone);
handleCardHover(cardClone);
});
const deleteButton = document.getElementById('deleteBtn');

deleteButton.addEventListener('click', function(){
const cards = document.querySelectorAll('.card');
const lastCard = cards[cards.length - 1];
if (cards.length > 1){
  lastCard.remove();
}
  });

// This block is designed to change the background color when you hover over the card
function handleCardHover(card){
  card.addEventListener('mouseenter', function(){
                        this.classList.add('highlighted');
                        });

card.addEventListener('mouseleave', function (){
  this.classList.remove('highlighted');
});
}

const intitalCard = document.querySelector('.card');
setupCardListeners(intitalCard);
handleCardHover(intitalCard);