class Formulaire{
    lastname: string; 
    name: string; 
    civi:string; 
    adress: string; 
    city: string; 
    cp: number; 
    pays:string;
    email : string;
    phone:number; 
    login:string;

    
    constructor(ln : string, n : string, civ: string, ad : string, ci : string, cp : number, pa : string, em : string, ph : number, log : string ){
        this.lastname = ln; 
        this.name = n; 
        this.civi = civ; 
        this.adress = ad; 
        this.city = ci; 
        this.cp = cp; 
        this.pays = pa; 
        this.email = em;
        this.phone = ph; 
        this.login = log; 

    }

    IsPhoneNumberCorrect():String{
        if(this.phone.toString().length==10){
            return '';
        }
        return "Pas le bon numéro de téléphone";
    }

    IsCpCorrect():String{
        if(this.cp.toString().length < 6 ){
            return ''; 
        }
        return "Le code postale est pas au bon format"; 
    }

    IsEmailCorrect():String{
        
        if(this.email.includes('@')){
            return ''; 
        }
        return "Email non valide"; 
    }   

    IsFormCorrect():String{
        var cp : String =this.IsCpCorrect();
        var phone : String =this.IsPhoneNumberCorrect();
        var email : String =this.IsEmailCorrect();
        

        if(cp!=''){
            return cp;
        }

        if(phone!=''){
            return phone;
        }

        if(email!=''){
            return email
        }

       
        return '';
    }
}export default Formulaire; 