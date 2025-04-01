document.addEventListener('DOMContentLoaded', function() {
    const listingsData = [
        {
            address: "123 Main St",
            cityStateZip: "Rexburg, ID 83440",
            price: 1500,
            type: "Apartment",
            bedrooms: 2,
            bathrooms: 1,
            sqft: 1000,
            shortDescription: "Cozy apartment near BYU-Idaho",
            longDescription: "This charming apartment is perfect for couples or small families. It features...",
            features: ["In-unit laundry", "Parking", "Balcony", "Pet-friendly"],
            agentName: "John Doe",
            phoneNumber: "555-1234",
            email: "john.doe@example.com",
            mainImage: "images/house1.png",
            mapImage: "images/map_placeholder.png",
            neighborhoodInfo: "Quiet neighborhood close to parks and schools.",
            schoolDistance: "1 mile",
            groceryDistance: "0.5 miles",
            parkDistance: "2 miles",
            similarListing1Image: "images/house2.png",
            similarListing1Address: "456 Oak Ave",
            similarListing1Price: 1600,
            similarListing2Image: "images/house3.png",
            similarListing2Address: "789 Pine Ln",
            similarListing2Price: 1700
        },
        {
            address: "456 Oak Ave",
            cityStateZip: "Rexburg, ID 83440",
            price: 1600,
            type: "Townhouse",
            bedrooms: 3,
            bathrooms: 2,
            sqft: 1200,
            shortDescription: "Spacious townhouse with modern amenities",
            longDescription: "Enjoy spacious living in this beautifully designed townhouse...",
            features: ["Garage", "Community pool", "Gym", "Updated kitchen"],
            agentName: "Jane Smith",
            phoneNumber: "555-5678",
            email: "jane.smith@example.com",
            mainImage: "images/house2.png",
            mapImage: "images/map_placeholder.png",
            neighborhoodInfo: "Family-friendly area with excellent schools.",
            schoolDistance: "1.5 miles",
            groceryDistance: "1 mile",
            parkDistance: "0.8 miles",
            similarListing1Image: "images/house1.png",
            similarListing1Address: "123 Main St",
            similarListing1Price: 1500,
            similarListing2Image: "images/house3.png",
            similarListing2Address: "789 Pine Ln",
            similarListing2Price: 1700
        },
        {
            address: "789 Pine Ln",
            cityStateZip: "Rexburg, ID 83440",
            price: 1700,
            type: "House",
            bedrooms: 4,
            bathrooms: 2.5,
            sqft: 1500,
            shortDescription: "Beautiful house with large backyard",
            longDescription: "This stunning house offers plenty of space and comfort...",
            features: ["Large yard", "Fireplace", "Hardwood floors", "Storage shed"],
            agentName: "David Lee",
            phoneNumber: "555-9012",
            email: "david.lee@example.com",
            mainImage: "images/house3.png",
            mapImage: "images/map_placeholder.png",
            neighborhoodInfo: "Quiet and safe neighborhood with large lots.",
            schoolDistance: "2 miles",
            groceryDistance: "1.2 miles",
            parkDistance: "1.5 miles",
            similarListing1Image: "images/house1.png",
            similarListing1Address: "123 Main St",
            similarListing1Price: 1500,
            similarListing2Image: "images/house2.png",
            similarListing2Address: "456 Oak Ave",
            similarListing2Price: 1600
        },
        {
            address: "101 Elm St",
            cityStateZip: "Rexburg, ID 83440",
            price: 1800,
            type: "House",
            bedrooms: 3,
            bathrooms: 2,
            sqft: 1400,
            shortDescription: "Modern home with a great view",
            longDescription: "This modern home features an open floor plan...",
            features: ["View", "Garage", "Modern Kitchen", "Central AC"],
            agentName: "Sarah Jones",
            phoneNumber: "555-3456",
            email: "sarah.jones@example.com",
            mainImage: "images/house4.webp",
            mapImage: "images/map_placeholder.png",
            neighborhoodInfo: "Scenic neighborhood with great views.",
            schoolDistance: "1.8 miles",
            groceryDistance: "0.9 miles",
            parkDistance: "1.1 miles",
            similarListing1Image: "images/house1.png",
            similarListing1Address: "123 Main St",
            similarListing1Price: 1500,
            similarListing2Image: "images/house2.png",
            similarListing2Address: "456 Oak Ave",
            similarListing2Price: 1600
        },
        {
            address: "222 Birch Rd",
            cityStateZip: "Rexburg, ID 83440",
            price: 1900,
            type: "Apartment",
            bedrooms: 2,
            bathrooms: 2,
            sqft: 1100,
            shortDescription: "Luxury apartment with premium amenities",
            longDescription: "Experience luxury living in this spacious apartment...",
            features: ["Pool", "Gym", "Concierge", "In-unit laundry"],
            agentName: "Michael Brown",
            phoneNumber: "555-7890",
            email: "michael.brown@example.com",
            mainImage: "images/house5.webp",
            mapImage: "images/map_placeholder.png",
            neighborhoodInfo: "Upscale neighborhood with premium services.",
            schoolDistance: "2.5 miles",
            groceryDistance: "1.5 miles",
            parkDistance: "1 mile",
            similarListing1Image: "images/house3.png",
            similarListing1Address: "789 Pine Ln",
            similarListing1Price: 1700,
            similarListing2Image: "images/house4.webp",
            similarListing2Address: "101 Elm St",
            similarListing2Price: 1800
        },
        {
            address: "333 Cedar Ave",
            cityStateZip: "Rexburg, ID 83440",
            price: 2000,
            type: "House",
            bedrooms: 4,
            bathrooms: 3,
            sqft: 1600,
            shortDescription: "Family home with a large backyard",
            longDescription: "This family home offers ample space and comfort...",
            features: ["Large yard", "Patio", "Fireplace", "Storage shed"],
            agentName: "Emily Davis",
            phoneNumber: "555-2345",
            email: "emily.davis@example.com",
            mainImage: "images/house6.webp",
            mapImage: "images/map_placeholder.png",
            neighborhoodInfo: "Family-friendly neighborhood with parks and schools.",
            schoolDistance: "1.2 miles",
            groceryDistance: "0.8 miles",
            parkDistance: "1.3 miles",
            similarListing1Image: "images/house4.webp",
            similarListing1Address: "101 Elm St",
            similarListing1Price: 1800,
            similarListing2Image: "images/house5.webp",
            similarListing2Address: "222 Birch Rd",
            similarListing2Price: 1900
        },
        {
            address: "444 Maple Ln",
            cityStateZip: "Rexburg, ID 83440",
            price: 2100,
            type: "Townhouse",
            bedrooms: 3,
            bathrooms: 2.5,
            sqft: 1300,
            shortDescription: "Modern townhouse with community amenities",
            longDescription: "This modern townhouse features an open floor plan...",
            features: ["Garage", "Community pool", "Gym", "Balcony"],
            agentName: "Christopher White",
            phoneNumber: "555-6789",
            email: "christopher.white@example.com",
            mainImage: "images/house7.webp",
            mapImage: "images/map_placeholder.png",
            neighborhoodInfo: "Community-oriented neighborhood with great amenities.",
            schoolDistance: "1.7 miles",
            groceryDistance: "1.1 miles",
            parkDistance: "0.9 miles",
            similarListing1Image: "images/house5.webp",
            similarListing1Address: "222 Birch Rd",
            similarListing1Price: 1900,
            similarListing2Image: "images/house6.webp",
            similarListing2Address: "333 Cedar Ave",
            similarListing2Price: 2000
        },
        {
            address: "555 Pine St",
            cityStateZip: "Rexburg, ID 83440",
            price: 2200,
            type: "Apartment",
            bedrooms: 2,
            bathrooms: 2,
            sqft: 1200,
            shortDescription: "Spacious apartment with city views",
            longDescription: "Enjoy city views from this spacious and modern apartment...",
            features: ["City view", "In-unit laundry", "Parking", "Pet-friendly"],
            agentName: "Jessica Wilson",
            phoneNumber: "555-0123",
            email: "jessica.wilson@example.com",
            mainImage: "images/house8.webp",
            mapImage: "images/map_placeholder.png",
            neighborhoodInfo: "Urban neighborhood with easy access to amenities.",
            schoolDistance: "2 miles",
            groceryDistance: "1.4 miles",
            parkDistance: "1.6 miles",
            similarListing1Image: "images/house6.webp",
            similarListing1Address: "333 Cedar Ave",
            similarListing1Price: 2000,
            similarListing2Image: "images/house7.webp",
            similarListing2Address: "444 Maple Ln",
            similarListing2Price: 2100
        },
        {
            address: "666 Oak Rd",
            cityStateZip: "Rexburg, ID 83440",
            price: 2300,
            type: "House",
            bedrooms: 4,
            bathrooms: 3,
            sqft: 1700,
            shortDescription: "Luxury home with modern features",
            longDescription: "This luxury home offers modern features and spacious living...",
            features: ["Modern kitchen", "Fireplace", "Large yard", "Garage"],
            agentName: "Matthew Garcia",
            phoneNumber: "555-4567",
            email: "matthew.garcia@example.com",
            mainImage: "images/house9.webp",
            mapImage: "images/map_placeholder.png",
            neighborhoodInfo: "Exclusive neighborhood with high-end amenities.",
            schoolDistance: "2.3 miles",
            groceryDistance: "1.7 miles",
            parkDistance: "1.2 miles",
            similarListing1Image: "images/house7.webp",
            similarListing1Address: "444 Maple Ln",
            similarListing1Price: 2100,
            similarListing2Image: "images/house8.webp",
            similarListing2Address: "555 Pine St",
            similarListing2Price: 2200
        },
        {
            address: "777 Birch Ave",
            cityStateZip: "Rexburg, ID 83440",
            price: 2400,
            type: "Townhouse",
            bedrooms: 3,
            bathrooms: 2.5,
            sqft: 1400,
            shortDescription: "Modern townhouse with a great location",
            longDescription: "This modern townhouse offers a great location and amenities...",
            features: ["Community pool", "Gym", "Garage", "Balcony"],
            agentName: "Ashley Rodriguez",
            phoneNumber: "555-8901",
            email: "ashley.rodriguez@example.com",
            mainImage: "images/house10.webp",
            mapImage: "images/map_placeholder.png",
            neighborhoodInfo: "Conveniently located neighborhood with easy access to amenities.",
            schoolDistance: "1.9 miles",
            groceryDistance: "1.3 miles",
            parkDistance: "1.5 miles",
            similarListing1Image: "images/house8.webp",
            similarListing1Address: "555 Pine St",
            similarListing1Price: 2200,
            similarListing2Image: "images/house9.webp",
            similarListing2Address: "666 Oak Rd",
            similarListing2Price: 2300
        },
        {
            address: "888 Cedar Rd",
            cityStateZip: "Rexburg, ID 83440",
            price: 2500,
            type: "Apartment",
            bedrooms: 2,
            bathrooms: 2,
            sqft: 1300,
            shortDescription: "Luxury apartment with city views",
            longDescription: "Enjoy luxury living with city views from this modern apartment...",
            features: ["City view", "In-unit laundry", "Pool", "Gym"],
            agentName: "Kevin Martinez",
            phoneNumber: "555-3456",
            email: "kevin.martinez@example.com",
            mainImage: "images/house11.webp",
            mapImage: "images/map_placeholder.png",
            neighborhoodInfo: "Upscale urban neighborhood with premium amenities.",
            schoolDistance: "2.2 miles",
            groceryDistance: "1.6 miles",
            parkDistance: "1.1 miles",
            similarListing1Image: "images/house9.webp",
            similarListing1Address: "666 Oak Rd",
            similarListing1Price: 2300,
            similarListing2Image: "images/house10.webp",
            similarListing2Address: "777 Birch Ave",
            similarListing2Price: 2400
        },
        {
            address: "999 Maple St",
            cityStateZip: "Rexburg, ID 83440",
            price: 2600,
            type: "House",
            bedrooms: 5,
            bathrooms: 3.5,
            sqft: 1800,
            shortDescription: "Spacious family home with modern amenities",
            longDescription: "This spacious family home offers modern amenities and comfort...",
            features: ["Large yard", "Garage", "Modern kitchen", "Fireplace"],
            agentName: "Stephanie Anderson",
            phoneNumber: "555-7890",
            email: "stephanie.anderson@example.com",
            mainImage: "images/house12.webp",
            mapImage: "images/map_placeholder.png",
            neighborhoodInfo: "Family-friendly neighborhood with excellent schools.",
            schoolDistance: "1.5 miles",
            groceryDistance: "1 miles",
            parkDistance: "1.4 miles",
            similarListing1Image: "images/house10.webp",
            similarListing1Address: "777 Birch Ave",
            similarListing1Price: 2400,
            similarListing2Image: "images/house11.webp",
            similarListing2Address: "888 Cedar Rd",
            similarListing2Price: 2500
        }
    ];

    const listingsContainer = document.getElementById('listings-container');

    listingsContainer.classList.add('grid-listings');

    listingsData.forEach(listing => {
        const listingDiv = document.createElement('div');
        listingDiv.classList.add('listing-grid-item');

        listingDiv.innerHTML = `
            <img src="${listing.mainImage}" alt="${listing.address}" class="grid-image">
            <div class="grid-details">
                <h3>${listing.address}</h3>
                <p><strong>$${listing.price}</strong></p>
                <button class="view-more-btn" data-listing-id="${listingsData.indexOf(listing)}">Details</button>
            </div>
        `;

        listingsContainer.appendChild(listingDiv);
    });

    listingsContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('view-more-btn')) {
            const listingId = event.target.dataset.listingId;
            showListingDetails(listingsData[listingId]);
        }
    });

    let currentModal = null; // Variable to store the current modal

    function showListingDetails(listing) {
        const modal = document.createElement('div');
        modal.classList.add('listing-modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <section class="image-gallery">
                    <img src="${listing.mainImage}" alt="${listing.address} Main Image">
                </section>
                <section class="details">
                    <div class="main-details">
                        <h1>${listing.address}</h1>
                        <p>${listing.cityStateZip}</p>
                        <p><strong>$${listing.price}</strong></p>
                        <p>${listing.type} - ${listing.bedrooms} Beds, ${listing.bathrooms} Baths, ${listing.sqft} sqft</p>
                        <p>${listing.shortDescription}</p>
                        <hr>
                        <h2>Property Description</h2>
                        <p>${listing.longDescription}</p>
                        <hr>
                        <h2>Features</h2>
                        <ul class="features-list">
                            ${listing.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="side-details">
                        <div class="contact-section">
                            <h3>Contact Agent/Landlord</h3>
                            <p><strong>${listing.agentName}</strong></p>
                            <p>Phone: ${listing.phoneNumber}</p>
                            <p>Email: ${listing.email}</p>
                            <button>Request More Info</button>
                            <button>Schedule a Tour</button>
                        </div>
                        <hr>
                        <div class="mortgage-calc">
                            <h3>Mortgage Calculator</h3>
                        </div>
                    </div>
                </section>
                <section class="map-section">
                    <h2>Location</h2>
                    <img src="${listing.mapImage}" alt="Map">
                    <p>${listing.neighborhoodInfo}</p>
                </section>
                <section class="nearby-section">
                    <h2>Nearby</h2>
                    <ul>
                        <li>School - ${listing.schoolDistance}</li>
                        <li>Grocery Store - ${listing.groceryDistance}</li>
                        <li>Park - ${listing.parkDistance}</li>
                    </ul>
                </section>
                
            </div>
        `;
        document.body.appendChild(modal);

        // Add 'active' class after a short delay
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);

        modal.querySelector('.close-modal').addEventListener('click', function() {
            closeModal(modal);
        });
        
        currentModal = modal;
    }

    function closeModal(modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
        }, 300);
        currentModal = null;
    }
        
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && currentModal) {
            closeModal(currentModal);
        }
    });

});