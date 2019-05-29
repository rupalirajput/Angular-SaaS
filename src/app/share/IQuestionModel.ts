interface IQuestionsModel {
  questionBankID: String;
  questionBankName: string;
  questionID: number;
  questionText: string;
  category: string;
  options: [string, string, string, string];
  answer: string;
}
export default IQuestionsModel;
