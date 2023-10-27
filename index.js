// Your code here
//let employeeRecord = {};
let employeeRecordArray = [];
let twoRows = [
    ["moe", "sizlak", "barkeep", 2],
    ["bartholomew", "simpson", "scamp", 3]
  ]
let timeInRecord = "2014-02-28 1400";
let timeOutRecord = "2015-02-28 1700";
let date = "0044-03-15";

/*let employees = [
    {
    firstName: "test1",
    familyName: "test1",
    title: "test1",
    payPerHour: 10,
    timeInEvents: ["2019-01-01 0900","2019-01-02 1000"],
    timeOutEvents: ["2019-01-01 1300","2019-01-02 1300"],
    },
    {
        firstName: "test2",
        familyName: "test2",
        title: "test2",
        payPerHour: 100,
        timeInEvents: ["2019-01-01 0900","2019-01-02 1000"],
        timeOutEvents: ["2019-01-01 1300","2019-01-02 1300"],
    }

]*/


const createEmployeeRecord = function([firstName,familyName,title,payPerHour]) {
    let object = {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: [],
    };
    employeeRecordArray.push(object);
    return object;
    
}

const createEmployeeRecords = function(twoRows) {
    let employeeArray= [];
        twoRows.forEach(function(element) {
            let object = {
                firstName: null,
                familyName: null,
                title: null,
                payPerHour: null,
                timeInEvents: [],
                timeOutEvents: [],
            };
            object.firstName = element[0];
            object.familyName = element[1];
            object.title = element[2];
            object.payPerHour = element[3];
        employeeArray.push(object);
        employeeRecordArray.push(object);
        })
    return employeeArray;   
}


const createTimeInEvent = function(record, timeInRecord) {
    record;
    let timeInEventObject = {
        type: "TimeIn",
        hour: null,
        date: null,
    }
    timeInEventObject.hour = Number(timeInRecord.substr(11));
    timeInEventObject.date = timeInRecord.substr(0,10);
    record.timeInEvents.push(timeInEventObject);
    return record;

}

const createTimeOutEvent = function(record, timeOutRecord) {
    record;
    let timeOutEventObject = {
        type: "TimeOut",
        hour: null,
        date: null,
    }
    timeOutEventObject.hour = Number(timeOutRecord.substr(11));
    timeOutEventObject.date = timeOutRecord.substr(0,10);
    record.timeOutEvents.push(timeOutEventObject);
    return record;
}

const hoursWorkedOnDate = function(record, date ) {
    record;
    const timeIn = record.timeInEvents[0].hour;
    const timeOut = record.timeOutEvents[0].hour;
    const hoursWorked = (timeOut-timeIn)/100;
    return hoursWorked;
}

const wagesEarnedOnDate = function(record, date) {
    record;
    const hoursWorkedPay = hoursWorkedOnDate(record, date);
    let pay = hoursWorkedPay*(record.payPerHour);
    return pay;
    /*for(let i=record.length-1; i>=record.length-1; i--) {
        let pay = hoursWorkedPay*(record[i].payPerHour);
        console.log(pay);
        return pay;
    }*/
    
}

const allWagesFor = function(record) {
    record;
    let hoursWorked = 0;
    for(let i=0; i<=(record.timeInEvents.length)-1; i++) {
        const timeIn = record.timeInEvents[i].hour;
        const timeOut = record.timeOutEvents[i].hour;
        let hours = (timeOut-timeIn)/100;
        hoursWorked += hours;
    }
    let wage = hoursWorked*record.payPerHour;
    return wage;
}

const calculatePayroll = function(employees) {
    employees;
    debugger;
    let hoursWorked = [];
    debugger;
    for(let j=0; j<=(employees.length)-1; j++){
    for(let i=0; i<=(employees[j].timeInEvents.length)-1; i++) {
        const timeIn = employees[j].timeInEvents[i].hour;
        const timeOut = employees[j].timeOutEvents[i].hour;
        let hours = (timeOut-timeIn)/100;
        let hoursPay = hours*(employees[j].payPerHour);
        hoursWorked.push(hoursPay);
        debugger;
        }
    }
    const totalPay = hoursWorked.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    },0)
    console.log(totalPay);
    return totalPay;
}


