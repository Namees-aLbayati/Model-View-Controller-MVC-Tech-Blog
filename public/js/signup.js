const signupFormEl=document.getElementById('signupForm');
const usernameEl=document.getElementById('usernameF');
const emailEl=document.getElementById('emailF');
const passwordEl=document.getElementById('passwordF');



const fetchData=async(event)=>{
    event.preventDefault();
    const userData={
        username:usernameEl.value.trim(),
        email:emailEl.value.trim(),
        password:passwordEl.value.trim()
    }
 const fetchUserData=fetch('/signup/user',{
     method:'POST',
     headers: { "Content-Type": "application/json" },

    

     body:JSON.stringify(userData)
 })

 const response= (await fetchUserData).json().then((data)=>{
     alert(data.message)
 })
 usernameEl.value="";
 emailEl.value="";
 passwordEl.value=""
}
signupFormEl.addEventListener('submit',fetchData)
