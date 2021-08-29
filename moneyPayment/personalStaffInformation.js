class PersonalStaffInformation {
    constructor(
        name,
        surname,
        nickName,
        email,
        accountNumber,
        telephoneNumber,
        dailyRate
    ) {
        this.name = name;
        this.surname = surname;
        this.nickName = nickName;
        this.email = email;
        this.accountNumber = accountNumber;
        this.telephoneNumber = telephoneNumber;
        this.dailyRate = dailyRate;
    }
}

const Ice = new PersonalStaffInformation(
    "Panudet",
    "Khemngern",
    "Ice",
    "Panudet@odds.team",
    "1234567890",
    "0910288798",
    "100"
);

const Ford = new PersonalStaffInformation(
    "Supawich",
    "Chantrakul",
    "Ford",
    "Supawich@odds.team",
    "12345678",
    "0660538313",
    "100"
);

const Glock = new PersonalStaffInformation(
    "Boonyarid",
    "Kluebpoung",
    "Glock",
    "Boonyarid",
    "boonyarid@odds.team",
    "12345678",
    "0931329601",
    "100"
);

const Kai = new PersonalStaffInformation(
    "Jitti",
    "kai",
    "thekai@odds.com",
    "123456",
    "0123456789",
    "100"
);

const PersonalStaffInformationMap = new Map();

PersonalStaffInformationMap.set("Panudet", Ice);
PersonalStaffInformationMap.set("Supawich", Ford);
PersonalStaffInformationMap.set("Boonyarid", Glock);
PersonalStaffInformationMap.set("Jitti", Kai);

exports = PersonalStaffInformationMap
