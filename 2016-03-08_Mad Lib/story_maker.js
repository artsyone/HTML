function makeStory() {
    // get form values (2 points)
    var adjective1  = document.getElementById('adjective1').value;
    var verb = document.getElementById('verb').value;
    var noun1 = document.getElementById('noun1').value;
    var liquid = document.getElementById('liquid').value;
    var name = document.getElementById('name').value;
    var place = document.getElementById('place').value;
    var noun2 = document.getElementById('noun2').value;
    var nationality = document.getElementById('nationality').value;
    var female1 = document.getElementById('female1').value;
    var noun3 = document.getElementById('noun3').value;
    var female2 = document.getElementById('female2').value;
    var noun4 = document.getElementById('noun4').value;
    var number = document.getElementById('number').value;
    var adjective2 = document.getElementById('adjective2').value;
    
    
    // set title of story. use at least one form value in the title
    var title = "Personal Ad"; 


    // build story. you can add as many paragraphs as you like
    var paragraph1 = "I enjoy long, "+ adjective1 + " walks on the beach, getting " + verb + " in the rain and serendipitous encounters with" + noun1 + ". I really like Dr.Pepper mixed with " + liquid + ". I am well-read from Dr. Seuss to " + name + ".";
     
    
    var paragraph2 = "I travel frequently, especially to " + place + ", when I am not busy with work." 
     " I am looking for " + noun2 + " and beauty in the form of a " + nationality + " goddess. She should have the physique of " + female1 + " and the "+ noun3 + " of " + female2+ ".";
   
    
    var paragraph3 = " I would prefer if she knew how to cook, clean, and wash " + noun4 + "."
     " I know I’m not very attractive in my picture,but it was taken " + number + " days ago, and I have since become more " + adjective2 + ".";

    // display story by putting title & paragraphs into appropriate divs
    document.getElementById('title').innerHTML = title;
    document.getElementById('one').innerHTML = paragraph1;
    document.getElementById('two').innerHTML = paragraph2;
    document.getElementById('three').innerHTML = paragraph3;
}