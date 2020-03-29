let container=document.querySelector(".container");
// console.log(container);
let currentTab=0;
let nextButton=document.querySelector(".next");
let prevButton=document.querySelector(".prev");
let submitButton=document.querySelector(".Submit");
let viewButton=document.querySelector("spani");
document.addEventListener("click",(e)=>
{
if(e.target.classList.contains("done"))
{
    console.log("hello");
    window.location.reload();
}
});

viewButton.addEventListener("click",()=>
{
    
    let pwdInput=document.getElementById("psd");
    console.log(pwdInput.getAttribute("type"));
    if( pwdInput.getAttribute("type")=="password")
    {
        psd.setAttribute("type","text");

    }
    else
    {
        psd.setAttribute("type","password");

    }
})
submitButton.addEventListener("click",()=>
{
    if(validCheck())
    {
        let name=document.querySelector("#name");
        let span=document.createElement("span");
        let spanText=document.createTextNode(`${name.value}`);
        span.appendChild(spanText);
        console.log(span)
        name.innerHTML=`<span>${name.value}</span>`;
        sec3=document.querySelector(".step3");
        let h1=document.createElement("h1");
        name.style.color="red";
        let text=document.createTextNode(`Hello ${name.value} we have recieved your data our  team will contact you Soon`);
        h1.appendChild(text);
        sec3.appendChild(h1);
        button=document.createElement("button");
        button.classList.add("done");
        button.innerHTML=`<i class="fab fa-telegram-plane icon"></i>Done`;
        button.style.background="linear-gradient(lightgreen,white);"
        button.style.fontFamily="'Montserratt',sans-serif;"
        sec3.appendChild(button);
        let tab=container.children[currentTab++];
        tab.style.display="none";
        container.children[currentTab].style.display="block";
    }
  
})
prevButton.style.display="none";
let prev2=document.querySelector(".prev2");
nextButton.addEventListener("click",next);
prev2.addEventListener("click",prev)
container.children[1].style.display="none";
let check=document.querySelectorAll(".gender input");
// console.log(Submit);
function prev(e)
{
    console.log(e.target);
    let tab=container.children[currentTab--];
        tab.style.display="none";
        container.children[currentTab].style.display="block";
        prevButton.style.display="none"
}
function next(e)
{
    if(validate())
    {
        let tab=container.children[currentTab++];
        tab.style.display="none";
        container.children[currentTab].style.display="block"
        prevButton.style.display="inlineBlock"
    }  
}
function validate()
{
    let name=document.querySelector("#name").value.trim();
   
    let college=document.querySelector("#college").value.trim();
    let input1=document.querySelector("#name");
    let input2=document.querySelector("#college");
    let nameText=document.querySelector(".step1 small");
    if(name==="")
    {
        nameText.classList.add("add");
        input1.classList.add("error");
        return false;
    }
    if(nameText.classList.contains("add"))
    {
        nameText.classList.remove("add");
    }
    if(input1.classList.contains("error"))
    {
        input1.classList.remove("error");
    }

    let collegeText=document.querySelectorAll(".step1 small");
    if(college==="")
    {
        collegeText[1].classList.add("add");
        input2.classList.add("error");
        return false;
    }
    if(collegeText[1].classList.contains("add"))
    {
        collegeText[1].classList.remove("add");
    }
    if(input2.classList.contains("error"))
    {
        input2.classList.remove("error");
    }
    input1.classList.add("success");
    input2.classList.add("success");
    return true;
}
function validCheck()
{
    let emailInput=document.getElementById("email");
    let pwdInput=document.getElementById("psd");
    let cpwdInput=document.getElementById("cpsd");
    let emailText=document.querySelectorAll(".step2 small");
    let email=document.getElementById("email").value.trim();
    let password=document.getElementById("psd").value.trim();
    let conformPassword=document.getElementById("cpsd").value.trim();
    if(email==="")
    {
        emailInput.classList.add("error");
        emailText[0].classList.add("add");
        return false;
    } 
     if(!(email.includes("@gmail.com"))||(email.includes("@outlook.com")))  
     {
         return false;
     }
    if(emailInput.classList.contains("error"))
    {
        emailInput.classList.remove("error");
        emailInput.classList.add("success");
    }
   if(emailText[0].classList.contains("add"))
   {
    emailText[0].classList.remove("add");
   }
   if(password==="")
   {
       pwdInput.classList.add("error");
       emailText[1].classList.add("add");
       return false;
   }
   if(pwdInput.classList.contains("error"))
   {
       pwdInput.classList.remove("error");
       pwdInput.classList.add("success");
   }
  if(emailText[1].classList.contains("add"))
  {
   emailText[1].classList.remove("add");
  }
  if(password!=conformPassword)
  {
      cpwdInput.classList.add("error")
      emailText[2].classList.add("add");
      return false
  }
  if(cpwdInput.classList.contains("error"))
   {
       cpwdInput.classList.remove("error");
       cpwdInput.classList.add("success");
   }
  if(emailText[2].classList.contains("add"))
  {
   emailText[2].classList.remove("add");
  }

    return true;
    
}
