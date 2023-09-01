let top = document.querySelector(".top");

window.onscroll("scroll", () => {
  if(this.scrollY>=800){
    top.classlist.add("active");
  }else{
    top.classlist.remove("active");
  }
})