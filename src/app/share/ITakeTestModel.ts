interface ITakeTestModel{
  questionBankID : Number;
  questionID : Number;
  questionText : String;
  category : String;
  options :
    [
      String,
      String,
      String,
      String
    ];
  answer : String;
}
export default ITakeTestModel;
