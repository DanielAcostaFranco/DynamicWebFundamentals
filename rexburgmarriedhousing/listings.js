document.addEventListener('DOMContentLoaded', function() {
  const listingsData = [
      {
          image: 'images/house1.png',
          title: '123 Main St',
          link: 'listings.html'
      },
      {
          image: 'images/house2.png',
          title: '456 Oak Ave',
          link: 'listings.html'
      },
      {
          image: 'images/house3.png',
          title: '789 Pine Ln',
          link: 'listings.html'
      }
  ];

  const listingsContainer = document.getElementById('featured-listings-container');

  listingsData.forEach(listing => {
      const listingDiv = document.createElement('div');
      listingDiv.classList.add('listing');

      const image = document.createElement('img');
      image.src = listing.image;
      image.alt = listing.title;

      const title = document.createElement('h3');
      title.textContent = listing.title;

      const link = document.createElement('a');
      link.href = listing.link;
      link.textContent = 'Learn More';

      listingDiv.appendChild(image);
      listingDiv.appendChild(title);
      listingDiv.appendChild(link);

      listingsContainer.appendChild(listingDiv);
  });
});