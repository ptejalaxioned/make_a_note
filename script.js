var button = document.querySelector("button");
var parentDiv = document.querySelector(".wrapper");
var noteContent=""
  let  paraContent=""

button.addEventListener("click", function (event) {
  console.log(event.target);
});

var abc = document.querySelector(".wrapper");
var childCount = abc.children.length;
var countNote = 0;

function createNote() {
  // console.log(countNote+1)
  if (abc.children.length == childCount) {
    // note-area Class Created here
    var note_area = document.createElement("div");
    note_area.classList.add("note-area");
    parentDiv.appendChild(note_area);
    //style
    note_area.style.padding = "20px 2%";
    note_area.style.display = "flex";
    // note_area.style.justifyContent="space-between"
    note_area.style.gap = "24px";
    note_area.style.flexWrap = "wrap";
    addNote(note_area);
  } else {
    var note_area = parentDiv.children[1];
    addNote(note_area);
  }
}

// Add note function

function addNote(note_area) {
  // note Class Created here
  var note = document.createElement("div");
  note.classList.add("note");
  var idName = `${note_area.children.length + 1}`;
  note.setAttribute("id", idName);
  console.log(idName);
  note_area.appendChild(note);

  //style
  note.style.width = "23.5%";
  note.style.display = "flex";
  note.style.flexDirection = "column";

  // noteup and notedown Class Created here
  var note_up = document.createElement("div");
  var note_down = document.createElement("div");
  note_up.classList.add("noteup");
  note_down.classList.add("notedown");
  note.append(note_up, note_down);
  //style noteup
  note_up.style.padding = "5px 10px";
  note_up.style.display = "flex";
  note_up.style.justifyContent = "end";
  note_up.style.backgroundColor = "#94c158";
  note_up.style.gap = "10px";
  //style notedown
  note_down.style.height = "40vh";
  note_down.style.padding = "20px";
  note_down.style.backgroundColor = "white";


  var textarea= document.createElement("textarea");
  note_down.appendChild(textarea)
  textarea.style.display="none"
  textarea.style.border="none"
  textarea.style.resize="none"
  textarea.style.outline="none"
  console.log(note_down)
  
  // two anchor tag inside noteup Class Created here
  var edit = document.createElement("a");
  var remove = document.createElement("a");
  edit.classList.add("edit");
  remove.classList.add("remove");
  note_up.append(edit, remove);
  edit.innerHTML = "edit";
  remove.innerHTML = "remove";
  //style edit class
  edit.style.content = "\f044";
  //style remove class
  remove.style.content = "\f1f8 ";

  // Delete notes
  remove.addEventListener("click", function (e) {
    var noteId=document.getElementById(e.target.parentNode.parentNode.id)
    // e.target.parentNode.parentNode.remove();
    noteId.remove();
  });

  
  //Save notes
  edit.addEventListener("click", function (e) {

    var noteId=document.getElementById(e.target.parentNode.parentNode.id)
    if(para.style.display="block"){
    paraContent=paraContent+editNote(textarea,para,noteContent)
    console.log("paraContent"+" "+textarea.style.display)
    }

   else if (textarea.style.display="block"){
      // saveNote(textarea,para ,paraContent)
      console.log("paraContent"+" "+textarea.style.display)
   } 
  
  
    })
    

  var anchor = document.querySelectorAll("a");
  for (var i = 0; i < anchor.length; i++) {
    anchor[i].style.float = "left";
    anchor[i].style.textIndent = "-9999px";
  }

  // tags inside notedown Class Created here
  var para = document.createElement("p");
  para.classList.add("para");
  note_down.appendChild(para);
  //style
  para.style.margin = "0";
  para.style.fontSize = "13px";
  para.style.fontWeight = "500";

}


function saveNote(textarea,para ,paraContent)
{
  para.style.display="block"
  textarea.style.display="none"
  return paraContent;
}

function editNote(textarea,para,noteContent)
{
  textarea.style.display="block"
  para.style.display="none"
  para.innerHTML=noteContent+textarea.value
  return para.innerHTML;
}