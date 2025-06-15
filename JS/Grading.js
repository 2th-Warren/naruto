const getGradeInfo = (score) => {
  let grade;
  let description;

  if (score >= 90 && score <= 100) {
    grade = 'A';
    description = '매우 우수';
  }
  else if (score >= 80) {
    grade = 'B';
    description = '우수';
  }
  else if (score >= 70) {
    grade = 'C';
    description = '보통';
  }
  else if (score >= 60) {
    grade = 'D';
    description = '미달, 통과 기준 근접';
  }
  else {
    grade = 'F';
    description = '낙제';
  }

  return {
    score: score,
    grade: grade,
    description: description
  };
};


console.log(getGradeInfo(87));
