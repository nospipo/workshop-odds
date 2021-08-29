class WorkingStaffRecord {
    constructor(
        name,
        email,
        workingDay,
        submittedDate,
        site,
        remark,
    ){
        this.name = name;
        this.email = email;
        this.workingDay = workingDay;
        this.submittedDate = submittedDate;
        this.site = site;
        this.remark = remark;
    }
}

const Glock = new WorkingRecord("boonyarid@odds.team","21","11/02/1995","saksiam","yes");
const Ice = new WorkingRecord("Panudet@odds.team","21","20/02/2021","Saksiam","yes");

const WorkingStaffRecordMap = new Map();

WorkingStaffRecordMap.set("boonyarid@odds.team", Glock);
WorkingStaffRecordMap.set("Panudet@odds.team", Ice);

exports = WorkingStaffRecordMap;