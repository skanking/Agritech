var isFirstMessage = true;

function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        addUserMessage(userInput);
        setTimeout(function() {
            botResponse(userInput);
        }, 1000);
        document.getElementById("user-input").value = "";
    }
}

function addUserMessage(message) {
    var chatMessages = document.getElementById("chat-messages");
    var userBalloon = document.createElement("div");
    userBalloon.className = "balloon user";
    userBalloon.textContent = message;
    chatMessages.appendChild(userBalloon);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function botResponse(userInput) {
    var chatMessages = document.getElementById("chat-messages");
    var botBalloon = document.createElement("div");
    botBalloon.className = "balloon bot";
    var response = "";

    if (isFirstMessage) {
        response = "Olá! Em que posso lhe ajudar?<br>1 - Scanner de combate a pragas e fungos.<br>2 - Higrômetro de alta precisão.<br>3 - Mapeamento e Planejamento de Terrenos.";
        isFirstMessage = false;
    } else {
        if (userInput === "1") {
            response = "Atendimento e Diagnóstico realizado através de imagem, texto e vídeo junto ao nosso time AgriTeam 24/7.";
        } else if (userInput === "2") {
            response = "Instrumento de alta precisão, que mede a umidade do ar. Assim priorizando irrigação da colheita conforme criticidade.";
        } else if (userInput === "3") {
            response = "Permite aos agricultores mapear e planejar suas propriedades, com informações sobre topografia de solo e uso da terra.";
        } else {
            response = "Desculpe, não entendi.";
        }
    }
    var botImage = document.createElement("img");
    botImage.src = "robot.png";
    botBalloon.appendChild(botImage);
    botBalloon.innerHTML += response;

    chatMessages.appendChild(botBalloon);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

document.getElementById("user-input").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("send-button").click();
    }
});
