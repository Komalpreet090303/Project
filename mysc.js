function clicked(){
    
    //sr="foot.png";
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
        "photo":''
    }
    
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
            
            persons.push(person);
            
            //const a = JSON.stringify(dictionary);
            // Store the string in local storage
            var f=document.getElementById('j').value;
            var b=document.getElementById('l').value;
            person.job=f;
            person.location=b;
           
            window.localStorage.setItem("g", JSON.stringify(persons));
           
            var meta1 = JSON.parse(window.localStorage.getItem("g"));
            console.log(person.job);
    })


});
      const komal = document.getElementById('sub');
      komal.myparam=12;
      komal.addEventListener("click", myFunction);
    // const p = document.createElement('div');
    // const q=document.createElement('div');
    // const r = document.createElement('div');
    // p.className="first";
    // q.className="profile-photo";
    // r.className="details";
    // const s= document.createElement('img');
    // s.src="foot.png";
    // s.className= "spe-img";
    // q.appendChild(s);
    // p.appendChild(q);
    // const u=window.document.getElementById("hi");
    // const child = window.document.getElementById("yo");
    // u.appendChild(p);
    console.log('hi');
}
function myFunction(a) {
    window.open( 'job.html') ;
    console.log(a.currentTarget.myparam);
  }
function check(){
    // window.localStorage.removeItem("g");
    // window.localStorage.removeItem("thumbnail");
    var meta2 = JSON.parse(window.localStorage.getItem("g"));
    console.log("i enter");
    // var l=meta2[0];
    // console.log(l.photo);
    //const thumbnail = localStorage.getItem('thumbnail');
    for(var im=0;im<meta2.length;im++){
        var meta1=meta2[im];
        
    console.log("i enter");
    const p = document.createElement('div');
    const q=document.createElement('div');
    const r = document.createElement('div');
    p.className="first";
    q.className="profile-photo";
    r.className="details";
    const s= document.createElement('img');
    s.setAttribute('src', meta1.photo);
    s.className= "spe-img";
    q.appendChild(s);
    p.appendChild(q);
    var node = document.createElement("a");
    var textnode = document.createTextNode(meta1.job);
    var textn = document.createTextNode(meta1.location);
    node.appendChild(textnode);
    var node1=document.createElement("p");
    node1.appendChild(textn);
    node.className='name';
    node.href="www.google.com";
    node.style="text-decoration:none";
    node1.className='more-datails';
    const x = document.createElement('div');
    x.className='details';
    x.appendChild(node);
    x.appendChild(node1); 
    const u=window.document.getElementById("hi");
    const child = window.document.getElementById("yo");    
    p.appendChild(x);
    u.appendChild(p);
    
//  var person = {
//     done:'true'
//  };
//    window.localStorage.setItem("g", JSON.stringify(person));

    }
  

}


