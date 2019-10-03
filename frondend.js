
async function getAllCats(){
    const url = "http://localhost:8888/api/cats";
    try{
        const response = await fetch(url,{method:'GET'});
        const data     = await response.json();
        let str='';
        for(let i=0;i<data.length;i++){
            str +='<li class="list-group-item">'+data[i].name+'<i style="cursor: pointer;color:#66e625" onclick="getSingleCat(\'' + data[i]._id + '\')" class="fa fa-eye ml-3" aria-hidden="true"></i><i data-toggle="modal" data-target="#myModal" style="cursor: pointer;color:#a072e8" onclick="getSingleCatEdit(\'' + data[i]._id + '\')" class="fa fa-pencil-square-o ml-3" aria-hidden="true"></i><i class="fa fa-trash-o ml-3" aria-hidden="true" style="cursor: pointer;color:#f75a5a" onclick="deleteCat(\'' + data[i]._id + '\')"></i></li>';
        }
        showAllCats.innerHTML = str;  
     }
    catch(error){
        console.log(error);
    }    
}
async function deleteCat(event){
    const url ="http://localhost:8888/api/cat";
    try{
        const response = await fetch(url+ '/' +event,{method:"DELETE"});
        const data     = await response.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
    
    getAllCats();
}
async function getSingleCat(event){
    console.log(event);
    const url ="http://localhost:8888/api/cat";
    try{
        const response = await fetch(url+ '/' +event,{method:"GET"});
        const data     = await response.json();
        let str='';
        showSingleCat.innerHTML ='';
            str +='<li class="list-group-item">'+data.name+'<i style="cursor: pointer;color:#a072e8" data-toggle="modal" data-target="#myModal" onclick="getSingleCatEdit(\'' + data._id + '\')" class="fa fa-pencil-square-o ml-3" aria-hidden="true"></i></li><li class="list-group-item">'+data.email+'</li><li class="list-group-item">'+data.location+'</li>';
        
        showSingleCat.innerHTML = str;
        
    }catch(error){
        console.log(error);
    }
}
var editedIdBuild;
 getSingleCatEdit = (event)=> {
     editedIdBuild = event;
 };

async function putCat(){
    console.log(editedIdBuild);
    const id = editedIdBuild;
    const newName = document.getElementById('newName').value;
    const newEmail = document.getElementById('newEmail').value;
    const newLocation = document.getElementById('newLocation').value;
    const newdata={name:newName,email:newEmail,location:newLocation};
    const url = "http://localhost:8888/api/cat";
    try{
        const response=await fetch(url+'/'+id,
        {headers: {'Content-type': 'application/json; charset=UTF-8'},
        method:"PUT",
        body:JSON.stringify(newdata)});
    }catch(error){
        console.log(error);
    }
    editedIdBuild=null;
}

async function postCat(){
    const name= document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const location = document.getElementById('location').value;
    const postData = {name:name,email:email,location:location}

    const url = "http://localhost:8888/api/cat";
    try{
        const response=await fetch(url,
        {headers: {'Content-type': 'application/json; charset=UTF-8'},
        method:"POST",
        body:JSON.stringify(postData)});
    }catch(error){
        console.log(error);
    }
}