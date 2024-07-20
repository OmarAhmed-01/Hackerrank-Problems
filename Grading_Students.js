function gradingStudents(grades) {
    // Write your code here
    const roundedGrades = grades.map(grade => {
        const next_multiple = Math.ceil(grade / 5) * 5;
        const diff = next_multiple - grade;
        if(grade >= 38){
           if(diff < 3){
                grade += diff;
                return grade;
           } 
        }
        return grade;
    });
    return roundedGrades;
}
