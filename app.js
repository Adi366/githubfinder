const github = new GitHub();
const ui = new UI();

const userSearch = document.getElementById('searchUser');
userSearch.addEventListener('keyup',(e)=>{

    //Get userSearch text
    const userText = e.target.value;

    if(userText!==''){
        github.getUser(userText)
        .then((res)=>{
         if(res.profile.message==='Not Found'){
            //Show alert
            ui.showAlert('User Not Found!','alert alert-danger');
          
         }else{
            //Show Profile
            ui.showProfile(res.profile);
            ui.showRepos(res.repos);
         }
            
            
        })
    }
    else{
        //clear profile
        ui.clearProfile();
}
    
});


