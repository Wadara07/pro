document.getElementById("myForm").addEventListener("submit", 
    function(event){
        event.preventDefault();

        const email= document.getElementById("myEmail").value.trim();

        if(!email ||/\S+S@\S+\.\S+/.test(email)){
            alert("Please enter a valid email");
            return;
        }

        alert("Form successfully submitted!!");
        this.submit();
        
})