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
    title: "GOOGLE CODING COMPETITIONS 2022",
    conferences:
      ": Secured a position among the top-30 from our institute and also begged the title of `DIVA WINNER` for being the top performer among all the other females. ",
    researchYr: 2023,
    citebox: "popup2",
    image: "assets/images/research-page/gcc.jpg",

    citation: {
      vancouver:
      "assets/images/research-page/cd2.png",
    },
    about:
      "Coderush 2023 is a prestigious coding competition exclusively for top colleges in India, hosted by the Y-Combinator backed start-up, AlgoUniversity. </br>This competition was a unique opportunity for students at NIT Silchar to showcase their programming skills and potentially win a cash prize of ₹7500 and total prizes worth ₹25000.",
    absbox: "absPopup2",
  },

  {
    title: "REPLY CODE CHALLENGE STANDARD 2023",
    conferences:
      ": Secured a position among the top-30 from our institute and also begged the title of `DIVA WINNER` for being the top performer among all the other females. ",
    researchYr: 2023,
    citebox: "popup2",
    image: "assets/images/research-page/replyy.jpg",

    citation: {
      vancouver:
      "assets/images/research-page/cd2.png",
    },
    about:
      "Coderush 2023 is a prestigious coding competition exclusively for top colleges in India, hosted by the Y-Combinator backed start-up, AlgoUniversity. </br>This competition was a unique opportunity for students at NIT Silchar to showcase their programming skills and potentially win a cash prize of ₹7500 and total prizes worth ₹25000.",
    absbox: "absPopup2",
  },


  {
    title: "ALPHA MICROSFT LEARN AMBASSADOR",
    conferences:
      ": Secured a position among the top-30 from our institute and also begged the title of `DIVA WINNER` for being the top performer among all the other females. ",
    researchYr: 2023,
    citebox: "popup2",
    image: "assets/images/research-page/mlsa_1.png",

    citation: {
      vancouver:
      "assets/images/research-page/cd2.png",
    },
    about:
      "Coderush 2023 is a prestigious coding competition exclusively for top colleges in India, hosted by the Y-Combinator backed start-up, AlgoUniversity. </br>This competition was a unique opportunity for students at NIT Silchar to showcase their programming skills and potentially win a cash prize of ₹7500 and total prizes worth ₹25000.",
    absbox: "absPopup2",
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
                    <a href="#" class="paperTitle" target="blank"> ${title} </a> 
                    
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-about " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABOUT
                        </button>

                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                        CERTIFICATE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${about}    
                        </div>
                    </div>

                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                           <img src="${citation.vancouver}" class="rImg">
                        </div>
                    </div>
                   
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
