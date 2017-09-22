$().ready(function() {

	var Students = [
		{ FirstName: "Greg", LastName: "Olsen", SAT: 1200, GPA: 3.2 },
		{ FirstName: "Bob", LastName: "Evans", SAT: 1200, GPA: 3.2 },
		{ FirstName: "Sue Ann", LastName: "Prewitt", SAT: 1200, GPA: 3.2 },
		{ FirstName: "Eric", LastName: "Smith", SAT: 1200, GPA: 3.2 },
		{ FirstName: "Eric", LastName: "Bambach", SAT: 1200, GPA: 3.2 }
	]

	$("#add").click(function() {
		var firstName = $("#firstname").val();
		var lastName = $("#lastname").val();
		var sat = $("#sat").val();
		var gpa = $("#gpa").val();
		var student = { FirstName: firstName, LastName: lastName, SAT: sat, GPA: gpa };
		Students.push(student);
		$("button#refresh").click();
	});

	$("#refresh").click(function () {
		$("#Students").empty();
		for(var student of Students) {
			var aStudent = "<tr>";
			aStudent += "<td>" + student.FirstName + " " + student.LastName + "</td>";
			aStudent += "<td>" + student.SAT + "</td>";
			aStudent += "<td>" + student.GPA + "</td>";
			aStudent += "</tr>";
			// console.log(aStudent);
			$("#Students").append(aStudent);
		}
	});

});