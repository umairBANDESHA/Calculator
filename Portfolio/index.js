// to change image on hover
function changeImg1(src){
   $(".s1 img").attr("src", src);
} 
function changeBack1(src){
   $(".s1 img").attr("src", src);
} 
function changeImg2(src){
   $(".s2 img").attr("src", src);
} 
function changeBack2(src){
   $(".s2 img").attr("src", src);
} 
function changeImg3(src){
   $(".s3 img").attr("src", src);
} 
function changeBack3(src){
   $(".s3 img").attr("src", src);
} 
//------------------

//  TO ADD LIST ON hover 
   function addSkills(){

      $(".skills .skill").append("<li>App Developer</li>");
      $(".skills .skill").append("<li>Web Developer</li>");
      $(".skills .skill").append("<li>UI/UX Design</li>"); 
   }
   //  TO remove LIST ON hover 
   function removeSkills(){

      $(".skill li").remove();
      $(".skill li").remove();
      $(".skill li").remove(); 
   }
   //  TO ADD LIST ON hover 
   function addExp(){
      
      $(".exp").append("<li>Software Engineer</li>");
      $(".exp").append("<li>Senior React Developer at Google</li>");
      $(".exp").append("<li></li>");
   }
      //  TO remove LIST ON hover 
   function removeExp(){

      $(".exp li").remove();
      $(".exp li").remove();
      $(".exp li").remove(); 
   }
   //  TO ADD LIST ON hover    
   function addEdu(){
      
      $(".edu").append("<li>MS Data Sciences</li>");
      $(".edu").append("<li>BS Information Technology</li>");
      $(".edu").append("<li></li>"); 
   }
      //  TO remove LIST ON hover 
   function removeEdu(){

      $(".edu li").remove();
      $(".edu li").remove();
      $(".edu li").remove(); 
   }

//-----------------------------