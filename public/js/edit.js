const a=document.getElementById('update');
const myfun=async ()=>{
 const b=   a.getAttribute("class");
 const userData={
     title:document.getElementById('titleEL').value .trim(),
     description:document.getElementById('descriptionEL').value .trim(),
 }
 const req=await fetch(`/post/${b}`,{
     method:"PUT",
     body:JSON.stringify(userData)
 })
}
a.addEventListener('click',myfun)