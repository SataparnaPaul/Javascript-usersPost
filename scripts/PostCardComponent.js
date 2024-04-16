export default class PostCardComponent extends HTMLElement {
    constructor(postData, getUserName ) {
        super();
        let wrapper = document.createElement("div");
        wrapper.setAttribute('class' , 'post-card-wrapper');

        let titleElement = document.createElement("div");
        titleElement.setAttribute('class' , 'post-card-title');
        titleElement.textContent = postData.title;
        wrapper.appendChild(titleElement);

        let bodyElement = document.createElement("div");
        //bodyElement.setAttribute('class' , 'post-card-body');
        bodyElement.textContent = postData.body;
        wrapper.appendChild(bodyElement);

        let authorElement = document.createElement("div");
        authorElement.textContent = "-" +getUserName(postData,userId).userName;
        wrapper.appendChild(authorElement);
       this.appendChild(wrapper);
    }

}
    window.customElements.define('post-card' ,PostCardComponent);