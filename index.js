
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employeeRecord) {
    return employeeRecord.map((employee) => {
        return createEmployeeRecord(employee)
    }) 
}

function createTimeInEvent(employeeRecord) {
    
    return employeeRecord.map((employee) => {
        return employee.timeInEvents.push(
        {
            type: "TimeIn",
            hour: hour,
            date: date
        })
    })
}