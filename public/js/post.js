const titleEL=document.getElementById('title');
const descriptionEL=document.getElementById('description');
const submitEL=document.getElementById('submitpost');
const  sendData= async (event)=>{
    event.preventDefault();
    const userData={
        description:descriptionEL.value.trim(),
        title:titleEL.value.trim()};
        const response=await fetch('/post/user',{
            method:"POST",
            body:JSON.stringify(userData),
            headers:{
                'Content-Type': 'application/json'}});

if(response.ok){
    alert('post created');
    window.location.href='/dashboard'
}else{
    alert('ERROR!!!try again');


}
descriptionEL.value="";
titleEL.value=""

}
submitEL.addEventListener('click',sendData)



