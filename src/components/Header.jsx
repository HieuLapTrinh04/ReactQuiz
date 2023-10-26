import ReactImg from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={ReactImg} alt="Quiz logo" />
      <h1>ReactQuiz</h1>
    </header>
  );
}
