import './style.css'

import PostCardContainer from './scripts/PostCardContainer';
import { dataGetter } from './utility/logicOfPostCardComponent';

let app = document.getElementById('app');

 
   let data = dataGetter(['https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/users',]);

   data.then((data) => {
    let postcardContainer = new PostCardContainer (data);
    app.appendChild(postcardContainer);
   });




