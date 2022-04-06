const submitComment=document.getElementById('submit');
const commentEL=document.getElementById('comment');
const postid=document.getElementById('post_id')
const sendData=async(e)=>{
    e.preventDefault();
if(commentEL.value.trim()){
    const userData={comment:commentEL.value.trim(),
    post_id:postid.getAttribute('class')};

    const fetchData=await fetch('/comment',{
        method:'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(userData)
    });
    

    if(fetchData.ok){
        alert('comment created')
        window.location.href='/'
    }else{
        alert('err in comment created')
    }

}else{
    alert('you need to write a comment before submit it')
}
commentEL.value=""

};

submitComment.addEventListener('click',sendData)