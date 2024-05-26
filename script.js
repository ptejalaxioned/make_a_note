let button = document.querySelector('button');
let parentDiv = document.querySelector('.wrapper');
let childCount = parentDiv.children.length;
let countNote = 0;

function createNote() {
  if (parentDiv.children.length == childCount) {
    // note-area Class Created here
    let note_area = document.createElement('div');
    note_area.classList.add('note-area');
    parentDiv.appendChild(note_area);

    //style
    note_area.style.padding = '20px 2%';
    note_area.style.display = 'flex';
    note_area.style.gap = '24px';
    note_area.style.flexWrap = 'wrap';

    addNote(note_area);
  } else {
    let note_area = parentDiv.children[1];
    addNote(note_area);
  }
}

// Add note function
function addNote(note_area) {
  let noteContent = '';
  let paraContent = '';

  // note Class Created here
  let note = document.createElement('div');
  note.classList.add('note');
  let idName = `${note_area.children.length + 1}`;
  note.setAttribute('id', idName);
  console.log(idName);
  note_area.appendChild(note);
  //style
  note.style.width = '23.5%';
  note.style.display = 'flex';
  note.style.flexDirection = 'column';

  // noteup and notedown Class Created here
  let note_up = document.createElement('div');
  let note_down = document.createElement('div');
  note_up.classList.add('noteup');
  note_down.classList.add('notedown');
  note.append(note_up, note_down);
  //style noteup
  note_up.style.padding = '5px 10px';
  note_up.style.display = 'flex';
  note_up.style.justifyContent = 'end';
  note_up.style.backgroundColor = '#94c158';
  note_up.style.gap = '10px';
  //style notedown
  note_down.style.height = '50vh';
  note_down.style.padding = '20px';
  note_down.style.backgroundColor = 'white';

  let textarea = document.createElement('textarea');
  // textarea.classList.add('text');
  note_down.appendChild(textarea);
  textarea.style.display = 'block';
  textarea.style.border = 'none';
  textarea.style.resize = 'none';
  textarea.style.outline = 'none';
  textarea.style.width = '100%';
  textarea.style.height = '100%';

  // two anchor tag inside noteup Class Created here
  let edit = document.createElement('a');
  let remove = document.createElement('a');
  edit.classList.toggle('save');
  remove.classList.add('remove');
  note_up.append(edit, remove);
  edit.innerHTML = 'edit';
  remove.innerHTML = 'remove';
  //style edit class
  edit.style.content = '\f044';
  //style remove class
  remove.style.content = '\f1f8 ';

  // Delete notes
  remove.addEventListener('click', function (e) {
    let noteId = document.getElementById(e.target.parentNode.parentNode.id);
    noteId.remove();
  });

  //Save notes
  edit.addEventListener('click', function (e) {
    let noteId = document.getElementById(e.target.parentNode.parentNode.id);

    let textarea1 = noteId.children[1].children[0];
    let para1 = noteId.children[1].children[1].children[0];

    let note_down_heigth = noteId.children[1];
    console.log(note_down_heigth);

    if (e.target.className == 'save') {
      edit.classList.toggle('save');
      edit.classList.add('edit');
      note_down_heigth.style.height = '40vh';
      noteContent = textarea1.value;
      paraContent = saveNote(textarea1, para1, noteContent);
    } else {
      edit.classList.toggle('edit');
      edit.classList.add('save');
      paraContent = editNote(textarea1, para1, paraContent);
      note_down_heigth.style.height = '50vh';
    }
  });

  let anchor = document.querySelectorAll('a');
  for (let i = 0; i < anchor.length; i++) {
    anchor[i].style.float = 'left';
    anchor[i].style.textIndent = '-9999px';
  }

  // tags inside notedown Class Created here
  let para = document.createElement('p');
  let paraDiv = document.createElement('div');
  // para.classList.add('para');
  paraDiv.classList.add('paraDiv');
  note_down.appendChild(paraDiv);
  paraDiv.appendChild(para);
  //style
  paraDiv.style.width = '100%';
  para.style.margin = '0';
  para.style.fontSize = '15px';
  para.style.fontWeight = '500';
  para.style.overflow = 'hidden';
  para.style.wordWrap = 'break-word';
}

function saveNote(textarea1, para1, noteContent) {
  para1.style.display = 'block';
  para1.innerHTML = noteContent;
  textarea1.style.display = 'none';
  return para1.innerHTML;
}

function editNote(textarea1, para1, paraContent) {
  para1.style.display = 'none';
  textarea1.style.display = 'block';
  textarea1.value = paraContent;
  return textarea1.value;
}
