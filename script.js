let user=[
    {
    profilePic:"https://images.unsplash.com/photo-1685703207038-b8d1817049f3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:"https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingmsg:4,
    location:"Delhi, India",
    name:"Harsitha",
    age:23,
    interests:[{
        icon:`<i class="ri-music-2-fill"></i>`,
        interest: "music",
    },{
        icon:`<i class="ri-film-line"></i>`,
        interest : "movies"
    },{
        icon:`<i class="ri-quill-pen-fill"></i>`,
        interest:"painting"
    }],
    bio:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius odit sunt cumque earum reiciendis? Temporibus ab, aliquid, praesentium obcaecati libero sunt repellat a.",
    isFriend:null
},
{
    profilePic:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingmsg:4,
    location:"Delhi, India",
    name:"Shivangi",
    age:23,
    interests:[{
        icon:`<i class="ri-music-2-fill"></i>`,
        interest: "music",
    },{
        icon:`<i class="ri-film-line"></i>`,
        interest : "movies"
    }],
    bio:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius odit sunt cumque earum reiciendis? Temporibus ab, aliquid, praesentium obcaecati libero sunt repellat a.",
    isFriend:null
},
{
    profilePic:"https://images.unsplash.com/photo-1685703207038-b8d1817049f3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingmsg:4,
    location:"Delhi, India",
    name:"Nita",
    age:26,
    interests:[{
        icon:`<i class="ri-music-2-fill"></i>`,
        interest: "music",
    },{
        icon:`<i class="ri-film-line"></i>`,
        interest: "movies"
    }],
    bio:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius odit sunt cumque earum reiciendis? Temporibus ab, aliquid, praesentium obcaecati libero sunt repellat a.",
    isFriend:null
},
{
    profilePic:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:"https://images.unsplash.com/photo-1592621385612-4d7129426394?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingmsg:5,
    location:"Delhi, India",
    name:"Radhika",
    age:28,
    interests:[{
        icon:`<i class="ri-music-2-fill"></i>`,
        interest: "music",
    },{
        icon:`<i class="ri-film-line"></i>`,
        interest: "movies"
    }],
    bio:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius odit sunt cumque earum reiciendis? Temporibus ab, aliquid, praesentium obcaecati libero sunt repellat a.",
    isFriend:null
}
];

function select(elem){
    return document.querySelector(elem);
}
let curr=0;
let isAnimating=false;
function setData(index){
    select(".imgi img").src = user[index].profilePic;
    select(".badge h5").textContent = user[index].pendingmsg;
    select(".location h3").textContent=user[index].location;
    select(".name h1:nth-child(1)").textContent=user[index].name;
    select(".name h1:nth-child(2)").textContent=user[index].age;
    
    let clutter="";
    user[index].interests.forEach(function(interest){
        clutter+=`<div class="tag flex items-center bg-white/30 gap-2 rounded-full  px-3 py-2 ">
        ${interest.icon}
        <h3 text="text-xl tracking-tighter capitalize">${interest.interest}</h3>
    </div>`
    })
    select(".tags").innerHTML=clutter;

    select(".bio p").textContent=user[index].bio;
}
(function setInitial(){
    select(".maincard img").src = user[curr].displayPic;
    select(".imgcoming img").src = user[curr + 1]?.displayPic;
    setData(curr);
    curr=2;
})();


function imageChange(){
    if(!isAnimating){
        isAnimating=true;
        let t1=gsap.timeline({
            onComplete: function(){
                isAnimating=false;
                let main=select(".maincard");
                let incoming=select(".imgcoming");
                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("imgcoming");
    
                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                gsap.set(main,{
                    scale:1,
                    opacity:1
                })
                if(curr===user.length) curr=0;
                select(".maincard img").src=user[curr].displayPic;
                curr++;
                main.classList.remove("maincard");
                incoming.classList.add("maincard");
                main.classList.add("imgcoming")
            }
        });
        t1.to(".maincard",{
            scale:1.1,
            opacity:0,
            ease:"circ",
            duration:.9
           },"a")
           .from(".imgcoming",{
            scale:.9,
            opacity:0,
            ease:"circ",
            duration:1.1
           },"a")
    }
}

let deny=select(".deny");
let accept=select(".accept");
deny.addEventListener("click",function(){
    imageChange();
    setData(curr-1);
    gsap.from(".details .element", {
        y: "100%",
        stagger: 0.06,
        ease: "power4.easeInOut",
        duration: 1
    })
    
});
accept.addEventListener("click",function(){
    imageChange();
    setData(curr-1);
    gsap.from(".details .element", {
        y: "100%",
        stagger: 0.06,
        ease: "power4.easeInOut",
        duration: 1
    })
    
});


(function containerCreator(){
    document.querySelectorAll(".element")
    .forEach(function(element){
        let div=document.createElement("div");
        div.classList.add(`${element.classList[1]}container`,'overflow-hidden');
        div.appendChild(element);
        select(".details").appendChild(div);
    })
})();


// (function containerCreator(){
//     document.querySelectorAll(".element")
//     .forEach(function(element){
//         let div=document.createElement("div");
//         div.classList.add(`${element.classList[1]}container`,'overflow-hidden');
//         div.appendChild(element);
//         select(".details").appendChild(div);
//     })
// })(); 
// gsap.from(".details .element",{
//     y:"100%",
//     stagger: .06,
//     ease: Power4.easeInOut,
//     duration: 1.5
// }) 