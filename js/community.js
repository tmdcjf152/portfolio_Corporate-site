const faqItemHeaders = document.querySelectorAll(".faq-item-header");

faqItemHeaders.forEach(faqItemHeader => {
  faqItemHeader.addEventListener("click", (e)=> {

    const currentlyActiveFaqItemHeader = document.querySelector(".faq-item-header.active");
    if(currentlyActiveFaqItemHeader && currentlyActiveFaqItemHeader!==faqItemHeader) {
      currentlyActiveFaqItemHeader.classList.toggle("active");
      currentlyActiveFaqItemHeader.nextElementSibling.style.maxHeight = 0;
    }
    
    faqItemHeader.classList.toggle("active");
    const faqItemBody = faqItemHeader.nextElementSibling;
    if(faqItemHeader.classList.contains("active")) {
      faqItemBody.style.maxHeight = faqItemBody.scrollHeight + "px";
    }
    else {
      faqItemBody.style.maxHeight = 0;
    }
    
  });
});