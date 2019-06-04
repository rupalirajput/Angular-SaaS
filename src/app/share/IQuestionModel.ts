interface IQuestionsModel {
  questionBankID: string;
  questionBankName: string;
  questionID: number;
  questionText: string;
  category: string;
  options: [string, string, string, string];
  answer: string;
}
export default IQuestionsModel;
