const editEl=document.getElementById('edit')
const deleteEl=document.getElementById('delete')
const getID=editEl.getAttribute("target");
const titleEl=document.getElementById('title');
const desc=document.getElementById('description')
const editData=async(e)=>{
e.preventDefault();
const data={
    id:getID,
    title:titleEl.value.trim(),
    description:description.value.trim()
}

const requestfetch=await fetch(`/post/edit/${getID}`,{
    method:'PUT',
    headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(data)

})
const result= requestfetch.json().then((data)=>{
    alert(data.message)
    desc.value=""
    titleEl.value=""
    window.location.href='/dashboard'
})


}

const deleteData=async(e)=>{
    e.preventDefault();

    const datafordelete={
        id:getID,
      
    }
    
    const Deletefetch=await fetch(`/post/delete/${getID}`,{
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json',
          },
          body:JSON.stringify(datafordelete)
    
    })
    const result=Deletefetch.json().then((data)=>{
        alert(data.message)
        desc.value=""
        titleEl.value=""
        window.location.href=`/dashboard`
    })
    

}

editEl.addEventListener("click",editData)
deleteEl.addEventListener("click",deleteData)