const filters = document.querySelectorAll('.list-filters .button');
var selectedCards = document.querySelectorAll('.card');
const modal = document.getElementById('modal-overlay');
const modalControls = {
  openModalBtn: document.getElementById('hero-button'),
  closeModalBtn: document.getElementById('modal-button-close'),
};

filters.forEach(f => f.addEventListener('click', onFiltersClick));
Object.keys(modalControls).forEach(key =>
  modalControls[key].addEventListener('click', toggleModal)
);

function onFiltersClick() {
  // unhide previously hidden cards
  selectedCards.forEach(card => card.classList.remove('hidden'));
  if (this.id != 'all-filter-button') {
    //select cards by type given by clicked filter
    selectedCards = document.querySelectorAll(
      '.card:not(.' + this.id.replace('-filter-button', '-card') + ')'
    );
    //hide selected cards
    selectedCards.forEach(card => card.classList.add('hidden'));
  }
  //set proper style to active filter button
  document.querySelector('.active-filter').classList.remove('active-filter');
  this.classList.add('active-filter');
}

function toggleModal() {
  modal.classList.toggle('is-hidden');
}
