const reviews = [
    {
        id: 1,
        name: "Jan",
        job: "Web Devloper",
        img : "download.png",
        text: "My name is Jan, I’ve been studying computer science for two years. In order to kick-start my career before I graduate, I am looking for a job of a web developer, since that’s what I’ve been doing already for four years in my free time. Designing websites for friends, developing simple e-shops with the help of some open source content-management systems, and so on. Besides that I am a normal guy who enjoys hiking and spending time with friends, while not working or studying, which takes most of my time of course. If I should pick the best website I’ve designed up to this point, it will be this one: [name of the website]. I am ambitious and hard-working and believe you’ll give me a chance to prove my words.", 
    },
    {
        id: 2,
        name: "Emily",
        job: "Web DEveloper",
        img: "second.png",
        text:"My name is Emily, 24 years old, and I’ve just graduated from computer science. Looking for my first job, I decided to go with web development, since I understand that it is impossible to succeed in almost any business without some online presence. Hence I know the opportunities are there and will stay there. But I am not one who would opt for freelancing, since I do not enjoy that part of the job–looking for clients, doing marketing, keeping books. I simply enjoy working on the code, developing beautiful websites, and that’s why I apply for this job with you. To my greatest hobbies belong computer games (I limit myself to 1 hour playing a day, in order to not waste that much time playing), and cooking.",
    },
    {
        id: 3,
        name: "Miles",
        job: "Web Developer",
        img: "download.png",
        text:"My name is Miles and I’ve been developing websites with WordPress for about five years now. I am self-taught, but I honestly believe that with the amount of tutorials on YouTube, and in the WordPress community, one can learn everything–including HTML, CSS and PHP, without going to college. I’ve tried to make my living as a freelance front end web developer, but now with my first son on the way, I am looking for a job-security, and decided to apply for the position you advertise. Besides work I am just a normal family man who enjoys spending time with his wife, and working in the garden in his spare time.",
    },
    { id: 3,
        name: "Emily",
        job: "Web Developer",
        img: "second.png",
        text:"My name is Miles and I’ve been developing websites with WordPress for about five years now. I am self-taught, but I honestly believe that with the amount of tutorials on YouTube, and in the WordPress community, one can learn everything–including HTML, CSS and PHP, without going to college. I’ve tried to make my living as a freelance front end web developer, but now with my first son on the way, I am looking for a job-security, and decided to apply for the position you advertise. Besides work I am just a normal family man who enjoys spending time with his wife, and working in the garden in his spare time.",
    },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevbtn = document.querySelector(".prev-btn");
const nextbtn = document.querySelector(".next-btn");
const randombtn = document.querySelector(".random-btn");


let currentItem= 0;

window.addEventListener('DOMContentLoaded', function () {
    // console.log('shake and bake');
    // const item = reviews[currentItem]
    // img.src = item.img
    // author.textContent = item.name;
    // job.textContent = item.job;
    // info.textContent = item.text;
    showperson(currentItem);
});

function showperson(person) {
    const item = reviews[person]
    img.src = item.img
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextbtn.addEventListener('click', function(){
    currentItem++;
    showperson(currentItem);
});

prevbtn.addEventListener('click',function(){
    currentItem--;
    showperson(currentItem);
});