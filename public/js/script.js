const titleEl=document.getElementById('title')
const descriptionEl=document.getElementById('description');
const submitpost=document.getElementById('submitpost');

const post= async(Event)=>{
    Event.preventDefault()
    const userData={
        description:descriptionEl.value.trim(),
        title:titleEl.value.trim()
    };
// const fetchData=await fetch('/post',{
//     method:'POST',
//     headers: {
//         'Content-Type': 'application/json'
//       },
//     body:JSON.stringify(userData)
// })

const fetchUser = await fetch('/posting', {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(userData)
});

const result=await fetchUser.json().then((res)=>{
    window.alert(res.message)
});
titleEl.value="";
descriptionEl.value="";

}
submitpost.addEventListener('click',post);
