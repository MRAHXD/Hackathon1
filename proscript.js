let progress = 0;

// fitness 
function logProgress() {
  if (progress < 100) {
    progress += 10; // Change the increment value as needed
    document.getElementById('progress').style.width = progress + '%';
    checkProgress();
  }
}

function checkProgress() {
  if (progress === 100) {
    alert('Congratulations! You have completed the task.');
  }
}

function deleteGoal() {
    document.getElementById('goal1').style.display='none';
}

let progressFit2 =0;

function logProgressFit2() {
    if (progressFit2 < 100) {
      progressFit2 += 10; // Change the increment value as needed
      document.getElementById('progress-fit2').style.width = progressFit2 + '%';
      checkProgressFit2();
    }
  }
  
  function checkProgressFit2() {
    if (progressFit2 === 100) {
      alert('Congratulations! You have completed the task.');
    }
  }
  
  function deleteGoalFit2() {
      document.getElementById('fitGoal2').style.display='none';
  }


// Education 
let progressEdu1 =0;
function logProgressEdu1() {
    if (progressEdu1 < 100) {
      progressEdu1 += 10; // Change the increment value as needed
      document.getElementById('progress-edu1').style.width = progressEdu1 + '%';
      checkProgressEdu1();
    }
  }
  
  function checkProgressEdu1() {
    if (progressEdu1 === 100) {
      alert('Congratulations! You have completed the task.');
    }
  }
  
  function deleteGoalEdu1() {
      document.getElementById('eduGoal1').style.display='none';
  }
  let progressEdu2 =0;
  function logProgressEdu2() {
      if (progressEdu2 < 100) {
        progressEdu2 += 10; // Change the increment value as needed
        document.getElementById('progress-edu2').style.width = progressEdu2 + '%';
        checkProgressEdu2();
      }
    }
    
    function checkProgressEdu2() {
      if (progressEdu2 === 100) {
        alert('Congratulations! You have completed the task.');
      }
    }
    
    function deleteGoalEdu2() {
        document.getElementById('eduGoal2').style.display='none';
    }
  
//   Personal 

let progressPer1 =0;
function logProgressPer1() {
    if (progressPer1 < 100) {
      progressPer1 += 10; // Change the increment value as needed
      document.getElementById('progress-per1').style.width = progressPer1 + '%';
      checkProgressPer1();
    }
  }
  
  function checkProgressPer1() {
    if (progressPer1 === 100) {
      alert('Congratulations! You have completed the task.');
    }
  }
  
  function deleteGoalPer1() {
      document.getElementById('perGoal1').style.display='none';
  }

//   sports

let progressSpo1 =0;
function logProgressSpo1() {
    if (progressSpo1 < 100) {
      progressSpo1 += 10; // Change the increment value as needed
      document.getElementById('progress-spo1').style.width = progressSpo1 + '%';
      checkProgressSpo1();
    }
  }
  
  function checkProgressSpo1() {
    if (progressSpo1 === 100) {
      alert('Congratulations! You have completed the task.');
    }
  }
  
  function deleteGoalSpo1() {
      document.getElementById('spoGoal1').style.display='none';
  }

  let progressSpo2 =0;
function logProgressSpo2() {
    if (progressSpo2 < 100) {
      progressSpo2 += 10; // Change the increment value as needed
      document.getElementById('progress-spo2').style.width = progressSpo2 + '%';
      checkProgressSpo2();
    }
  }
  
  function checkProgressSpo2() {
    if (progressSpo2 === 100) {
      alert('Congratulations! You have completed the task.');
    }
  }
  
  function deleteGoalSpo2() {
      document.getElementById('spoGoal2').style.display='none';
  }