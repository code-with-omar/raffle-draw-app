window.onload=function(){
    const ins=document.querySelector("#inp");
    const nameList=document.querySelector("#name-list");
    const display=document.querySelector("#display");
    const giveATry=document.querySelector("#give-a-try");
    const firstPosition=document.querySelector("#first-position");
    const secondPosition=document.querySelector("#second-position");
    const thirdPosition=document.querySelector("#third-position");
    const participateName=[];
    let button=document.querySelector(".btn");
    

   
    ins.addEventListener('keypress',function(event){
        if(event.key=='Enter'){
            let newName=event.target.value.split(", ");
            if(newName[0]!==''){
                newName.forEach(element => {
                    participateName.push(element);//Extract text area and store it to an Array
                    let item=createItemList(element);
                    event.target.value="";
                    button.addEventListener("click",function(){
                        nameList.appendChild(item) ;
                        inp.disabled=true;
                        button.disabled=true;
                    })
                    // nameList.appendChild(item) ;
                    // event.target.value="";

                })
            }
        }
    })

    giveATry.addEventListener('click',function(){
        if(participateName.length==0){
            alert("there is no entery");
        }else{
            let shuffleName=shuffle(participateName);
            for(let i=1;i<shuffleName.length;i++){
                (function (i,count){
                    setTimeout(()=>{
                        let rand=Math.floor(Math.random()*(shuffleName.length));

                        display.innerHTML=shuffleName[rand];


                        if(count==shuffleName.length-1){
                            if(!firstPosition.innerHTML){
                                firstPosition.innerHTML=shuffleName[rand];
                                let index=participateName.indexOf(shuffleName[rand]);
                                participateName.splice(index,1);
                                
                                
                            }else if(!secondPosition.innerHTML){
                                secondPosition.innerHTML=shuffleName[rand];
                                let index=participateName.indexOf(shuffleName[rand]);
                                participateName.splice(index,1);
                            }else if(!thirdPosition.innerHTML){
                                thirdPosition.innerHTML=shuffleName[rand];
                                let index=participateName.indexOf(shuffleName[rand]);
                                participateName.splice(index,1);
                                giveATry.disabled= true;
                                document.querySelector(".message").innerHTML="Raffle draw is finished! Thanks"
                               
                               
                            }
                        }

                    },i)
                })(i*50,i);
            }
        }
    })
    
}







function createItemList(name){
    let li=document.createElement('li');
    li.className='list-group-item'
    li.innerHTML=name;
    return li;
}

function shuffle(arr){
    let  shuffleArray=[...arr]
    let temp;
    let rand;
    for(let i=shuffleArray.length-1;i>0;i--){
        rand=Math.floor(Math.random()* (i+1));
        temp=shuffleArray[rand];
        shuffleArray[rand]=shuffleArray[i];
        shuffleArray[i]=temp;
    }

    return shuffleArray;
}
