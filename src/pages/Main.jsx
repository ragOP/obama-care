import React, { useState, useEffect } from "react";
//@ts-ignore
// import TagManager from "react-gtm-module";

import "./styles.css";

import { scrollTo } from  './utils'
import { ToastContainer, toast, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head_bg from '../assests/aaa.png'
// import Headline from "../assets/headline_spandeb1.png";

// google tag manager

// const tagManagerArgs = {
//   gtmId: "GTM-KZJBC3B",
// };

// TagManager.initialize(tagManagerArgs);

export default function Main() {

  const SlideUp = cssTransition({
    enter: "toast-enter",
    exit: "toast-exit",
  });
  
  const messages = [
    "Emily A. Rodriguez from Miami, FL just qualified for a $3,600 Grocery Allowance.",
    "Michael D. Johnson from Dallas, TX just qualified for a $3,600 Grocery Allowance.",
    "Sophia L. Thompson from Los Angeles, CA just qualified for a $3,600 Grocery Allowance.",
    "Ethan M. Baker from Chicago, IL just qualified for a $3,600 Grocery Allowance.",
    "Ava K. Campbell from Seattle, WA just qualified for a $3,600 Grocery Allowance."
  ];
  
  // Function to shuffle array in place
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
  
  shuffleArray(messages);
  
  const notify = (message) => {
    // Dismiss all existing toasts
    toast.dismiss();
    let boldedMessage = message;
  
    // Make the word "Allowance" bold in all lines
    boldedMessage = boldedMessage.replace(
      /\$3,600 Grocery Allowance/g,
      '<strong class="green-bold">A Free Health Insurance</strong>'
    );
  
    // Make specific dollar amounts bold only in specific lines
    const specialAmounts = ["$16,800", "$16,800", "$16,800", "$16,800"];
    specialAmounts.forEach((amount) => {
      if (message.includes(amount)) {
        boldedMessage = boldedMessage.replace(
          amount,
          `<strong class="green-bold">${amount}</strong>`
        );
      }
    });
  
    // Show new toast
    toast(<div dangerouslySetInnerHTML={{ __html: boldedMessage }} />, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      closeButton: false,
    });
  };
  
  useEffect(() => {
    const delayedEffect = setTimeout(() => {
      // Create a function to handle the logic
      const showRandomToast = () => {
        const randomTime = 6000;
        const randomMessage =
          messages[Math.floor(Math.random() * messages.length)];
        notify(randomMessage);
        return randomTime;
      };
  
      // Show the first toast
      let nextTime = showRandomToast();
  
      // Set up a recurring timer
      const timer = setInterval(() => {
        nextTime = showRandomToast();
      }, nextTime);
  
      // Cleanup
      return () => {
        clearInterval(timer);
      };
    }, 6000); // 6-second delay before the useEffect code runs
  
    // Cleanup for the setTimeout
    return () => {
      clearTimeout(delayedEffect);
    };
  }, []);
  
  
  useEffect(() => {
    window.document.title = "Senior's Allowance Program 2024";

    
  }, []);



  const [quiz, setQuiz] = useState("1. Are you over the age of 18?  ");
  const [step, setStep] = useState("process");
  const [min, setMin] = useState(3);
  const [second, setSecond] = useState(0);
  const [yes,setYes]=useState("YES")
  const [no,setNo]=useState("NO")
  

  const stepProcess = () => {
    if (step === "Reviewing Your Answers...") {
      setTimeout(() => {
        setStep("Matching With Best Options...");
      }, 1500);
    }
    if (step === "Matching With Best Options...") {
      setTimeout(() => {
        setStep("Confirming Eligibility...");
      }, 1500);
    }
    if (step === "Confirming Eligibility...") {
      setTimeout(() => {
        setStep("completed");

        
         
      }, 1500);
    }

    if (step === "completed") {
      const startTime = new Date();
      const timer = setInterval(() => {
        const nowTime = new Date();
        setSecond((180 - Math.round((nowTime - startTime) / 1000)) % 60);
        setMin(
          Math.floor((180 - Math.round((nowTime - startTime) / 1000)) / 60)
        );
      }, 1000);
    }
  };

  useEffect(() => {
    stepProcess();
  }, [step]);

  const topScroll = (id) => {
    // scrollTo({ id });  
  };

  const handleQuizP = () => {
    topScroll("btn");
    if (quiz === "1. Are you over the age of 18?  ") {
      setYes("Yes")
      setNo("No")
      setQuiz("2. Are you a legal resident of United States?");
    } else {
      setStep("Reviewing Your Answers...");
     
      topScroll("top");
    }

 
  };

  const handleQuizN = () => {
    topScroll("btn");
    if (quiz === "Are you over the age of 60?  ") {
      setYes("Yes")
      setNo("No")
      setQuiz("2. Are you a legal resident of United States?");
    } else {
      setStep("Reviewing Your Answers...");
    
      topScroll("top");
    }

 
  };

  return (
    <div>
     <ToastContainer />
      <div style={{marginBottom:'4px'}} className="top-sticky-blue-test2" id="top">
      Senior's Allowance Program 2024
      </div>
      {step === "process" ? (
        <>
          <div className="main-container-5">
            <div className="main-descrition-5-5">
              <div className="main-des-title-6-7">
                <b>
                Americans Over 18 Now Qualify For A FREE Health Insurance for life. Here's How!
                </b>
              

              </div>
              {/* <img className='topic-img-larger' src = {Headline} alt = "head"/> */}
              <img className="topic-img-middle-z" src={Head_bg} alt="head" />
              <div  style={{marginTop:'14px'}}className="main-des-5">
              Americans under 18 can claim a Free Health Insurance plan for life, which covers all of your medical expenses.

              </div>
              <div className="main-des-5"  style={{marginTop:'-5px'}}>
              It can be used for expenses like medicines, doctor visits, pre-existing conditions and prescriptions, emergency vists, and much more,
              </div>
              {/* <div className='main-des-5' style = {{marginTop:"1rem"}}><b>Simplemente responda las siguientes preguntas:</b></div> */}
            </div>
            <div style={{marginTop:'-5px'}} className="survey">
              <div className="quiz-5" id="btn">
                {quiz}
              </div>
              <div  className="answer">
                <div className="answer-btn-5" onClick={handleQuizP}>
              {yes}
                </div>
                <div className="answer-btn-5" onClick={handleQuizN}>
              {no}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : step !== "process" && step !== "completed" ? (
        <div className="checking" style={{ fontWeight: "700" }}>
          {step}
        </div>
      ) : (
        <div className="checking">
          <div className="congrats">Congratulation, You Qualify!</div>
          <div className="top-description-5">
            Make A <b>Quick Call</b> To Claim Your Free Health Insurance Now!
          </div>
          <div className="spots-count">Spots remaining: 4</div>
          <div className="tap-direction">👇 TAP BELOW TO CALL 👇</div>
          <a href="tel:+18885170494">
            <div className="call-btn" >
            CALL (888) 517-0494
            </div>
          </a>
          <div className="sub-title">We Have Reserved Your Spot</div>
          <div className="sub-description">
            Due to high call volume, your official agent is waiting for only{" "}
            <b>3 minutes</b>, then your spot will not be reserved.
          </div>
          <div className="timer">
            <div className="timer-cell">{min}</div>
            <div className="timer-cell">:</div>
            <div className="timer-cell">{second}</div>
          </div>
        </div>
      )}
      <div className="footer">
        <div className="terms">Terms & Conditions | Privacy Policy</div>
        <div className="copyright">
          Copyright © 2024 - All right reserved Daily America Savings.
        </div>
      
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
