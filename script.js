const body=document.querySelector("body"),
      sidebar= body.querySelector(".sidebar"),
      togle=body.querySelector(".toggl"),
      searchbtn=body.querySelector(".search"),
      modeswitch=body.querySelector(".toggle-switch"),
      modetxt=body.querySelector(".mode-text");
     
      togle.addEventListener("click",() =>{
      	sidebar.classList.toggle("close");
      	if(sidebar.classList.contains("close")){
      		togle.innerText=">";
      	}else{
      		togle.innerText="<";
      	}
      });
      modeswitch.addEventListener("click",() =>{
      	body.classList.toggle("dark");
      	 if(body.classList.contains("dark")){
      	  modetxt.innerText="Light Mode";
      } else{
      	  modetxt.innerText="Dark Mode";
      }
      });
     