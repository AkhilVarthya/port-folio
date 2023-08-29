
document.addEventListener("DOMContentLoaded",()=>{

  const projects =[["https://spotify-app-223.netlify.app/","./asset/headset_opt.gif","Spotify App","0"],["https://weather-app-223.netlify.app/",
    "./asset/weather_opt.gif","Weather App","1"],["https://ecommerce-app-223.netlify.app/",
    "./asset/commerce_opt.gif",
    "Ecommerce App","2"]];
  
  // Add Function
  const projectsList = document.querySelector(".projects-list");
  function addProject(project,leftArrow) {
    const [url, imageSrc, projectName,index] = project;
  
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("list");
    projectDiv.classList.add(`${index}`)
  
  
    const listCenterDiv = document.createElement("div");
    listCenterDiv.classList.add("list-center");
  
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("project-img-container");
  
    const projectImage = document.createElement("img");
    projectImage.classList.add("project-image");
    projectImage.height = '75';
    projectImage.width = '75';
    projectImage.src = imageSrc;
    projectImage.alt = "";
  
    imageContainer.appendChild(projectImage);
  
    const projectLink = document.createElement("a");
    projectLink.classList.add("projects-center");
    projectLink.href = url;
    projectLink.target = "_blank";
    projectLink.style.textDecoration = "none";
  
    const projectButtonContainer = document.createElement("div");
    projectButtonContainer.classList.add("project-button-container");

    const projectButton = document.createElement("button");
    projectButton.classList.add("project-buttons");
    projectButton.textContent = projectName;
  
    projectButtonContainer.appendChild(projectButton);
    projectLink.appendChild(projectButtonContainer);
    listCenterDiv.appendChild(imageContainer);
    listCenterDiv.appendChild(projectLink);
    projectDiv.appendChild(listCenterDiv);


    if(leftArrow){
      projectsList.appendChild(projectDiv);
    }
    else{
      projectsList.insertBefore(projectDiv, projectsList.firstChild);
    }
  }
  
  
  
// Arrows

// left Arrow

  let isAnimating = false;

  const leftArrow = document.querySelector(".left-arrow");
  
  leftArrow.addEventListener("click", () => {
    leftArrowFunction();
  
  });

  function leftArrowFunction(){
    if (isAnimating) {
      return; // Don't allow new clicks if animation is in progress
    }
    isAnimating = true;
  
    const lists = document.querySelectorAll(".list");
    const projectButtons = document.querySelectorAll(".project-buttons");

    projectButtons.forEach((projectButton)=>{
      if (projectButton.classList.contains("center")){
        projectButton.classList.remove("center");
      }
    })
  
    lists.forEach((list,index)=>{
          if (list.classList.contains("scale")){
              list.classList.remove("scale");
          }
        })
  
    const firstListClass = lists[0].classList[1]; // Get the class name like "0"
    const projectIndx = parseInt(firstListClass); // Convert it to an integer
    
    addProject(projects[projectIndx],true);
  
    const firstProject = lists[0];
    const secondProject = lists[1];
    const thirdProject = lists[2];
    
    let start;
    let lastProject;
    
  requestAnimationFrame(startAnimation);
  
  function startAnimation(timestamp) {
      lastProject = projectsList.lastChild;
      lastProject.style.display = "none";
  
      animate(timestamp);
    }
  
    function animate(timestamp) {
        if (!start) start = timestamp;
      const progress = timestamp - start;
  
      const translationProgress = progress / 5; 
      const opacityProgress = progress / 200;
      const scaleProgress = 1 + (progress / 800);
      
  
      firstProject.style.transform = `translateX(-${translationProgress}%)`;
      firstProject.style.opacity = `${1-opacityProgress}`;
  
      secondProject.style.transform = `translateX(-${translationProgress}%)`;
  
      thirdProject.style.transform = `translateX(-${translationProgress}%) translateY(-${translationProgress/10}%) scale(${scaleProgress})`;
      
      lastProject.style.transform = `translateX(-${translationProgress}%)`;
      lastProject.style.opacity = `${opacityProgress}`;
      lastProject.style.display = "block";
  
            
      if (progress < 300) {
        requestAnimationFrame(animate);
      } else {
        firstProject.style.transform = "";
        firstProject.style.opacity = "";
  
         secondProject.style.transform = "";
         thirdProject.style.transform = "";
  
        lastProject.style.display = ""
        lastProject.style.transform = "";
        lastProject.style.opacity = "";
  
        projectsList.removeChild(firstProject);
  
        isAnimating = false;

        lists[(Math.floor(projects.length/2))+1].classList.add("scale");
        projectButtons[(Math.floor(projects.length/2))+1].classList.add("center")
      }
    }
  
  }
  
  
  // right Arrow
  const rightArrow = document.querySelector(".right-arrow");
  
  rightArrow.addEventListener("click", () => {
    rightArrowFunction();
  });

  function rightArrowFunction(){
     if (isAnimating) {
      return; // Don't allow new clicks if animation is in progress
    }
  
    isAnimating = true;
  
    const lists = document.querySelectorAll(".list");
    const projectButtons = document.querySelectorAll(".project-buttons");

    projectButtons.forEach((projectButton)=>{
      if (projectButton.classList.contains("center")){
        projectButton.classList.remove("center");
      }
    })
    lists.forEach((list,index)=>{
          if (list.classList.contains("scale")){
              list.classList.remove("scale");
          }
        })
  
    const firstListClass = lists[lists.length-1].classList[1]; // Get the class name like "0"
    const projectIndx = parseInt(firstListClass); // Convert it to an integer
    
    addProject(projects[projectIndx],false);
  
  
  
  
    const firstProject = lists[0];
    const secondProject = lists[1];
    const thirdProject = lists[2];
    
  
    let start;
    let lastProject;
    
  requestAnimationFrame(startAnimation);
  
  function startAnimation(timestamp) {
      lastProject = projectsList.firstChild;
      lastProject.style.display = "none";
  
      animate(timestamp);
    }
  
  
    function animate(timestamp) {
        if (!start) start = timestamp;
      const progress = timestamp - start;
  
      const translationProgress = progress / 5; 
      const opacityProgress = progress / 200;
      const scaleProgress = 1 + (progress / 800);
      
      // translateX(-${translationProgress}%) translateY(-${translationProgress/10}%) scale(${scaleProgress})
  
      firstProject.style.transform = `translateX(${translationProgress}%) translateY(-${translationProgress/10}%) scale(${scaleProgress})`;
      
      secondProject.style.transform = `translateX(${translationProgress}%) `;
      
      thirdProject.style.transform = `translateX(${translationProgress}%) `;
      thirdProject.style.opacity = `${1-opacityProgress}`;
      
      lastProject.style.transform = `translateX(${translationProgress}%)`;
      lastProject.style.opacity = `${opacityProgress}`;
      lastProject.style.display = "block";
  
  
      if (progress < 300) {
        requestAnimationFrame(animate);
      } else {
        firstProject.style.transform = "";
        firstProject.style.opacity = "";
  
         secondProject.style.transform = "";
         thirdProject.style.transform = "";
  
        lastProject.style.display = ""
        lastProject.style.transform = "";
        lastProject.style.opacity = "";
  
        projectsList.removeChild(thirdProject);
  
        isAnimating = false;
        lists[(Math.floor(projects.length/2))-1].classList.add("scale");
        projectButtons[(Math.floor(projects.length/2))-1].classList.add("center")
      }
    }
  
  }




  //upArrow

  const upArrow = document.querySelector(".up-arrow");
  upArrow.addEventListener("click", () => {
  upArrowFunction();
  });

  
  function upArrowFunction(){
      if (isAnimating) {
      return; // Don't allow new clicks if animation is in progress
    }
    isAnimating = true;
  
    const lists = document.querySelectorAll(".list");
    const projectButtons = document.querySelectorAll(".project-buttons");

    projectButtons.forEach((projectButton)=>{
      if (projectButton.classList.contains("center")){
        projectButton.classList.remove("center");
      }
    })
  
    lists.forEach((list,index)=>{
          if (list.classList.contains("scale")){
              list.classList.remove("scale");
          }
        })
  
    const firstListClass = lists[0].classList[1]; // Get the class name like "0"
    const projectIndx = parseInt(firstListClass); // Convert it to an integer
    
    addProject(projects[projectIndx],true);
  
    
    const firstProject = lists[0];
    const secondProject = lists[1];
    const thirdProject = lists[2];
    

    let start;
    let lastProject;
    
  requestAnimationFrame(startAnimation);
  
  function startAnimation(timestamp) {
      lastProject = projectsList.lastChild;
      lastProject.style.display = "none";
  
      animate(timestamp);
    }
  
  
    function animate(timestamp) {
        if (!start) start = timestamp;
      const progress = timestamp - start;
  
      const translationProgress = progress / 5; 
      const opacityProgress = progress / 200;
      const scaleProgress = 1 + (progress / 800);
      
  
      firstProject.style.transform = `translateY(-${translationProgress}%)`;
      firstProject.style.opacity = `${1-opacityProgress}`;
  
      secondProject.style.transform = `translateY(-${translationProgress}%)`;
  
      thirdProject.style.transform = `translateY(-${translationProgress}%) scale(${scaleProgress})`;
      
      lastProject.style.transform = `translateY(-${translationProgress}%)`;
      lastProject.style.opacity = `${opacityProgress}`;
      lastProject.style.display = "block";
  
  
            
      if (progress < 300) {
        requestAnimationFrame(animate);
      } else {
        firstProject.style.transform = "";
        firstProject.style.opacity = "";
  
         secondProject.style.transform = "";
         thirdProject.style.transform = "";
  
        lastProject.style.display = ""
        lastProject.style.transform = "";
        lastProject.style.opacity = "";
  
        projectsList.removeChild(firstProject);
  
        isAnimating = false;

        lists[(Math.floor(projects.length/2))+1].classList.add("scale");
        projectButtons[(Math.floor(projects.length/2))+1].classList.add("center")
      }
    }
  
  }
  


  
// down arrow


  const downArrow = document.querySelector(".down-arrow");
  downArrow.addEventListener("click", () => {
    downArrowFunction();
  });


  function downArrowFunction(){ 
    if (isAnimating) {
      return; // Don't allow new clicks if animation is in progress
    }
    isAnimating = true;
  
    const lists = document.querySelectorAll(".list");
    const projectButtons = document.querySelectorAll(".project-buttons");

    projectButtons.forEach((projectButton)=>{
      if (projectButton.classList.contains("center")){
        projectButton.classList.remove("center");
      }
    })
  
    lists.forEach((list,index)=>{
          if (list.classList.contains("scale")){
              list.classList.remove("scale");
          }
        })
  
    const firstListClass = lists[0].classList[1]; // Get the class name like "0"
    const projectIndx = parseInt(firstListClass); // Convert it to an integer
    
    addProject(projects[projectIndx],true);
  
    const firstProject = lists[0];
    const secondProject = lists[1];
    const thirdProject = lists[2];
    
  
    let start;
    let lastProject;
    
  requestAnimationFrame(startAnimation);
  
  function startAnimation(timestamp) {
      lastProject = projectsList.lastChild;
      lastProject.style.display = "none";
  
      animate(timestamp);
    }
  
  
    function animate(timestamp) {
        if (!start) start = timestamp;
      const progress = timestamp - start;
  
      const translationProgress = progress / 5; 
      const opacityProgress = progress / 200;
      const scaleProgress = 1 + (progress / 800);


      firstProject.style.transform = `translateY(${translationProgress}%) `;
      
      secondProject.style.transform = `translateY(${translationProgress}%)scale(${scaleProgress}) `;
      
      thirdProject.style.transform = `translateY(${translationProgress}%) `;

      
      lastProject.style.transform = `translateY(${translationProgress}%)`;
      lastProject.style.opacity = `${opacityProgress}`;
      lastProject.style.display = "block";

  
          
      if (progress < 300) {
        requestAnimationFrame(animate);
      } else {
        firstProject.style.transform = "";
        firstProject.style.opacity = "";
  
         secondProject.style.transform = "";
         thirdProject.style.transform = "";
  
        lastProject.style.display = ""
        lastProject.style.transform = "";
        lastProject.style.opacity = "";
  
        projectsList.removeChild(firstProject);
  
        isAnimating = false;

        lists[(Math.floor(projects.length/2))+1].classList.add("scale");
        projectButtons[(Math.floor(projects.length/2))+1].classList.add("center")
      }
    }
  
  }


// swipe function on section

const sections = document.querySelectorAll('section');
let currentSectionIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

sections.forEach((section, index) => {
  section.style.transform = `translateX(${index * 100}%)`;

  section.addEventListener('touchstart', (event) => {
    touchStartX = event.touches[0].clientX;
  });

  section.addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipe(event);
  });
});

