interface ITestDetailsModel {
  questionBankID: number;
  questionBankName: string;
  duration: number;
  numberOfQuestions: number;
  keyConcepts: string;
  status: string;
  createdDate: Date;
  lastmodifiedDate: Date;
  createdBy: string;
  updatedBy: string;
}

export default ITestDetailsModel;
