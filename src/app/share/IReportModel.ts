interface IReportModel{
    reportid: Number;
    userid: Number;
    questionBankID: Number;
    score: Number;
    strengths: String;
    weaknesses: String;
    categories: [];
    scores: [];
    title: String;
}

export default IReportModel;