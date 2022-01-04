
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

function createTimeInEvent(employeeRecord, timeStamp) {
    
    let [date, hour] = timeStamp.split(' ')
        employeeRecord.timeInEvents.push({
            type: "TimeIn",
            hour: parseInt(hour, 10),
            date: date
        })
        return employeeRecord
}

function createTimeOutEvent(employeeRecord, timeStamp) {
    
    let [date, hour] = timeStamp.split(' ')
    employeeRecord.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    })
    return employeeRecord
}

function hoursWorkedOnDate(employeeRecord, date) {
    // Find the time in event that is from the passed in date
    const inEvent = employeeRecord.timeInEvents.find(event => event.date === date).hour
    // Find the time out event that is from the passed in date
    const outEvent = employeeRecord.timeOutEvents.find(event => event.date === date).hour
    // return the difference outEvent.hour - inEvent.hour 
    return (outEvent - inEvent) / 100

}

function wagesEarnedOnDate(employeeRecord, date) {
    return employeeRecord.payPerHour * hoursWorkedOnDate(employeeRecord, date)
}

//Help
function allWagesFor(employeeRecord) {
    let dates = employeeRecord.timeInEvents.map(timeIn => timeIn.date)
    //console.log(dates)
    let totalWages = dates.reduce(function (acc, date) {
        return acc + wagesEarnedOnDate(employeeRecord, date)
    }, 0)
    console.log(totalWages)
    return totalWages
}

 function calculatePayroll(employeeRecords) {
     let sum = employeeRecords.reduce(function (acc, employeeRecord) {
        return acc + allWagesFor(employeeRecord)
     }, 0)
     return sum
}