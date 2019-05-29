interface IQuestionBankModel{
    quesBankID: number;
    quesBankName: string;
    status: string;
    createdDate: Date;
    lastmodifiedDate: Date;
    createdBy: string;
    updatedBy: string;
    description: string;
    noOfQues: number;
    duration: number;
}
export default IQuestionBankModel;