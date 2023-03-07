function sendmail(e)
{
  let loading=document.querySelector('#ld')
  let sendmsg=document.querySelector('#sm')
  loading.style.display="block"
  sendmsg.style.display="block"

    event.preventDefault();
    console.log("conected",document.getElementById('name').value,);
    console.log("conected",document.getElementById('email').value,);

    console.log("conected",document.getElementById('subject').value,);

    console.log("conected",document.getElementById('message').value,);


  var params ={
    name:document.getElementById('name').value,
    email:document.getElementById('email').value,
    subject:document.getElementById('subject').value,
    message:document.getElementById('message').value
    };
  
    const serviceID="service_i26ftws";
    const TemplateID="template_yz295hf"
    emailjs.send(serviceID,TemplateID,params)
    .then((res)=>{
       
        loading.style.display="none"
        sendmsg.style.display="block"
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("subject").value=""; 
        document.getElementById("message").value="";
        console.log(res);
        alert("your message send successfully"+res);
        loading.style.display="none"
        sendmsg.style.display="block"
        

    })
    .catch((err) =>console.log(err));
    loading.style.display="block"
    sendmsg.style.display="none"
    }