const submitComment=document.getElementById('submit');
const commentEL=document.getElementById('comment');
const sendData=async(e)=>{
    e.preventDefault();
    const userData={comment:commentEL.value.trim()};

    const fetchData=await fetch('/comment',{
        method:'POST',
        body:JSON.stringify(fetchData)
    })
};

submitComment.addEventListener('click',sendData)