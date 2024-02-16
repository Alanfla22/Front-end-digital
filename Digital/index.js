const Pessoa = function(nome, email) { this.nome = nome; // verifica se o e-mail foi preenchido if (email) { this.email = email; } 
}; 

const OutraPessoa = function(nome, email) { 
    
    this.nome = nome; // verifica se o e-mail foi preenchido if (email) { this.email = email; }

    this.fala = function(){ console.log("Olá, meu nome é "+this.nome+" e meu email é "+this.email); }; }; 



const OutraPessoa2 = function(nome, email) { this.nome = nome; // verifica se o e-mail foi preenchido if (email) { this.email = email; } 
};

OutraPessoa2.prototype.fala = function(){ console.log("Olá, meu nome é "+this.nome+" e meu email é "+this.email); };  




const OutraPessoa3 = function(nome, email) { this.nome = nome; // verifica se o e-mail foi preenchido if (email) { this.email = email; } 
}

OutraPessoa3.prototype.fala = function(){ console.log("Olá, meu nome é "+this.nome+" e meu email é "+this.email); };

OutraPessoa3.prototype.anda = function(){ console.log("Estou andando"); }; 



const OutraPessoa4 = function(nome, email) { this.nome = nome; // verifica se o e-mail foi preenchido if (email) { this.email = email; } 
};

OutraPessoa4.prototype ={ constructor: OutraPessoa4, fala : function(){ console.log("Olá, meu nome é "+this.nome+" e meu email é "+this.email); }, anda : function(){ console.log("Estou andando"); } };
