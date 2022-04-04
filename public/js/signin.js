
const signForm=document.getElementById('signinForm');
const emailEL=document.getElementById('emailEl');
const passwordEL=document.getElementById('passwordEl');

const fetchData=async(e)=>{
    e.preventDefault();
    const userData={
        email:emailEL.value.trim(),
        password:passwordEL.value.trim()
    }
    const fetching=await fetch('signin/user',{
        method:'POST',
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify(userData)});
        if(fetching.ok){
            alert('Your In ')
        window.location.href = "/"

        } 
        else{
alert('Please check your email or password,and Try again!!')
        }

       

        emailEL.value="";
        passwordEL.value=""
}
signForm.addEventListener('submit',fetchData)