//Member 6 Contribution
const filterButtons = document.querySelectorAll('.filter-bar button');
const vehicleCards = document.querySelectorAll('.vehicle-card');
const searchInput = document.getElementById('searchInput');
const categorySelect = document.getElementById('categorySelect');
const cheapOnly = document.getElementById('cheapOnly');
const vehiclePage = document.querySelector('.vehicles-page');

const noResults = document.createElement('p');
noResults.id = 'no-results';
noResults.textContent = 'No matching results found.';
noResults.style.textAlign = 'center';
noResults.style.display = 'none';
noResults.setAttribute('role', 'status');
vehiclePage.appendChild(noResults);

function applyFilters() {
  const activeButton = document.querySelector('.filter-bar button.active');
  const categoryFilter = activeButton ? activeButton.getAttribute('data-filter').toLowerCase() : 'all';
  const searchQuery = searchInput ? searchInput.value.toLowerCase() : '';
  const selectedCategory = categorySelect ? categorySelect.value.toLowerCase() : 'all';
  const priceLimit = 400;
  let visibleCount = 0;

  vehicleCards.forEach(card => {
    const cardCategories = card.dataset.category.toLowerCase().split(/\s+/);
    const title = card.querySelector('h3').textContent.toLowerCase();
    const type = card.querySelector('.type').textContent.toLowerCase();
    const priceText = card.querySelector('.price').textContent;
    const priceValue = parseInt(priceText.replace(/[^0-9]/g, ''), 10);

    const matchesButton = categoryFilter === 'all' || cardCategories.includes(categoryFilter);
    const matchesDropdown = selectedCategory === 'all' || cardCategories.includes(selectedCategory);
    const matchesSearch = title.includes(searchQuery) || type.includes(searchQuery);
    const matchesPrice = !cheapOnly || !cheapOnly.checked || priceValue <= priceLimit;
    const matches = matchesButton && matchesDropdown && matchesSearch && matchesPrice;

    card.style.display = matches ? '' : 'none';
    if (matches) {
      visibleCount++;
    }
  });

  noResults.style.display = visibleCount === 0 ? 'block' : 'none';
}

filterButtons.forEach(button => {
  button.setAttribute('aria-pressed', button.classList.contains('active'));
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    });
    button.classList.add('active');
    button.setAttribute('aria-pressed', 'true');
    applyFilters();
  });
});

if (searchInput) searchInput.addEventListener('input', applyFilters);
if (categorySelect) categorySelect.addEventListener('change', applyFilters);
if (cheapOnly) cheapOnly.addEventListener('change', applyFilters);