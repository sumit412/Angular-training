import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewComponent {
  testimonials = [
    {
      name: 'Tom Leakar',
      location: 'London, UK',
      stars: [1, 2, 3, 4, 5],
      comment: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.',
      image: 'assets/images/clients/c1.png'
    },
    {
      name: 'monirul islam',
      location: 'London, UK',
      stars: [1, 2, 3, 4, 5],
      comment: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.',
      image: 'assets/images/clients/c2.png'
    },
    {
      name: 'Shohrab Hossain',
      location: 'London, UK',
      stars: [1, 2, 3, 4, 5],
      comment: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.',
      image : 'assets/images/clients/c3.png'
    },
    {
      name: 'Tom Leakar',
      location: 'London, UK',
      stars: [1, 2, 3, 4, 5],
      comment: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.',
      image : 'assets/images/clients/c4.png'
    },
    {
      name: 'Tom Leakar',
      location: 'London, UK',
      stars: [1, 2, 3, 4, 5],
      comment: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.',
      image: 'assets/images/clients/c1.png'
    },
    {
      name: 'monirul islam',
      location: 'London, UK',
      stars: [1, 2, 3, 4, 5],
      comment: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.',
      image: 'assets/images/clients/c2.png'
    },
    {
      name: 'Shohrab Hossain',
      location: 'London, UK',
      stars: [1, 2, 3, 4, 5],
      comment: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.',
      image : 'assets/images/clients/c3.png'
    },
    {
      name: 'Tom Leakar',
      location: 'London, UK',
      stars: [1, 2, 3, 4, 5],
      comment: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.',
      image : 'assets/images/clients/c4.png'
    }
  ];
}
