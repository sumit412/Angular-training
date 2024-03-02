import { Component } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})

export class ExploreComponent {
  exploreItems = [
    {
      image: 'assets/images/explore/e1.jpg',
      buttonText: 'best rated',
      title: 'tommy helfinger bar',
      rating: '5.0',
      ratingsCount: '10 ratings',
      priceRange: '5$-300$',
      category: 'restaurent',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....'
    },
    {
      image: 'assets/images/explore/e2.jpg',
      buttonText: 'featured',
      title: 'swim and dine resort',
      rating: '4.5',
      ratingsCount: '8 ratings',
      priceRange: '50$-500$',
      category: 'hotel',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....'
    },
    {
      image: 'assets/images/explore/e3.jpg',
      buttonText: 'featured',
      title: 'europe tour',
      rating: '5.0',
      ratingsCount: '10 ratings',
      priceRange: '5k$-10k$',
      category: 'Destination',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....'
    },
    {
      image: 'assets/images/explore/e4.jpg',
      buttonText: 'featured',
      title: 'Bungalow with swimming pool',
      rating: '5.0',
      ratingsCount: '10 ratings',
      priceRange: '10k$-15k$',
      category: 'Real Estate',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....'
    },
    {
      image: 'assets/images/explore/e5.jpg',
      buttonText: 'featured',
      title: 'swim and dine resort',
      rating: '4.2',
      ratingsCount: '8 ratings',
      priceRange: '500$-1200$',
      category: 'Automotion',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....'
    },
    {
      image: 'assets/images/explore/e6.jpg',
      buttonText: 'featured',
      title: 'swim and dine resort',
      rating: '5.0',
      ratingsCount: '15 ratings',
      priceRange: '50$-10$',
      category: 'Destination',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....'
    },
    // Add more explore items as needed
  ];
}
