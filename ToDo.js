$(".txtb").on("keyup",function(e){
    //13  means enter button
    if(e.keyCode == 13 && $(".txtb").val() != "")
    {
      var task = $("<div class='task'></div>").text($(".txtb").val());
      var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
        var p = $(this).parent();
        p.fadeOut(function(){
          p.remove();
        });
      });

      var check = $("<i class='fas fa-check'></i>").click(function(){
        var p = $(this).parent();
        p.fadeOut(function(){
          $(".comp").append(p);
          p.fadeIn();
        });
        $(this).remove();
      });

      task.append(del,check);
      $(".notcomp").append(task);
        //to clear the input
      $(".txtb").val("");
    }
  });


  // Overall, this code creates a dynamic task list where tasks can be added by typing in the input field and pressing Enter. Each task has a trash icon to delete it and a checkmark icon to mark it as completed. Completed tasks are moved to a different section of the list. The code leverages jQuery to make these interactions smoother and more interactive.