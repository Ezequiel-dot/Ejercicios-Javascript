
(()=>{

const xhr = new XMLHttpRequest(),
$xhr = document.getElementById("xhr"),
$fragment = document.createDocumentFragment();

xhr.addEventListener("readystatechange",(e)=>{
    if(xhr.readyState !==4)return

    if(xhr.status>199 && xhr.status<300){
        //console.log("correcto")

        let json=JSON.parse(xhr.responseText)

        json.forEach((el) => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
          });
    
          $xhr.appendChild($fragment);

    }else{
       // console.log("error")
        let message = xhr.statusText || "Ocurrió un error";
        $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }
})
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.send();
})();


(() => {
    
const $fetch = document.getElementById("fetch"),
$fragment = document.createDocumentFragment();

fetch("https://jsonplaceholder.typicode.com/users")
.then ((res)=> res.ok ? res.json() : Promise.reject(err))
.then((json)=>{
   // console.log(json)

  
    json.forEach((el)=>{
        const $li=document.createElement("li")
        $li.innerHTML=`${el.name}--${el.email}--${el.phone}`

        $fragment.appendChild($li)

    })

    $fetch.appendChild($fragment)
   // $fetch.innerHTML=json
})

.catch((err)=>{
console.log(err)
        let message = xhr.statusText || "Ocurrió un error";
        $fetch.innerHTML = `Error ${xhr.status}: ${message}`;
})

.finally(()=>{
    //console.log("Esto se ejecutara siempre")
})


})();


(() => {
    const $fetchAsync = document.getElementById("fetch-async"),
      $fragment = document.createDocumentFragment();
      
    async function getData(){
      

        try{
            let res= await fetch("https://jsonplaceholder.typicode.com/users"),
             json= await res.json()


             if(!res.ok)throw{status:res.status,text:res.statusText}

                json.forEach((el)=>{
                    const $li=document.createElement("li")
                    $li.innerHTML = `${el.name}-${el.email}-${el.phone}`
                    $fragment.appendChild($li)

                })

                $fetchAsync.appendChild($fragment)

             //console.log(res,json)
        }catch(err){

            let message= err.statusText||"Ocurrio un error"

            $fetchAsync.innerHTML= `Error ${err.status}:${message}`

        }finally{
           // console.log("Esto se ejecutara siempre")
        }

        

    }

    getData()
})();


(()=>{
    const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        
        let json=res.data

        json.forEach((el)=>{
            const $li=document.createElement("li")
            $li.innerHTML = `${el.name}-${el.email}-${el.phone}`
            $fragment.appendChild($li)

        })

        $axios.appendChild($fragment)
        })
    .catch((err)=>{
        let message= err.response.statusText||"Ocurrio un error"

        $axios.innerHTML= `Error ${err.response.status}:${message}`
    })
    .finally(()=>{
      //  console.log("ESTO SE EJECUTA SIEMPRE")
    })
})();


(()=>{
    const $axiosAsinc = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

    axios.get("https://jsonplaceholder.typicode.com/users")


    async function getData(){
        try{
            let res=await axios.get("https://jsonplaceholder.typicode.com/users"),
            json=await res.data


            

            json.forEach((el)=>{
                const $li=document.createElement("li")
                $li.innerHTML = `${el.name}-${el.email}-${el.phone}`
                $fragment.appendChild($li)
    
            })

            $axiosAsinc.appendChild($fragment)
        }catch(err){

            let message= err.response.statusText||"Ocurrio un error"
            $axiosAsinc.innerHTML= `Error ${err.response.status}:${message}`

        }finally{
            console.log("esto se ejecuta siempre")
        }
    }

    getData()

})();