interface IQuestionBankModel{
    questionBankID: number;
    questionBankName: string;
    status: string;
    createdDate: Date;
    lastmodifiedDate: Date;
    createdBy: string;
    updatedBy: string;
    keyConcepts: string;
    numberOfQuestions: number;
    duration: number;
}
export default IQuestionBankModel;
