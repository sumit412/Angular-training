import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogItems = [
    {
      image: 'assets/images/blog/b1.jpg',
      title: 'How to find your Desired Place more quickly',
      postedBy: 'admin',
      postDate: 'March 2018',
      content: 'Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.'
    },
    {
      image: 'assets/images/blog/b2.jpg',
      title: 'How to find your Desired Place more quickly',
      postedBy: 'admin',
      postDate: 'March 2018',
      content: 'Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.'
    },
    {
      image: 'assets/images/blog/b3.jpg',
      title: 'How to find your Desired Place more quickly',
      postedBy: 'admin',
      postDate: 'March 2018',
      content: 'Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.'
    },
  ]
}
