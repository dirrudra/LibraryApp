import Image from "next/image";
import BookForm from './components/BookForm'
import BookList from "./components/BookList";
export default function Home() {
  return (
    <main>
      <div>
        <h1>
          Welcome to my library app
        </h1>
        <BookForm />
        <BookList />
      </div>
    </main>

  );
}
