import PostCardComponent from "./PostCardComponent";
import { mapper } from ".utility/logicOfPostCardComponent";

export default class PostCardContainer extends HTMLElement {
    constructor(posts,users) {
        super();
        let getUserName = mapper(users);
         let wrapper = document.createElement("div");
         wrapper.setAttribute ('class' , 'post-card-container');
         posts.forEach((post) => { l
            let postElement = new PostCardComponent (post , getUserName);
            wrapper.appendChild(postElement); 
         });

        this.appendChild(wrapper);
    }
}
    window.customElements. define ('post-card-container' , PostCardContainer);