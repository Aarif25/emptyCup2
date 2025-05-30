document.addEventListener('DOMContentLoaded', () => {
    const iconNavItems = document.querySelectorAll('.icon-nav .icon-item');
    const allPostCards = document.querySelectorAll('.card'); 
    let isShortlistFilterActive = false;

    function updatePostVisibility() {
        allPostCards.forEach(post => {
            if (isShortlistFilterActive) {
                if (post.classList.contains('post-shortlisted')) {
                    post.style.display = ''; 
                } else {
                    post.style.display = 'none';
                }
            } else {
                post.style.display = ''; 
            }
        });
    }

    
    iconNavItems.forEach(item => {
        item.addEventListener('click', () => {
            const currentClickedText = item.querySelector('p').textContent.trim();
            
            const isCurrentItemAlreadyActive = item.classList.contains('active');

            if (currentClickedText === 'Shortlisted') {
                if (isCurrentItemAlreadyActive) {
                    
                    isShortlistFilterActive = false;
                } else {
                    
                    isShortlistFilterActive = true;
                }
            } else {
                
                isShortlistFilterActive = false;
            }

            
            
            iconNavItems.forEach(navItem => navItem.classList.remove('active'));
            item.classList.add('active');

            console.log(`${currentClickedText} clicked. Shortlist filter active: ${isShortlistFilterActive}`);
            updatePostVisibility(); 
        });
    });

    
    const contentArea = document.querySelector('.content-area');
    if (contentArea) {
        contentArea.addEventListener('click', (event) => {
            const actionItem = event.target.closest('.action-item');
            if (!actionItem) return;

            const postCard = actionItem.closest('.card'); 
            if (!postCard) return; 

            const cardTitleElement = postCard.querySelector('.card-title');
            const cardName = cardTitleElement ? cardTitleElement.textContent.trim() : "Unknown Post";
            const actionText = actionItem.querySelector('span strong') ? actionItem.querySelector('span strong').textContent.trim() : actionItem.querySelector('span').textContent.trim();

            if (actionText === 'Details') {
                console.log(`Details clicked for ${cardName}`);
                
            } else if (actionText === 'Hide') {
                postCard.style.display = 'none';
                console.log(`Hide clicked for ${cardName}`);
            } else if (actionText === 'Shortlist') {
                actionItem.classList.toggle('is-shortlisted'); 
                postCard.classList.toggle('post-shortlisted'); 

                if (postCard.classList.contains('post-shortlisted')) {
                    console.log(`Shortlisted ${cardName}`);
                } else {
                    console.log(`Unshortlisted ${cardName}`);
                }

                
                if (isShortlistFilterActive) {
                    updatePostVisibility();
                }
            } else if (actionText === 'Report') {
                console.log(`Report clicked for ${cardName}`);
                
            }
        });
    }

    
    const headerMenu = document.querySelector('.header .menu-dots');
    if (headerMenu) {
        headerMenu.addEventListener('click', () => {
            console.log('Header menu clicked');
            
        });
    }

    
    
});