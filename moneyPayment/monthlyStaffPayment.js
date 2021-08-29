class MonthlyStaffPayment {
    constructor (
        name,
        surname,
        nickName,
        email,
        accountNumber,
        telephoneNumber,
        workingDay,
        transferAmount,
        submittedDate,
        remark,
    )
    {
        this.name = name;
        this.surname = surname;
        this.nickName = nickName;
        this.email = email;
        this.accountNumber = accountNumber;
        this.telephoneNumber = telephoneNumber;
        this.workingDay = workingDay;
        this.transferAmount = transferAmount;
        this.submittedDate = submittedDate;
        this.remark = "";
    }
}

exports = MonthlyStaffPayment