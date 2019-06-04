interface IReportModel {
  reportid: number;
  userid: number;
  questionBankID: number;
  score: number;
  strengths: string;
  weaknesses: string;
  // noinspection JSAnnotator
  categories: [];
  // noinspection JSAnnotator
  scores: [];
  title: string;
}

export default IReportModel;
