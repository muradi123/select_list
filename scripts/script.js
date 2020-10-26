class Select{
    constructor(title, titleSpan, selector){
     this.$title = document.querySelector(title)
     this.$titleSpan = document.querySelector(titleSpan)
     this.$el = document.querySelector(selector)
     this.#title()
     this.#items()
    }
    
    #title(){
        this.titleClick = this.titleClick.bind(this);
        this.$title.addEventListener('click', this.titleClick)
    }
    #items(){
        this.itemsClick = this.itemsClick.bind(this);
        this.$el.addEventListener('click', this.itemsClick)
    }
    titleClick(){
     if(this.$el.classList.contains('open')){
        this.close()
    }
     else{
        this.open()
    }
       
    }
    itemsClick(event){
       
       this.$titleSpan.textContent = event.target.textContent;
       this.close()
    }
    
    open(){
        this.$el.classList.add('open')
    }

    close() {
        this.$el.classList.remove('open')
    }
    
}

const selectJs = new Select('.select__input', '.select__span', '.select__dropMenu')
