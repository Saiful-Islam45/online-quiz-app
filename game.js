//counter clock
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

const question =document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
var value = 0;

let questions = [
    {
        question:"সামরিক শাসন জারি করা হয়",
        op1:"1958",
        op2:"1966",
        op3:"1969",
        op4:"1952",
        answer:1
    },
    {
        question:"বর্ষাকালে গড় উষ্ণতা?",
        op1:"27 deg cel",
        op2:"25 deg cel",
        op3:"31.5 deg cel",
        op4:"29.5 deg cel",
        answer:1
    },
    {
        question:"'আবু গারিব' কারাগার কোথায়?",
        op1:"ইরান",
        op2:"ইরাক",
        op3:"কুয়েত",
        op4:"লিবিয়া",
        answer:2
    },
    {
        question:"বাংলা বর্ণমালায় অর্ধমাত্রার কয়ট?",
        op1:"9",
        op2:"6",
        op3:"7",
        op4:"11",
        answer:3
    },
    {
        question:"বন্ধন শব্দের সঠিক অক্ষর বিন্যাস কোনটি?",
        op1:"ব+ন্+ধ+ন্",
        op2:"বন্+ধন্",
        op3:"ব+ন্ধ+ন",
        op4:"বান্+ধন্",
        answer:2
    },
    {
        question:"‘মনস্তাপ’ এর সন্ধি বিচ্ছেদ কোনটি?",
        op1:"মনোঃ + তাপ",
        op2:"মন + তাপ",
        op3:"মনো + তাপ",
        op4:"মনস + তাপ",
        answer:1
    },
    {
        question:"“বুলবুলিতে ধান খেয়েছে”- এই বাক্যের ‘বুলবুলিতে’ শব্দে কোন কারকে কোন বিভক্তি রয়েছে?",
        op1:"করণে সপ্তমী",
        op2:"অধিকরণে সপ্তমী",
        op3:"কর্তাকারকে সপ্তমী",
        op4:"অপাদানে সপ্তমী",
        answer:3
    },{
        question:"‘যার বাসস্থান নেই’- বাক্যের এক কথায় প্রকাশ কি ?",
        op1:"অনিকেতন",
        op2:"উদ্বাস্তু",
        op3:"অনুজ",
        op4:"একাহারী",
        answer:1
    }
    ,{
        question:"প্রত্যক্ষ কোন বস্তুর সাথে পরোক্ষ কোন বস্তুর তুলনা করলে প্রত্যক্ষ বস্তুটিকে বলা হয় ?",
        op1:"উপমিত",
        op2:"উপমান",
        op3:"উপমেয়",
        op4:"রূপক",
        answer:3
    }
    ,{
        question:" ‘ প্রতিদিন ঘরহীন ঘরে’ কাব্য গ্রন্থের রচয়িতা-",
        op1:"আহসান হাবীব",
        op2:"মহাদেব সাহা",
        op3:"আলাউদ্দিন আল আজাদ",
        op4:"শামসুর রহমান",
        answer:4
    }
]


//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS =10;

startGame=()=>{
 questionCounter = 0;
 score = 0;
 availableQuestions = [...questions];
 getNewQuestion();
}

getNewQuestion = () =>{
    if(availableQuestions ==0 || questionCounter.length >= MAX_QUESTIONS){
        //sign off from the page
        return window.location.assign('end.html')
    }
    questionCounter++;
    const currentIndex= Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[currentIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice =>{
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion["op"+ number];
    });

    availableQuestions.splice(currentIndex, 1);
    acceptAnswers = true;
}

choices.forEach(choice =>{
    choice.addEventListener('click',function(e){
        if(!acceptAnswers) return;
        acceptAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        const classToApply = selectedAnswer == currentQuestion.answer? 'correct':'incorrect';
     //   selectedAnswer == currentQuestion.answer? alert("Good Job Baby!!!",value):alert("Gorer Dim parse!!!!")
    

        choice.parentElement.classList.add(classToApply);
        
        setTimeout(()=>{
        selectedAnswer == currentQuestion.answer? alert("Good Job Baby !!!"):alert("Gorer Dim parse.. Correct Answer : "+currentQuestion.answer)

        choice.parentElement.classList.remove(classToApply);
         getNewQuestion();
        },1000);
        

    });
    
});
startGame();