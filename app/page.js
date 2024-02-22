import Image from "next/image";
import BookForm from './components/BookForm'
import BookList from "./components/BookList";
import BookSearch from "./components/BookSearch";
BookSearch
export default function Home() {
  return (
    <main>
      <div>
        <h1>
          Welcome to my library app
        </h1>
        <BookSearch />
        <BookForm />
        <BookList />
      </div>
    </main>

  );
}
