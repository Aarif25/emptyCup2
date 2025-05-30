document.addEventListener('DOMContentLoaded', () => {
    const iconNavItems = document.querySelectorAll('.icon-nav .icon-item');
    const allPostCards = document.querySelectorAll('.card'); // Changed .post-card to .card
    let isShortlistFilterActive = false;

    function updatePostVisibility() {
        allPostCards.forEach(post => {
            if (isShortlistFilterActive) {
                if (post.classList.contains('post-shortlisted')) {
                    post.style.display = ''; // Revert to default display (e.g., block, flex)
                } else {
                    post.style.display = 'none';
                }
            } else {
                post.style.display = ''; // Show all posts
            }
        });
    }

    // 1. Icon Navigation Bar
    iconNavItems.forEach(item => {
        item.addEventListener('click', () => {
            const currentClickedText = item.querySelector('p').textContent.trim();
            // Check if the item being clicked is already the active one.
            const isCurrentItemAlreadyActive = item.classList.contains('active');

            if (currentClickedText === 'Shortlisted') {
                if (isCurrentItemAlreadyActive) {
                    // Clicked "Shortlisted" when it was already active: toggle filter OFF
                    isShortlistFilterActive = false;
                } else {
                    // Clicked "Shortlisted" when it was not active (or to make it active): toggle filter ON
                    isShortlistFilterActive = true;
                }
            } else {
                // Clicked any other navigation icon: filter OFF
                isShortlistFilterActive = false;
            }

            // Update active class for visual feedback on navigation items.
            // The clicked item always becomes active.
            iconNavItems.forEach(navItem => navItem.classList.remove('active'));
            item.classList.add('active');

            console.log(`${currentClickedText} clicked. Shortlist filter active: ${isShortlistFilterActive}`);
            updatePostVisibility(); // Apply filtering based on the new state
        });
    });

    // 2. Content Card Actions (using event delegation for .post-card)
    const contentArea = document.querySelector('.content-area');
    if (contentArea) {
        contentArea.addEventListener('click', (event) => {
            const actionItem = event.target.closest('.action-item');
            if (!actionItem) return;

            const postCard = actionItem.closest('.card'); // Changed .post-card to .card
            if (!postCard) return; // Ensure action is within a .card

            const cardTitleElement = postCard.querySelector('.card-title');
            const cardName = cardTitleElement ? cardTitleElement.textContent.trim() : "Unknown Post";
            const actionText = actionItem.querySelector('span strong') ? actionItem.querySelector('span strong').textContent.trim() : actionItem.querySelector('span').textContent.trim();

            if (actionText === 'Details') {
                console.log(`Details clicked for ${cardName}`);
                // Placeholder for actual details logic
            } else if (actionText === 'Hide') {
                postCard.style.display = 'none';
                console.log(`Hide clicked for ${cardName}`);
            } else if (actionText === 'Shortlist') {
                actionItem.classList.toggle('is-shortlisted'); // Toggle button's visual state
                postCard.classList.toggle('post-shortlisted'); // Toggle post's shortlist state

                if (postCard.classList.contains('post-shortlisted')) {
                    console.log(`Shortlisted ${cardName}`);
                } else {
                    console.log(`Unshortlisted ${cardName}`);
                }

                // If the shortlist filter is currently active, refresh the view immediately
                if (isShortlistFilterActive) {
                    updatePostVisibility();
                }
            } else if (actionText === 'Report') {
                console.log(`Report clicked for ${cardName}`);
                // Placeholder for actual report logic
            }
        });
    }

    // 3. Header Three-Dot Menu (existing functionality, can be expanded)
    const headerMenu = document.querySelector('.header .menu-dots');
    if (headerMenu) {
        headerMenu.addEventListener('click', () => {
            console.log('Header menu clicked');
            // Placeholder for actual menu logic
        });
    }

    // The "House of designs" footer link and its event listener are intentionally omitted
    // as the footer HTML will be removed from home.ejs.
});