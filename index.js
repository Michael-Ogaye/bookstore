var menu=document.querySelector('.menu');
menu.addEventListener('click', (e)=>{
    e.preventDefault();
    var info=document.querySelector('nav ul');
    info.classList.toggle('el');
    
    info.classList.toggle('show');

    
    
})
var novels=document.querySelector('#booklist');

 novels.addEventListener('click', (e)=>{
     if(e.target.className=='delete'){
         const li = e.target.parentElement;
         novels.removeChild(li);
     }
 }) 
 //adding books
 const addforma=document.forms['forma'];
    
   const addbtn=document.querySelector('.add') ;
   addbtn.addEventListener('click', (e)=>{
       e.preventDefault();
       
      const value= addforma.querySelector('input[type= "text"]').value;
      if (value==''){confirm('you have not entered any title')};
      const li=document.createElement('li');
      const bookname=document.createElement('span');
      const deleta=document.createElement('span');
      li.appendChild(bookname);
      li.appendChild(deleta);
      novels.appendChild(li);
      bookname.textContent=value;
      deleta.textContent= 'Delete'
      deleta.classList.add('delete');
   })
   const searchBar=document.forms['search'].querySelector('input');
   searchBar.addEventListener("keyup", (e)=>{
       e.preventDefault();
       const term= e.target.value.toLowerCase();
       const books=novels.getElementsByTagName('li');
       Array.from(books).forEach((book)=>{
const title= book.firstElementChild.textContent;
if(title.toLowerCase().indexOf(term)!=-1){
    book.style.display= 'block';
}
else{
    book.style.display='none';
}

       })
   })

            


