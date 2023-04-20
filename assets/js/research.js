
/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Google Women Engineers Scholar'23 ",
    conferences:
    " : Secured a place among the top 250 girls selected for the Women Engineers Program '22, supported by Google, from all over India",
    researchYr: 2022,
    citebox: "popup1",

    image: "assets/images/research-page/we2.webp",

    citation: {
      vancouver:
        "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    about:
      "Women have been shaping computing since its early days. However, today women hold less than 26% of the global tech workforce. </br>Women Engineers (WE), a 24-month immersive and LIVE online learning experiential program offered by TalentSprint and supported by Google, selects, trains, and nurtures deserving first-year women engineering students to become world-class software engineers. A 100% scholarship that covers the complete program fee along with a rewarding cash scholarship are offered to the selected participants. </br>730+ students, shortlisted from over 78,000 applicants, have been positively impacted by the program in its first 4 cohorts. The program alumni are working with top-tier tech companies.",
    absbox: "absPopup1",
  },

  {
    title: "Diva Winner in NIT Silchar Coderush Challenge 2023",
    conferences:
      ": Secured a position among the top-30 from our institute and also begged the title of `DIVA WINNER` for being the top performer among all the other females. ",
    researchYr: 2023,
    citebox: "popup2",
    image: "assets/images/research-page/coderush2.png",

    citation: {
      vancouver:
      "assets/images/research-page/cd2.png",
    },
    about:
      "Coderush 2023 is a prestigious coding competition exclusively for top colleges in India, hosted by the Y-Combinator backed start-up, AlgoUniversity. </br>This competition was a unique opportunity for students at NIT Silchar to showcase their programming skills and potentially win a cash prize of ₹7500 and total prizes worth ₹25000.",
    absbox: "absPopup2",
  },

  {
    title: "GOOGLE CODING COMPETITIONS 2022-23",
    conferences:
      ": Cleared the Qualification Round and progressed to Round 1 in Google Code Jam 2022<br> : Best Rank of 3282 in Google KICKSTART Rounds’ 2022 <br> : Secured 2440th position in Google Farewell Round A",
    researchYr: 2023,
    citebox: "popup3",
    image: "assets/images/research-page/gcc.jpg",

    citation: {
      vancouver:
      "assets/images/research-page/cd2.png",
    },
    about:
      "Google’s Coding Competitions provide interactive rounds throughout the year to help you grow your skills, challenge yourself, and connect with developers from around the globe. <br>Google has three flagship Coding Competitions: Code Jam, Hash Code, and Kick Start. Each competition is unique and offers different types of challenges from algorithmic puzzles to team-based optimization problems. <br> However, this year Google decided to bring an end to all these coding competitions and organised the last Farewell Round competition on 15th April'23 ",
    absbox: "absPopup3",
  },

  {
    title: "REPLY CODE CHALLENGE STANDARD EDITION 2023",
    conferences:
      ": Secured a global rank of 226 in Reply Code Challenge Standard-edition 2023 (a 4-hr long team coding contest) ",
    researchYr: 2023,
    citebox: "popup4",
    image: "assets/images/research-page/replyy.jpg",

    citation: {
      vancouver:
      "assets/images/research-page/cd2.png",
    },
    about:
      "The Reply Code Challenge is a free online team-based coding competition and we can choose between two different edition: <br> Standard Edition: a challenge that consist in a optimization problem, designed for university students and professionals. <br> Teen Edition: a challenge that consists of five algorithm-based problems, designed for students aged 14 to 19",
    absbox: "absPopup4",
  },


  {
    title: "ALPHA MICROSFT LEARN AMBASSADOR",
    conferences:
      ": Promoted to Alpha-MLSA for my significant contribution to the community. Currently working under the guidance of Pablo Veramendi, Global Program Lead, MLSA. ",
    researchYr: 2023,
    citebox: "popup5",
    image: "assets/images/research-page/mlsa_1.png",

    citation: {
      vancouver:
      "assets/images/research-page/cd2.png",
    },
    about:
      "Microsoft Learn Student Ambassadors Program is a program to bring together all the students from all over the world who have the passion for Technology, have the desire and craze to learn more about technology and help the community. The Ambassadors get an opportunity to interact with their peers, mentors, Professionals, learn various Microsoft technologies, and implement it in real world.",
    absbox: "absPopup5",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      conferences,
      researchYr,
      absbox,
      about,
      citation,
      citebox
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle" target="blank"> ${title} </a> 
                    
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                        ABOUT
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                           ${about}
                        </div>
                    </div>
                   
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
