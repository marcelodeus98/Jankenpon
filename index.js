function jankenpon(){
    let modeGame;
    let validate;
    let score = {
        playerOne: 0,
        playerTwo: 0,
        computer: 0
    };
    
    // Função para a opção for humano vs humano 
    let human_vs_human = () => {
        
        let playerOne = {
            name_player: 'a',
            option: 'a',
        };

        let playerTwo = {
            name_player: 'a',
            option: 'a',
        };
        
        
        do{

            alert("Game modes\n1 - Best of three;\n2 - Casual.");
            modeGame = prompt("Inform the desired game mode:\n 1 for best of three;\n 2 for casual.");

            playerOne.name_player = prompt("Player one, enter your name:");
            playerTwo.name_player = prompt("Player two, enter your name:");

        
            alert("Possible moves:\nstone;\npaper;\nscissors.");

            if(modeGame == "1"){
                for(let indice = 0; indice <= 2; indice++){
                    playerOne.option = prompt(`${playerOne.name_player} choose your move!`);
                    playerTwo.option = prompt(`${playerTwo.name_player} choose your move!`);
    
                    if((playerOne.option == "paper" && playerTwo.option == "stone") 
                    || (playerOne.option == "stone" && playerTwo.option == "scissors") 
                    || (playerOne.option == "scissors" && playerTwo.option == "paper")){
                        alert(`${playerOne.name_player}: ${playerOne.option}\n${playerTwo.name_player}:${playerTwo.option}`)
                        score.playerOne = score.playerOne +1;
                    }
                    if((playerTwo.option == "paper" && playerOne.option == "stone") 
                    || (playerTwo.option == "stone" && playerOne.option == "scissors") 
                    || (playerTwo.option == "scissors" && playerOne.option == "paper")){
                        alert(`${playerOne.name_player}: ${playerOne.option}\n${playerTwo.name_player}:${playerTwo.option}`)
                        score.playerTwo = score.playerTwo +1;
                    }
                    if((playerTwo.option == "paper" && playerOne.option == "paper") 
                    || (playerTwo.option == "scissors" && playerOne.option == "scissors") 
                    || (playerTwo.option == "stone" && playerOne.option == "stone")){
                        alert(`${playerOne.name_player}: ${playerOne.option}\n${playerTwo.name_player}:${playerTwo.option}`)
                        score.computer = score.computer +1;
                    }
                }

                if(score.playerOne > score.playerTwo){
                    alert(`${playerOne.name_player}: ${score.playerOne}\n${playerTwo.name_player}: ${score.playerTwo}\n${playerOne.name_player} is victorious`)
                }
                else if(score.playerOne < score.playerTwo){
                    alert(`${playerOne.name_player}: ${score.playerOne}\n${playerTwo.name_player}: ${score.playerTwo}\n${playerTwo.name_player} is victorious`)
                }else{
                    alert(`${playerOne.name_player}: ${score.playerOne}\n${playerTwo.name_player}: ${score.playerTwo}\n${playerTwo.name_player}Nobody won, draw!`)
                }
                
            }
            if(modeGame == "2"){
                playerOne.option = prompt(`${playerOne.name_player} choose your move!`);
                playerTwo.option = prompt(`${playerTwo.name_player} choose your move!`);

                if((playerOne.option == "paper" && playerTwo.option == "stone") 
                || (playerOne.option == "stone" && playerTwo.option == "scissors") 
                || (playerOne.option == "scissors" && playerTwo.option == "paper")){
                    alert(`${playerOne.name_player}: ${playerOne.option}\n${playerTwo.name_player}: ${playerTwo.option}\n${playerOne.name_player} is victorious!`)
                }
                if((playerTwo.option == "paper" && playerOne.option == "stone") 
                || (playerTwo.option == "stone" && playerOne.option == "scissors") 
                || (playerTwo.option == "scissors" && playerOne.option == "paper")){
                    alert(`${playerOne.name_player}: ${playerOne.option}\n${playerTwo.name_player}: ${playerTwo.option}\n${playerOne.name_player} is victorious!`)
                }
                if((playerTwo.option == "paper" && playerOne.option == "paper") 
                || (playerTwo.option == "scissors" && playerOne.option == "scissors") 
                || (playerTwo.option == "stone" && playerOne.option == "stone")){
                    alert(`${playerOne.name_player}: ${playerOne.option}\n${playerTwo.name_player}: ${playerTwo.option}\nNoboy won, draw!`)
                }
            }
            validate = prompt("Do yo want to continue, yes or no?")
            if (validate == "no"){
                alert("Goodbye!")
            }
        }while(validate == "yes")          
    };

    // Função para a opção for humano vs computer 
    let human_vs_computer = () => {
        
        let playerOne = {
            name_player: 'a',
            option: 'a',
        };

        let playerTwo = {
            name_player: 'a',
            option: 'a',
        };
        
        
        do{
            alert("Game modes\n1 - Best of three;\n2 - Casual.");
            modeGame = prompt("Inform the desired game mode:\n1 for best of three;\n 2 for casual.");
    
            playerOne.name_player = prompt("Please, enter your name:");
        
            alert("Possible moves:\n1 - for stone;\n2 - for paper;\n3 - scissors.");
    
            if(modeGame == "1"){
                for(let indice = 0; indice <=2; indice++){
                    playerOne.option = prompt(`${playerOne.name_player} choose your move!`);
                    let movesOfComputer = ['stone','paper', 'scissors'];
                    let moveAtual = Math.floor(Math.random()*movesOfComputer.length)
    
                    if((playerOne.option == 1 && moveAtual == 0) 
                    || (playerOne.option == 0 && moveAtual == 2) 
                    || (playerOne.option == 2 && moveAtual == 1)){
                        alert(`${playerOne.name_player}: ${playerOne.option}\nComputer: ${moveAtual}`)
                        score.playerOne = score.playerOne +1;
                    }
                    if((moveAtual == 1 && playerOne.option == 0) 
                    || (moveAtual == 0 && playerOne.option == 2) 
                    || (moveAtual == 2 && playerOne.option == 1)){
                        alert(`${playerOne.name_player}: ${playerOne.option}\nComputer: ${moveAtual}`)
                        score.playerTwo = score.playerTwo +1;
                    }
                    if((moveAtual == 1 && playerOne.option == 1) 
                    || (moveAtual == 0 && playerOne.option == 0) 
                    || (moveAtual == 2 && playerOne.option == 2)){
                        alert(`${playerOne.name_player}: ${playerOne.option}\nComputer: ${moveAtual}`)
                        score.computer = score.computer +1;
                    }
                }
                    if(score.playerOne > score.computer){
                        alert(`${playerOne.name_player}: ${score.playerOne}\nComputer: ${score.playerTwo}\n${playerOne.name_player} is victorious`)
                    }
                    else if(score.playerOne < score.computer){
                        alert(`${playerOne.name_player}: ${score.playerOne}\nComputer: ${score.computer}\nComputer is victorious`)
                    }else{
                        alert(`${playerOne.name_player}: ${score.playerOne}\nComputer: ${score.computer}\nNobody won, draw!`)
                    }
            }
    
            if(modeGame == "2"){
                playerOne.option = prompt(`${playerOne.name_player} choose your move!`);
                let movesOfComputer = ['stone','paper', 'scissors'];
                let moveAtual = Math.floor(Math.random()*movesOfComputer.length);
    
                if((playerOne.option == 1 && moveAtual == 0) 
                || (playerOne.option == 0 && moveAtual == 2) 
                || (playerOne.option == 2 && moveAtual == 1)){
                    alert(`${playerOne.name_player}: ${playerOne.option}\nComputer: ${moveAtual}\n${playerOne.name_player} is victorius!`)
                }
                if((moveAtual == 1 && playerOne.option == 0) 
                || (moveAtual == 0 && playerOne.option == 2) 
                || (moveAtual == 2 && playerOne.option == 1)){
                    alert(`${playerOne.name_player}: ${playerOne.option}\nComputer: ${moveAtual}\nComputer is victorius!`)
                }
                if((moveAtual == 1 && playerOne.option == 1) 
                || (moveAtual == 2 && playerOne.option == 2) 
                || (moveAtual == 0 && playerOne.option == 0)){
                    alert(`${playerOne.name_player}: ${playerOne.option}\nComputer: ${moveAtual}\nNobody won, draw!`)
                }
            }
            validate = prompt("Do yo want to continue, yes or no?")
            if (validate == "no"){
                alert("Goodbye!")
            }
        }while(validate == "yes");

    }
    
    do{
        alert("- - - - Jankenpon - - - -");
        alert("Options\n 1-human vs human;\n 2- human vs computer.");
        let modeOption = prompt("Inform the desired option:\n 1 for human vs human;\n 2 for human vs computer.");
        
        if(modeOption == "1"){
            human_vs_human()
        }
        if(modeOption == "2"){
            human_vs_computer()
        }

        validate = prompt("Do yo want to continue, yes or no?")
            if (validate == "no"){
                alert("Goodbye!")
            }
    }while(validate == "yes")

    
}


jankenpon()