function handleSwipe(event) {
  const swipeThreshold = 50; // Adjust as needed
  const touchTarget = event.target;
  const isInsideNoSwipeContainer = touchTarget.closest('.projects-container')

   if (!isInsideNoSwipeContainer) {
  if (touchEndX < touchStartX - swipeThreshold && currentSectionIndex < sections.length - 1) {
    // Swiped to the left
    currentSectionIndex++;
  } else if (touchEndX > touchStartX + swipeThreshold && currentSectionIndex > 0) {
    // Swiped to the right
    currentSectionIndex--;
  }

  sections.forEach((section, index) => {
    section.style.transform = `translateX(${(index - currentSectionIndex) * 100}%)`;
  });
}
}





  //swipe function on projects-list


  let startY = null;
  let startX = null;

  projectsList.addEventListener('touchstart', (e) => {
  startY = e.touches[0].clientY;
  startX = e.touches[0].clientX;
});

projectsList.addEventListener('touchend', (e) => {
  const endY = e.changedTouches[0].clientY;
  const deltaY = endY - startY;
  const endX = e.changedTouches[0].clientX;
  const deltaX = endX - startX;

if(screen.width<=700){
  if (deltaY > 50) {
    // Swipe down
    downArrowFunction();
  } else if (deltaY < -50) {
    // Swipe up
    upArrowFunction();
  }
}else{
  if(deltaX>-50){
    rightArrowFunction();
  }else if(deltaX < 50){
    leftArrowFunction();
  }
}

});




    const gyroscope = new Gyroscope();
    
    gyroscope.addEventListener('reading', handleGyroscopeReading);

    gyroscope.start();

function handleGyroscopeReading() {
    const x = gyroscope.x;
    const y = gyroscope.y;
    const z = gyroscope.z;

    if (screen.width<=650){

      if (x > 0.4) {
          downArrowFunction();
      } else if (x < -0.4) {
          upArrowFunction();
      }
    }else{
      if(x> 0.4){
        rightArrowFunction();
      }else if(x< -0.4){
        leftArrowFunction();

      }
    }
}



})  
