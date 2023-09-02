
 
function clicked(){
if(window.localStorage.getItem("g") === null){
    var persons=[];
    console.log("he he");
}
   else{ 
        var persons = JSON.parse(window.localStorage.getItem("g"));
        console.log("kgo1");
    }
    var person={
        "job":'',
        "location": '',
        "photo":'',
        "id":''
    }
    var lo=window.localStorage.getItem("size");
    lo=parseInt(lo)+1;
    var lol=lo.toString;
    window.localStorage.setItem("size",lo.toString());
    console.log(lo);
    const input = document.getElementById('thumbnail');

input.addEventListener('change', () => {
    console.log('he');
    const reader = new FileReader();
    reader.readAsDataURL(input.files[0]); 
    console.log("yo");
    reader.addEventListener('load',()=>{
            const url=reader.result;
            console.log(url);
            person.photo=url;
            
            
            
            //const a = JSON.stringify(dictionary);
            // Store the string in local storage
            var f=document.getElementById('j').value;
            var b=document.getElementById('l').value;
            person.job=f;
            person.location=b;
            person.id=window.localStorage.getItem("size");
            console.log(person.id);
            persons.push(person);
            window.localStorage.setItem("g", JSON.stringify(persons));
           
            var meta1 = JSON.parse(window.localStorage.getItem("g"));
            console.log(person.job);
    })
});
      const komal = document.getElementById('sub');
      komal.myparam=12;
      komal.addEventListener("click", myFunction);
   
    console.log('hi');




}
function myFunction(a) {
    window.open( 'job.html') ;
    console.log(a.currentTarget.myparam);
  }

    function update(){
        var meta2 = JSON.parse(window.localStorage.getItem("s"));
        var t= document.getElementById('komal');
        t.innerHTML="Job Name:"+meta2.name;
        var te= document.getElementById('s');
        te.innerHTML="Job Location: "+meta2.location;
        var i=meta2.id;
        console.log(i);
        // var se= document.getElementById('komal1').value;
        // console.log(se);
        const upd= document.getElementById('su');
        upd.onclick=function k(){
            var se= document.getElementById('komal1').value;
            var de=document.getElementById('s1').value;
            if(window.localStorage.getItem("g") === null){
                var persons=[];
                console.log("he he");
            }
               else{ 
                    var persons = JSON.parse(window.localStorage.getItem("g"));
                    console.log("kgo1");
                }
            var person={
                "job":'',
                "location": '',
                "photo":'',
                "id":''
            }
            person.job=document.getElementById('komal1').value;
            person.location=document.getElementById('s1').value;
            person.id=i;
            console.log(person.id);
            persons.push(person);
            window.localStorage.setItem("g", JSON.stringify(persons));
            window.open("job.html");
        }

    }





