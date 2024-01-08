export function initPagination(data, itemsPerPage, renderCard) {
    let currentPage = 1;
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const container = document.getElementById('articles-container');
    const paginationContainer = document.getElementById('pagination');
  
    function renderPage(page) {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      const paginatedItems = data.slice(start, end);
  
      container.innerHTML = paginatedItems.map(item => renderCard(item)).join('');
      renderPagination();
    }
  
    function renderPagination() {
      paginationContainer.innerHTML = Array.from({ length: totalPages }, (_, i) => i + 1)
        .map(pageNum => `<a href="#" onclick="navigateToPage(${pageNum})" class="page-link ${pageNum === currentPage ? 'active' : ''}">${pageNum}</a>`)
        .join('');
    }
  
    window.navigateToPage = function(pageNum) {
      currentPage = pageNum;
      renderPage(currentPage);
    }
  
    renderPage(currentPage);
  }
  